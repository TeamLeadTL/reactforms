import React from "react";
import Form1 from "./components/Form1.js";
import Form2 from "./components/Form2.js";
import Form3 from "./components/Form3.js";
import Form4 from "./components/Form4.js";
import MyForm from "./components/MyForm.js";
import MultiFormContainer from "./components/MultipleFormContainer.js";
import MasterForm from "./components/MasterForm.js"
import LayoutToggle from "./components/LayoutToggle.js";
function App() {
  return (
  //   <React.Fragment>
  //   <div >
  //     <div >
  //       <Form2 />
  //     </div>
  //     <div>
  //       <Form3 />
  //     </div>
  //     <div>
  //       <Form4 />
  //     </div>
  //   </div>
  // </React.Fragment>
  <React.Fragment>
    <div style={{border:'2px solid gray'}} className="container">
      <div className="row">
        {/* Apply bootstrap cdn for form2/3/4 */}
        <div style={{border:'2px solid green'}} className="col-sm-12"><Form2 /></div>
        <div style={{border:'2px solid green'}} className="col-sm-12"><Form3 /></div>
        <div style={{border:'2px solid green'}} className="col-sm-12"><Form4 /></div>    
      </div>
    </div>
      <MyForm />
      <MultiFormContainer />
      <MasterForm />
      <LayoutToggle />
  </React.Fragment>
  );
}

export default App;
