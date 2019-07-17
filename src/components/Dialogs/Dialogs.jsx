import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/reducers/dialogs-reducer';

const Dialogs = (props) => {
    const dialogItems = props.dialogs.users.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const messagesItems = props.dialogs.messages.map(msg => <Message message={msg.message} />);

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    const onMessageChange = (e) => {
        const value = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(value));
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
                            value={ props.dialogs.newMessageBody }
                            placeholder='Enter your message...'>
                        </textarea>
                    </div>
                    <div><button onClick={ sendMessage }>Send Message</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs