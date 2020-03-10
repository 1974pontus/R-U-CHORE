import { CSSProperties } from "react"

interface Todo  {
    text: string,
    complete: boolean
}

export interface ProfileData  {
    id: string
    profileImg?: string
    headerImg?: string
    alt: string
    style: CSSProperties
    titel: string
    initialTodos: Array<Todo>
   
}

const profileData: ProfileData[] = [
    {
        id: 'mainView',
        profileImg: require('../../img/Leonardo-Dicaprio.jpg'),
        headerImg: require('../../img/space.jpg'),
        alt: 'Leonardo Dicaprio',
        style: {},
        titel: 'Svara på frågorna nedan',
        initialTodos: [],
    },{
        id: 'steampunk',
        profileImg: require('../../img/steamFace.jpg'),
        headerImg: require('../../img/kugghjul.png'),
        alt: 'steampunkProfile',
        style: {
            marginTop: "7rem",
            fontSize: "30px",
            fontFamily: "monospace",
            backgroundImage: 'url../../img/steamBG.jpg',
          },
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
        alt: 'zlatanProfile',
        style: {
            marginTop: "7rem",
            fontSize: "1.8rem",
            fontFamily: "roboto",
            color: "pink",
            backgroundImage: 'url../../img/zlatanBG.jpg',
          },
        titel: 'You do not need a trophy to tell yourself that you are the best. ',
        initialTodos:   [
            { text:'Du har inga todos, du ger todos', complete: true},
            
        ]
    },
    {
        id: 'nerd',
        profileImg: require('../../img/nerd.jpg'),
        headerImg: require('../../img/nerdBG.jpeg'),
        alt: 'nerdProfile',
        titel: 'Pass on what you have learned',
        style: {
            marginTop: "7rem",
            fontSize: "1.8rem",
            fontFamily: "arial",
            color: "green",
            backgroundImage: 'url../../img/nerdBG.jpg',
          },
        initialTodos:   [
            { text:'Köpa Powerking', complete: true},
            { text: 'Månadens dusch', complete: false},
            { text: 'Säga till mamma att tvätta', complete: false},
        ]
    },
    {
        id: 'usless',
        titel: 'Pass on what you have learned',
        alt: 'quote from the tv-serie friends',
        style: {
            backgroundImage: 'url../../img/completely_useless.png',
        },
        initialTodos: []
    }
]


export default profileData