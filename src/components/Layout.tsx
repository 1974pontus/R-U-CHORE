import React from "react";
import ProfileImg from './ViewContainer/ProfileImg'
import Header from './Header'
import Title from './ViewContainer/Title';
import MainView from "./ViewContainer/MainView";
import ProfileView from "./ViewContainer/ProfileView";

//tagit bort footer från layout, footer ligger i MainView och ska läggas in i PofileView?/AddTodoForm?
/* import Footer from "./ViewContainer/Footer";
<Footer buttontext="klar" inputplaceholder="hej"></Footer>  */


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
         
      </div>
    );
  };
  
  export default Layout

