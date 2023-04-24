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


// const insideBarTextPlugin = {
//     id: "insideBarTextPlugin",
//     afterDraw: (chart: ChartJS) => {
//         const ctx = chart.ctx;

//         ctx.font = "16px Arial";
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.fillStyle = "#FFF";

//         chart.getSortedVisibleDatasetMetas().forEach((datasetMeta: ChartMeta) => {

//             datasetMeta.data.forEach(({x,y}: {x: number, y: number}) => {

//                 ctx.fillText("Истрачено бюджета 1000500", x, y + 100);
//                 ctx.fillText('из 1000500', x, y + 130);
//             });
//         });
//     },
// };

const arrowBeforePointPlugin = {
    id: "arrowBeforePoint",
    afterDraw: (chart: ChartJS) => {
        const ctx = chart.ctx;
        const datasets = chart.data.datasets;

        ctx.fillStyle = "yellow";
        ctx.lineWidth = 2;

        chart.getSortedVisibleDatasetMetas().forEach((datasetMeta: ChartMeta) => {
            const dataset = datasets[datasetMeta.index];

            if (dataset.type === "line") {
                datasetMeta.data.forEach((point, index: number) => {
                    if (index > 0) {
                        const prevPoint = datasetMeta.data[index - 1];
                        const arrowWidth = 15;
                        const arrowHeight = 15;
                        const x = point.x - arrowWidth / 2;
                        const y = point.y;


                        const angle = Math.atan2(point.y - prevPoint.y, point.x - prevPoint.x);
                        ctx.translate(x, y);
                        ctx.rotate(angle - Math.PI / 2);
                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        ctx.lineTo(-arrowWidth / 2, -arrowHeight);
                        ctx.lineTo(arrowWidth / 2, -arrowHeight);
                        ctx.closePath();
                        ctx.fill();
                        ctx.setTransform(1, 0, 0, 1, 0, 0);
                    }
                });
            }
        });
    },
};

// const textAbovePointPlugin = {
//     id: "textAbovePointPlugin",
//     afterDatasetsDraw: (chart: ChartJS ) => {
//         // console.log(chart);
//         const ctx = chart.ctx;
//         chart.data.datasets.forEach((dataset: ChartDataset & { textsPercent?: string[]}, i: number) => {
//             const meta = chart.getDatasetMeta(i);
//             if (!meta.hidden && dataset.type === 'line') {
//                 meta.data.forEach((element, index: number) => {
//                     const x = element.x;
//                     const y = element.y - 20;
//                     const text = dataset.textsPercent?.[index];
//                     ctx.fillStyle = 'black';
//                     ctx.font = '16px Arial';
//                     ctx.textAlign = 'center';
//                     ctx.fillText(text ?? '', x, y);
//                 });
//             }
//         });
//     }
// };


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    // insideBarTextPlugin,
    LineElement,
    PointElement,
    arrowBeforePointPlugin,
    // textAbovePointPlugin
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

