import { CSSProperties } from "react"
import steambackground from '../../img/steamBG.jpg'
import zlatanbackground from '../../img/zlatan_bg.png'
import nerdbackground from '../../img/darth.jpg'
import uselessbackground from '../../img/completely_useless.png'



interface Todo  {
    text: string,
    complete: boolean
}

export interface ProfileData  {
    id: string
    profileImg?: string
    profileText?: string
    headerImg?: string
    alt: string
    style: CSSProperties
    titel: string
    initialTodos: Array<Todo>
}

const profileData: ProfileData[] = [
    {
        id: 'mainView',

        profileImg: require('../../img/maincircle.jpg'),
        profileText: 'R U CHORE?',
        headerImg: require('../../img/UnknownBG.jpg'),
        alt: 'Unknown person',
        style: {
            fontSize: "1.2rem",
            fontFamily: 'arial',
            height: '100%'
        },
        titel: 'Svara på frågorna nedan',
        initialTodos: [],
    },{
        id: 'steampunk',
        profileImg: require('../../img/steamFace2.jpg'),
        headerImg: require('../../img/kugghjul.png'),
        alt: 'steampunkProfile',
        style: {
            height: "100vh",
            fontSize: "1.2rem",
            fontFamily: "luminari",
            backgroundImage: `url(${ steambackground })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
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
        profileImg: require('../../img/world-cup-trophy.png'),
        headerImg: require('../../img/zlatan_header.png'),
        alt: 'zlatanProfile',
        style: {
            height: "100%",
            fontSize: "1.2rem",
            fontFamily: "'Lobster', cursive;",
            color: "pink",
            backgroundImage: `url(${ zlatanbackground })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          },
        titel: 'do not need a trophy to tell yourself that you are the best. ',
        initialTodos:   [
            { text:'Du har inga todos, du ger todos', complete: true},
            
        ]
    },
    {
        id: 'nerd',
        profileImg: require('../../img/wizard.jpg'),
        headerImg: require('../../img/forestnerd.jpg'),
        alt: 'nerdProfile',
        titel: 'Pass on what you have learned',
        style: {
            height: "100%",
            fontSize: "1.2rem",
            fontFamily: "arial",
            color: "green",
            backgroundImage: `url(${ nerdbackground })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
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
            height: '100%',
            backgroundImage: `url(${ uselessbackground })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        },
        initialTodos: []
    }
]


export default profileData