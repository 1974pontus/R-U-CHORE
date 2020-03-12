import React, {CSSProperties} from 'react';

interface titleProps{
titleContent: string
}

export class Title extends React.Component<titleProps> {

render() {
  return (
  <h3 style={style}>{this.props.titleContent}</h3>
  );
};
}

export default Title;


const style: CSSProperties = {
marginTop: '7rem',
textAlign: 'center',
width: '100%'
}

