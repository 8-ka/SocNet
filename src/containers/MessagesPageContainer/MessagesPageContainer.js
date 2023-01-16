import { connect } from "react-redux";
import { compose } from "redux";
import MessagesPage from "../../components/MessagesPage/MessagesPage";
import { messagesActions } from "../../data/messages_container";
import { withAuthRedirect } from "../../hoc/withAuthRedirect/withAuthRedirect";

const mapStateToProps = (state) => {
  const { messages, users, newMessageBody } = state.messagesPage;
  return {
    messages,
    users,
    newMessageBody,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessageText: (newMessageBody) => { 
      dispatch(messagesActions.sendMessageActionCreator(newMessageBody))
    },
    handleMessageText: (text) => {
      dispatch(messagesActions.updateNewMessageBodyActionCreator(text))
    },
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(MessagesPage)
