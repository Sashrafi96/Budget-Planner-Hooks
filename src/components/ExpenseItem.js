import React from "react";

function ExpenseItem({ expense }) {
  console.log("ExpenseItem", expense);
  return (
    <li className="list-group-item d-flex justify-content-between ">
      <span>{expense.name}</span>
      <div>
        <span className="badge bg-primary">${expense.amount}</span>
        <button className="btn">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;
