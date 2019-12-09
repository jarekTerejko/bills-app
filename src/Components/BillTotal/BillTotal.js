import React, { useContext } from "react";
import { BillContext } from "../../Context/BillContext";
const BillTotal = () => {
  const { bills, selectedCostInterval, setSelectedCostInterval } = useContext(
    BillContext
  );

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
    <div
      className="list-group-item my-3"
      style={{
        borderRadius: ".25rem",
        borderTop: "1px solid rgba(0,0,0,.125)"
      }}
    >
      <div>
        <h4 style={{ fontWeight: 300 }}>
          {selectedCostInterval} You spend:{" "}
          <span className="text-danger" style={{ fontSize: "40px" }}>
            {/* {bills
              .reduce((acc, curr) => {
                return curr.enabled ? changeCostInterval(curr.cost) + acc : acc;
              }, 0)
              .toFixed(2)}{" "} 
              zł */}
            {spend()} zł
          </span>
        </h4>
      </div>
      <div>
        <h4 style={{ fontWeight: 300 }}>
          {selectedCostInterval} You save:{" "}
          <span className="text-success" style={{ fontSize: "40px" }}>
            {/* {bills
              .reduce((acc, curr) => {
                return !curr.enabled
                  ? changeCostInterval(curr.cost) + acc
                  : acc;
              }, 0)
              .toFixed(2)}{" "}
            zł */}
            {save()} zł
          </span>
        </h4>
      </div>
    </div>
  );
};

export default BillTotal;
