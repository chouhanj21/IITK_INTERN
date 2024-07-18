import React, { useEffect } from "react";
import Highcharts from "highcharts";

const LeafAreaIndexChart = ({ data, year}) => {
  useEffect(() => {
    if (data && data.length) makeChart(data, year);
  }, [data, year]);
  
  return <div id='leaf-area-index-container'></div>;
};

const makeChart = (data, year) => {
  const labels = data.map(item => {
    const date = new Date(item.Date);
    return date.toLocaleDateString();
  });
  const AVG = data.map(item => item['AVG']);
  const posSE = data.map(item => Number((item['AVG'] + item['SE']).toFixed(2))); // Round to 2 decimal places
  const negSE = data.map(item => Number((item['AVG'] - item['SE']).toFixed(2))); // Round to 2 decimal places
  Highcharts.chart("leaf-area-index-container", {
    chart: {
      type: 'line',
      zoomType: 'xy',
    },
    title: {
      text: `Leaf Area Index For ${year}`,
      align: 'center'
    },
    yAxis: {
      title: {
        text: "Leaf Area Index",
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
      name: `Avg Value`,
      data: AVG,
      color: 'green',
      lineWidth: 2
    }, {
      name: "Max Value",
      data: posSE,
      color: 'red',
      marker: {
        enabled: true,
        symbol: 'triangle'
      },
      type: 'scatter' // Display as points
    }, {
      name: "Min Value",
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

export default LeafAreaIndexChart;
