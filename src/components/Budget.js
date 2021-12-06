import React, { useState } from "react";
//import "../styles/Budget.css";
const Budget = ({ budget, editBudget }) => {
  const [data, setData] = useState(budget);
  const [editflag, setEditflag] = useState(false);
  const changeHandler = (e) => {
    setData(e.target.value);
  };
  const saveHandler = () => {
    setEditflag(false);
    editBudget(data);
  };
  const editHandler = () => {
    setEditflag(true);
  };

  return (
    <div className="p-2 d-flex justify-content-between">
      {editflag ? (
        <input
          type="text"
          value={data}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      ) : (
        <span> Total Budget: ${data}</span>
      )}
      {editflag ? (
        <input
          className="edit"
          type="button"
          value="Save"
          onClick={saveHandler}
        />
      ) : (
        <input
          className="edit"
          type="button"
          value="Edit"
          onClick={editHandler}
        />
      )}
    </div>
  );
};
export default Budget;
