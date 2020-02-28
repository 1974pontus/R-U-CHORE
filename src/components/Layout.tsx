import React from "react";
import ProfileImg from './ViewContainer/ProfileImg'
import Header from './Header'
import Footer from "./ViewContainer/Footer";


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
        <Footer />
      </div>
    );
  };
  
  export default Layout