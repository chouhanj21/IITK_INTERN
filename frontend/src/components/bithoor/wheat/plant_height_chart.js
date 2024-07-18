import React, { useEffect } from "react";
import Highcharts from "highcharts";

const PlantHeightChart = ({ data, year}) => {
  useEffect(() => {
    if (data && data.length) makeChart(data, year);
  }, [data, year]);
  
  return <div id='plant-height-container'></div>;
};

const makeChart = (data, year) => {
  const labels = data.map(item => {
    const date = new Date(item.Date);
    return date.toLocaleDateString();
  });
  const AVG = data.map(item => item['AVG']);
  const posSE = data.map(item => Number((item['AVG'] + item['SE']).toFixed(2))); // Round to 2 decimal places
  const negSE = data.map(item => Number((item['AVG'] - item['SE']).toFixed(2))); // Round to 2 decimal places
  Highcharts.chart("plant-height-container", {
    chart: {
      type: 'line',
      zoomType: 'xy',
    },
    title: {
      text: `Plant Height For ${year}`,
      align: 'center'
    },
    yAxis: {
      title: {
        text: "Plant Height (cm)",
      }
    },
    xAxis: {
      categories: labels,
      tickLength: 0,
    },
    credits: {
      enabled: false // disabled watermark of highchart.js 
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
        turboThreshold: 1000000,
        tooltip: {
          pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}:<b>{point.y}</b><br/>'
        }
      }
    },
    
    series: [{
      name: `Avg Height`,
      data: AVG,
      color: 'green',
      lineWidth: 2
    }, {
      name: "Max Height",
      data: posSE,
      color: 'red',
      marker: {
        enabled: true,
        symbol: 'triangle'
      },
      type: 'scatter' // Display as points
    }, {
      name: "Min Height",
      data: negSE,
      color: 'red',
      marker: {
        enabled: true,
        symbol: 'triangle'
      },
      type: 'scatter' // Display as points
    }],
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

export default PlantHeightChart;
