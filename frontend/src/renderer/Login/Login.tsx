import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useEffect, useState } from 'react';
import { usersApi } from '../../api/users';
import { User } from '../../types/User';
import { getAvatarUrl } from '../../utils/getAvatarUrl';

function Login() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState<User[]>([]);

  function handleLogin(user: string) {
    console.log(`Logging in as ${user}`);
    navigate('/dashboard');
  }

  useEffect(() => {
    usersApi.findAll().then((users) => {
      setUserList(users);
    });
  }, [])

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
        <button type="button">Group</button>
        <button type="button">Language</button>
        <button type="button">Theme</button>
        <button type="button">Settings</button>
      </div>

      <div className="logo">
        <h1>Filmark</h1>
      </div>

      <div className="users">
        {
          userList.map((user, index) => {
            return <div className="user-card" key={index}>
              <h2>{user.username}</h2>
              <div
                className="user-picture"
                onClick={() => handleLogin(user.username)}
              >
                <img alt="user avatar" src={getAvatarUrl(user)} />
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default Login;
