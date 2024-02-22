import logo from "../assets/logo.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
function Navbar() {
  return (
    <div className="navbar">
      <div className="brand">
        <img src={logo} alt="portfolio-logo" className="logo" />
        <p>Portfolio</p>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <a href="#">
          <img src={github} alt="github-link" className="icon" />
        </a>
        <a href="#">
          <img src={linkedin} alt="linkedin-link" className="icon" />
        </a>
      </div>
    </div>
  )
}

export default Navbar
