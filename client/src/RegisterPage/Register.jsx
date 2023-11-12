import useAuthStore from "../Store/AuthStore";
import "./Register.css";

const Register = () => {

    const jwtToken = useAuthStore((state) => state.jwtToken);

    console.log('JWT Token:', jwtToken);

    return (
        <div className="container">
            <div className="register">
                <div className="register-title">
                    <span className="title">
                        Register
                    </span>
                </div>
                <div className="register-content">
                    <input className="register-input" type="text" placeholder="Your Name" />
                    <input className="register-input" type="text" placeholder="Your Email" />
                    <input className="register-input" type="text" placeholder="Password" />
                    <input className="register-input" type="text" placeholder="Confirm Password" />
                    <button className="register-button">Register</button>
                </div>
                <div className="register-footer">
                    <span className="footer">
                        Already have an account? <a className="text-login" href="/login">Login here</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register;  