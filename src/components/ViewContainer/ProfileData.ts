interface Todo  {
    text: string,
    complete: boolean
}

export interface ProfileData  {
    id: string
    profileImg: string
    headerImg: string
    backgroundImg?: string
    alt: string
    initialTodos: Array<Todo>
}

const profileData: ProfileData[] = [
    {
        id: 'steampunk',
        profileImg: '../img/steamFace.png',
        headerImg: '../img/kugghjul.png',
        backgroundImg: '../img/steamBG.jpg',
        alt: 'steampunkProfile',
        initialTodos:   [
            { text:'Putsa Pistolerna', complete: true},
            { text: 'Köpa Höghatt', complete: false},
            { text: 'Laga fickuret', complete: false},
        ]
    },
    {
        id: 'zlatan',
        profileImg: '../img/zlatan.jpg',
        headerImg: '../img/milan.jpg',
        alt: 'zlatanProfile',
        initialTodos:   [
            { text:'Zlatan har inga todos, Zlatan ger todos', complete: true},
            
        ]
    },
    {
        id: 'nerd',
        profileImg: '../img/nerd.jpg',
        headerImg: '../img/nerdBG.jpeg',
        alt: 'nerdProfile',
        initialTodos:   [
            { text:'Köpa Powerking', complete: true},
            { text: 'Månadens dusch', complete: false},
            { text: 'Säga till mamma att tvätta', complete: false},
        ]
    }
]


export default profileData