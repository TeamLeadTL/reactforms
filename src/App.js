import React from "react";
import Form1 from "./components/Form1.js";
import Form2 from "./components/Form2.js";
import Form3 from "./components/Form3.js";
function App() {
  return (
    <React.Fragment>
    <div>
      <div className="mb-4">
        <Form2 />
      </div>
      <div>
        <Form3 />
      </div>
    </div>
  </React.Fragment>
  );
}

export default App;