import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function BookForm({ initialValues, onSubmit }) {
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
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default BookForm;
