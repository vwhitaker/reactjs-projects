import { languages } from "../languages.js"
import { useState } from 'react'
import { clsx } from 'clsx'
import { getRandomWord, getFarewellText } from "../utils.js"

export default function App() {
    // State values
    const [currentWord, setCurrentWord] = useState(() => getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState([])

    // Derived values
    const wrongGuessCount = 
        guessedLetters.filter(letter => !currentWord.includes(letter)).length
    const isGameWon = 
        currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = 
        wrongGuessCount >= (languages.length - 1)
    const isGameOver = 
        isGameWon || isGameLost
    const isLastGuessCorrect = 
        guessedLetters.length == 0 ?
            true : 
            currentWord.includes(guessedLetters[guessedLetters.length - 1])
     const gameStatusClass = 
        clsx("game-status", 
            isGameWon && "won", 
            isGameLost && "lost", 
            !isGameOver && !isLastGuessCorrect && "farewell")

    // Static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function renderGameStatus() {
        if (isGameOver) {
            return (
            <>
                <h2>
                    {isGameWon && "You win!"}
                    {isGameLost && "Game over!"}
                </h2>
                <p>
                    {isGameWon && "Well done!🎉"}
                    {isGameLost && "You lose! Better start learning Assembly 😭"}
                </p>
            </>
            )
        } else if (!isLastGuessCorrect) {
            if (wrongGuessCount > 0) {
                const farewellText = getFarewellText(languages[wrongGuessCount - 1].name)
                return (
                    <p className="farewell-message">
                        {farewellText}
                    </p>
                )
            }
        }
    }

    const languageChips = languages.map((language, index) => {
        const isLost = index < wrongGuessCount

        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color,
        }
        return (
            <span 
                className={clsx("chip", isLost && "lost")}
                style={styles}
                key={language.name}
            >{language.name}</span>
        )
    })

    const letterElements = currentWord.split("").map((letter, index) => {
        const isLetterGuessed = guessedLetters.includes(letter)
        return (
            <span key={index}
                className={isGameLost && !isLetterGuessed ? "missed-letter" : ""}
            >{
                isLetterGuessed || isGameLost ? 
                    letter.toUpperCase() : ''
            }</span>
        )
    })

    const keyboardElements = alphabet.split("").map(letter => {
        const guessed = guessedLetters.includes(letter)
        const includes = currentWord.includes(letter)
        const className = clsx(guessed && includes && 'correct', guessed && !includes && 'wrong')
        return (
            <button 
                key={letter} 
                className={className}
                onClick={() => guessLetter(letter)}
            >{letter.toUpperCase()}</button>
        )
    })

    function guessLetter(letter) {
        setGuessedLetters(prevLetters => 
            prevLetters.includes(letter) ? 
                prevLetters : 
                [...prevLetters, letter]
        )
    }

    function startNewGame() {
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
    }

    return (
        <main>
            <header>
                <h1>Hangman</h1>
                <p>Guess the word in under 8 attempts to keep the programming world safe from assembly</p>
            </header>
            <section className={gameStatusClass}>
                {renderGameStatus()}
            </section>
            <section className="language-chips">
                {languageChips}
            </section>
            <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            {isGameOver && <button 
                className="new-game" 
                onClick={startNewGame}>
                    New Game
            </button>}
        </main>
    )
}