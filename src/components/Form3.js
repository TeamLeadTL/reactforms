import React from "react";
import { useFormik } from "formik";
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
  });
  // console.log("Form Value", formik.values)
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
              className="form-control"
            />
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
              className="form-control"
            />
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
              className="form-control"
            />
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
