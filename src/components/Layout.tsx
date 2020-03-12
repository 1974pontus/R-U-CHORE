import React, { useState, useEffect, CSSProperties } from "react";
import Header from "./viewContainer/Header";
import MainView from "./viewContainer/MainView";
import ProfileImg from "./viewContainer/ProfileImg";
import profileData, { ProfileData } from "./viewContainer/ProfileData";
import { withRouter, RouteComponentProps } from "react-router-dom";
import LinkButton from "./viewContainer/LinkButton";

//David visade
// this RouteComponentProps is imported from 
// react-router-dom and is used to setState that is the inicial page [0]
type Props = RouteComponentProps

// class Layout extends React.Component {
//   constructor(props: Props) {
//     super(props);
//     this.state = { profileData[0] };
//   }

const Layout = (props: Props) => {
  const [profile, setProfile] = useState<ProfileData>(profileData[0]);

  const handleProfileSelected = (profile: ProfileData) => {
    setProfile(profile);
  };
  
  /* Klicka på submit-knappen och du får profilen loggad i consolen */
  //console.log(profile)

  //This is allows us to make the LinkButton clear and 
  //go back to profileData[0]
   useEffect(() => {
     if ( props.location.pathname) {
//  console.log('hej')
    setProfile(profile)
    }
   }, )

  return (
   <div style={ content }>
    <div style={profile.style}>
      <ProfileImg profile={profile}
      />
      <Header
        profile={profile}
      />
      <LinkButton />
      <MainView profile={profile} onProfilSelected={handleProfileSelected} />
    </div>
    </div> 
  );
};

export default withRouter(Layout);

const content: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  position: "relative"
}

// const todolist: CSSProperties = {
//   margin: '2rem 0  0 5rem',
//  }
