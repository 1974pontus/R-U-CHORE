import React from "react";


type Props = React.PropsWithChildren<{
  
}>

const SubmitButton = (props: Props) => {
  return (
    <button>{props.children}</button>
  );
};

export default SubmitButton;