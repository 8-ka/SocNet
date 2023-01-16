import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddMessageForm = (props) => {
    const { className, handleSubmit } = props;

    return (
        <div className={className}>
            <form onSubmit={handleSubmit}>
                <Field component={'input'} type='text-area' placeholder='add new message' name={'newMessageBody'} />
                <button>Add message</button>
            </form>
        </div>
    );
}

const AddMessageReduxForm = reduxForm({
    form: 'addMessage',
})(AddMessageForm) 

export default AddMessageReduxForm;