import { Link } from 'react-router-dom'

function Card({ logements }) {


  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Link to={`/fiche-logement/${logement.id}`} key={logement.id}>
          <article className="card" >
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
          </article>
        </Link>
      ))}   
 </div >
  )
}

export default Card