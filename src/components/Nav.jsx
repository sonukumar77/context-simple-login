import { useContext } from "react";
import { myContext } from "./context";
import "./Nav.css";
const Nav = () => {
  const { setIsLoggedIn, name } = useContext(myContext);
  return (
    <div className="navContainer">
      <div className="nav-left">
        <h1>Logo</h1>
      </div>
      <div className="nav-right">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li onClick={() => setIsLoggedIn(false)}>Logout</li>
          <li style={{ color: "yellow" }}>{name}</li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
