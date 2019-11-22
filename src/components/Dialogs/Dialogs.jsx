import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';
import { requiredField, maxLength } from '../../helpers/validators/validators';
import { Textarea } from '../Common/Forms/Forms';

const maxLength30 = maxLength(30);

const AddMessageForm = props => {
    return <form onSubmit={ props.handleSubmit }>
        <div>
            <Field
                component={Textarea}
                name='newMessageBody'
                placeholder='Enter your message...'
                validate={[ maxLength30, requiredField  ]}
            />
        </div>
        <div>
            <button >Send Message</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm({ form: 'addMessage' })(AddMessageForm)

const Dialogs = props => {

    const onSubmit = formData => {
        props.sendMessage(formData.newMessageBody);
    }

    const dialogs = props.dialogs;
    const dialogItems = dialogs.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} />);
    const messagesItems = dialogs.messages.map(msg => <Message message={msg.message} key={msg.id} />);
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                { dialogItems }
            </div>
            <div className={css.messages}>
                <div>
                    { messagesItems }
                </div>
                <AddMessageReduxForm defaultValue={ dialogs.newMessageBody } onSubmit={ onSubmit } />
            </div>
        </div>
    );
}

export default Dialogs