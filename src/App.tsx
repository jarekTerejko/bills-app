import React from "react";
import AddBill from "./Components/AddBill/AddBill";
import BillContextProvider from "./Context/BillContext";
import BillList from "./Components/BillList/BillList";
import BillTotal from "./Components/BillTotal/BillTotal";
import BillOptions from "./Components/BillOptions/BillOptions";
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container">
      <div
        className="mx-auto my-5 gradient-border"
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "600px",
          // minHeight: "800px",
          // boxShadow: "2px 5px 20px grey",
          borderRadius: ".25rem"
        }}
      >
        <BillContextProvider>
          <BillOptions/>
          <BillTotal/>
          <BillList/>
          <AddBill />
        </BillContextProvider>
      </div>
    </div>
  );
};

export default App;
