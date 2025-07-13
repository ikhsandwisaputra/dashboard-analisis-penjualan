// pages/Dashboard.tsx
import { useState } from 'react';
import Sidebar from '../components/Sidebar';

import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../components/DashboardNav';
// import DashboardNav from '~/components/DashboardNav';111

const Dashboard = () => {
   const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
    <Helmet>
     <title>Dashboard Analisis Penjualan</title>
    </Helmet>
    <div className="min-h-screen text-brand-text-primary">
      <div className="lg:flex">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      
      {/* Overlay untuk menutup sidebar saat diklik di luar area sidebar (mobile) */}
      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar} 
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
        ></div>
      )}
        <main className="flex-1  lg:ml-[250px]">
        <DashboardNav toggleSidebar={toggleSidebar} />
          <Outlet />
        </main>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
