import React from "react";
import AddBill from "./Components/AddBill/AddBill";

const App: React.FC = () => {
  return (
    <div className="container">
      <div
        className="mx-auto my-5"
        style={{
          width: "100%",
          maxWidth: "600px",
          minHeight: "800px",
          boxShadow: "2px 5px 20px grey"
        }}
      >
        <AddBill/>
      </div>
    </div>
  );
};

export default App;
