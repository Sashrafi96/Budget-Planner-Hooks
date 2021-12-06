import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expense }) => {
  console.log("ExpenseList;", expense);
  return (
    <ul className="list-group">
      {expense.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </ul>
  );
};

export default ExpenseList;
