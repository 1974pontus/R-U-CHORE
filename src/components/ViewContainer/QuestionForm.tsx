import React, { FormEvent } from "react";
import {CSSProperties} from 'react'
// import FormField from "./FormField";

interface Props {
  onSubmit: (profil: string) => void;
}


const QuestionForm = (props: Props) => {
  const handleOnSubmit = (e: FormEvent) => {
    // stoppa form elemtet att uppdatera sidan, den gör det automatiskt annars pga. det är en form
    e.preventDefault()
    //TODO: Ta reda på vem man blev
    props.onSubmit("leo")
  }

  return (
    <form onSubmit={handleOnSubmit} style={questionForm}>
      <p>Här ska fråga nummer ett vara</p>
      <input type="radio" id="Q1Yes" name="Q1" value="Yes" />
      <label htmlFor="Q1">Ja</label>
      <input type="radio" id="Q1No" name="Q1" value="No" />
      <label htmlFor="Q1">Nej</label>
      <br />
  
      <p>Här ska fråga nummer två vara</p>
      <input type="radio" id="Q2Yes" name="Q2" value="Yes" />
      <label htmlFor="Q2">Ja</label>
      <input type="radio" id="Q2No" name="Q2" value="No" />
      <label htmlFor="Q2">Nej</label>
      <br />


      <p>Här ska fråga nummer tre vara</p>
      <input type="radio" id="Q3Yes" name="Q3" value="Yes" />
      <label htmlFor="Q3">Ja</label>
      <input type="radio" id="Q3No" name="Q3" value="No" />
      <label htmlFor="Q3">Nej</label>
      <br />
      {/* <FormField inputplaceholder="Skriv in ditt namn..." buttontext="Klar" ></FormField> */}
</form>

  );
};

const questionForm: CSSProperties = {
 marginTop: '4rem', 
textAlign: 'center',
width: '100%'
}


export default QuestionForm;