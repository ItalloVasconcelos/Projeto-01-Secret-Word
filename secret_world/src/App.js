import { useCallback, useEffect, useState } from 'react';

import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import End from './components/end/End';

import './App.css';

// Data
import { wordsList } from './data/words'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] =  useState([]) 

  const [guessedLetter, setGuessedLetter] = useState([])
  const [wrongLetter, setWrongLetter] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  
  
  const pickedWordAndCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category = 
    categories[Math.floor(Math.random() * Object.keys(categories).length)]

    

    const word = 
    words[category][Math.floor(Math.random() * words[category].length)]
    

    return { category, word }
  }, [words]);

  const startGame = useCallback(() => {
    
    clearLetterStates();
    
    const { category, word } = pickedWordAndCategory();

    let wordLetters = word?.split("");

    wordLetters = wordLetters?.map((l) => l.toLowerCase())

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters)
     
    
    setGameStage(stages[1].name);

  }, [pickedWordAndCategory])
  
  const verifyLetters = (letter) => {
   
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetter?.includes(normalizedLetter) || 
      wrongLetter?.includes(normalizedLetter)
    ) {

      return
    }
    
    if(letters?.includes(normalizedLetter)) {
      setGuessedLetter((actualGuessedLetter) => [
        ...actualGuessedLetter, 
        letter
      ])
    } else {
      setWrongLetter((actualWrongLetter) => [
        ...actualWrongLetter, 
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)

    }
  }
  

  const restartGame = () => {
    setScore(0)
    setGuesses(3)
    setGameStage(stages[0].name)
  }

  const clearLetterStates = () => {
    setGuessedLetter([])
    setWrongLetter([])
  }

  useEffect(() => {
    if( guesses === 0 ) {
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetter = [...new Set(letters)]
    

    if(guessedLetter.length === uniqueLetter.length) {
      setScore((actualScore ) => (actualScore += 100))
      startGame()
    }

  }, [guessedLetter, letters, startGame])

  return (
    <div className="App">
      {gameStage === 'start' && <Home startGame={startGame} />}
      {gameStage === 'game' && <Dashboard 
      verifyLetters={verifyLetters} 
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory} 
      letters={letters} 
      guessedLetter={guessedLetter} 
      wrongLetter={wrongLetter} 
      guesses={guesses} 
      score={score}/>
      }

      {gameStage === 'end' && <End restartGame={restartGame} score={score}/>}

      
    </div>
  );
}

export default App;
