import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from "./Die.jsx"
import Confetti from "react-confetti"

export default function App() {
    const [dice, setDice] = useState(() => generateAllNewDice())

    const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

    function generateAllNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    function rollDice() {
        if (gameWon) {
            setDice(() => generateAllNewDice())
            return
        }
        setDice(prevDice => {
            return prevDice.map(die => {
                return die.isHeld === true ? 
                die : {...die, value: Math.ceil(Math.random() * 6)}
            })
        })
    }

    function hold(id) {
        setDice(prevDice => {
            return prevDice.map(die => {
                return die.id === id ? 
                {...die, isHeld: !die.isHeld} : die
            })
        })
    }

    const diceElements = dice.map(dieObj => (
        <Die 
            key={dieObj.id} 
            value={dieObj.value} 
            isHeld={dieObj.isHeld}
            hold={(() => hold(dieObj.id))}
        />)
    )

    return (
        <main>
            {gameWon && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}