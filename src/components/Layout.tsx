import React from "react";
import ProfileImg from './ProfileImg'
import Header from './Header'

interface Profile {
    img: string
    name: string
    todos: string[]
}

const Layout = () => {
    return (
   
      <div>
           <ProfileImg />
        <Header />
        <h1>Coz i´m a steampunker yes i am!</h1>
        <p>really?</p>
      </div>
    );
  };
  
  export default Layout;