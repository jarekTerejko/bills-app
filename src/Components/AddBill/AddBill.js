import React, { useState } from "react";

const AddBill = () => {
  const [billTitle, setBillTitle] = useState("");
  const [billCost, setBillCost] = useState("");

//   console.log(billTitle, billCost);

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

  const updateBillList = (e) => {
    e.preventDefault()
    console.log(billTitle, billCost);
  };

  return (
    <form
      onSubmit={(e) => {
        if (isBillValid()) {
          updateBillList(e)
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
