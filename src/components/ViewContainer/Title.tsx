import React, {CSSProperties} from 'react';

interface Props{
titleContent: string
}

export class Title extends React.Component<Props> {

render() {
  return (
  <h3 style={style}>{this.props.titleContent}</h3>
  );
};
}

export default Title;


const style: CSSProperties = {
marginTop: '5rem',
textAlign: 'center',
width: '100%'
}

