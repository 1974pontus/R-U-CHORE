interface Todo  {
    text: string,
    complete: boolean
}

export interface ProfileData  {
    id: string
    profileImg?: string
    profileText?: string
    headerImg?: string
    backgroundImg?: string
    alt: string
    titel: string
    initialTodos: Array<Todo>
   
}

const profileData: ProfileData[] = [
    {
        id: 'mainView',
        profileImg: require('../../img/black.jpg'),
        profileText: 'R U CHORE?',
        headerImg: require('../../img/unknownBG.jpg'),
        alt: 'Unknown person',
        titel: 'Svara på frågorna nedan',
        initialTodos: []
    },{
        id: 'steampunk',
        profileImg: require('../../img/steamFace.jpg'),
        headerImg: require('../../img/kugghjul.png'),
        backgroundImg: require('../../img/steamBG.jpg'),
        alt: 'steampunkProfile',
        titel: 'Hello steampunker',
        initialTodos:   [
            { text:'Putsa Pistolerna', complete: true},
            { text: 'Köpa Höghatt', complete: false},
            { text: 'Laga fickuret', complete: false},
        ]
    },
    {
        id: 'zlatan',
        profileImg: require('../../img/zlatan.jpg'),
        headerImg: require('../../img/milan.jpg'),
        backgroundImg: require('../../img/zlatanBG.jpg'),
        alt: 'zlatanProfile',
        titel: 'You do not need a trophy to tell yourself that you are the best. ',
        initialTodos:   [
            { text:'Du har inga todos, du ger todos', complete: true},
            
        ]
    },
    {
        id: 'nerd',
        profileImg: require('../../img/nerd.jpg'),
        headerImg: require('../../img/nerdBG.jpeg'),
        backgroundImg: require('../../img/nerdBG.jpg'),
        alt: 'nerdProfile',
        titel: 'Pass on what you have learned',
        initialTodos:   [
            { text:'Köpa Powerking', complete: true},
            { text: 'Månadens dusch', complete: false},
            { text: 'Säga till mamma att tvätta', complete: false},
        ]
    },
    {
        id: 'usless',
        backgroundImg: require('../../img/completely_useless.png'),
        titel: 'Pass on what you have learned',
        alt: 'quote from the tv-serie friends',
        initialTodos: []
    }
]


export default profileData