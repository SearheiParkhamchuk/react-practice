import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';

const dialogsData = [
    { name: 'Siarhei', id: 1},
    { name: 'Masha', id: 2},
    { name: 'Ivan', id: 3},
    { name: 'Petya', id: 4},
    { name: 'Marta', id: 5},
];

const messagesData = [
    { message: 'Hi' },
    { message: 'Hello' },
    { message: 'How are u doing?' },
    { message: 'I\'m ok' }
];

const Dialogs = (props) => {
    const dialogItems = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const messagesItems = messagesData.map(msg => <Message message={msg.message} />);
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                { dialogItems }
            </div>
            <div className={css.messages}>
                { messagesItems }
            </div>
        </div>    
    );
}

export default Dialogs