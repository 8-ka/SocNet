import { ActionTypes } from "./actions"

const initialStateMessagesPage = {
  users: [
    { name: 'Joe' },
    { name: 'Jack' },
    { name: 'Jane' },
    { name: 'Jade' },
  ],
  messages: [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'Hi!' },
    { id: 3, message: 'Aloha!' },
    { id: 4, message: 'Halo!' },
  ],
}


export const messagesPageReducer = (state = initialStateMessagesPage, action) => {
  switch (action.type) {
    case ActionTypes.SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: '5', message: action.newMessageBody }],
      };
    case ActionTypes.UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.text,
      };
    default:
      return state;
  }
}
