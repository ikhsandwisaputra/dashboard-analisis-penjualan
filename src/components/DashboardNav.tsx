// src/components/DashboardNav.tsx
import React from 'react';
import { FiMenu, FiSun, FiMoon, FiBell } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

interface DashboardNavProps {
  toggleSidebar: () => void;
}

const DashboardNav: React.FC<DashboardNavProps> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed lg:w-[89%] w-full ">
      <header className={`flex items-center justify-between h-20 px-6 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b transition-colors duration-200`}>
        {/* Left side: Hamburger menu (mobile) and Title */}
        <div className="flex items-center">
          <button onClick={toggleSidebar} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} lg:hidden`}>
            <FiMenu size={24} />
          </button>
          <div className="ml-4 lg:ml-0">
            <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Analytics</h1>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>01.08.2022 - 31.08.2022</p>
          </div>
        </div>

        {/* Right side: Icons and User Profile */}
        <div className="flex items-center space-x-5">
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button className={`p-2 rounded-full ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
            <FiBell size={20} />
          </button>

          <div className="flex items-center space-x-3">
            <img
              src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className={`hidden font-semibold sm:block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              Kristi Kamykova
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardNav;