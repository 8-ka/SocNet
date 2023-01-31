import { ActionTypes } from "./actions"

type InitialStateType = {
  users: Array<UsersType>,
  messages: Array<MessagesTypes>,
}

type UsersType = {
  name: string,
}

type MessagesTypes = {
  id: number,
  message: string,
}

const initialStateMessagesPage: InitialStateType = {
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


export const messagesPageReducer = (state: InitialStateType = initialStateMessagesPage, action: any) => {
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
