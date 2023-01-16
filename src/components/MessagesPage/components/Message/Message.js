import React from "react";
import './styles.css';

const Message = (props) => {
  const { message, className } = props;
  
  return (
    <div className={className}>
      {message}
    </div>
  )
}

export default Message;
