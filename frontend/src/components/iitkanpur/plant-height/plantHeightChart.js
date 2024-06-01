import React, { useEffect } from "react";
import Highcharts from "highcharts";

const PlantHeightChart = ({ data, id }) => {
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
  const AVG = data.map(item => item[`AVG${id}`]);
  const posSE = data.map(item => Number((item[`AVG${id}`] + item[`SE${id}`]).toFixed(2))); // Round to 2 decimal places
  const negSE = data.map(item => Number((item[`AVG${id}`] - item[`SE${id}`]).toFixed(2))); // Round to 2 decimal places
  Highcharts.chart("container", {
    chart: {
      type: 'line',
      zoomType: 'xy',
    },
    title: {
      text: `Time Vs Plant-Height`,
      align: 'center'
    },
    yAxis: {
      title: {
        text: "Plant Height",
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
      name: `AVG ${id}`,
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
