import { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import End from './components/end/End';
import Home from './components/home/Home';
// Data
import { wordsList } from './data/words'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [words] = useState(wordsList);
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [lethers, setLethers] =  useState([]) 
  
  const pickedWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)

    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return [word, category]
  }

  const startGame = () => {
    
    pickedWordAndCategory()
    
    setGameStage(stages[1].name);

  }
  
  const verifyLetters = () => {
    setGameStage(stages[2].name)
  }

  const restartGame = () => {
    setGameStage(stages[0].name)
  }
  return (
    <div className="App">
      {gameStage === 'start' && <Home startGame={startGame} />}
      {gameStage === 'game' && <Dashboard verifyLetters={verifyLetters} />}
      {gameStage === 'end' && <End restartGame={restartGame}/>}

    </div>
  );
}

export default App;
