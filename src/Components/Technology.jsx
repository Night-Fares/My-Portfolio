function Technology({ name, level }) {
  let width = 100
  switch (level) {
    case "Advanced":
      width = 80
      break
    case "Intermediate":
      width = 50
      break
    case "Beginner":
      width = 30
      break
  }
  return (
    <div className="technology">
      <div className="bar-length" style={{ width: `${width}%` }}></div>
      <p className="name">{name}</p>
      <p className="level">{level}</p>
    </div>
  )
}

export default Technology
