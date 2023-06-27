import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//gets same data for every component
// function ExpenseItem() {
//   const expenseDate = new Date(2021,2,28);
//   const expenseTitle = "car Insurance";
//   const expenseAmount =294.7;

//   return (
//     <div className="expense-item">
//       <div>{expenseDate.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{expenseTitle}</h2>
//         <div className="expense-item__price">${expenseAmount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;

//making this component resuable and dynamic for each copy
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

//so now get all the data we need from outside this component. We're not defining it inside of the ExpenseItem component or inside of this function, but, instead, it's in the end defined in App.js and passed into ExpenseItem for the different usages of ExpenseItem through attributes. And that's how you share data between React components. You can make your components truly reusable and configurable by using this props.
