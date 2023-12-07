import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget ,expenses} = useContext(AppContext);
  const totalExpenses=expenses.reduce((total, item) => {
    return (total += item.cost);
}, 0);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    if (event.target.value > 20000) {
      alert("Budget can't exceed 20,000!");
    }else if(event.target.value < totalExpenses){
      alert(`Budget can\'t be less than the expenses which is ${totalExpenses}!`);
    } 
    else setNewBudget(event.target.value);
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: £{budget}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
