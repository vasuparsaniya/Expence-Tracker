import React from "react";
import ChartBar from "./ChartBar";
import "../../assets/css/Chart.css";
import { ChartProps, ChartPropsArray } from "../../types/components/Chart";


function Chart({dataPoints}:{dataPoints:ChartPropsArray}) {
  return <div className="chart">
    {dataPoints.map((item, index) => <ChartBar key={item.label} value={item.value} maxValue={null} label={item.label} />)}
  </div>
}

export default Chart;