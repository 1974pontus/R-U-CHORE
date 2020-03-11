import React, { useState, useEffect } from "react";
import Header from "./viewContainer/Header";
import Title from "./viewContainer/Title";
import MainView from "./viewContainer/MainView";
import ProfileImg from "./viewContainer/ProfileImg";
import profileData, { ProfileData } from "./viewContainer/ProfileData";
import { withRouter, RouteComponentProps } from "react-router-dom";



//tagit bort footer från layout, footer ligger i MainView och ska läggas in i PofileView?/AddTodoForm?
/* import Footer from "./ViewContainer/Footer";
<Footer buttontext="klar" inputplaceholder="hej"></Footer>  */

//David visade
// this RouteComponentProps is imported from 
// react-router-dom and is used to setState that is the inicial page [0]
type Props = RouteComponentProps


const Layout = (props: Props) => {
  const [profile, setProfile] = useState<ProfileData>(profileData[0]);

  const handleProfileSelected = (profile: ProfileData) => {
    setProfile(profile);
  };
  
  /* Klicka på submit-knappen och du får profilen loggad i consolen */
  
  //This is allows us to make the LinkButton clear and 
  //go back to profileData[0]
   useEffect(() => {
     if ( props.location.pathname) {
//  console.log('hej')
    setProfile(profile)
    }
   }, )

  return (
    <React.Fragment>
      <ProfileImg profile={profile} />
      <Header profile={profile} />
      <Title name="Först svara på frågorna:" />
      <MainView profile={profile} onProfilSelected={handleProfileSelected} />
    </React.Fragment>
  );
};

export default withRouter(Layout);

// const marginbottom: CSSProperties = {
//   marginBottom: '6rem',
//   textAlign: 'center',
//   color: 'white'
// }

// const todolist: CSSProperties = {
//   margin: '2rem 0  0 5rem',
//  }
