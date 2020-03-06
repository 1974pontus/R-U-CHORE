import React, { FormEvent } from "react";
import {CSSProperties} from 'react'
import FormField from "./FormField";

interface Props {
  onSubmit: (profil: string) => void;

}

interface State {

}


const QuestionForm = (props: Props) => {
  const handleOnSubmit = (e: FormEvent) => {
    // stoppa form elemtet att uppdatera sidan, den gör det automatiskt annars pga. det är en form
    e.preventDefault()
    //TODO: Ta reda på vem man blev
    props.onSubmit("leo")
  }

  const nameSubmit = (name: string) => {
    // denna ska skickas och visas på todo
    console.log(name)
  }

  return (
    <form onSubmit={handleOnSubmit} style={questionForm}>
      <p>Här ska fråga nummer ett vara</p>
      <input
        type="radio"
        id="Q1Yes"
        name="Q1"
        value="Q1Yes"
        checked={state.answer ==="Q1Yes"}
        onChange={handleChange}
      />
      <label htmlFor="Q1">Ja</label>
      <input 
        type="radio" 
        id="Q1No" 
        name="Q1" 
        value="Q1No" 
        checked={state.answer ==="Q1No"}
        onChange={handleChange}
      />
      <label htmlFor="Q1">Nej</label>
      <br />
  
      <p>Här ska fråga nummer två vara</p>
      <input 
        type="radio" 
        id="Q2Yes" 
        name="Q2" 
        value="Q2Yes" 
        checked={state.answer ==="Q2Yes"}
        onChange={handleChange}
      />
      <label htmlFor="Q2">Ja</label>
      <input 
        type="radio" 
        id="Q2No" 
        name="Q2" 
        value="Q2No" 
        checked={state.answer ==="Q2No"}
        onChange={handleChange}
      />
      <label htmlFor="Q2">Nej</label>
      <br />

      <p>Här ska fråga nummer tre vara</p>
      <input 
        type="radio" 
        id="Q3Yes" 
        name="Q3" 
        value="Q3Yes" 
        checked={state.answer ==="Q3Yes"}
        onChange={handleChange}
      />
      <label htmlFor="Q3">Ja</label>
      <input 
        type="radio" 
        id="Q3No" 
        name="Q3" 
        value="Q3No" 
        checked={state.answer ==="Q3No"}
        onChange={handleChange}
      />
      <label htmlFor="Q3">Nej</label>
      <br />
      <FormField onSubmit={nameSubmit} buttonText='Submit' placeHolder='What´s your name?' />
    </form>
  );
};


const questionForm: CSSProperties = {
 marginTop: '4rem', 
textAlign: 'center',
width: '100%'
}

export default QuestionForm;