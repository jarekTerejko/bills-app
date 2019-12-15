import React, { useContext } from "react";
import { BillContext } from "../../Context/BillContext";
import "./BillTotal.css";

const BillTotal = () => {
  const { bills, selectedCostInterval } = useContext(BillContext);

  // returns number proper to selectedCostInterval
  const changeCostInterval = totalCost => {
    const selectedCost = Number.parseFloat(totalCost);
    switch (selectedCostInterval) {
      case "Monthly":
        return selectedCost;
      case "Yearly":
        return selectedCost * 12;
      case "Weekly":
        return (selectedCost * 12) / 52;
      case "Daily":
        return (selectedCost * 12) / 365;
      default:
        return 0;
    }
  };

  const spend = () => {
    return bills
      .reduce((acc, curr) => {
        return curr.enabled ? changeCostInterval(curr.cost) + acc : acc;
      }, 0)
      .toFixed(2);
  };

  const save = () => {
    return bills
      .reduce((acc, curr) => {
        return !curr.enabled ? changeCostInterval(curr.cost) + acc : acc;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="list-group-item my-3 bill-total">
      {!bills.length ? (
        <h5>You don't have any bills yet... Add at least one!</h5>
      ) : (
        <h5>Your results</h5>
      )}
      {bills.length ? (
        <>
          <div>
            <h4 style={{ fontWeight: 300 }}>
              {selectedCostInterval} You spend:{" "}
              <span className="text-danger amount" style={{ fontSize: "40px" }}>
                {spend()} zł
              </span>
            </h4>
          </div>
          <div>
            <h4 style={{ fontWeight: 300 }}>
              {selectedCostInterval} You save:{" "}
              <span
                className="text-success amount"
                style={{ fontSize: "40px" }}
              >
                {save()} zł
              </span>
            </h4>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default BillTotal;
