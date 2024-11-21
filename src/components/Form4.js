import React from "react";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
function Form3() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("Form Data :", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name){
        errors.name = "Name Required";
      }
      if (!values.email){
        errors.email = "Email Required";
      }
      if (!values.channel){
        errors.channel = "Channel Required"
      }
      return errors;
    }
  });
  // console.log("Form Value", formik.values)
  // console.log("Form Errors :", formik.errors);
  console.log("Visited Fields :", formik.touched)
  return (
        <div >
               <div className="container col-sm-5">
      
      <form onSubmit={formik.handleSubmit} className="form-horizontal">
        <div className="form-group">
          <label htmlFor="name" className="control-label col-sm-3">
            Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              className="form-control"
            />
            {formik.touched.name && formik.errors.name ? (<div >{formik.errors.name}</div>) : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="control-label col-sm-3">
            Email
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="form-control"
            />
             {formik.touched.email && formik.errors.email ? (<div >{formik.errors.email}</div>) : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="channel" className="control-label col-sm-3">
            Channel
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="channel"
              name="channel"
              onChange={formik.handleChange}
              value={formik.values.channel}
              onBlur={formik.handleBlur}
              className="form-control"
            />
             {formik.touched.channel && formik.errors.channel ? (<div >{formik.errors.channel}</div>) : null}
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-5">
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>

    
        </div>
  );
}

export default Form3;
