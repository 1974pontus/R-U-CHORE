import React, { FormEvent } from "react";
import { Redirect } from 'react-router-dom'
// import { CSSProperties } from "react";
import FormField from "./FormField";



interface Props {
  onSubmit: (profil: string) => void;
  onChange?: boolean;
  answer?: string;
}

interface State {
  question1?: boolean;
  question2?: boolean;
  question3?: boolean;
  name: string;
  shouldRedirect: boolean;
}

class QuestionForm extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      name: "",
      shouldRedirect: false
    }
  }  
  handleOnSubmit = (e: FormEvent) => {
    // stoppa form elemtet att uppdatera sidan automatiskt
    e.preventDefault();

      
    if (this.state.question1 === true) {
      console.log("steampunk")
      // hämta zlatan från databasen spara det i state. 
      //skicka state till layout och profileview.
    }
    if (this.state.question2 === true) {
      console.log("zlatan")
      // hämta zlatan från databasen spara det i state. 
      //skicka state till layout och profileview.
    }
    if (this.state.question3 === true) {
      console.log("nerd")
      // hämta zlatan från databasen spara det i state. 
      //skicka state till layout och profileview.
    }
    else {
      console.log("LEO")
    }
  
    
    console.log(this.state)
    //TODO: Ta reda på vem man blev
    this.props.onSubmit("leo")
    this.setState({ shouldRedirect: true })
  };


  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/profile-view"/>
    }


    return (
      <form onSubmit={this.handleOnSubmit}>
        <p>Gillar du fushion?</p>
        <input
          type="radio"
          id="Q1Yes"
          name="question1"
          onChange={(e) => this.setState({ question1: e.target.checked })}
        />
        <label htmlFor="Q1Yes">Ja</label>
        <input
          type="radio"
          id="Q1No"
          name="question1"
          onChange={(e) => this.setState({ question1: !e.target.checked })}
        />
        <label htmlFor="Q1No">Nej</label>
        <br />

        <p>Gillar du att vara i centrum?</p>
        <input
          type="radio"
          id="Q2Yes"
          name="question2"
          onChange={(e) => this.setState({ question2: e.target.checked })}
        />
        <label htmlFor="Q2Yes">Ja</label>
        <input
          type="radio"
          id="Q2No"
          name="question2"
          onChange={(e) => this.setState({ question2: !e.target.checked })}
        />
        <label htmlFor="Q2No">Nej</label>
        <br />

        <p>Har du sett alla Star Wars filmer?</p>
        <input
          type="radio"
          id="Q3Yes"
          name="question3"
          onChange={(e) => this.setState({ question3: e.target.checked })}
        />
        <label htmlFor="Q3Yes">Ja</label>
        <input
          type="radio"
          id="Q3No"
          name="question3"
          onChange={(e) => this.setState({ question3: !e.target.checked })}
        />
        <label htmlFor="Q3No">Nej</label>
        <br />
        <FormField
          onChange={(name) => this.setState({ name })}
          buttonText="Submit"
          placeHolder="What´s your name?"
        />
      </form>
    );
  }
}

// const questionForm: CSSProperties = {
//   marginTop: "4rem",
//   textAlign: "center",
//   width: "100%"
// };

export default QuestionForm;
