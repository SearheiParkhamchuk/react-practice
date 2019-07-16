import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogItems = props.dialogs.users.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const messagesItems = props.dialogs.messages.map(msg => <Message message={msg.message} />);
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