import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";

const CompChart = ({ data, variable }) => {
  const variableRef = useRef();
  variableRef.current = variable;

  useEffect(() => {
    if (data) {
      makeChart(data, variableRef.current);
    }
  }, [data]);

  return <div id="graph-container"></div>;
};

const makeChart = (data, variable) => {
  const labels = data.map((item) => {
    const date = new Date(item.Date);
    return date.toLocaleDateString();
  });
  const Y1 = data.map((item) => Object.values(item)[0]);
  const Y2 = data.map((item) => Object.values(item)[1]);
  const Type = variable === "Rainfall" ? "column" : "line";
  Highcharts.chart("graph-container", {
    chart: {
      type: Type,
      zoomType: "xy",
    },
    title: {
      text: `Time Vs ${variable}`,
      align: "center",
    },
    yAxis: {
      title: {
        text: `${variable}`,
      },
    },
    xAxis: {
      categories: labels,
    },
    credits: {
      enabled: false, // disabled watermark of highchart.js
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
    accessibility: {
      enabled: false, // Enable accessibility module
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        turboThreshold: 1000000,
      },
    },
    series: [
      {
        name: `AWS3 ${variable}`,
        data: Y1,
      },
      {
        name: `AWS4 ${variable}`,
        data: Y2,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 2000,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
};

export default CompChart;
