import { useState } from "react";
import { useLogin } from "../app/Service";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <h1>Sign In</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="input-checker">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" className="sign-in-button" value="Sign In" />
        </form>
      </section>
    </main>
  );
};

export default Login;
