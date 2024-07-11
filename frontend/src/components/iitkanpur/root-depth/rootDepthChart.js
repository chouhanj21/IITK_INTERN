import React, { useEffect } from "react";
import Highcharts from "highcharts";

const RootDepthChart = ({ data, id }) => {
  useEffect(() => {
    if (data) makeChart(data, id);
  }, [data, id]);
  
  return <div id="container"></div>;
};

const makeChart = (data, id) => {
  const labels = data.map(item => {
    const date = new Date(item.Date);
    return date.toLocaleDateString();
  });
  const Y = data.map(item => item[`Plot${id}`]);
    Highcharts.chart("container", {
        chart: {
            type:'line',
            zoomType: 'xy',
        },
        title: {
          text: `Root Depth For Plot${id}`,
          align: 'center'
        },
        yAxis: {
          title: {
            text: "Root Depth (cm)",
          }
        },
        xAxis: {
            categories:labels,
            tickLength:0,
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
            name: "Root Depth",
            data:Y,
        }
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
};

export default RootDepthChart;
