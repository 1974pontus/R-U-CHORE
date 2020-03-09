import React, { useState } from "react";
import Header from "./viewContainer/Header";
import Title from "./viewContainer/Title";
import MainView from "./viewContainer/MainView";
import ProfileImg from "./viewContainer/ProfileImg";
import profileData, { ProfileData } from "./viewContainer/ProfileData";


//tagit bort footer från layout, footer ligger i MainView och ska läggas in i PofileView?/AddTodoForm?
/* import Footer from "./ViewContainer/Footer";
<Footer buttontext="klar" inputplaceholder="hej"></Footer>  */
interface Props {
  profile: ProfileData

}


const Layout = () => {
  const [profile, setProfile] = useState<ProfileData>();

  const handleProfileSelected = (profile: ProfileData) => {
    setProfile(profile);
  };
  
  /* Klicka på submit-knappen och du får profilen loggad i consolen */
  console.log(profile);

  return (
    <React.Fragment>
      <ProfileImg
        profile={profileData[0]}
      />
      <Header
        profile={profileData[0]}
      />
      <Title name="Här ska 2 olika titel vara" />
      <MainView onProfilSelected={handleProfileSelected} />
    </React.Fragment>
  );
};

export default Layout;

// const marginbottom: CSSProperties = {
//   marginBottom: '6rem',
//   textAlign: 'center',
//   color: 'white'
// }

// const todolist: CSSProperties = {
//   margin: '2rem 0  0 5rem',
//  }
