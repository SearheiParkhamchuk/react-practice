import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    const store = props.store;
    const state = store.getState();

    const sendMessage = () => {
        store.dispatch(sendMessageActionCreator());
    }

    const updateNewMessageBody = (value) => {
        store.dispatch(updateNewMessageBodyActionCreator(value));
    }

    return (<Dialogs
                sendMessage={sendMessage}
                updateNewMessageBody={updateNewMessageBody}
                newMessageBody={state.dialogs.newMessageBody}
                users={state.dialogs.users}
                messages={state.dialogs.messages}/>);
}

export default DialogsContainer