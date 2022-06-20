import { useRef, useState } from "react"

import Button from "../button/Button"
import './Dashboard.css'

const Dashboard = ({
    verifyLetters, 
    pickedCategory,
    letters,
    guessedLetter,
    wrongLetter,
    guesses,
    score,

}) => {
    
   const [letter, setLetter] = useState("")
   const letterInputRef  = useRef(null)

   const handleSumit = (e) => {
    e.preventDefault()

    verifyLetters(letter)

    setLetter("")

    letterInputRef.current.focus()
}

return (
    <div className="dashboard">

            <div className="header">
            <h1> Adivinhe a palavra </h1>
            </div>
            <h3 className="tips">
             Dica sobre a palavras: <span> {pickedCategory} </span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s).</p>
           <div className="points">
               <span> Sua pontuação: {score}</span> 
           </div>

            <div className="wordContainer">
               {letters.map((letter, i) => 
                guessedLetter.includes(letter) ? (
                    <span key={i} className="letter">
                        {letter}
                    </span>

                ) : (
                    <span  key ={i}className="blankSquare"></span>
                )
               )}
            </div>
                        
            
            <div className="letterContainer">
            <p> Tente adivinhar uma letra da palavra: </p>
            <form onSubmit={handleSumit}>
            <input 
            type="text" 
            name="letter"  
            maxLength="1"
            required 
            onChange={(e) => setLetter(e.target.value)} 
            value={letter} 
            ref={letterInputRef}
            />
            <Button nome="JOGAR!" /> 
            </form>
            </div>
            <div className="wrongLetterContainer">
            <p>Letras utilizadas: </p>
            {wrongLetter?.map((letter, i) =>  (
                <span key={i}> {letter}, </span>
            ))}
            </div>
            
        </div>
    )
}
export default Dashboard