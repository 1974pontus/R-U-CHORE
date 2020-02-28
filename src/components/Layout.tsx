import React from "react";
import ProfileImg from "./ViewContainer/ProfileImg";
import Header from "./Header";

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
      <Header />
    </div>
  );
};

export default Layout;
