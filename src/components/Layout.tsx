import React, { useState, CSSProperties, useEffect } from "react";
import MainView from "./viewContainer/MainView";
import profileData, { ProfileData } from "./viewContainer/ProfileData";
import { withRouter} from "react-router-dom";


const Layout = () => {
  const [profile, setProfile] = useState<ProfileData>(profileData[0]);
  const [name, setName] = useState<string>("");

  const handleProfileSelected = (profile: ProfileData, name: string) => {
    setProfile(profile);
    setName(name)
  };

  useEffect(() => { 
    if(profile.id !== 'mainView' ) {
      localStorage.setItem('profile', JSON.stringify(profile) )
      localStorage.setItem('name', JSON.stringify(name) )
      console.log(profile)
    }

    //component did update
    //arrayen styr när effekten kommer att köras
  }, [profile, name])

  useEffect(() => {
    const profile : ProfileData | null = JSON.parse(localStorage.getItem('profile') || 'null') 
    console.log(profile)
    setProfile(profile || profileData[0])
   
    setName( localStorage.getItem('name') || '')
    //component did mount

  }, [])

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
}


