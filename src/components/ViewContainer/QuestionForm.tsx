import React, { FormEvent, CSSProperties } from "react";
import { Redirect } from "react-router-dom";
import Title from "./Title";
import FormField from "./FormField";
import profileData, { ProfileData } from "./ProfileData";

interface Props {
  onSubmit: (profil: ProfileData, name: string) => void;
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
  constructor(props: Props) {
    super(props);

    this.state = {
      name: "",
      shouldRedirect: false
    };
  }

  handleOnSubmit = (e: FormEvent) => {

    //stoppar form elementet att uppdatera sidan automatiskt

    e.preventDefault();

    if (
      this.state.question1 &&
      !this.state.question2 && !this.state.question3
    ) {
      this.props.onSubmit(profileData[1], this.state.name);

       // hämta steampunk från databasen spara det i state.
      //skicka state till layout och profileview.
    }
    if (this.state.question2) {
      this.props.onSubmit(profileData[2], this.state.name);
      // hämtar zlatan från databasen, sparar det i state.
    }
    if (!this.state.question2 && this.state.question3) {
      this.props.onSubmit(profileData[3], this.state.name);
      // hämtar nörd från databasen, sparar det i state.
    } else if (
      !this.state.question1 &&
      !this.state.question2 && !this.state.question3
    ) {
      //Computer says NO
      this.props.onSubmit(profileData[4], this.state.name);
    }

    this.setState({ shouldRedirect: true });
  };

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/profile-view" />;
    }

    return (
      <div style={questionForm}>
        <Title titleContent="Först svara på frågorna:" />
        <form onSubmit={this.handleOnSubmit}>
          <p>Gillar du filmen Wild Wild West med Will Smith?</p>
          <label htmlFor="Q1Yes">Ja</label>
          <input
            style={styleRadioButtonYes}
            type="radio"
            id="Q1Yes"
            name="question1"
            onChange={e => this.setState({ question1: e.target.checked })}
          />
          <label htmlFor="Q1No">Nej</label>
          <input
            style={styleRadioButtonNo}
            type="radio"
            id="Q1No"
            name="question1"
            onChange={e => this.setState({ question1: !e.target.checked })}
          />
          <br />

          <p>Gillar du att vara i centrum?</p>
          <label htmlFor="Q2Yes">Ja</label>
          <input
            style={styleRadioButtonYes}
            type="radio"
            id="Q2Yes"
            name="question2"
            onChange={e => this.setState({ question2: e.target.checked })}
          />
          <label htmlFor="Q2No">Nej</label>
          <input
            style={styleRadioButtonNo}
            type="radio"
            id="Q2No"
            name="question2"
            onChange={e => this.setState({ question2: !e.target.checked })}
          />
          <br />

          <p>Har du sett alla Star Wars filmer?</p>
          <label htmlFor="Q3Yes">Ja</label>
          <input
            style={styleRadioButtonYes}
            type="radio"
            id="Q3Yes"
            name="question3"
            onChange={e => this.setState({ question3: e.target.checked })}
          />
          <label htmlFor="Q3No">Nej</label>
          <input
            style={styleRadioButtonNo}
            type="radio"
            id="Q3No"
            name="question3"
            onChange={e => this.setState({ question3: !e.target.checked })}
          />
          <br />
          <br />

          <FormField
            onChange={name => this.setState({ name })}
            buttonText="Done"
            placeHolder="Type your name..."
          />
        </form>
      </div>
    );
  }
}

const questionForm: CSSProperties = {
  marginTop: "2rem",
  width: "100%",
  textAlign: "center",
  fontFamily: "arial"
};

const styleRadioButtonYes: CSSProperties = {
  margin: "0 4rem 0 .35rem",
  verticalAlign: ".1rem"
};

const styleRadioButtonNo: CSSProperties = {
  margin: "0 0 0 .35rem",
  verticalAlign: ".1rem"
};

export default QuestionForm;
