import React, { useContext } from "react";
import { BillContext } from "../../Context/BillContext";

const BillOptions = () => {
  const { selectedCostInterval, setSelectedCostInterval } = useContext(
    BillContext
  );
  return (
    <div
      className="list-group-item my-4 text-center"
      style={{ borderRadius: ".25rem" }}
    >
      <h5 style={{ fontWeight: 300 }}>Spend / Save Money Mode</h5>
      <button
        className={
          selectedCostInterval === "Daily"
            ? "btn btn-success my-1 mx-1 btn-sm"
            : "btn btn-dark my-1 mx-1 btn-sm"
        }
        onClick={e => setSelectedCostInterval(e.target.innerText)}
      >
        Daily
      </button>
      <button
        className={
          selectedCostInterval === "Weekly"
            ? "btn btn-success my-1 mx-1 btn-sm"
            : "btn btn-dark my-1 mx-1 btn-sm"
        }
        onClick={e => setSelectedCostInterval(e.target.innerText)}
      >
        Weekly
      </button>
      <button
        className={
          selectedCostInterval === "Monthly"
            ? "btn btn-success my-1 mx-1 btn-sm"
            : "btn btn-dark my-1 mx-1 btn-sm"
        }
        onClick={e => setSelectedCostInterval(e.target.innerText)}
      >
        Monthly
      </button>
      <button
        className={
          selectedCostInterval === "Yearly"
            ? "btn btn-success my-1 mx-1 btn-sm"
            : "btn btn-dark my-1 mx-1 btn-sm"
        }
        onClick={e => setSelectedCostInterval(e.target.innerText)}
      >
        Yearly
      </button>
    </div>
  );
};

export default BillOptions;
