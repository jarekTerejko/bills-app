import React, { useContext } from "react";
import { BillContext } from "../../Context/BillContext";
import Bill from "../Bill/Bill";

const BillList = () => {
  const { bills, deleteBills } = useContext(BillContext);

  return (
    <div>
      <ul className="list-group my-3">
      {bills.length ? (
        <li className="list-group-item">
          <h5 className="text-center" style={{fontWeight: 300}}>List of Bills</h5>
        </li>
      ) : null}
        {bills.map(bill => {
          return <Bill bill={bill} key={bill.id} />;
        })}
        {bills.length ? (
          <li className="list-group-item">
          <button onClick={deleteBills} className="btn btn-danger btn-sm">
            Delete All
          </button></li>
        ) : null}
      </ul>
    </div>
  );
};

export default BillList;
