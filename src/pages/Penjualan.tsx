
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
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import salesData from '../data/data.json';
import { Helmet } from 'react-helmet';
import { useTheme } from '../context/ThemeContext';

// Register ChartJS components
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

const Penjualan = () => {
  const { theme } = useTheme();

  // Monthly Sales Chart Configuration
  const monthlySalesConfig = {
    labels: salesData.monthlySales.labels,
    datasets: [
      {
        label: 'Monthly Sales (Rp)',
        data: salesData.monthlySales.data,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false,
      },
    ],
  };

  // Product Sales Chart Configuration
  const productSalesConfig = {
    labels: salesData.productSales.labels,
    datasets: [
      {
        label: 'Product Sales (Units)',
        data: salesData.productSales.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Regional Sales Chart Configuration
  const regionalSalesConfig = {
    labels: salesData.salesByRegion.labels,
    datasets: [
      {
        data: salesData.salesByRegion.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
      },
    ],
  };

  return (
    <div className={`p-6 pt-25 min-h-screen transition-colors ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <Helmet>
        <title>Dashboard Penjualan Grafik</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-6">Dashboard Penjualan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Monthly Sales Chart */}
        <div className={`rounded-lg shadow transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Penjualan Bulanan</h2>
          <Line
            data={monthlySalesConfig}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  labels: {
                    color: theme === 'dark' ? '#fff' : '#222',
                  },
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
        {/* Product Sales Chart */}
        <div className={`rounded-lg shadow transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Penjualan per Produk</h2>
          <Bar
            data={productSalesConfig}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  labels: {
                    color: theme === 'dark' ? '#fff' : '#222',
                  },
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
        {/* Regional Sales Chart */}
        <div className={`rounded-lg shadow transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Penjualan per Region</h2>
          <Doughnut
            data={regionalSalesConfig}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  labels: {
                    color: theme === 'dark' ? '#fff' : '#222',
                  },
                  position: 'top',
                },
              },
            }}
          />
        </div>
        {/* Yearly Comparison */}
        <div className={`rounded-lg shadow transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Perbandingan Tahunan</h2>
          <Bar
            data={{
              labels: salesData.yearlyComparison.labels,
              datasets: [
                {
                  label: 'Revenue (Rp)',
                  data: salesData.yearlyComparison.data.revenue,
                  backgroundColor: 'rgba(75, 192, 192, 0.5)',
                },
                {
                  label: 'Units Sold',
                  data: salesData.yearlyComparison.data.units,
                  backgroundColor: 'rgba(153, 102, 255, 0.5)',
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  labels: {
                    color: theme === 'dark' ? '#fff' : '#222',
                  },
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

export default Penjualan;