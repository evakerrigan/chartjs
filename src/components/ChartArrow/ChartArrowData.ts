import { ChartData, ChartDataset } from 'chart.js';
import { DefaultDataPoint } from 'chart.js/dist/types';

const labels = ['2007', '2020', '2021', '2022', '2023'];



const lineChart: ChartDataset<'line'> & {
  textsPercent: string[]
} = {
  label: 'Линейный график',
  type: 'line',
  data: [92, 97, 97, 97, 95],
  textsPercent: ['95%', '99.2%', '99.2%', '99%', '95%'],
  fill: false,
  borderColor: 'yellow',
  tension: 0.1,
  borderDash: [5, 5],
  pointStyle: 'circle',
  pointBackgroundColor: 'black',
  pointRadius: 6,
  pointHoverRadius: 8,
};

const barChart: ChartDataset = {
  label: 'Выполнено бюджета',
  type: 'bar',
  data: [92, 97, 97, 97, 95],
  backgroundColor: 'blue',
  // backgroundColor: ["rgba(65, 0, 255, 0.5)", ...new Array(4).fill("rgba(0, 0, 255, 0.5)")],
  borderColor: 'rgba(75, 192, 192, 1)',
  borderWidth: 1,
};

export const chartData: ChartData = {
  labels,
  datasets: [
    lineChart,
    barChart
  ],
};

export const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      min: 80,
      max: 100,
      ticks: {
        stepSize: 5,
        //   callback: (value: string) => value + '%'
      },
    },
  },
};
