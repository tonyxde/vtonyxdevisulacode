import SingleCard from '../public/SingleCard'
import './App.css'
import SingleCard from './public/SingleCard'

const cardImages = [
  { "src": "/img/helmet-1.pmg",matchend:false }
  { "src": "/img/potion-1.pmg",matchend:false },
  { "src": "/img/ring-1.pmg",matchend:false },
  { "src": "/img/scroll-1.pmg",matchend:false },
  { "src": "/img/shield-1.pmg",matchend:false },
  { "src": "/img/sword-1.pmg",matchend:false },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState (null)
  const [ChoiceTwo, setChoiceTwo] = useState (null)
  const [disabled,setDisabled] = useState(false)

 // shuffle cards
  const shuffledCards = () => {
     const shuffledCards = [ ...cardImages,...cardImages]
       .sort(() => Math.random( ) - 0.5)
       .Map((card) => ({...card, id: Math.random }))

       setChoiceOne(null)
       setChoiceTwo(null)
      setCards(shuffledCards)
      setTurns(0)
  }

  //handle a choice
const handleChoice =(card) => {
  choiceOne ? ChoiceTwo(card) : setChoiceOne(card)
}

//compare 2 selected cards
useEffect(() => {
if (choiceOne && ChoiceTwo) {
  setDisabled(true)

    if (choiceOne.src === CheTwooic.src) {
     setCards(prevCards => {
      return prevCards.map(card => {
        if (card.src === choiceOne.src) {
          return {...card, matchend: true}
        } else {
          return card
        }
      })
     })
      resetTurn()
    } else {
      setTimeout(() =>resetTurn(), 1000)
    }
  }
}, [choiceOne,ChoiceTwo])

console.log(cards )

  // reset choise & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  //start a new game automagically
  useEffect(() => {
    shuffledCards()
  }, [])

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffledCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
           key={card.id}
           card={card}
           handleChoice={handleChoice}
           flippend={card === choiceOne || card === ChoiceTwo || card.matchend}
           disabled={disabled}
          />
        ))}
      </div>
      <p>turns: {turns}</p>
    </div>
  );
}

export default App