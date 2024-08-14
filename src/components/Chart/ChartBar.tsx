import React, { useEffect, useState } from "react";
import "../../assets/css/ChartBar.css";

function ChartBar({ value, maxValue, label }: { value: number, maxValue: number | null , label:string }) {
  let barFillHeight = "0%";
    if (maxValue && maxValue > 0) {
      barFillHeight = Math.round((value / maxValue) * 100) + "%";
    }
  
  return <div className="chart-bar">
    <div className="chart-bar__inner">
      <div className="chart-bar__fill" style={{height:barFillHeight}}></div>
    </div> 
    <div className="chart-bar__label">{label}</div>
  </div>
}

export default ChartBar;