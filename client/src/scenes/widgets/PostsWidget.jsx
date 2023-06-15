import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from 'state'
import PostWidget from './PostWidget'


const PostsWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)
    const token = useSelector((state) => state.token)

    //Ανάκτηση όλων των posts
    const getPosts = async () => {
        const response = await fetch('https://my-social-media-app-server.vercel.app/posts', {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        })
        const data = await response.json()
        dispatch(setPosts({ posts: data }))
    }

    //Ανάκτηση των posts ενός συγκεκριμένου χρήστη
    const getUserPosts = async () => {
        const response = await fetch(`https://my-social-media-app-server.vercel.app/posts/${userId}/posts`,
            {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` }
            }
        )
        const data = await response.json()
        dispatch(setPosts({ posts: data }))
    }

    useEffect(() => {if (isProfile) {     //Αν η τρέχουσα σελίδα είναι η σελίδα προφίλ του χρήστη
            getUserPosts()
        } else {
            getPosts()
        }
    }, [])


    return (
        <>
            {posts.map(
                ({
                    _id, userId, firstName, lastName, description, location, picturePath, userPicturePath, likes, comments}) => (
                    <PostWidget
                        key={_id}
                        postId={_id}
                        postUserId={userId}
                        name={`${firstName} ${lastName}`}
                        description={description}
                        location={location}
                        picturePath={picturePath}
                        userPicturePath={userPicturePath}
                        likes={likes}
                        comments={comments}
                    />
                )
            )}
        </>
    )
}

export default PostsWidget