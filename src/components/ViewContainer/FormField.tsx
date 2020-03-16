import React, { CSSProperties } from "react";

interface Props {
  onChange?: (name: string) => void;
  onSubmit?: (submit: string) => void;
  defaultValue?: string;
  placeHolder: string;
  buttonText: string;
}

interface State {
  value: string;
}

export class FormField extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.defaultValue ? this.props.defaultValue : ""
    };
  }

  private updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
    this.setState({
      value: event.target.value
    });
  };

  private clearInputField = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value);
    }
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div style={footerContainer}>
        <input
          style={inputField}
          placeholder={this.props.placeHolder}
          value={this.state.value}
          type="text"
          onChange={this.updateValue}
        />
        <button style={mainButton} onClick={this.clearInputField}>
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

export default FormField;

const footerContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  position: "sticky",
  bottom: "0",
  paddingBottom: "1rem"
};

const inputField: CSSProperties = {
  padding: "1.1rem",
  outline: "0",
  backgroundColor: "#c7dbfa",
  border:"none"
};

const mainButton: CSSProperties = {
  display: "flex",
  alignItems: "end",
  justifyContent: "end",
  textAlign: "center",
  padding: "0.3rem 0 0.3rem 1rem",
  background: "black",
  color: "white",
  fontSize: "0.7rem",
  width: "4rem",
  height: "3rem",
  outline: "0",
  cursor: "pointer",
  border: "none"
};
