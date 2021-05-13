import Logo from "../images/logo.png";
import "../Css/Navbar.css";


export default function Navbar(params) {
  return (
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        {/* large screen */}
        <a class="navbar-brand d-none d-sm-none d-md-block" href="#">
          <img
            src={Logo}
            alt="Logo"
            width="86"
            height="44"
            style={{ marginLeft: "150px" }}
          ></img>
        </a>

        {/* mobile screen */}
        <a class="navbar-brand d-xs-block d-sm-block d-md-none" href="#">
          <img src={Logo} alt="Logo" width="86" height="44"></img>
        </a>
        <div class="search d-xs-block d-sm-block d-md-none">
          <input
            class="search__text me-2"
            type="text"
            name=""
            placeholder="Type to search for something"
          />
          <a href="#" class="search__button">
            <i class="fas fa-search"></i>
          </a>
        </div>
        <a
          class="nav-link d-xs-block d-sm-block d-md-none"
          href="#"
          style={{ color: "#fafafa" }}
        >
          <i class="fas fa-box-open"></i>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i class="fas fa-bars" style={{ color: "#fafafa" }}></i>
          </span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          style={{ justifyContent: "flex-end" }}
        >
          <div class="search d-none d-sm-none d-md-block">
            <input
              class="search__text me-2"
              type="text"
              name=""
              placeholder="Type to search for something"
            />
            <a href="#" class="search__button">
              <i class="fas fa-search"></i>
            </a>
          </div>
          <div class="navbar-nav">
            <a class="nav-link" href="#" style={{ color: "#fafafa" }}>
              Help
            </a>
            <a class="nav-link" href="#" style={{ color: "#fafafa" }}>
              Account
            </a>
          </div>
        </div>
        {/* large screen bucket */}
        <a
          class="nav-link d-none d-sm-none d-md-block"
          href="#"
          style={{ color: "#fafafa", marginRight: "54px" }}
        >
          <i class="fas fa-box-open"></i>
        </a>
      </div>
    </nav>
  );
}
