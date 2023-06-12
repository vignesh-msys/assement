import React, { useEffect, useState } from "react";
import Input from "../../components/input/Input";
import "./Login.css";

function Login() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [submited, setSubmitted] = useState(false);

  useEffect(() => {
    if (submited === true) {
      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
    }
  }, [submited]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert("sign in success");
  };

  return (
    <div className="loginFormContainer">
      <form onSubmitCapture={handleSubmit} className="loginForm">
        <h3>Create Account</h3>
        <Input
          changeHandler={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeHolder={"Name"}
          required={true}
        />
        {submited && !name && <span className="error">* Name is Required</span>}
        <Input
          changeHandler={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeHolder={"Email"}
          required={true}
        />
        {submited && !email && (
          <span className="error">* Email is Required</span>
        )}
        <Input
          changeHandler={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeHolder={"Password"}
          required={true}
        />
        {submited && !password && (
          <span className="error">* Password is Required</span>
        )}
        <div className="btnContainer">
          <button
            onClick={() => setSubmitted(true)}
            type="submit"
            className="signUp"
          >
            SIGN UP
          </button>
          <button type="button" className="signIn">
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
