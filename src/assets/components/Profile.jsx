import React, { useContext, useState } from 'react';
import { ProfileContext } from '../contexts/ProfileContext'; // Adjust the path

const MyComponent = () => {
    const { user, login, logout, loading, register, forgotPassword, resetPassword, editCurrentUser, fetchAllUsers } = useContext(ProfileContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [token, setToken] = useState('');


    if (loading) {
        return <div>Loading...</div>; // Or a more sophisticated loading spinner
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            alert('Logged in successfully!');
        } catch (error) {
            alert(error.message);
        }
    };

      const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const data = await register({
                firstName: "test",
                lastName: "test",
                email: email,
                password: password
            });
            console.log(data);
            alert('Registered successfully!');
        } catch (error) {
            alert(error.message);
        }
    };

    const handleForgotPassword = async () => {
        try{
            const data = await forgotPassword(email);
            alert(data.message)
        } catch(error){
            alert(error.message)
        }
    }

     const handleResetPassword = async () => {
        try {
            const data = await resetPassword(token, newPassword);
            alert(data.message);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleEditProfile = async() =>{
        try{
            const data = await editCurrentUser({
                firstName: "updatedName",

            })
            console.log(data)
            alert("profile updated")
        }catch(error){
            alert(error.message)
        }
    }

    const handleFetchAllUsers = async() =>{
        try{
            const users = await fetchAllUsers();
            console.log(users)
        }catch(error){
            alert(error.message)
        }
    }

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.firstName}!</p>
                    <button onClick={logout}>Log out</button>
                     <button onClick={handleEditProfile}>Edit Profile</button>
                     <button onClick={handleFetchAllUsers}>Fetch All Users</button>
                </div>
            ) : (
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Log in</button>
                     <button onClick={handleRegister}>Register</button>
                     <button onClick={handleForgotPassword}>Forgot Password</button>
                     <input
                        type="text"
                        placeholder="Token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}

                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}

                    />
                     <button onClick={handleResetPassword}>Reset Password</button>
                </form>
            )}
        </div>
    );
};

export default MyComponent;