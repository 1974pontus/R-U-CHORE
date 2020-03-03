import React, { useState, CSSProperties } from "react";
import ProfileImg from './ViewContainer/ProfileImg'
import Header from './Header'
import Title from './ViewContainer/Title';
import MainView from "./ViewContainer/MainView";
import ProfileView from "./ViewContainer/ProfileView";

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

    console.log(profile)
    return (
   
      <div>
        <ProfileImg />
        <Header />
        <Title />
        <MainView onProfilSelected={handleProfileSelected}/>
        <ProfileView />
         <div style={marginbottom}>.</div>
      </div>
    );
  };
  

export default Layout



const marginbottom: CSSProperties = {
  marginBottom: '10rem'
}
