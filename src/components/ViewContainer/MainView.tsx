import React from 'react';
import { Switch, Route } from 'react-router-dom';
import QuestionForm from "./QuestionForm";
import ProfileView from './ProfileView';


interface Props {
    onProfilSelected: (profile: string) => void
}

const MainView = (props: Props) => {

    
    return (
        <Switch>
            <Route exact path="/">
                <QuestionForm onSubmit={props.onProfilSelected}/>
            </Route>
            <Route path="/profile-view">
                <ProfileView/>
            </Route>
            {/* //ett sista alternativ, om ingen av dessa ska väljas. lägg in vad som ska visas här */}
        </Switch>
    )
}

export default MainView