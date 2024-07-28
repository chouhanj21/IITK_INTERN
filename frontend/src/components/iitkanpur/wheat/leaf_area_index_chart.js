import React, { useEffect } from "react";
import Highcharts from "highcharts";

const LeafAreaIndexChart = ({ data, id, year}) => {
  useEffect(() => {
    if (data && data.length>0) makeChart(data, id, year);
  }, [data, id, year]);
  
  return <div id='leaf-area-index-container'></div>;
};

const makeChart = (data, id, year) => {
  const labels = data.map(item => {
    const date = new Date(item.Date);
    return date.toLocaleDateString();
  });
  const Y = data.map(item => item[`Plot${id}`]);
    Highcharts.chart("leaf-area-index-container", {
        chart: {
            type:'line',
            zoomType: 'xy',
        },
        title: {
          text: `Leaf Area Index For Plot-${id} (${year})`,
          align: 'center'
        },
        yAxis: {
          title: {
            text: "Leaf Area Index",
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
            name: "Leaf Area Index",
            data:Y,
            color: 'green',
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

export default LeafAreaIndexChart;
