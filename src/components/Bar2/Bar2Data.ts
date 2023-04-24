const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const barChartData  = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [150, 300, 600, 870, 200, 550, 600],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [650, 800, 100, 530, 400, 750, 100],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
export const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};


