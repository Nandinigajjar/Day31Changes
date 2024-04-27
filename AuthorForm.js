import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function AuthorForm({ initialValues, onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors = {};
        return errors;
      }}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default AuthorForm;
