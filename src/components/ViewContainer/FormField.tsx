import React, { CSSProperties } from 'react';


interface Props {
  onSubmit: (submit: string) => void
  defaultValue?: string
  placeHolder: string
  buttonText: string
}

interface State {
  value: string
}


export class FormField extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: this.props.defaultValue ? this.props.defaultValue : ""
    }
  }

  private updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value
    })
  }

  private clearInputField = () => {
    this.props.onSubmit(this.state.value)
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <div style={footerContainer}>
        <input style={inputField} placeholder={this.props.placeHolder} value={this.state.value} type="text" onChange={this.updateValue}/>
        <button style={mainButton} onClick={this.clearInputField}>{this.props.buttonText}</button>
      </div>
    )
  }
}

export default FormField


const footerContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  width: '100%',
  bottom: '0',
  marginBottom: '0.4rem'
}


const inputField: CSSProperties = {
padding: '1rem',
outline: '0',
color: 'blue'
}


const mainButton: CSSProperties = {
display: 'flex',
alignItems: 'end',
justifyContent: 'end',
textAlign: 'center',
padding: '0.3rem 0 0.3rem 1rem',
background: 'black',
color: 'white',
fontSize: '0.7rem',
width:'4rem',
height:'3rem',
outline: '0',
cursor: 'pointer',
}



// interface FormFieldProps {
//   inputplaceholder: string;
//   buttontext: string;
//   onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
//   onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void)
//   value: string
//   type: string 
// }


// function FormField(props: FormFieldProps) {
// return (
//     <div style={footerContainer}>
//         <input style={inputFelt} onChange={props.onChange} placeholder={props.inputplaceholder}></input> 
//         <button value="" style={mainButton} onClick={props.onClick}> {props.buttontext} </button> 
//     </div>
// )
// }



