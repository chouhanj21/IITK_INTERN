
import React, { useState } from 'react';
import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';

HighchartsMore(Highcharts);

const WindSpeedWindRose = ({Data,Title}) => {
    // console.log(Data);
    const [chartOptions, setChartOptions] = useState(null);
    useEffect(() => {
        if (Data){
              const newChartOptions = {
                chart: {
                  polar: true,
                  type: 'column',
                  height: 600, // Adjust height
                  width: 800   // Adjust width
                },
                title: {
                  text: `Wind rose for ${Title} AWS4`
                },
                subtitle: {
                  text: 'Weather Station of Bithoor'
                },
                pane: {
                  size: '85%'
                },
                legend: {
                  align: 'right',
                  verticalAlign: 'top',
                  y: 100,
                  layout: 'vertical'
                },
                accessibility: {
                    enabled: false // Disables accessibility features globally
                  },
                xAxis: {
                  tickmarkPlacement: 'on',
                  categories: ['0\u00B0 - 30\u00B0', '30\u00B0 - 60\u00B0', '60\u00B0 - 90\u00B0', '90\u00B0 - 120\u00B0', '120\u00B0 - 150\u00B0', '150\u00B0 - 180\u00B0', '180\u00B0 - 210\u00B0', '210\u00B0 - 240\u00B0', '240\u00B0 - 270\u00B0', '270\u00B0 - 300\u00B0', '300\u00B0 - 330\u00B0', '330\u00B0 - 360\u00B0'], // Change axis labels here
                },
                yAxis: {
                  min: 0,
                  endOnTick: false,
                  showLastLabel: true,
                  title: {
                    text: 'Frequency (%)'
                  },
                  labels: {
                    formatter: function () {
                      return this.value + '%';
                    }
                  },
                  reversedStacks: false
                },
                tooltip: {
                  valueSuffix: '%'
                },
                plotOptions: {
                  series: {
                    stacking: 'normal',
                    shadow: false,
                    groupPadding: -0.12,
                    pointPlacement: 'on'
                  }
                },
                series: [
                  {
                    name: '<0.5 m/s',
                    data:Data.set0
                  },
                  {
                    name: '0.5-1 m/s',
                    data:Data.set1
                  },
                  {
                    name: '1-2 m/s',
                    data:Data.set2
                },
                  {
                    name: '2-3 m/s',
                    data:Data.set3
                  },
                  {
                    name: '3-4 m/s',
                    data:Data.set4
                  },
                  {
                    name: '4-5 m/s',
                    data:Data.set5
                  },
                  {
                    name: '>5 m/s',
                    data:Data.set6
                  }
                ]
              };
              setChartOptions(newChartOptions);   
          }
    }, [Data,Title]);

  if (!chartOptions) {
    return null;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};

export default WindSpeedWindRose;
