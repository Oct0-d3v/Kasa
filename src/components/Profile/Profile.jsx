function Profile({ logement }) {
  return (
    <div>
      <p>{logement.host.name}</p>
      <img src={logement.host.picture} alt={logement.host.name} />
    </div>
  )
}

export default Profile