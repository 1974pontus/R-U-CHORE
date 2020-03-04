import React from 'react';
import QuestionForm from "./QuestionForm";


interface Props {
    onProfilSelected: (profile: string) => void
}

const MainView = (props: Props) => {

    
return (
    <React.Fragment>
    <QuestionForm onSubmit={props.onProfilSelected}/>
    

    </React.Fragment>
)
}

export default MainView