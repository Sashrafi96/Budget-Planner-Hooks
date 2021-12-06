import React from "react";

const SpentSoFar = ({ expense }) => {
  const totalExpenses = expense.reduce((total, item) => {
    return (total += parseInt(item.amount));
  }, 0);
  return (
    <div className="p-2">
      <span>Spent So far: ${totalExpenses}</span>
    </div>
  );
};

export default SpentSoFar;
