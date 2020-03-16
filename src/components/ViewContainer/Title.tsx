import React, { CSSProperties } from "react";

export interface titleProps {
  titleContent: string;
  name?: string;
}

export class Title extends React.Component<titleProps> {
  render() {
  return <h3 style={style}>{this.props.name} {this.props.titleContent}</h3>;
  }
}

export default Title;

const style: CSSProperties = {
  marginTop: "7rem",
  textAlign: "center",
  width: "100%"
};
