import React, { useState } from "react";
//import "../styles/AddExpenseForm.css";

const AddExpenseForm = ({ saveItem }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmitHandler = (e) => {
    console.log("Add:", name, cost);
    if (!name && !cost) {
      alert("Please enter your values");
      return;
    }
    saveItem(name, cost);
    setName("");
    setCost("");
  };
  return (
    <div className="container">
      <div
        className="d-flex justify-content-between"
        style={{ width: "25rem" }}
      >
        <div className="label">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            placeholder="e.g. rent"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cost">Cost</label>
          <br />
          <input
            type="text"
            placeholder="e.g 100"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
      </div>
      <br />
      <input type="button" value="Save" onClick={(e) => onSubmitHandler(e)} />
    </div>
  );
};

export default AddExpenseForm;
