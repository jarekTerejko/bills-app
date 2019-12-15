import React, { useContext, useState } from "react";
import { BillContext } from "../../Context/BillContext";
import "./Bill.css";

const BillList = ({ bill }) => {
  const { bills, updateBillStatus, deleteBill, updateBillEdited } = useContext(
    BillContext
  );

  // console.log(bills);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(bill.title);
  const [cost, setCost] = useState(bill.cost);

  let result;

  const toggleBillForm = () => {
    setIsEditing(!isEditing);
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    updateBillEdited({
      title: title,
      cost: cost,
      id: bill.id,
      enabled: bill.enabled
    });
    toggleBillForm();
  };

  const cancelEdit = () => {
    toggleBillForm();
    setTitle(bill.title);
    setCost(bill.cost);
  };

  if (isEditing) {
    result = (
      <li className="list-group-item">
        <form onSubmit={handleEditSubmit}>
          <h4 className="text-white">Editing...</h4>
          <div className="form-group">
            <input
              className="form-control form-control-sm"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control form-control-sm"
              type="number"
              step="any"
              value={cost}
              onChange={e => setCost(e.target.value)}
            />
          </div>
          <button className="btn btn-success btn-sm my-1 mx-1">Update</button>
          <button
            className="btn btn-primary btn-sm my-1 mx-1"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        </form>
      </li>
    );
  } else {
    result = (
      <li className="list-group-item bill">
        <div>
          <h5 className="d-inline-block">
            <span className="text-primary">{bill.title}</span> -{" "}
            <span className="text-danger">{bill.cost} zł</span>
          </h5>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={bill.enabled}
            onChange={() => {
              updateBillStatus({
                title: bill.title,
                cost: bill.cost,
                id: bill.id,
                enabled: !bill.enabled
              });
            }}
          />
          <button
            className="btn btn-danger btn-sm mx-2"
            onClick={() => deleteBill(bill)}
          >
            Delete
          </button>
          <button className="btn btn-primary btn-sm" onClick={toggleBillForm}>
            Edit
          </button>
        </div>
      </li>
    );
  }

  return result;
};

export default BillList;
