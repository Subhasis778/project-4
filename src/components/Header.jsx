import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid port">
            <a className="navbar-brand text-white">
              <b>Subhasis Routray</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
                <Link to="#about" className="nav-link text-white">
                  About
                </Link>
                <Link to="#skill" className="nav-link text-white">
                  Skills
                </Link>
                <Link to="#project" className="nav-link text-white">
                  Projects
                </Link>
                <Link to="#contact" className="nav-link text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
