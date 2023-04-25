import './Mixed.css';
import type { ChartData, ChartDataset, ChartOptions } from 'chart.js';
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

// import { Bar } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";
import { arrowBeforePointPlugin } from '../../middleware/arrowBeforePointPlugin';

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

interface MixedProps {
  options: ChartOptions<'bar'>;
  data: ChartData<'bar'>[];
}

export const MixedChart = ({ data, options }: MixedProps) => {
  return (
    <div className="demomixed">
      <Chart
        options={options}
        data={data}
      />
    </div>
  )
}