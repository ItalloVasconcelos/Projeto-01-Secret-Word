import './Home.css'
import Button from "../button/Button"

const Home = ({startGame}) => {
   
    return (
        <div className='container'>
            <h1>Secret Word</h1>
            <p>Clique no botão para começar a jogar</p>
            <Button funcao={startGame} nome="COMEÇAR JOGO" /> 
        </div>
    )
}
export default Home