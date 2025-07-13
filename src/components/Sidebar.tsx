// src/components/Sidebar.tsx
import React from 'react';
import { FiGrid, FiBox, FiMessageSquare, FiUsers, FiSettings, FiLogOut, FiHelpCircle } from 'react-icons/fi';

import { useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';

// Props untuk menerima state dan fungsi toggle dari parent component (App.tsx)
interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const { theme } = useTheme();
  const navItems = [
    { icon: <FiGrid size={20} />, name: 'Analisis', url: '/dashboard' },
    { icon: <FiBox size={20} />, name: 'Penjualan', url: '/dashboard/penjualan' },
    { icon: <FaMoneyBillTrendUp  size={20}/> , name: 'Pendapatan', url: '/dashboard/pendapatan' },
    { icon: <FiMessageSquare size={20} />, name: 'Messages' },
    { icon: <FiUsers size={20} />, name: 'Customers' },
    { icon: <FiSettings size={20} />, name: 'Settings' },
  ];
 
const isExact = (url: string) => {
  return url === '/dashboard' || url === '/';
}
  return (
    <aside
      className={`
        w-64 fixed top-0 left-0 z-20 inset-y-0 
        transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:min-h-screen
        transition-transform duration-300 ease-in-out
        z-30 flex flex-col border-r 
        ${theme === 'dark' ? 'bg-gray-900 text-gray-100 border-gray-700' : 'bg-white text-gray-800 border-gray-200'}
      `}
    >
      {/* Logo & Business Name */}
      <div className={`flex items-center justify-center h-20 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}>Business</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.filter(item => item.url).map((item, index) => (
          <NavLink
            key={index}
            to={item.url as string}
             end={isExact(item.url as string)} 
            className={({ isActive }) => `
              flex items-center px-4 py-3 rounded-lg transition-colors font-medium
              ${isActive
                ? theme === 'dark'
                  ? 'bg-violet-900 text-violet-300 font-semibold shadow'
                  : 'bg-violet-50 text-violet-700 font-semibold shadow'
                : theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }
            `}
          >
            {item.icon}
            <span className="ml-4">{item.name}</span>
          </NavLink>
        ))}
        <a href="#" className={`flex items-center px-4 py-3 rounded-lg transition-colors ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}>
          <FiLogOut size={20} />
          <span className="ml-4">Sign Out</span>
        </a>
      </nav>

      {/* Help/Support Box */}
      <div className={`p-4 m-4 text-center rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className={`p-3 mx-auto rounded-full w-fit ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
           <FiHelpCircle size={28} className={theme === 'dark' ? 'text-violet-400' : 'text-violet-600'} />
        </div>
        <p className="mt-4 text-sm font-semibold">Need help?</p>
        <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>feel free to contact</p>
        <button className={`w-full py-2 mt-3 text-sm font-semibold rounded-lg transition-colors ${theme === 'dark' ? 'bg-violet-700 hover:bg-violet-800 text-white' : 'bg-violet-600 hover:bg-violet-700 text-white'}`}>
          Get support
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;