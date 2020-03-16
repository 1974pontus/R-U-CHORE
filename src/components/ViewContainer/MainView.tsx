import React from "react";
import { Switch, Route } from "react-router-dom";
import QuestionForm from "./QuestionForm";
import ProfileView from "./ProfileView";
import profileData, { ProfileData } from "./ProfileData";
import ProfileImg from "./ProfileImg";
import Header from "./Header";
import LinkButton from "./LinkButton";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

interface Props {
  onProfilSelected: (profile: ProfileData, name: string) => void;
  profile: ProfileData;
  name: string;
}

const MainView = (props: Props) => {
  return (
    <Switch>
      <Route exact path="/">
        <div style={profileData[0].style}>
    
            <Header profile={profileData[0]} />
          <div style={style}>
          <ProfileImg profile={profileData[0]} />
          </div>
          <QuestionForm onSubmit={props.onProfilSelected} />
        </div>
      </Route>
      <Route path="/profile-view">
        <div style={props.profile.style}>

          <Header profile={props.profile} />
          <div style={style}>
          <ProfileImg profile={props.profile} />
          </div>
          <LinkButton />
          <ProfileView name={props.name} profile={props.profile} />
        </div>
      </Route>

      {/* //ett sista alternativ, om ingen av dessa ska väljas. lägg in vad som ska visas här */}
    </Switch>
  );
};

const style: CSSProperties = {
    position: 'relative'
}

export default MainView;
