import React, { useState, useEffect, CSSProperties } from "react";
import MainView from "./viewContainer/MainView";
import profileData, { ProfileData } from "./viewContainer/ProfileData";
import { withRouter, RouteComponentProps } from "react-router-dom";


//David visade
// this RouteComponentProps is imported from 
// react-router-dom and is used to setState that is the inicial page [0]
type Props = RouteComponentProps 

const Layout = (props: Props) => {
  const [profile, setProfile] = useState<ProfileData>(profileData[0]);
  const [name, setName] = useState<string>("");

  const handleProfileSelected = (profile: ProfileData, name: string) => {
    setProfile(profile);
    setName(name)
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
      <div style={profileData[0].style}>
        <MainView profile={profile} name={name} onProfilSelected={handleProfileSelected} />
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


/* interface State {
  profile: ProfileData
  name: string
}

class Layout1 extends React.Component <{}, State> {
   constructor(props: Props) {
     super(props);
     this.state = { 
       profile: profileData[0], 
       name: ""
      };
   }

   handleProfileSelected = (profile: ProfileData, name: string) => {
     this.setState({
       profile,
       name
     })
  };

  componentDidMount() {
    this.setState({
      profile: profileData[0]
    })
  }

  render() {
    return (
      <div style={ content }>
      <div style={this.state.profile.style}>
        <ProfileImg profile={this.state.profile}
        />
        <Header
          profile={this.state.profile}
        />
        <LinkButton />
        <MainView profile={this.state.profile} name={name} onProfilSelected={this.handleProfileSelected} />
      </div>
    </div> 
    )
  }
} */