import Button from "../button/Button"

const End = ({restartGame, score}) => {

    return(
        <div>
            <h1>Fim de jogo!</h1>
            <h2>Sua pontuação foi: <span>{score}</span> !</h2>
            <Button funcao={restartGame} nome="Reiniciar"/>
        </div>
    )
}
export default End

