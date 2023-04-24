import type { ChartMeta } from 'chart.js';
import { Chart as ChartJS } from 'chart.js';

export const arrowBeforePointPlugin = {
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