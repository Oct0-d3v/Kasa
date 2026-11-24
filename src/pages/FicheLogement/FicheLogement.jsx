import { Navigate,useParams } from 'react-router-dom'

function FicheLogement({ logements }) {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/page-introuvable" replace />
  }
}

export default FicheLogement