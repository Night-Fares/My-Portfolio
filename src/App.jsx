import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import Technology from "./Components/Technology"
import img from "./assets/image1.png"
import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"
const data = [
  {
    title: "PROJECT 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: img,
  },
  {
    title: "PROJECT 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: img,
  },
]
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <section className="introduction">
          <h1 className="title">Lorem ipsum dolor sit amet</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button className="btn">Let’s begin</button>
        </section>
        <section className="projects">
          <h1 className="title">Projects</h1>
          <div className="project-cards">
            {data.map((card) => (
              <Card {...card} />
            ))}
          </div>
        </section>
        <section>
          <h1 className="title">Technologies</h1>
          <div className="technologies">
            <Technology name={"HTML"} level={"Advanced"} />
            <Technology name={"CSS"} level={"Advanced"} />
            <Technology name={"Javascript"} level={"Advanced"} />
            <Technology name={"React"} level={"Intermediate"} />
          </div>
          <div className="additional-technologies">
            <h2>Additional Technologies</h2>
            <ul className="techno-list">
              <li>Quick Learning</li>
              <li>Git</li>
              <li>Github</li>
              <li>Teamwork</li>
              <li>Engagement</li>
              <li>English</li>
            </ul>
          </div>
        </section>
        <section className="about">
          <h1>About me</h1>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              sint natus blanditiis placeat iste accusantium iure neque
              asperiores consequuntur ipsam, accusamus fugiat omnis, mollitia
              alias hic similique, eius saepe. Consequatur!
            </p>
          </div>
        </section>
        <footer className="footer">
          <div>
            <p>Call me:</p>
            <p>123-456</p>
          </div>
          <div>
            <p>Email</p>
            <p>someone@something.com</p>
          </div>
          <div className="icons">
            <a href="#">
              <img src={github} alt="github" className="icon" />
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" className="icon" />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
