const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const lineChartData = {
  labels,
  datasets: [
    {
      label: 'Линия',
      type: "line",
      data: [150, 300, 600, 870, 200, 550, 600],
      // textsPercent: ['150%', '300%', '600%', '870%', '200%', '550%', '600%'],
      // backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
      borderDash: [7, 7],
      // fill: false,
      // tension: 0.5,
      // borderJoinStyle: 'round',
      pointBackgroundColor: '#000',
      pointStyle: 'round',
      pointRadius: 5,
      pointHoverRadius: 10,
      // rotation: 25,
      // stepped: true,
      // color: '#fff',
    },
  ],
  
};
export const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      // min: 80,
      // max: 100,
      // ticks: {
      //   stepSize: 5,
      //   callback: (value: string) => value + '%',
      // },
      // color: '#fff',
    },
  },
  // color: '#fff',
};
