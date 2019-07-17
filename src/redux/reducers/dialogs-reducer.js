const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initalState = {
    users: [
        { name: 'Siarhei', id: 1},
        { name: 'Masha', id: 2},
        { name: 'Ivan', id: 3},
        { name: 'Petya', id: 4},
        { name: 'Marta', id: 5},
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are u doing?' },
        { id: 4, message: 'I\'m ok' }
    ],
    newMessageBody: ''
};

const updateNewMessageBody = (state, text) => {
    state.newMessageBody = text;
};

const sendMessage = (state) => {
    state.messages.push({
        id: Math.random() * 100,
        message: state.newMessageBody
    });
    state.newMessageBody = '';
};

const dialogsReducer = (state = initalState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            updateNewMessageBody(state, action.text);
            return state;
        case SEND_MESSAGE:
            sendMessage(state);
            return state;
        default:
            return state;
    }
};

export const updateNewMessageBodyActionCreator = text => ({type: UPDATE_NEW_MESSAGE_BODY, text});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;