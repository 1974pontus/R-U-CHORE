import React from 'react';
import QuestionForm from "./QuestionForm";

interface Props {
    onProfilSelected: (profile: string) => void
}

const MainView = (props: Props) => {
return (
    <QuestionForm onSubmit={props.onProfilSelected}/>
)
}

export default MainView