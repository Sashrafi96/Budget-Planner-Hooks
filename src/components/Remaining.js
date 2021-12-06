import React from "react";

const Remaining = ({ budget, expense }) => {
  console.log("Remaing", budget);
  const totalExpenses = expense.reduce((total, item) => {
    return (total += parseInt(item.amount));
  }, 0);
  return (
    <div className="p-2">
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
