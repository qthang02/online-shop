import React, { useState } from "react";
import axios from 'axios';
import "./Login.css";
import useAuthStore from "../Store/AuthStore";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5197/api/Account/login', {
        username,
        password
      });

      console.log('Đăng nhập thành công!', response.data);
      if (response && response.data && response.data.token) {
        const jwtToken = response.data.token;

        // store in useAuthStore
        useAuthStore.setState({
          jwtToken
        });

        console.log('Đăng nhập thành công!', jwtToken);
      }

    } catch (error) {
      console.error('Đăng nhập thất bại!', error);
    }
  };

    return (
        <div className="container">
            <div className="login">
                <div className="login-title">
                    <span className="title">
                        Login
                    </span>
                </div>
                <div className="login-content">
                    <input 
                        className="login-input" 
                        value={username} 
                        type="text" 
                        onChange={(e) => setUsername(e.target.value)}  
                        placeholder="Username" 
                    />

                    <input 
                        className="login-input" 
                        value={password} 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                    />

                    <button className="login-button" onClick={handleLogin}>Login</button>
                </div>
                <div className="login-footer">
                    <span className="footer">
                        Don't have an account? <a className="text-register" href="/register">Register</a>
                    </span>
                </div>
            
            </div>
        </div>
    )
}

export default Login;  