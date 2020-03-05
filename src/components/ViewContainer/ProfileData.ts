interface Todo  {
    text: string,
    complete: boolean
}

interface ProfileData  {
    id: string
    ProfileImg: string
    HeaderImg: string
    backgroundImg: string
    initialTodos: Array<Todo>
}

const ProfileData = [
    {
        id: 'steampunk',
        ProfileImg: '../img/steamy_couple.png',
        HeaderImg: '../img/kugghjul.png',
        backgroundImg: '../img/steamBG.jpg',
        initialTodos:   [
            { text:'Putsa Pistolerna', complete: true},
            { text: 'Köpa Höghatt', complete: false},
            { text: 'Laga fickuret', complete: false},
        ]
    },
    {
        id: 'zlatan',
        ProfileImg: '../img/zlatan.jpg',
        HeaderImg: '../img/milan.jpg',
        initialTodos:   [
            { text:'Zlatan har inga todos, Zlatan ger todos', complete: true},
            
        ]
    },
    {
        id: 'nerd',
        ProfileImg: '../img/nerd.jpg',
        HeaderImg: '../img/nerdBG.jpeg',
        initialTodos:   [
            { text:'Köpa Powerking', complete: true},
            { text: 'Månadens dusch', complete: false},
            { text: 'Säga till mamma att tvätta', complete: false},
        ]
    }
]


export default ProfileData