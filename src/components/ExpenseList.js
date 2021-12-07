import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expense, deleteExpense }) => {
  return (
    <ul className="list-group">
      {expense.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} deleteExpense={deleteExpense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
