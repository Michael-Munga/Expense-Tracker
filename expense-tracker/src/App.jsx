import React from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import SearchBar from "./Components/SearchBar";

import "./App.css";

function App() {
  return (
    <div>
      <h1 className="page-title">Expense Tracker</h1>
      <SearchBar />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
