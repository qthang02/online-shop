import "./Login.css";

const Login = () => {
    return (
        <div className="container">
            <div className="login">
                <div className="login-title">
                    <span className="title">
                        Login
                    </span>
                </div>
                <div className="login-content">
                    <input className="login-input" type="text" placeholder="Username" />
                    <input className="login-input" type="text" placeholder="Password" />
                    <button className="login-button">Login</button>
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