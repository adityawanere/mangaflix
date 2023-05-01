import { useState, useRef } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleRegistartionStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleRegistartionFinish = () => {
    setPassword(emailRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://fontmeme.com/permalink/230209/6539752a87f7c8e7fa2fe99006fcf8af.png"
            alt="Mangaflix"
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button
              className="registerButton"
              onClick={handleRegistartionStart}
            >
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            {" "}
            <input type="password" placeholder="password" ref={passwordRef} />
            <button
              className="registerButton"
              onClick={handleRegistartionFinish}
            >
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
