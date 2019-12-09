import React, { useContext } from "react";
import { BillContext } from "../../Context/BillContext";
import { log } from "util";

const BillList = () => {
  const { bills, updateBillStatus } = useContext(BillContext);

  return (
    <div>
      <ul className="list-group my-3">
        {bills.map(bill => {
          return (
            <li className="list-group-item" key={bill.id}>
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
              />{" "}
              {bill.title} - {bill.cost} zł
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BillList;
