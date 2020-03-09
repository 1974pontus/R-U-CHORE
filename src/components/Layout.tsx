
import React, { useState } from "react";
import Header from './viewContainer/Header';
import Title from './viewContainer/Title';
import MainView from "./viewContainer/MainView";
import ProfileImg from "./viewContainer/ProfileImg";


//tagit bort footer från layout, footer ligger i MainView och ska läggas in i PofileView?/AddTodoForm?
/* import Footer from "./ViewContainer/Footer";
<Footer buttontext="klar" inputplaceholder="hej"></Footer>  */


// interface Profile {
//     img: string
//     name: string
//     todos: string[]
// }

const Layout = () => {
    const [profile, setProfile] = useState('')

    const handleProfileSelected = (profile: string) => {
      setProfile(profile)
    }
/* Klicka på submit-knappen och du får profilen loggad i consolen */
    console.log(profile)
    return (
   
      <div>
        <ProfileImg imageSrc={require('../img/Leonardo-Dicaprio.jpg')} alt='leo DiCaprio at his best'/>
        <Header imageSrc={require('../img/space.jpg')} alt='stardust in space'/>
        <Title name="Här ska 2 olika titel vara"/>

        <MainView onProfilSelected={handleProfileSelected}/>

        


      </div>
    );
  };
  

export default Layout



// const marginbottom: CSSProperties = {
//   marginBottom: '6rem',
//   textAlign: 'center',
//   color: 'white'
// }



// const todolist: CSSProperties = {
//   margin: '2rem 0  0 5rem', 
//  }
