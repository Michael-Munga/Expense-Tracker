import React from "react";
import "./ExpenseList.css";

export default function ExpenseList() {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount </th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </table>
    </div>
  );
}
