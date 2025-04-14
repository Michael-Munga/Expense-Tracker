import React from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  return (
    <div>
      <form className="expense-form">
        <h2>Add Expense</h2>
        <div className="form-item">
          <label>Title</label>
          <input type="text" placeholder="Expense" />
        </div>
        <div className="form-item">
          <label>Amount</label>
          <input type="number" placeholder="Ksh" />
        </div>
        <div className="form-item">
          <label>Date</label>
          <input type="date" />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}
