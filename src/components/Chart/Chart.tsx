import React from "react";
import ChartBar from "./ChartBar";
import "../../assets/css/Chart.css";
import {  ChartPropsArray } from "../../types/components/Chart";


function Chart({ dataPoints }: { dataPoints: ChartPropsArray }) {
  const dataPointsValues = dataPoints.map((item) => item.value);
  const totalMaximum = Math.max(...dataPointsValues);
  console.log("-----------dataPointsValues",dataPointsValues)
  return <div className="chart">
    {dataPoints.map((item, index) => <ChartBar key={item.label} value={item.value} maxValue={totalMaximum} label={item.label} />)}
  </div>
}

export default Chart;