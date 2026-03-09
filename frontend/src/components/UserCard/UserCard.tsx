import { useState } from 'react';
import './UserCard.css'
import { User } from '../../types/User';
import { getAvatarUrl } from '../../utils/getAvatarUrl';
import SetPasswordForm from './SetPasswordForm/SetPasswordForm';
import LoginForm from './LoginForm/LoginForm';

interface UserCardProps {
    user: User;
    onUserUpdated: (userId: number) => void;
    onLogin: (userId: number) => void;
}

const UserCard = ({user, onUserUpdated, onLogin}: UserCardProps) => {
    const [isSelected, setSelected] = useState(false);

    function handleLogin(username: string) {
        console.log("coucou");
        setSelected(!isSelected);
    }

    return (
        <div className='user-card-container'>
            <div className="user-card">
                <h2>{user.username}</h2>
                <div
                    className={`user-picture ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleLogin(user.username)}
                >
                    <img alt="user avatar" src={getAvatarUrl(user)} />
                </div>
            </div>

            <div className={`login-fields ${isSelected ? 'visible' : ''}`}>
                {
                    user.isPasswordSet
                        ? <LoginForm key={isSelected ? 'login-open' : 'login-closed'} user={user} onLogin={onLogin} />
                        : <SetPasswordForm key={isSelected ? 'pwd-open' : 'pwd-closed'} user={user} onUserUpdated={onUserUpdated}/>
                }
            </div>
        </div>
    );
};

export default UserCard;