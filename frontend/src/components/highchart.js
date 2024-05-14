import React, { useEffect } from "react";
import Highcharts from "highcharts";

const Units={
    Temp1:"Temp1 (Deg C)",
    RH1:"RH1 (%)",
    Temp2:"Temp2 (Deg C)",
    RH2:"RH2 (%)",
    W_Speed:"W.Speed (m/s)",
    A_W_Speed:"A.W.Speed (m/s)",
    Max_W_Speed: "Max.W.Speed (m/s)",
    W_Dir:"W.Dir. (deg)",
    Wind_Direction: "Wind Direction (deg)",
    SolarRadation:"Solar Radation (watts/mtr)",
    Baro_Press:"Baro. Press (mbar)",
    Atm_Pressure:"Atm Pressure (mbar)",
    SHF1:"SHF1 (watts/mtr)",
    SHF2:"SHF2 (watts/mtr)",
    LavelInPan:"Label In Pan (mm)",
    Rain: "Rain (mm)",
    Rainfall: "Rainfall (mm)",
    BatteryVoltage:"Battery Voltage (Volts)",
}

const Chart = ({data,column}) => {
  useEffect(() => {
    if (data && data.length > 0) makeChart(data,column);
  }, [data,column]);
  return <div id={`${column}-container`}></div>;
};

const makeChart =(data,column)=>{
    const labels = data.map(item =>{
        const date = new Date(item.Date);
        date.setDate(date.getDate() - 1); // Subtract one day from the date
        return date.toLocaleDateString() + ' ' + item.Time;
    });
    const Y_vals = data.map(item => item[column]);
    // const graph_data = labels.map((label, index) => [label, temps[index]]);
    // console.log(temps.length);
    // console.log(column);
    const Type = (column==="Rain" || column === "Rainfall")? 'column' : 'line';
    Highcharts.chart(`${column}-container`, {
        chart: {
            type:Type,
            zoomType: 'xy'
        },
        title: {
          text: `Time Vs ${column}`,
          align: 'center'
        },
        yAxis: {
          title: {
            text: Units[column]
          }
        },
        xAxis: {
            categories:labels,
        },
        credits:{
            enabled:false  // disabled watermark of highchart.js 
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        accessibility: {
            enabled: false // Enable accessibility module
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            turboThreshold: 1000000	  
          }
        },
        series: [{
            name: column,
            data:Y_vals,
        },
        ],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 2000
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      });      
}

export default Chart;