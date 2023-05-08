import './ChartArrow.css';
// import type { ChartData, ChartOptions } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
import {
    registerables,
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
import { chartData, chartOptions } from './ChartArrowData';

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
    ...registerables
);



export const ChartArrow = () => {
    return (
        <div className="demo2">
            <Chart
                data={chartData}
                options={chartOptions}
                type={'bar'}
            />
        </div>
    );
}

