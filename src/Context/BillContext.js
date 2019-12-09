import React, { createContext, useState, useEffect } from "react";

export const BillContext = createContext();

const BillContextProvider = ({ children }) => {
  const [bills, setBills] = useState([]);
const [selectedCostInterval, setSelectedCostInterval] = useState("Daily")

  useEffect(() => {
    setBills(JSON.parse(localStorage.getItem("bills")) || []);
    //   return () => {
    //       cleanup
    //   };
  }, [setBills]);

  useEffect(() => {
    console.log(bills);
    //   return () => {
    //       cleanup
    //   };
  }, [bills]);

  const updateBills = bill => {
    const updatedBills = setAlphabeticalOrder([...bills, bill]);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
    console.log(bills);
    setBills(updatedBills);
  };

  const updateBillStatus = billToUpdate => {
    const billsFiltred = bills.filter(bill => bill.id !== billToUpdate.id);
    const updatedBills = setAlphabeticalOrder([...billsFiltred, billToUpdate]);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  const setAlphabeticalOrder = bills => {
    return bills.sort((a, b) => {
      return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 0;
    });
  };

  return (
    <BillContext.Provider value={{ bills, updateBills, updateBillStatus, selectedCostInterval, setSelectedCostInterval }}>
      {children}
    </BillContext.Provider>
  );
};

export default BillContextProvider;
