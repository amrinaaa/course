import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';

function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters long")
      .max(15, "Username can't be longer than 15 characters")
      .required("You must input a Username!"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters long")
      .max(20, "Password can't be longer than 20 characters")
      .required("You must input a Password!"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then (() => {
        console.log(data);
    })
    };

  return (
    <div className="registrationContainer">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label htmlFor="username">Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. John123...)"
          />

          <label htmlFor="password">Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            id="inputPassword"
            name="password"
            type="password"
            placeholder="Your Password"
          />

          <button type="submit"> Register </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
