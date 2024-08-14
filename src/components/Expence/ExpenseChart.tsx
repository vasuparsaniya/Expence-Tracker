import React from "react";
import Chart from "../Chart/Chart";
import { ExpencesArray } from "../../types/App";

function ExpenseChart({expenses}:{expenses:ExpencesArray}) {
  const chartDataPoints = [
    {
      label:"Jan",value:0
    },
    {
      label:"Feb",value:0
    },{
      label:"Mar",value:0
    },{
      label:"Apr",value:0
    },{
      label:"May",value:0
    },{
      label:"Jun",value:0
    },{
      label:"July",value:0
    },{
      label:"Aug",value:0
    },{
      label:"Sep",value:0
    },{
      label:"Oct",value:0
    },{
      label:"Nov",value:0
    },{
      label:"Dec",value:0
    },
  ]

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth() //---starting from 0 => January
    console.log("---expenseMonth",expenseMonth)
    chartDataPoints[expenseMonth].value += Number(expense.amount);
  }
  return <Chart dataPoints={chartDataPoints}/>
}

export default ExpenseChart;