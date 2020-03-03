import React from 'react';


import Header from './ViewContainer/Header'
import Title from './ViewContainer/Title';
import MainView from "./ViewContainer/MainView";
// import ProfileView from "./ViewContainer/ProfileView";
import ProfileImg from "./ViewContainer/ProfileImg";

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
        <ProfileImg imageSrc={require('../img/Leonardo-Dicaprio.jpg')} alt='leo DiCaprio at his best'/>
        <Header imageSrc={require('../img/space.jpg')} alt='stardust in space'/>
        <Title />
        <MainView />
        {/* <ProfileView/> */}
         
      </div>
    );
  };
  
  export default Layout

