import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <nav class="navbar navbar-expand-lg navbar-light  bg-light">
          <div
            className="container-fluid port position-fixed
         "
          >
            <a class="navbar-brand text-white ">
              <b>Subhasis Routray</b>
            </a>
            <pre> </pre>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
                <Link to="#about" class="nav-link text-white">
                  About
                </Link>
                <Link to="#skill" class="nav-link  text-white">
                  Skills
                </Link>
                <Link id="#project" class="nav-link  text-white">
                  Projects
                </Link>
                <Link id="#contact" class="nav-link text-white">
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
