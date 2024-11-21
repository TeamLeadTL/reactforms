import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CompleteForm = () => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        country: "",
        gender: "",
        hobbies: [],
        description: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        country: Yup.string().required("Country is required"),
        gender: Yup.string().required("Gender is required"),
        hobbies: Yup.array().min(1, "At least one hobby must be selected"),
        description: Yup.string().max(300, "Description cannot exceed 300 characters"),
    });

    const onSubmit = (values) => {
        console.log("Form Submitted:", values);
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Comprehensive Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {/* Text Input */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                            />
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>

                        {/* Email Input */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                            />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>

                        {/* Password Input */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                            />
                            <ErrorMessage name="password" component="div" className="text-danger" />
                        </div>

                        {/* Dropdown */}
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">Country</label>
                            <Field
                                as="select"
                                id="country"
                                name="country"
                                className="form-control"
                            >
                                <option value="">Select a country</option>
                                <option value="USA">United States</option>
                                <option value="CAN">Canada</option>
                                <option value="UK">United Kingdom</option>
                            </Field>
                            <ErrorMessage name="country" component="div" className="text-danger" />
                        </div>

                        {/* Radio Buttons */}
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <div className="form-check">
                                <Field
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    className="form-check-input"
                                />
                                <label htmlFor="male" className="form-check-label">Male</label>
                            </div>
                            <div className="form-check">
                                <Field
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    className="form-check-input"
                                />
                                <label htmlFor="female" className="form-check-label">Female</label>
                            </div>
                            <ErrorMessage name="gender" component="div" className="text-danger" />
                        </div>

                        {/* Checkboxes */}
                        <div className="mb-3">
                            <label className="form-label">Hobbies</label>
                            <div className="form-check">
                                <Field
                                    type="checkbox"
                                    id="hobby-reading"
                                    name="hobbies"
                                    value="reading"
                                    className="form-check-input"
                                />
                                <label htmlFor="hobby-reading" className="form-check-label">Reading</label>
                            </div>
                            <div className="form-check">
                                <Field
                                    type="checkbox"
                                    id="hobby-traveling"
                                    name="hobbies"
                                    value="traveling"
                                    className="form-check-input"
                                />
                                <label htmlFor="hobby-traveling" className="form-check-label">Traveling</label>
                            </div>
                            <div className="form-check">
                                <Field
                                    type="checkbox"
                                    id="hobby-coding"
                                    name="hobbies"
                                    value="coding"
                                    className="form-check-input"
                                />
                                <label htmlFor="hobby-coding" className="form-check-label">Coding</label>
                            </div>
                            <ErrorMessage name="hobbies" component="div" className="text-danger" />
                        </div>

                        {/* Textarea */}
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <Field
                                as="textarea"
                                id="description"
                                name="description"
                                rows="4"
                                className="form-control"
                            />
                            <ErrorMessage name="description" component="div" className="text-danger" />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CompleteForm;
