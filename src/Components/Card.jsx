function Card({ link, title, description }) {
  return (
    <div className="card">
      <img src={link} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn">Look it up</button>
    </div>
  )
}

export default Card
