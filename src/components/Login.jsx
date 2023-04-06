import { useContext, useState } from "react";
import { myContext } from "./context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn, setName } = useContext(myContext);

  const style = {
    width: "300px",
    height: "300px",
    boxShadow: "0 0 10px black",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  };

  const handleAuth = () => {
    if (
      (username === "sonu" && password === "sonu") ||
      (username === "admin" && password === "admin")
    ) {
      setIsLoggedIn(true);
      setName(username);
    }
  };
  return (
    <div
      className="loginContainer"
      style={{ display: "flex", justifyContent: "center", marginTop: "120px" }}
    >
      <div style={style}>
        <h1 style={{ textAlign: "center" }}>Login </h1>
        <small>Email: admin</small>
        <small>Password: admin</small>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleAuth}>Login</button>
      </div>
    </div>
  );
};
export default Login;
