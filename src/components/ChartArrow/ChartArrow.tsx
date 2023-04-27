import './ChartArrow.css';
import type { ChartData, ChartOptions } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
} from 'chart.js';
import { Chart } from "react-chartjs-2";
import { arrowBeforePointPlugin } from '../../middleware/arrowBeforePointPlugin';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    arrowBeforePointPlugin,
);

interface BarProps {
    options: ChartOptions<'bar'>;
    data: ChartData<"bar">[];
}

export const ChartArrow = ({ data, options }: BarProps) => {
    return (
        <div className="demo2">
            <Chart data={data} options={options} />
        </div>
    );
}

