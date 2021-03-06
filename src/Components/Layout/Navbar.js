import Logo from "../images/logo.png";
import "../Css/Navbar.css";

export default function Navbar(params) {
  function handleClick(e) {
    e.preventDefault();
    console.log("this is", this);
    window.confirm(
      "In Progress. You Can cutomize as per you need. My github Name: RaviSaxena23"
    );
  }
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
        <a
          class="navbar-brand d-xs-block d-sm-block d-md-none"
          href="#"
          onClick={handleClick}
        >
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
          onClick={handleClick}
        >
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.42344 0.656001C2.53571 0.495503 2.71924 0.399902 2.9151 0.399902H10.5818C10.7776 0.399902 10.9612 0.495503 11.0734 0.656001L12.9901 3.39619C13.0606 3.497 13.0984 3.61706 13.0984 3.74009V13.3307C13.0984 13.8403 12.9101 14.3366 12.563 14.7088C12.2146 15.0823 11.7327 15.3008 11.2207 15.3008H2.27622C1.20333 15.3008 0.398438 14.3756 0.398438 13.3307V3.74009C0.398438 3.61706 0.436258 3.497 0.506775 3.39619L2.42344 0.656001ZM3.22763 1.5999L2.15033 3.14009H11.3465L10.2692 1.5999H3.22763ZM11.8984 4.34009H1.59844V13.3307C1.59844 13.793 1.94354 14.1008 2.27622 14.1008H11.2207C11.3864 14.1008 11.5545 14.0306 11.6854 13.8903C11.8176 13.7486 11.8984 13.548 11.8984 13.3307V4.34009ZM4.19288 5.88027C4.52425 5.88027 4.79288 6.1489 4.79288 6.48027C4.79288 7.06087 5.00837 7.60999 5.38018 8.00865C5.75066 8.4059 6.24383 8.62046 6.74844 8.62046C7.25304 8.62046 7.74621 8.4059 8.1167 8.00865C8.4885 7.60999 8.70399 7.06087 8.70399 6.48027C8.70399 6.1489 8.97262 5.88027 9.30399 5.88027C9.63536 5.88027 9.90399 6.1489 9.90399 6.48027C9.90399 7.35316 9.58099 8.198 8.99428 8.8271C8.40624 9.45762 7.59938 9.82046 6.74844 9.82046C5.89749 9.82046 5.09063 9.45762 4.5026 8.8271C3.91588 8.198 3.59288 7.35316 3.59288 6.48027C3.59288 6.1489 3.86151 5.88027 4.19288 5.88027Z"
              fill="white"
            />
          </svg>
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
            <a href="#" class="search__button" onClick={handleClick}>
              <i class="fas fa-search"></i>
            </a>
          </div>
          <div class="navbar-nav">
            <a
              class="nav-link"
              href="#"
              style={{ color: "#fafafa" }}
              onClick={handleClick}
            >
              Help
            </a>
            <a
              class="nav-link"
              href="#"
              style={{ color: "#fafafa" }}
              onClick={handleClick}
            >
              Account
            </a>
          </div>
        </div>
        {/* large screen bucket */}
        <a
          class="nav-link d-none d-sm-none d-md-block"
          href="#"
          style={{ color: "#fafafa", marginRight: "54px" }}
          onClick={handleClick}
        >
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.42344 0.656001C2.53571 0.495503 2.71924 0.399902 2.9151 0.399902H10.5818C10.7776 0.399902 10.9612 0.495503 11.0734 0.656001L12.9901 3.39619C13.0606 3.497 13.0984 3.61706 13.0984 3.74009V13.3307C13.0984 13.8403 12.9101 14.3366 12.563 14.7088C12.2146 15.0823 11.7327 15.3008 11.2207 15.3008H2.27622C1.20333 15.3008 0.398438 14.3756 0.398438 13.3307V3.74009C0.398438 3.61706 0.436258 3.497 0.506775 3.39619L2.42344 0.656001ZM3.22763 1.5999L2.15033 3.14009H11.3465L10.2692 1.5999H3.22763ZM11.8984 4.34009H1.59844V13.3307C1.59844 13.793 1.94354 14.1008 2.27622 14.1008H11.2207C11.3864 14.1008 11.5545 14.0306 11.6854 13.8903C11.8176 13.7486 11.8984 13.548 11.8984 13.3307V4.34009ZM4.19288 5.88027C4.52425 5.88027 4.79288 6.1489 4.79288 6.48027C4.79288 7.06087 5.00837 7.60999 5.38018 8.00865C5.75066 8.4059 6.24383 8.62046 6.74844 8.62046C7.25304 8.62046 7.74621 8.4059 8.1167 8.00865C8.4885 7.60999 8.70399 7.06087 8.70399 6.48027C8.70399 6.1489 8.97262 5.88027 9.30399 5.88027C9.63536 5.88027 9.90399 6.1489 9.90399 6.48027C9.90399 7.35316 9.58099 8.198 8.99428 8.8271C8.40624 9.45762 7.59938 9.82046 6.74844 9.82046C5.89749 9.82046 5.09063 9.45762 4.5026 8.8271C3.91588 8.198 3.59288 7.35316 3.59288 6.48027C3.59288 6.1489 3.86151 5.88027 4.19288 5.88027Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
