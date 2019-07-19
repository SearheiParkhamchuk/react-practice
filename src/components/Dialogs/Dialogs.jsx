import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogs = props.dialogs;
    const dialogItems = dialogs.users.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const messagesItems = dialogs.messages.map(msg => <Message message={msg.message} />);
    const defaultValue = dialogs.newMessageBody;

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onMessageChange = (e) => {
        const value = e.target.value;
        props.updateNewMessageBody(value);
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                { dialogItems }
            </div>
            <div className={css.messages}>
                <div>
                    { messagesItems }
                </div>
                <div>
                    <div>
                        <textarea
                            onChange={ onMessageChange }
                            value={ defaultValue }
                            placeholder='Enter your message...'>
                        </textarea>
                    </div>
                    <div><button onClick={ onSendMessage }>Send Message</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs