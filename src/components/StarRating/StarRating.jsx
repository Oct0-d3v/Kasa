import './StarRating.scss'

function Starrating({ rating }) {
  const note = Number(rating)

  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < note ? 'star starFilled' : 'star'}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default Starrating