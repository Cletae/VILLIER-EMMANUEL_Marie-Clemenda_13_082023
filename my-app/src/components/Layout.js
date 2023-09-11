import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { ArgentBankLogo } from "./Images";
import { logOut } from "../app/LogSlice";
import { useFirstNameAndLastName, useIsLogged } from "../app/Service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";

const Layout = (props) => {
  const isLogged = useIsLogged();
  const dispatch = useDispatch();
  const name = useFirstNameAndLastName();
  return (
    <div>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
        </Link>
        {isLogged() ? (
          <span>
            <Link to="/profil" className="main-nav-item">
              <FontAwesomeIcon icon={faCircleUser} />
              {name.firstName}
            </Link>
            <Link
              to="/"
              className="main-nav-item"
              onClick={() => dispatch(logOut())}
            >
              <FontAwesomeIcon icon={faSignOut} />
              Sign out
            </Link>
          </span>
        ) : (
          <Link to="/login" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        )}
      </nav>
      <Outlet />
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default Layout;
