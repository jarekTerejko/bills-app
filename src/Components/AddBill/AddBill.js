import React, { useState, useContext } from "react";
import { BillContext } from "../../Context/BillContext";

const AddBill = () => {
  const [billTitle, setBillTitle] = useState("");
  const [billCost, setBillCost] = useState("");

  //   console.log(billTitle, billCost);

  const { updateBills } = useContext(BillContext);

  const isBillValid = () => {
    const costValid = billCost && Number.parseFloat(billCost);

    const titleValid =
      billTitle && billTitle.split("").find(char => char !== " ");

    return costValid && titleValid;
  };

  const clearForm = () => {
    setBillCost("");
    setBillTitle("");
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (isBillValid()) {
          updateBills({
            title: billTitle,
            cost: billCost,
            id: Math.floor(Math.random() * 742896206),
            enabled: true
          });
          clearForm();
        }
      }}
    >
      <div className="form-group">
        <label htmlFor="bill-name">Bill Name</label>
        <input
          type="text"
          className="form-control"
          id="bill-name"
          value={billTitle}
          onChange={e => setBillTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bill-cost">Bill Cost</label>
        <input
          type="number"
          className="form-control"
          id="bill-cost"
          step="any"
          value={billCost}
          onChange={e => setBillCost(e.target.value)}
        />
      </div>
      <button className="btn btn-success">Add Bill</button>
    </form>
  );
};

export default AddBill;
