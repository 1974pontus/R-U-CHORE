import React, { ChangeEvent, MouseEvent } from 'react';
import QuestionForm from "./QuestionForm";
import FormField from './FormField';

interface Props {
    onProfilSelected: (profile: string) => void
}

const MainView = (props: Props) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e + 'handlechange')
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e + 'handleSubmit')
    }
    
return (
    <React.Fragment>
    <QuestionForm onSubmit={props.onProfilSelected}/>
    <FormField type={"text"}onChange={handleChange} inputplaceholder={'Whats´s your name'} value="" onClick={handleSubmit} buttontext={'SUBMIT'}/>

    </React.Fragment>
)
}

export default MainView