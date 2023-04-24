import './Bar2.css';
import type { ChartData, ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarProps {
  options: ChartOptions<'bar'>;
  data: ChartData<"bar">;
}

export const Bar2 = ({ data, options }: BarProps) => {
  return (
    <div className="demo">
      <Bar
        options={options}
        data={data}
      />
    </div>
  )
}