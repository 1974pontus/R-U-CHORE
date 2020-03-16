import { CSSProperties } from "react"
import steambackground from '../../img/steamBG.jpg'
import zlatanbackground from '../../img/zlatan_bg.png'
import nerdbackground from '../../img/darth.jpg'
import mainviewbackground from '../../img/space.jpg'
import './fonts.css'

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
            color: 'white',
            textShadow: '0 0 3px #000000, 0 0 5px #000000',
            height: '100vh',
            backgroundImage: `url(${ mainviewbackground })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            overflow: 'scroll'
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
            color: 'black',
            textShadow: 'none',
            backgroundImage: `url(${ steambackground })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            overflow: 'scroll'
          },
        titel: ', dina goggles är nyputsade och lädret är brunt.',
        initialTodos:   [
            { text:'Putsa Pistolerna', complete: false},
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
            height: "100vh",
            fontSize: "1.2rem",
            fontFamily: 'Raleway, sans-serif',
            color: "rgb(254, 204, 0)",
            textShadow: 'none',
            backgroundImage: `url(${ zlatanbackground })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            overflow: 'scroll'
          },
        titel: ' do not need a trophy to tell yourself that you are the best.',
        initialTodos:   [
            { text:'Du har inga todos, du ger ut todos', complete: false},
            
        ]
    },
    {
        id: 'nerd',
        profileImg: require('../../img/wizard.jpg'),
        headerImg: require('../../img/forestnerd.jpg'),
        alt: 'nerdProfile',
        titel: '! Do or do not, there is no try.',
        style: {
            height: "100vh",
            fontSize: "1.2rem",
            fontFamily: "arial",
            color: "#00FF00",
            backgroundImage: `url(${ nerdbackground })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            overflow: 'scroll'
          },
        initialTodos:   [
            { text:'Köpa Powerking', complete: false},
            { text: 'Månadens dusch', complete: false},
            { text: 'Säga till mamma att tvätta', complete: false},
        ]
    },
    
    {
        id: 'computer',
        profileImg: require('../../img/computer_no.jpg'),
        headerImg: require('../../img/office-80s.jpg'),
        alt: 'Little Britain Carol, computer says no',
        titel: ',computer says no',
        style: {
           backgroundColor: '#fafcee',
           height: '100vh',
           color: 'black',
           textShadow: 'none',
           overflow: 'scroll'
        },
        initialTodos: [
            { text: 'Say NO', complete: true}
        ]
    },
]


export default profileData