import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useEffect, useState } from 'react';
import { usersApi } from '../../api/users';
import { User } from '../../types/User';
import UserCard from '../../components/UserCard/UserCard';

function Login() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState<User[]>([]);

  function handleLogin(user: string) {
    console.log(`Logging in as ${user}`);
    navigate('/dashboard');
  }

  const refreshUser = (userId: number) => {
    usersApi.findById(userId).then((updatedUser) => {
        setUserList(prev => prev.map(u => u.id === userId ? updatedUser : u));
    });
};

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
            return <UserCard key={index} user={user} onUserUpdated={refreshUser} />
          })
        }
      </div>
    </div>
  );
}

export default Login;
