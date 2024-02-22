import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import img from "./assets/image1.png"
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
      </div>
    </>
  )
}

export default App
