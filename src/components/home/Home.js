import './Home.css'
import Button from "../button/Button"

const Home = ({startGame}) => {
   
    return (
        <div className='container'>
            <h1>Secret Word</h1>
            <p>Clique no botão para começar a jogar</p>
            <Button funcao={startGame} nome="COMEÇAR JOGO" /> 
            <footer>
                <h2>Feito com 💙 pelo <a target="_blank" rel='noreferrer'
                  href='https://www.linkedin.com/in/itallo-vasconcelos-7441b4158/'> Itallo Vasconcelos👨🏾‍💻</a></h2>
            </footer>
        </div>
    )
}
export default Home