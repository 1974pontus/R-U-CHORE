import React from "react";

import ProfileImg from './ViewContainer/ProfileImg'
import Header from './Header'
import Footer from "./ViewContainer/Footer";
import Title from './ViewContainer/Title';


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
        <h1>Coz i´m a steampunker yes i am!</h1>
        <p>really?</p>
        <Footer />

      </div>
    );
  };
  
  export default Layout