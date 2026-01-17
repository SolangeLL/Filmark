import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
