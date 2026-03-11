import { CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './LoginForm.css'
import { User } from "../../../types/User";
import { authApi } from "../../../api/auth";
import toast from "react-hot-toast";

interface LoginFormProps {
    user: User;
    onLogin: (userId: number) => void;
}

const LoginForm = ({ user, onLogin }: LoginFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [isErrorPassword, setIsErrorPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        if (!password) {
            setErrorMessage('Please fill the input field.');
            setIsErrorPassword(true);
            return;
        }

        setIsLoading(true);
        authApi.login(user.email, password)
            .then(() => { onLogin(user.id); toast.success('Login successful!') })
            .catch((err) => {
                setErrorMessage(err.response.data.message);
                setIsErrorPassword(true);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="login-form-container">
            <h2 id="login-form-title">Enter your password</h2>
            <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    error={isErrorPassword}
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    color="primary"
                    style={{ marginBottom: '0.3rem' }}
                    onChange={(e) => setPassword(e.target.value)}
                    onSubmit={handleLogin}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                    showPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>

            <button className="user-submit-btn" onClick={handleLogin} disabled={isLoading}>
                {isLoading ? <CircularProgress size={20} color="inherit" /> : 'Submit'}
            </button>

            {
                isErrorPassword
                    ? <p style={{ color: 'red' }}>{errorMessage}</p>
                    : <></>
            }
        </div>
    )
}

export default LoginForm