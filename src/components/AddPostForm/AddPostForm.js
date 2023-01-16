import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddPostForm = (props) => {
    const { className, handleSubmit } = props;

    return (
        <div className={className}>
            <form onSubmit={handleSubmit}>
                <Field component='input'
                    type='text-area'
                    placeholder='Add new post'
                    name={'newPostText'} />
                <button>Add post</button>
            </form>
        </div>
    );
}

const AddPostFormReduxForm = reduxForm({
    form: 'addPost',
})(AddPostForm)

export default AddPostFormReduxForm;