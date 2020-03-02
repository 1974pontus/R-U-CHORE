import React from "react";

import ProfileImg from './ViewContainer/ProfileImg'
import Header from './Header'
import Footer from "./ViewContainer/Footer";
import Title from './ViewContainer/Title';
import ProfileView from "./ViewContainer/ProfileView";
import MainView from "./ViewContainer/MainView";
// interface Profile {
//     img: string
//     name: string
//     todos: string[]
// }

const Layout = () => {
    return (
   
      <div>
        <ProfileImg />
        <Header />
        <Title />
        <MainView />
         <ProfileView/>
        <Footer />

      </div>
    );
  };
  
  export default Layout

