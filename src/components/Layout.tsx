import React from "react";
import ProfileImg from "./ViewContainer/ProfileImg";
import Header from "./Header";
import Title from "./ViewContainer/Title";
import ProfileView from "./ViewContainer/ProfileView";


const Layout = () => {
  return (
    <div>
      <ProfileImg />
      <Header />
      <Title />
      <ProfileView/>
    </div>
  );
};


export default Layout;
