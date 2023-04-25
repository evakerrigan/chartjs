const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const mixedChartData = {
  labels,
  datasets: [
    {
      label: 'Линия полоса',
      type: 'line',
      // fill: true,
      // data: [150, 300, 600, 870, 200, 550, 600],
      data: [
        { key: 'January', value: 150, label: '150%' },
        { key: 'February', value: 300, label: '300%' },
        { key: 'March', value: 600, label: '600%' },
        { key: 'April', value: 870, label: '870%' },
        { key: 'May', value: 200, label: '200%' },
        { key: 'June', value: 550, label: '550%' },
        { key: 'July', value: 600, label: '600%' },
      ],
      datalabels: {
        color: 'green',
        align: 'end',
        anchor: 'start',
        textAlign: 'center',
        font: {
          size: 14,
          weight: 'normal',
        },
      },
      parsing: {
        xAxisKey: 'key',
        yAxisKey: 'value',
      },
      borderColor: 'rgb(255, 99, 132)',
      borderDash: [7, 7],
      pointBackgroundColor: '#000',
      pointStyle: 'round',
      pointRadius: 5,
      pointHoverRadius: 10,
    },
    {
      label: 'Выполнено бюджета',
      type: 'bar',
      // data: [150, 300, 600, 870, 200, 550, 600],
      data: [
        { key: 'January', value: 150, label: 'текст\n 150%' },
        { key: 'February', value: 300, label: 'и тут\n текст\n еще\n какой\n то 300%' },
        { key: 'March', value: 600, label: 'тут\n немножко\n 600%' },
        { key: 'April', value: 870, label: 'и тут\n 870%' },
        { key: 'May', value: 200, label: '200%' },
        { key: 'June', value: 550, label: 'пусть\n и тут\n будет\n 550%' },
        { key: 'July', value: 600, label: 'и в\n конце\n 600%' },
      ],
      datalabels: {
        color: '#fff',
        align: 'end',
        anchor: 'start',
        textAlign: 'center',
        font: {
          size: 14,
          weight: 'normal',
        },
      },
      parsing: {
        xAxisKey: 'key',
        yAxisKey: 'value',
      },
      backgroundColor: 'blue',
      borderWidth: 1,
      borderRadius: 5,
    },
  ],
};

export const mixedChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top' as const,
      display: false, //отключает отображение описания графиков - label
    },
    title: {
      display: false, //отключает отображение названия графика
      text: 'Chart.js Line Chart',
    },
    datalabels: {
      color: 'red',
      align: 'end',
      anchor: 'start',
      textAlign: 'center',
      font: {
        size: 20,
        weight: 'bold',
      },
    },
  },
  animation: {
    duration: 2400,
    easing: 'linear',
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
