import React from "react";
import AddBill from "./Components/AddBill/AddBill";
import BillContextProvider from "./Context/BillContext";
import BillList from "./Components/BillList/BillList";
import BillTotal from "./Components/BillTotal/BillTotal";
import BillOptions from "./Components/BillOptions/BillOptions";
import './App.css'
import AppBar from "./Components/AppBar/AppBar";

const App: React.FC = () => {
  return (
    <>
    <AppBar/>
    <div className="container">
      <div
        className="mx-auto my-5 gradient-border"
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "600px",
          borderRadius: ".25rem"
        }}
      >
        <h1 className="text-center heading">Take control of your bills</h1>
        <BillContextProvider>
          <BillOptions/>
          <BillTotal/>
          <BillList/>
          <AddBill />
        </BillContextProvider>
      </div>
    </div>
    </>
  );
};

export default App;
