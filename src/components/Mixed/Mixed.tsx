import './Mixed.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Chart } from 'react-chartjs-2';
import { arrowBeforePointPlugin } from '../../middleware/arrowBeforePointPlugin';

import { mixedChartData, mixedChartOptions } from './MixedData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  arrowBeforePointPlugin,
  ChartDataLabels,
);

export const MixedChart = () => {
  return (
    <div className='demomixed'>
      <Chart
        data={mixedChartData}
        options={mixedChartOptions}
        type={'line'}
      />
    </div>
  );
};
