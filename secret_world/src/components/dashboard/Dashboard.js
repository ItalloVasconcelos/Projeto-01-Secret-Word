import { useRef, useState } from "react"
import Button from "../button/Button"
import './Dashboard.css'

const Dashboard = ({
    verifyLetters, 
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetter,
    guesses,
    score,

}) => {
    
   const [letter, setLetter] = useState("")
   const letterInputRef  = useRef()
   const handleSumit = (e) => {
    e.preventDefault()

    verifyLetters(letter)
    setLetter("")
    letterInputRef.current.focus()

   }
    return (
        <div className="dashboard">
           <div className="points">
               <span>Pontuação: {score}</span>
           </div>
            <div className="header">
            <h1>Adivinhe a Palavra: </h1>
            </div>
            <h1 className="tips">
             Dica sobre a palavras: <span>{pickedCategory} </span>
            </h1>
            <div className="wordContainer">
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (
                        <span key={i} className="letter">{letter}</span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                )) }
            </div>
            <p>Você ainda tem {guesses} tentativa(s).</p>
            
            <div className="letterContainer">
            <p>Tente adivinhar uma letra da palavra: </p>
            <form onSubmit={handleSumit}>
            <input type="text" name="letter"  maxLength={1} required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
            <Button nome="JOGAR!" /> 
            </form>
            </div>
            <div className="wrongLetterContainer">
            <p>Letras utilizadas: </p>
            {wrongLetter.map((letter, i) =>  (
                <span key={i}> {letter}, </span>
            ))}
            </div>
            <Button funcao={verifyLetters} nome="Finalize o jogo!" /> 
        </div>
    )
}
export default Dashboard