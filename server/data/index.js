import mongoose from 'mongoose'


//Ids για τους 'δοκιμαστικούς' χρήστες
const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId()
]


//'Δοκιμαστικοί' χρήστες της εφαρμογής
export const users = [
    {
        _id: userIds[0],
        firstName: 'Nikos',
        lastName: 'Papadimitriou',
        email: 'nickPapad@gmail.com',
        password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
        picturePath: 'p11.webp',
        friends: [],
        location: 'San Fran, CA',
        occupation: 'Software Engineer',
        viewedProfile: 14561,
        impressions: 888822,
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0
    },
    {
        _id: userIds[1],
        firstName: 'Stefanos',
        lastName: 'Dimoudis',
        email: 'stefDim@gmail.com',
        password: '$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
        picturePath: 'p3.webp',
        friends: [],
        location: 'New York, CA',
        occupation: 'Programmer',
        viewedProfile: 12351,
        impressions: 55555,
        createdAt: 1595589072,
        updatedAt: 1595589072,
        __v: 0
    },
    {
        _id: userIds[2],
        firstName: 'Mixalis',
        lastName: 'Papadopoulos',
        email: 'papadopMix@gmail.com',
        password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
        picturePath: 'p4.webp',
        friends: [],
        location: 'Canada, CA',
        occupation: 'Data Scientist Hacker',
        viewedProfile: 45468,
        impressions: 19986,
        createdAt: 1288090662,
        updatedAt: 1288090662,
        __v: 0
    },
    {
        _id: userIds[3],
        firstName: 'Manolis',
        lastName: 'Karavasiliou',
        email: 'karavMan@gmail.com',
        password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
        picturePath: 'p6.webp',
        friends: [],
        location: 'Korea, CA',
        occupation: 'Educator',
        viewedProfile: 41024,
        impressions: 55316,
        createdAt: 1219214568,
        updatedAt: 1219214568,
        __v: 0
    },
    {
        _id: userIds[4],
        firstName: 'Tzeni',
        lastName: 'Douma',
        email: 'doumaTzeni@gmail.com',
        password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
        picturePath: 'p5.webp',
        friends: [],
        location: 'Utah, CA',
        occupation: 'Hacker',
        viewedProfile: 40212,
        impressions: 7758,
        createdAt: 1493463661,
        updatedAt: 1493463661,
        __v: 0
    },
    {
        _id: userIds[5],
        firstName: 'Xaris',
        lastName: 'Nikodimou',
        email: 'harrisNick@gmail.com',
        password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
        picturePath: 'p7.webp',
        friends: [],
        location: 'Los Angeles, CA',
        occupation: 'Journalist',
        viewedProfile: 976,
        impressions: 4658,
        createdAt: 1381326073,
        updatedAt: 1381326073,
        __v: 0
    },
    {
        _id: userIds[6],
        firstName: 'Kostas',
        lastName: 'Basileiou',
        email: 'vasilKost@gmail.com',
        password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
        picturePath: 'p8.webp',
        friends: [],
        location: 'Chicago, IL',
        occupation: 'Nurse',
        viewedProfile: 1510,
        impressions: 77579,
        createdAt: 1714704324,
        updatedAt: 1642716557,
        __v: 0
    },
    {
        _id: userIds[7],
        firstName: 'Dhmitra',
        lastName: 'Roumidh',
        email: 'roumidhDim@gmail.com',
        password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
        picturePath: 'p9.webp',
        friends: [],
        location: 'Washington, DC',
        occupation: 'A Student',
        viewedProfile: 19420,
        impressions: 82970,
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0
    }
]


//'Δοκιμαστικές' δημοσιεύσεις (posts) της εφαρμογής
export const posts = [
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[1],
        firstName: 'Stefanos',
        lastName: 'Dimoudis',
        location: 'New York, CA',
        description: 'Some really long random description',
        picturePath: 'post1.webp',
        userPicturePath: 'p3.webp',
        likes: new Map([
            [userIds[0], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true]
        ]),
        comments: [
            'random comment',
            'another random comment',
            'yet another random comment'
        ]
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[3],
        firstName: 'Manolis',
        lastName: 'Karavasiliou',
        location: 'Korea, CA',
        description:
            'Another really long random description. This one is longer than the previous one.',
        picturePath: 'post2.webp',
        userPicturePath: 'p6.webp',
        likes: new Map([
            [userIds[7], true],
            [userIds[4], true],
            [userIds[1], true],
            [userIds[2], true]
        ]),
        comments: [
            'one more random comment',
            'and another random comment',
            'no more random comments',
            'I lied, one more random comment'
        ]
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[4],
        firstName: 'Tzeni',
        lastName: 'Douma',
        location: 'Utah, CA',
        description:
            'This is the last really long random description. This one is longer than the previous one.',
        picturePath: 'post3.webp',
        userPicturePath: 'p5.webp',
        likes: new Map([
            [userIds[1], true],
            [userIds[6], true],
            [userIds[3], true],
            [userIds[5], true]
        ]),
        comments: [
            'one more random comment',
            'I lied, one more random comment',
            'I lied again, one more random comment',
            'Why am I doing this?',
            "I'm bored"
        ]
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[5],
        firstName: 'Xaris',
        lastName: 'Nikodimou',
        location: 'Los Angeles, CA',
        description:
            "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
        picturePath: 'post4.webp',
        userPicturePath: 'p7.webp',
        likes: new Map([
            [userIds[1], true],
            [userIds[6], true],
            [userIds[3], true]
        ]),
        comments: [
            'I lied again, one more random comment',
            'Why am I doing this?',
            "I'm bored",
            "I'm still bored",
            'All I want to do is play video games',
            "I'm going to play video games"
        ]
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[6],
        firstName: 'Kostas',
        lastName: 'Basileiou',
        location: 'Chicago, IL',
        description:
            "Just a short description. I'm tired of typing. I'm going to play video games now.",
        picturePath: 'post5.webp',
        userPicturePath: 'p8.webp',
        likes: new Map([
            [userIds[1], true],
            [userIds[3], true],
            [userIds[5], true],
            [userIds[7], true]
        ]),
        comments: [
            'I lied again, one more random comment',
            'Why am I doing this?',
            "Man I'm bored",
            'What should I do?',
            "I'm going to play video games"
        ]
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[7],
        firstName: 'Dhmitra',
        lastName: 'Roumidh',
        location: 'Washington, DC',
        description:
            "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
        picturePath: 'post6.webp',
        userPicturePath: 'p9.webp',
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true]
        ]),

        comments: [
            'Can I play video games now?',
            "No let's actually study",
            "Never mind, I'm going to play video games",
            'Stop it.',
            'Michael, stop it.'
        ]
    }
]