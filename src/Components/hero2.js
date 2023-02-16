import { useState, useEffect } from 'react'
import '../pages/Home.css'
import './iconbar.css'
import './memoryGame/memorygame.css'


//icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import {ReactComponent as FirebaseIcon} from "../assets/firebase.svg"

//component imports
import SingleCard from './memoryGame/SingleCard'

//card images
const  cardImages = [
    { "src": "/memoryGameImg/dva.jpg", matched: false},
    { "src": "/memoryGameImg/genji.jpg", matched: false},
    { "src": "/memoryGameImg/bastion.jpg", matched: false},
    { "src": "/memoryGameImg/ana.jpg", matched: false},
    { "src": "/memoryGameImg/kiriko.jpg", matched: false},
    { "src": "/memoryGameImg/mercy.jpg", matched: false}
  ]


export default function Hero2() {
    const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  //create grid
  useEffect(() => {

        //duplicate cards
        const shuffleCards = [...cardImages, ...cardImages]
         // randomize
        .sort(() => Math.random() - 0.5)
        //add random ID
        .map((card) => ({ ...card, id: Math.random() }))
    
        setCards(shuffleCards)
        setTurns(0)
      

  }, [])


  //shuffle cards
  const shuffleCards = () => {
    //duplicate cards
    const shuffleCards = [...cardImages, ...cardImages]
     // randomize
    .sort(() => Math.random() - 0.5)
    //add random ID
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffleCards)
    setTurns(0)
  }

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //compare cards
  useEffect(() => {
    if (choiceOne && choiceTwo){
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(cards => {
            if (cards.src === choiceOne.src ) {
              return {...cards, matched: true}
            } else {
              return cards
            }
          })
        })            
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }

  }, [choiceOne, choiceTwo])
  
  //reset choice and add turns
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  return (
    <div className="container">
        <div className="row pb-5">
            <div className="col-lg-6 col-12 px-5 px-lg-0 ">
            
                <div className="card-grid">
                    {cards.map(card => (
                    <SingleCard 
                    key={card.id} 
                    card={card} 
                    handleChoice={handleChoice}
                    flipped={card === choiceOne || card === choiceTwo || card.matched}
                    disabled={disabled}
                    />
                    ))}
                </div>
                <h1></h1>
            </div>
            
            <div className="col-lg-6 col-12 my-auto projectText text-lg-start text-center pt-5">
                <div className="ps-0 ps-lg-5">
                    <h3>Overwatch Memory Game</h3>
                    <div className="mt-3">
                    <FontAwesomeIcon className="icon-item me-2" icon={faReact} />
                    <FontAwesomeIcon className="icon-item mx-2" icon={faBootstrap}/>
                    <FirebaseIcon className="external-icon mx-2 icon-item"/>
                    </div>
                    <p className="mt-3"> Simple memory game utilizing <code>useState()</code>  hooks.</p>
                    <p className="text-muted">disclaimer: images used for educational coding purposes only</p>
                    
                    <button onClick={shuffleCards} className="btn btn-md btn-light me-3 greenBtn">new game</button>
                    
                    <a className="btn btn-md btn-outline-light greenBtn"><FontAwesomeIcon className="me-2" icon={faGithub} size="1x"/>repo</a>
                    <p className="pt-3 fw-bold">Track your turns: {turns}</p>
                    
                    
                </div>
            </div>
        </div>
    </div>
)
}
