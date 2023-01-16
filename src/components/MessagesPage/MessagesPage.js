import React from "react";
import { NavLink } from "react-router-dom";
import AddMessageReduxForm from "../AddMessageForm/AddMessageForm";
import Message from "./components/Message/Message";
import './styles.css';

const MessagesPage = (props) => {
  const { users, messages, addMessageText } = props;

  const usersElements = users.map((user, index) => (
    <div className='user__items-container' key={index.toString()}>
      <NavLink to={`/messages/${index}`} className='user__item'>
        {user.name}
      </NavLink>
    </div>
  ));

  const messagesElements = messages.map((message, index) => (
    <Message key={index.toString()} message={message.message} className='message__item' />
  ));

  const onClickAddMessageText = (value) => {
    addMessageText(value.newMessageBody);
  };

  // const onChangeHandleMessageText = (e) => {
  //   let text = e.target.value;
  //   handleMessageText(text);
  // }

  return (
    <div className='container'>
      <div className='users__container'>
        {usersElements}
      </div>
      <div className='messages__container'>
        {messagesElements}
      </div>
      <AddMessageReduxForm onSubmit={onClickAddMessageText} />
    </div>
  )
}

export default MessagesPage;