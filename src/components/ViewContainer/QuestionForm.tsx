import React from "react";
import {CSSProperties} from 'react'

/* interface QuestionForm {
  htmlFor: string;
} */


const QuestionForm = () => {
  return (
    <form style={questionForm}>
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
</form>

  
  );
};

const questionForm: CSSProperties = {
textAlign: 'center',
width: '100%'
}


export default QuestionForm;