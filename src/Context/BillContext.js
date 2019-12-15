import React, { createContext, useState, useEffect } from "react";

export const BillContext = createContext();

const BillContextProvider = ({ children }) => {
  const [bills, setBills] = useState([]);
  const [selectedCostInterval, setSelectedCostInterval] = useState("Daily");

  useEffect(() => {
    setBills(JSON.parse(localStorage.getItem("bills")) || []);
    console.log("use effect");
  }, [setBills]);

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

  const deleteBill = billToDelete => {
    const billsFiltred = bills.filter(bill => bill.id !== billToDelete.id);
    localStorage.setItem("bills", JSON.stringify(billsFiltred));
    setBills(billsFiltred);
  };

  const deleteBills = () => {
    const newBillsAr = [];
    localStorage.setItem("bills", JSON.stringify(newBillsAr));
    setBills(newBillsAr);
  };

  const updateBillEdited = billToUpadate => {
    const billsToUpadate = bills.map(bill => {
      if (bill.id === billToUpadate.id) {
        return { ...billToUpadate };
      }
      return bill;
    });
    const updatedBills = setAlphabeticalOrder([...billsToUpadate]);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  return (
    <BillContext.Provider
      value={{
        bills,
        updateBills,
        updateBillStatus,
        selectedCostInterval,
        setSelectedCostInterval,
        deleteBill,
        deleteBills,
        updateBillEdited
      }}
    >
      {children}
    </BillContext.Provider>
  );
};

export default BillContextProvider;
