
import { Helmet } from 'react-helmet';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
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
  ArcElement,
} from 'chart.js';
import revenueData from '../data/data.json';
import { useTheme } from '../context/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Pendapatan = () => {
  const { theme } = useTheme();

  // Grafik Pendapatan Bulanan
  const monthlyRevenueConfig = {
    labels: revenueData.monthlyRevenue.labels,
    datasets: [
      {
        label: 'Pendapatan Bulanan (Rp)',
        data: revenueData.monthlyRevenue.data,
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        tension: 0.2,
        fill: true,
      },
    ],
  };

  // Grafik Sumber Pendapatan
  const revenueSourcesConfig = {
    labels: revenueData.revenueSources.labels,
    datasets: [
      {
        label: 'Sumber Pendapatan',
        data: revenueData.revenueSources.data,
        backgroundColor: [
          'rgba(99, 102, 241, 0.7)',
          'rgba(34, 197, 94, 0.7)',
          'rgba(239, 68, 68, 0.7)',
          'rgba(253, 224, 71, 0.7)',
          'rgba(59, 130, 246, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Grafik Tren Pendapatan Tahunan
  const revenueTrendConfig = {
    labels: revenueData.revenueTrend.labels,
    datasets: [
      {
        label: 'Tren Pendapatan Tahunan (Rp)',
        data: revenueData.revenueTrend.data,
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        borderColor: 'rgb(99, 102, 241)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={`p-6 pt-25 min-h-screen transition-colors ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <Helmet>
        <title>Dashboard Pendapatan</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-6">Dashboard Pendapatan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Grafik Pendapatan Bulanan */}
        <div className={`rounded-lg shadow transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Pendapatan Bulanan</h2>
          <Line
            data={monthlyRevenueConfig}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  labels: { color: theme === 'dark' ? '#fff' : '#222' },
                  position: 'top',
                },
              },
              scales: {
                x: {
                  ticks: { color: theme === 'dark' ? '#fff' : '#222' },
                  grid: { color: theme === 'dark' ? '#333' : '#eee' },
                },
                y: {
                  ticks: { color: theme === 'dark' ? '#fff' : '#222' },
                  grid: { color: theme === 'dark' ? '#333' : '#eee' },
                },
              },
            }}
          />
        </div>
        {/* Grafik Sumber Pendapatan */}
        <div className={`rounded-lg shadow transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Sumber Pendapatan</h2>
          <Doughnut
            data={revenueSourcesConfig}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  labels: { color: theme === 'dark' ? '#fff' : '#222' },
                  position: 'top',
                },
              },
            }}
          />
        </div>
        {/* Grafik Tren Pendapatan Tahunan */}
        <div className={`rounded-lg shadow transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Tren Pendapatan Tahunan</h2>
          <Bar
            data={revenueTrendConfig}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  labels: { color: theme === 'dark' ? '#fff' : '#222' },
                  position: 'top',
                },
              },
              scales: {
                x: {
                  ticks: { color: theme === 'dark' ? '#fff' : '#222' },
                  grid: { color: theme === 'dark' ? '#333' : '#eee' },
                },
                y: {
                  ticks: { color: theme === 'dark' ? '#fff' : '#222' },
                  grid: { color: theme === 'dark' ? '#333' : '#eee' },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Pendapatan;