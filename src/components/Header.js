import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <a href="#homeSection" className="nav-link">
        Home
      </a>
      <a href="#aboutSection" className="nav-link">
        About
      </a>
      <a href="#projectsSection" className="nav-link">
        Projects
      </a>
      <a href="#contactSection" className="nav-link">
        Contact
      </a>
    </nav>
  );
};
export default Header;
