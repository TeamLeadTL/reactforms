import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MultiFormContainer = () => {
  // Form 1 Configuration
  const form1InitialValues = { username: "", password: "" };
  const form1ValidationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const form1Submit = (values) => {
    console.log("Form 1 Submitted:", values);
  };

  // Form 2 Configuration
  const form2InitialValues = { email: "", age: "" };
  const form2ValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .required("Age is required"),
  });
  const form2Submit = (values) => {
    console.log("Form 2 Submitted:", values);
  };

    // Form 3 Configuration
    const form3InitialValues = { email: "", age: "", name:"",gender:"",feedback:"" };
    const form3ValidationSchema = Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      age: Yup.number()
        .typeError("Age must be a number")
        .required("Age is required"),
      name:Yup.string().required("name is Required"),
      gender:Yup.string().required("gender is required"),
      feedback:Yup.string().required("Feedback is required")

    });
    const form3Submit = (values) => {
      console.log("Form 3 Submitted:", values);
    };

  return (
    <div style={{ border: "2px solid black" }} className="container mt-4">
      <h1 className="mb-4">Multiple Forms Example</h1>

      {/* Form 1 */}
      <div style={{ border: "2px solid blue" }} className="mb-5">
        <h2>Form 1: Login</h2>
        <Formik
          initialValues={form1InitialValues}
          validationSchema={form1ValidationSchema}
          onSubmit={form1Submit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div style={{ border: "2px solid red" }} className="row mb-3">
                <div style={{ border: "2px solid green" }} className="col-md-6">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div style={{ border: "2px solid green" }} className="col-md-6">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Submit Form 1
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Form 2 */}
      <div className="mt-5" style={{ border: "2px solid blue" }}>
        <h2>Form 2: Profile</h2>
        <Formik
          initialValues={form2InitialValues}
          validationSchema={form2ValidationSchema}
          onSubmit={form2Submit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div style={{ border: "2px solid red" }} className="row mb-3">
                <div style={{ border: "2px solid green" }} className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div style={{ border: "2px solid green" }} className="col-md-3">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>
                  <Field
                    type="text"
                    id="age"
                    name="age"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                disabled={isSubmitting}
              >
                Submit Form 2
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Form 3 */}
      <div className="mt-5" style={{ border: "2px solid blue" }}>
        <h2>Form 3: Feedback</h2>
        <Formik
          initialValues={form3InitialValues}
          validationSchema={form3ValidationSchema}
          onSubmit={form3Submit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div style={{ border: "2px solid red" }} className="row mb-3">
                <div style={{ border: "2px solid green" }} className="col-md-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div style={{ border: "2px solid green" }} className="col-md-2">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>
                  <Field
                    type="text"
                    id="age"
                    name="age"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div style={{ border: "2px solid green" }} className="col-md-2">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div style={{ border: "2px solid green" }} className="col-md-2">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <Field
                                        as="select"
                                        id="gender"
                                        name="gender"
                                        className="form-control"
                                    >
                                        <option value="">Select a country</option>
                                        <option value="MALE">Male</option>
                                        <option value="FEMALE">Female</option>
                                        <option value="TRANS">Transgender</option>
                                    </Field>
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div style={{ border: "2px solid green" }} className="col-md-2">
                  <label htmlFor="feedback" className="form-label">
                    Feedback
                  </label>
                  <Field
                    type="text"
                    id="feedback"
                    name="feedback"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="feedback"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-danger"
                disabled={isSubmitting}
              >
                Submit Form 3
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Form 4 */}
      <div className="mt-5" style={{ border: "2px solid blue" }}>
        <h2>Form 4 Rearranged: Feedback</h2>
        <Formik
          initialValues={form3InitialValues}
          validationSchema={form3ValidationSchema}
          onSubmit={form3Submit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div style={{ border: "2px solid red" }} className="row mb-3">
                <div style={{ border: "2px solid green" }} className="col-md-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div style={{ border: "2px solid green" }} className="col-md-2">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>
                  <Field
                    type="text"
                    id="age"
                    name="age"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div style={{ border: "2px solid green" }} className="col-md-2">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div style={{ border: "2px solid green" }} className="col-md-2">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <Field
                                        as="select"
                                        id="gender"
                                        name="gender"
                                        className="form-control"
                                    >
                                        <option value="">Select a country</option>
                                        <option value="MALE">Male</option>
                                        <option value="FEMALE">Female</option>
                                        <option value="TRANS">Transgender</option>
                                    </Field>
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div style={{ border: "2px solid green" }} className="col-md-2">
                  <label htmlFor="feedback" className="form-label">
                    Feedback
                  </label>
                  <Field
                    type="text"
                    id="feedback"
                    name="feedback"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="feedback"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-danger"
                disabled={isSubmitting}
              >
                Submit Form 3
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MultiFormContainer;
