
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Helmet } from 'react-helmet';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Helmet>
          <title>Dashboard Analisis Penjualan</title>
        </Helmet>
        <DashboardLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App
