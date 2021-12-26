// Write your code here.
import './index.css'

const TechnologyCards = props => {
  const {cardsListDetails} = props
  const {title, description, imgUrl, className} = cardsListDetails
  return (
    <li className={`${className} card-details`}>
      <h1 className="designation-heading">{title}</h1>
      <p className="designation-details">{description}</p>
      <img src={imgUrl} alt={title} className="set-image" />
    </li>
  )
}

export default TechnologyCards
