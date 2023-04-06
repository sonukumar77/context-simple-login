import { useContext } from "react";
import { myContext } from "./components/context";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import "./styles.css";

export default function App() {
  const { isLoggedIn } = useContext(myContext);
  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Nav />
          <Home />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
