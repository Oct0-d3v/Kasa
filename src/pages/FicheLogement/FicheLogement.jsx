import { Navigate,useParams } from 'react-router-dom'
import Profile from '../../components/Profile/Profile'
import Tag from '../../components/Tag/Tag'
import StarRating from '../../components/StarRating/StarRating'
import Carrousel from '../../components/Carrousel/Carrousel'
import Collapse from '../../components/Collapse/Collapse'

function FicheLogement({ logements }) {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/page-introuvable" replace />
  }

  const equipements = logement.equipments

  return (
    <section>
      <Carrousel images={logement.pictures} />
      <div className="infosLogement">
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
      </div>
      <Profile logement={logement} />
      <Tag tags={logement.tags} />
      <StarRating rating={logement.rating} />
      <Collapse titre="Description">
        {logement.description}
      </Collapse>
      <Collapse titre="Équipements">
        <ul>
          {equipements.map((equipement) => (
            <li key={equipement}>{equipement}</li>
          ))}
        </ul>
      </Collapse>
    </section>
  )
}

export default FicheLogement