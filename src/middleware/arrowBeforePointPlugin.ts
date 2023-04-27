import type { ChartMeta } from 'chart.js';
import { Chart as ChartJS } from 'chart.js';

export const arrowBeforePointPlugin = {
  id: 'arrowBeforePoint',
  afterDraw: (chart: ChartJS) => {
    const ctx = chart.ctx;//контекст канваса
    const datasets = chart.data.datasets;//данные графика, то, что передано в пропсы графика

    ctx.fillStyle = 'yellow';//цвет рисунка
    ctx.lineWidth = 2;//ширина обводки рисунка

    chart.getSortedVisibleDatasetMetas().forEach((datasetMeta: ChartMeta) => {
      const dataset = datasets[datasetMeta.index];

      if (dataset.type === 'line') {
        datasetMeta.data.forEach((point, index: number) => {
          if (index > 0) {
            const prevPoint = datasetMeta.data[index - 1];
            const arrowWidth = 15;//ширина стрелки
            const arrowHeight = 15;//высота стрелки
            const x = point.x - arrowWidth / 2;
            const y = point.y;

            const angle = Math.atan2(point.y - prevPoint.y, point.x - prevPoint.x);//угол в радианах между осью х и лучом
            ctx.translate(x, y);//Метод ретранслирует позицию (0,0) в новое место растрового холста.
            ctx.rotate(angle - Math.PI / 2);//радианы, на сколько повернуть нарисованный объект
            ctx.beginPath();//вызываем этот метод для рисования всего чего нам захочется (треугольник)
            ctx.moveTo(0, 0);//указывает начальную позицию первой точки
            ctx.lineTo(-arrowWidth / 2, -arrowHeight);//проложить линию в эту позицию (-7.5, -15)
            ctx.lineTo(arrowWidth / 2, -arrowHeight);//проложить линию в эту позицию (7.5, 15)
            ctx.closePath();//соединяет последнюю точку с первой, закрывает контур
            ctx.fill();//цвет которым заполняем рисунок полностью, после формирования параметров рисунка
            ctx.setTransform(1, 0, 0, 1, 0, 0);//метод позволяет масштабировать, поворачивать, передвигать и скручивать текущий контекст
          }
        });
      }
    });
  },
};


