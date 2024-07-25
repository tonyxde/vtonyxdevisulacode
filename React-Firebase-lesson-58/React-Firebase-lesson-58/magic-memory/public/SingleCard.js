import './SingleCard.css'

export default function SingleCard ({ card, handleChoise, flipped, disabled }) {

const handleClick = () =>  {
  if (!disabled) {
    handleChoise(card)
  }

}

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img className="front" src={cards.src}  alt="card" from />
              <img
              className="back"
              src="/img/cover.png"
              onClick={handleClick}
              alt="card back"
              />
            </div>
          </div>
    )
}
