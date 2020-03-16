import React, { useState, CSSProperties } from "react";
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


