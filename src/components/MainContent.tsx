// src/components/MainContent.tsx
import React from 'react';
import { FiArrowUpRight, FiArrowDownRight, FiCheckCircle } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';
import salesData from '../data/data.json';

// Data Customer Order dari data.json
const customerData = [
    { name: 'Press', city: 'London', date: '22.08.2022', status: 'Delivered', price: '$920' },
    { name: 'Marina', city: 'Man City', date: '24.08.2022', status: 'Processed', price: '$452' },
    { name: 'Alex', city: 'Unknown', date: '18.08.2022', status: 'Cancelled', price: '$1000' },
    { name: 'Robert', city: 'New York', date: '03.08.2022', status: 'Delivered', price: '$1235' },
];

const StatCard = ({ title, value, change, icon, changeType, theme }: { title: string, value: string, change: string, icon: React.ReactNode, changeType: 'up' | 'down', theme: string }) => (
    <div className={`p-5 rounded-xl shadow-sm transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center justify-between">
            <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{title}</p>
            {icon}
        </div>
        <p className={`mt-2 text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{value}</p>
        <div className={`flex items-center mt-1 text-xs ${changeType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {changeType === 'up' ? <FiArrowUpRight /> : <FiArrowDownRight />}
            <span className="ml-1">{change}</span>
        </div>
    </div>
);

const MainContent: React.FC = () => {
    const { theme } = useTheme();
    // Ambil data dari data.json
    const orders = salesData.monthlySales.data.reduce((a, b) => a + b, 0);
    const revenue = salesData.monthlyRevenue.data.reduce((a, b) => a + b, 0);
    const users = 4890; // Dummy, bisa diambil dari data lain jika tersedia
    const subscriptions = 1201; // Dummy
    const monthTotal = salesData.monthlySales.data[salesData.monthlySales.data.length - 1];
    const revenueChange = ((salesData.monthlyRevenue.data[11] - salesData.monthlyRevenue.data[10]) / salesData.monthlyRevenue.data[10] * 100).toFixed(1);
    const ordersChange = ((salesData.monthlySales.data[11] - salesData.monthlySales.data[10]) / salesData.monthlySales.data[10] * 100).toFixed(1);

    const getStatusChip = (status: string) => {
        switch (status) {
            case 'Delivered':
                return <span className={`px-3 py-1 text-xs font-medium rounded-full ${theme === 'dark' ? 'text-green-300 bg-green-900' : 'text-green-700 bg-green-100'}`}>{status}</span>;
            case 'Processed':
                return <span className={`px-3 py-1 text-xs font-medium rounded-full ${theme === 'dark' ? 'text-blue-300 bg-blue-900' : 'text-blue-700 bg-blue-100'}`}>{status}</span>;
            case 'Cancelled':
                return <span className={`px-3 py-1 text-xs font-medium rounded-full ${theme === 'dark' ? 'text-red-300 bg-red-900' : 'text-red-700 bg-red-100'}`}>{status}</span>;
            default:
                return <span className={`px-3 py-1 text-xs font-medium rounded-full ${theme === 'dark' ? 'text-gray-300 bg-gray-800' : 'text-gray-700 bg-gray-100'}`}>{status}</span>;
        }
    };

    return (
        <main className={`flex-1 p-6 pt-[100px] min-h-screen transition-colors ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
            {/* Grid untuk semua kartu */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                {/* Kolom utama yang lebar */}
                <div className="space-y-6 lg:col-span-3">
                    {/* Baris pertama: 4 kartu status */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        <StatCard title="Orders" value={orders.toLocaleString()} change={`${ordersChange}%`} icon={<FiCheckCircle className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />} changeType={parseFloat(ordersChange) >= 0 ? 'up' : 'down'} theme={theme} />
                        <StatCard title="Revenue" value={revenue.toLocaleString()} change={`${revenueChange}%`} icon={<FiCheckCircle className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />} changeType={parseFloat(revenueChange) >= 0 ? 'up' : 'down'} theme={theme} />
                        <StatCard title="Users" value={users.toLocaleString()} change="12%" icon={<FiCheckCircle className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />} changeType="down" theme={theme} />
                        <StatCard title="Subscriptions" value={subscriptions.toLocaleString()} change="35%" icon={<FiCheckCircle className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />} changeType="up" theme={theme} />
                    </div>

                    {/* Baris kedua: 2 kartu status */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <StatCard title="Month total" value={monthTotal.toLocaleString()} change="9.2%" icon={<FiCheckCircle className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />} changeType="up" theme={theme} />
                        <StatCard title="Product Sales" value={salesData.productSales.data.reduce((a, b) => a + b, 0).toLocaleString()} change="1.2%" icon={<FiCheckCircle className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />} changeType="down" theme={theme} />
                    </div>

                    {/* Grafik Sales & User Activity (Placeholder) */}
                    <div className={`p-5 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Sales dynamics</h3>
                        {/* Placeholder untuk grafik bar. Ganti dengan library chart seperti Recharts/Chart.js */}
                        <div className={`h-48 mt-4 rounded-md flex items-end justify-center text-gray-400 text-sm ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>Chart Placeholder</div>
                    </div>
                    <div className={`p-5 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Overall User Activity</h3>
                        {/* Placeholder untuk grafik line. */}
                        <div className={`h-48 mt-4 rounded-md flex items-center justify-center text-gray-400 text-sm ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>Chart Placeholder</div>
                    </div>
                </div>

                {/* Kolom samping kanan */}
                <div className="space-y-6 lg:col-span-1">
                    {/* Kartu Paid Invoices & Funds Received */}
                    <div className={`p-5 text-center rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Paid Invoices</p>
                        <p className={`my-2 text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>$30,256.23</p>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>Current Financial Year</p>
                        <div className="flex items-center justify-center mt-2 text-xs text-green-500">
                           <FiArrowUpRight /> <span className="ml-1">+15%</span>
                        </div>
                    </div>
                    <div className={`p-5 text-center rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Funds received</p>
                        <p className={`my-2 text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>$150,256.23</p>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>Current Financial Year</p>
                        <div className="flex items-center justify-center mt-2 text-xs text-green-500">
                           <FiArrowUpRight /> <span className="ml-1">+19%</span>
                        </div>
                    </div>

                    {/* Tabel Customer Order */}
                    <div className={`p-5 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Customer order</h3>
                        <div className="mt-4 space-y-4">
                            {customerData.map((order, index) => (
                                <div key={index} className={`flex items-center justify-between text-sm ${theme === 'dark' ? 'text-gray-200' : ''}`}>
                                    <div className="flex items-center">
                                       <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${theme === 'dark' ? 'bg-gray-900 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>
                                           {order.name.substring(0,2).toUpperCase()}
                                       </div>
                                       <div className="ml-3">
                                            <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{order.name}</p>
                                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{order.city}</p>
                                       </div>
                                    </div>
                                    {getStatusChip(order.status)}
                                    <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{order.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainContent;