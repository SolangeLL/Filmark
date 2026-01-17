import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import './Theme.css';
import Login from './Login/Login';
import AppLayout from '../components/AppLayout/AppLayout';
import Films from './Films/Films';
import Series from './Series/Series';
import Dashboard from './Dashboard/Dashboard';

function Hello() {
  return (
    <div className="test">
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
        <Link to="/login">
          <button type="button">
            <span role="img" aria-label="login">
              🔐
            </span>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/login" element={<Login />} />

        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/films" element={<Films />} />
          <Route path="/series" element={<Series />} />
        </Route>
      </Routes>
    </Router>
  );
}
