import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';

// import { Bar2 } from './components/Bar2/Bar2.tsx';
// import { LineChart } from './components/Line/Line.tsx';
import { MixedChart } from './components/Mixed/Mixed.tsx';
import { ChartArrow } from './components/ChartArrow/ChartArrow.tsx';

// import { barChartData, barChartOptions } from './components/Bar2/Bar2Data.ts';
// import { lineChartData, lineChartOptions } from './components/Line/LineData.ts';


function App() {

  return (
    <div className="app">
      <NavBar />
      <Routes>
         <Route path="mixed" element={<MixedChart/>} />
        {/* <Route path="line" element={<LineChart data={lineChartData} options={lineChartOptions} />} /> */}
        <Route path="chart-arrow" element={<ChartArrow/>} />
        {/* <Route path="bar-2" element={<Bar2 data={barChartData} options={barChartOptions} />} /> */}
      </Routes>
    </div>
  )
}

export default App
