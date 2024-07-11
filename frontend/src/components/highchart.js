import React, { useEffect } from "react";
import Highcharts from "highcharts";

const Name={
  Temp1:"Temp(At 1m)",
  RH1:"RH1",
  Temp2:"Temp(At 2m)",
  RH2:"RH2",
  W_Speed:"Wind Speed",
  A_W_Speed:"Avg Wind Speed",
  Max_W_Speed: "Max Wind Speed",
  W_Dir:"Wind Direction",
  Wind_Direction: "Wind Direction",
  SolarRadiation:"Solar Radation",
  Baro_Press:"Barometer Pressure",
  Atm_Pressure:"Atm Pressure",
  SHF1:"SHF1",
  SHF2:"SHF2",
  LavelInPan:"Label In Pan",
  Rain: "Rain",
  Rainfall: "Rain",
  BatteryVoltage:"Battery Voltage",
};

const Units={
    Temp1:"Temp1 (Deg C)",
    RH1:"RH1 (%)",
    Temp2:"Temp2 (Deg C)",
    RH2:"RH2 (%)",
    W_Speed:"Wind Speed (m/s)",
    A_W_Speed:"Avg Wind Speed (m/s)",
    Max_W_Speed: "Max Wind Speed (m/s)",
    W_Dir:"Wind Direction (deg)",
    Wind_Direction: "Wind Direction (deg)",
    SolarRadiation:"Solar Radation (watts/mtr^2)",
    Baro_Press:"Barometer Press (mbar)",
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
    if (data) makeChart(data,column);
  }, [data,column]);
  return <div id={`${column}-container`}></div>;
};

const makeChart =(data,column)=>{
    const labels = data.map(item =>{
        const date = new Date(item.Date);
        if(item.Time) return date.toLocaleDateString() + ' ' + item.Time;
        else return date.toLocaleDateString();
    });
    const Y_vals = data.map(item => item[column]);
    // const graph_data = labels.map((label, index) => [label, temps[index]]);
    // console.log(temps.length);
    console.log(column);
    console.log(Units[column]);
    const Type = (column==="Rain" || column === "Rainfall")? 'column' : 'line';
    Highcharts.chart(`${column}-container`, {
        chart: {
            type:Type,
            zoomType: 'xy'
        },
        title: {
          text: Name[column],
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
            name: Name[column],
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