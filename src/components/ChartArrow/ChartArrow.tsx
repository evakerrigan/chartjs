import './ChartArrow.css';
import type {
    ChartData,
    // ChartDataset, 
    ChartMeta, ChartOptions
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    LineElement,
    PointElement,
} from 'chart.js';
import { arrowBeforePointPlugin } from '../../middleware/arrowBeforePointPlugin';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    LineElement,
    PointElement,
    arrowBeforePointPlugin,
);

interface BarProps {
    options: ChartOptions<'bar'>;
    data: ChartData<"bar">;
}

export const ChartArrow = ({ data, options }: BarProps) => {
    return (
        <div className="demo2">
            <Bar data={data} options={options} />
        </div>
    );
}

