import { Formik, Form, Field } from 'formik';
import React from "react";

const FormValidate = () => {
  const errors = {};
  return errors;
}

const UserSearchForm = (props) => {
  const { onFilterChanged } = props;
  const sumbitForm = (values, { setSubmitting }) => {
    onFilterChanged(values);
    setSubmitting(false);
  }

  return (
    <div>
      <Formik
        initialValues={{ term: '', friend: null }}
        validate={FormValidate}
        onSubmit={sumbitForm}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <Field name="followers" as="select">
              <option value={null}>All</option>
              <option value={true}>Followed</option>
              <option value={false}>Unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserSearchForm;
