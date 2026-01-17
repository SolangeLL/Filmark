import { Link, useNavigate } from 'react-router-dom';
import ValentineIcon from '../../../assets/avatars/valentine.png';
import SolangeIcon from '../../../assets/avatars/solange.png';

import './Login.css';

function Login() {
  const navigate = useNavigate();

  function handleLogin(user: string) {
    console.log(`Logging in as ${user}`);
    navigate('/dashboard');
  }

  return (
    <div className="login-page">
      <div className="tools">
        <Link to="/">
          <button type="button">
            <span role="img" aria-label="Hello">
              🔐
            </span>
            Login
          </button>
        </Link>
        <button type="button">Language</button>
        <button type="button">Theme</button>
        <button type="button">Settings</button>
      </div>

      <div className="logo">
        <h1>Filmark</h1>
      </div>

      <div className="users">
        <div className="user-card">
          <h2>Valentine</h2>
          <div
            className="user-picture"
            onClick={() => handleLogin('Valentine')}
          >
            <img alt="user avatar" src={ValentineIcon} />
          </div>
        </div>

        <div className="user-card">
          <h2>Solange</h2>
          <div className="user-picture" onClick={() => handleLogin('Solange')}>
            <img alt="user avatar" src={SolangeIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
