import React from "react";

function ExpenseItem({ expense, deleteExpense }) {
  console.log("ExpenseItem", expense);
  const deleteHandler = (id) => {
    deleteExpense(id);
  };
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>{expense.name}</span>
      <div>
        <span className="badge bg-primary">${expense.amount}</span>
        <button className="btn">
          <i
            className="bi bi-trash"
            onClick={() => deleteHandler(expense.id)}
          ></i>
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;
