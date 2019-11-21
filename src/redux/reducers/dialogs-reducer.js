const SEND_MESSAGE = 'SEND_MESSAGE';

const initalState = {
    dialogs: [
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
    ]
};

const sendMessage = (state, newMessageBody) => {
    return {
        ...state,
        messages: [...state.messages, {
            id: Math.random() * 100,
            message: newMessageBody
        }],
    }
};

const dialogsReducer = (state = initalState, action) => {
    const { type, newMessageBody } = action;
    switch(type) {
        case SEND_MESSAGE:
            return sendMessage(state, newMessageBody);
        default:
            return state;
    }
};

export const sendMessageActionCreator = newMessageBody => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;