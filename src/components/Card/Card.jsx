import { Link } from 'react-router-dom'

function Card({ logements }) {


  return (
    <div className="gallery">
      {logements.slice(0, 6).map((logement) => (
        <Link to={`/fiche-logement/${logement.id}`} key={logement.id}>
          <article className="card" >
            <img src={logement.cover} alt={logement.title} />
            <h3>{logement.title}</h3>
          </article>
        </Link>
      ))}   
 </div >
  )
}

export default Card