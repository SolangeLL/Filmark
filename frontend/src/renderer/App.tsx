import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import './Theme.css';
import Login from './Login/Login';
import AppLayout from '../components/AppLayout/AppLayout';
import Films from './Films/Films';
import Series from './Series/Series';
import Dashboard from './Dashboard/Dashboard';
import Settings from './Settings/Settings';
import Profil from './Profil/Profil';

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" gutter={5} />
      <Routes>
        <Route path="*" element={<Login />} />

        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/films" element={<Films />} />
          <Route path="/series" element={<Series />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profil" element={<Profil />} />
        </Route>
      </Routes>
    </Router>
  );
}
