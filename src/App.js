//import "./App.css";
import React, { useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import Remaining from "./components/Remaining";
import SpentSoFar from "./components/SpentSoFar";
import { v4 as uuidv4 } from "uuid";

const initialExpenses = [
  { id: uuidv4(), name: "Rent", amount: "1600" },
  { id: uuidv4(), name: "Car Payment", amount: "300" },
  { id: uuidv4(), name: "Electric Bill", amount: "100" },
];

const App = () => {
  const [budget, setBudget] = useState("5000");
  const [expenses, setExpenses] = useState(initialExpenses);

  const saveItem = (name, cost) => {
    let newItem = {
      id: uuidv4(),
      name: name,
      amount: cost,
    };
    let newList = [...expenses, newItem];
    setExpenses(newList);
  };

  const editBudget = (dt) => {
    setBudget(dt);
  };

  const deleteExpense = (id) => {
    let newExpenseList = expenses.filter((exp) => exp.id !== id);
    setExpenses(newExpenseList);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>My Budget Planner (Hooks)</h1>
      <div className="card" style={{ width: "60rem" }}>
        <div className="d-flex justify-content-between">
          <div
            className="border bg-info text-white "
            style={{ width: "18rem", height: "3rem" }}
          >
            <Budget budget={budget} editBudget={editBudget} />
          </div>
          <div
            className="border bg-secondary text-white"
            style={{ width: "18rem" }}
          >
            <Remaining budget={budget} expense={expenses} />
          </div>
          <div
            className="border bg-success text-white"
            style={{ width: "18rem" }}
          >
            <SpentSoFar expense={expenses} />
          </div>
        </div>
        <h3>Expenses</h3>
        <div>
          <ExpenseList expense={expenses} deleteExpense={deleteExpense} />
        </div>
        <h3>Add Expenses</h3>
        <div>
          <AddExpenseForm saveItem={saveItem} />
        </div>
      </div>
    </div>
  );
};

export default App;
