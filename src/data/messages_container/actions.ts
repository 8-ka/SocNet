export const ActionTypes = {
    UPDATE_NEW_MESSAGE_BODY: 'UPDATE-NEW-MESSAGE-BODY',
    SEND_MESSAGE: 'SEND-MESSAGE',
}

export const sendMessageActionCreator = (newMessageBody: string) => ({
    type: ActionTypes.SEND_MESSAGE,
    newMessageBody
})

export const updateNewMessageBodyActionCreator = (text: string) => ({
    type: ActionTypes.UPDATE_NEW_MESSAGE_BODY,
    text,
})