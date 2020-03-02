import React from "react";

// import ProfileImg from './ViewContainer/ProfileImg'
import Header from './Header'
import Footer from "./ViewContainer/Footer";
import Title from './ViewContainer/Title';
import ProfileView from "./ViewContainer/ProfileView";


// interface Profile {
//     img: string
//     name: string
//     todos: string[]
// }

const Layout = () => {
    return (
   
      <div>
        {/* <ProfileImg {
          profileImage:'../components/img/Lenardo-Dicaprio.jpg',
          alt:'leo DiCaprio at his best' }
        /> */}
        <Header />
        <Title />
        <ProfileView/>
        <Footer />

      </div>
    );
  };
  
  export default Layout

