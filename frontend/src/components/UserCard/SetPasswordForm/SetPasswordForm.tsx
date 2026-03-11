import { CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './SetPasswordForm.css'
import { User } from "../../../types/User";
import { authApi } from "../../../api/auth";
import toast from "react-hot-toast";

interface SetPasswordFormProps {
    user: User;
    onUserUpdated: (userId: number) => void;
}

const SetPasswordForm = ({ user, onUserUpdated }: SetPasswordFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isErrorPassword, setIsErrorPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSetupPassword = () => {
        const arePasswordsMatching = password === confirmPassword;
        if (!password || !confirmPassword) {
            setErrorMessage("Please fill the inputs.");
            setIsErrorPassword(true);
            return;
        }

        if (arePasswordsMatching === false) {
            setErrorMessage("Passwords don't match.");
            setIsErrorPassword(true);
            return;
        }

        setIsLoading(true);
        authApi.setupPassword(user.id, password)
            .then(() => { onUserUpdated(user.id); toast.success('Password set!') })
            .catch((err) => {
                setErrorMessage(err.response.data.message);
                setIsErrorPassword(true);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="set-password-container">
            <h2 id="set-password-title">Set your password</h2>
            <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    error={isErrorPassword}
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    color="primary"
                    onSubmit={handleSetupPassword}
                    onChange={(e) => setPassword(e.target.value)}
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

            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    error={isErrorPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                    showConfirmPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                            >
                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Confirm Password"
                />
            </FormControl>

            <button className="user-submit-btn" onClick={handleSetupPassword} disabled={isLoading}>
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

export default SetPasswordForm