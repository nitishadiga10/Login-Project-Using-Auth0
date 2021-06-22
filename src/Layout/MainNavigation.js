import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import AuthContext from "../Store/auth-context";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingSpinner from "../LoadSpinner/LoadingSpinner";

const MainNavigation = () => {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } =
    useAuth0();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  const loginLogoutHandler = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      logout({ returnTo: window.location.origin });
    }
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Login App</div>
      </Link>
      <nav>
        <ul>
          {/* {!isAuthenticated && (
            <li>
              <button onClick={loginLogoutHandler}>Login</button>
            </li>
          )} */}
          {isAuthenticated && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {/* {isAuthenticated && ( */}
          <li>
            <button onClick={loginLogoutHandler}>
              {!isAuthenticated ? "Login" : "Logout"}
            </button>
          </li>
          {/* )} */}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
