import "./InputExpenses.css";
import Wrapper from "./wrappers/Wrapper";
import { useState } from "react";

function InputExpenses() {
  const [expense, setNewExpense] = useState({
    title: "",
    amount: 0,
    category: "incoming",
    isIncome: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setNewExpense({
      ...expense,
      [name]: value
    });
  };

  return (
    <Wrapper
      content={
        <form class="new-expense" onSubmit={handleSubmit}>
          <h2>Input Expense</h2>
          <div className="form-container">
            <label htmlFor="title">
              <h3>Title</h3>
            </label>
            <input
              onChange={handleInputChange}
              value={expense.title}
              type="text"
              name="title"
              id="title"
            ></input>
          </div>
          <div className="form-container">
            <label htmlFor="amount">
              <h3>Amount</h3>
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              max={10000}
              min={1}
              step={0.1}
            ></input>
          </div>
          <div className="form-container">
            <label htmlFor="category">
              <h3>Category</h3>
            </label>
            <select name="category" id="category">
              <option value="incoming">incoming</option>
              <option value="transfer">transfer</option>
              <option value="car">car</option>
              <option value="bizum">bizum</option>
              <option value="bill">bill</option>
              <option value="electricity">electricity</option>
            </select>
          </div>
          <div className="form-container income-container">
            <label htmlFor="isIncome">
              <h3>Is Income</h3>
            </label>
            <input type="checkbox" id="isIncome" name="isIncome" />
            <span className="checkmark" aria-hidden="true"></span>
          </div>
          <button>Add Record</button>
        </form>
      }
    />
  );
}

export default InputExpenses;
