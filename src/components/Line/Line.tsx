import './Line.css';
import type { ChartData, ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


import { Line } from "react-chartjs-2";
import { arrowBeforePointPlugin } from '../../middleware/arrowBeforePointPlugin';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  arrowBeforePointPlugin,
);

interface BarProps {
  options: ChartOptions<'line'>;
  data: ChartData<"line">;
}

export const LineChart = ({ data, options }: BarProps) => {
  return (
    <div className="demoline">
      <Line
        options={options}
        data={data}
      />
    </div>
  )
}