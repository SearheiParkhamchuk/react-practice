import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

class Dialogs extends React.Component {
    onSendMessage = () => {
        this.props.sendMessage();
    }

    onMessageChange = (e) => {
        const value = e.target.value;
        this.props.updateNewMessageBody(value);
    }

    render () {
        const dialogs = this.props.dialogs;
        this.dialogItems = dialogs.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} />);
        this.messagesItems = dialogs.messages.map(msg => <Message message={msg.message} key={msg.id} />);
        this.defaultValue = dialogs.newMessageBody;
        return (
            <div className={css.dialogs}>
                <div className={css.dialogsItems}>
                    { this.dialogItems }
                </div>
                <div className={css.messages}>
                    <div>
                        { this.messagesItems }
                    </div>
                    <div>
                        <div>
                            <textarea
                                onChange={ e => { this.onMessageChange(e) } }
                                value={ this.defaultValue }
                                placeholder='Enter your message...'>
                            </textarea>
                        </div>
                        <div><button onClick={ () => this.onSendMessage() }>Send Message</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialogs