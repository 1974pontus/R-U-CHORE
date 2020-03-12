import React, { FormEvent, CSSProperties } from "react";
import { Redirect } from 'react-router-dom'
import FormField from "./FormField";
import profileData, { ProfileData } from "./ProfileData";
import Title from "./Title";

interface Props {
  onSubmit: (profil: ProfileData) => void;
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

      
    if (this.state.question1 === true && this.state.question2 === false && this.state.question3 === false) {
      this.props.onSubmit(profileData[1])
      // hämta steampunk från databasen spara det i state. 
      //skicka state till layout och profileview.
    }
    if (this.state.question2 === true ) {
      this.props.onSubmit(profileData[2])
      // hämta zlatan från databasen spara det i state. 
      //skicka state till layout och profileview.
    }
    if (this.state.question2 === false && this.state.question3 === true) {
      this.props.onSubmit(profileData[3])
      // hämta nerd från databasen spara det i state. 
      //skicka state till layout och profileview.
    }
    else if (this.state.question1 === false && this.state.question2 === false && this.state.question3 === false)  {
      //detta händer om man svarar nej på allt. 
      this.props.onSubmit(profileData[4])
    }
  
    console.log(profileData)
    /* console.log(this.state)
    //TODO: Ta reda på vem man blev
    this.props.onSubmit(profileData[0]) */
    this.setState({ shouldRedirect: true })
  };


  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/profile-view"/>
    }


    return (
      <div style={questionForm}>
      <Title titleContent="Först svara på frågorna:"/>
      <form onSubmit={this.handleOnSubmit}>
        <p>Gillar du fusion?</p>
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
        <br />
        <FormField
          onChange={(name) => this.setState({ name })}
          buttonText="Submit"
          placeHolder="What´s your name?"
        />
      </form>
      </div>
    );
  }
}

const questionForm: CSSProperties = {
  marginTop: "2rem",
  textAlign: "center",
  width: "100%"
};

export default QuestionForm;
