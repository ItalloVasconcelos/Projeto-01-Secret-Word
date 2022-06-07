import Button from "../button/Button"
import Form from "../form/Form"
const Dashboard = ({verifyLetters, pickedWordAndCategory}) => {
    
    const handleGame = () => {
        console.log("Game")
    }
    return (
        <>
            {/* <p>Pontuação: {score} {setScore}</p> */}
            <h1>Adivinhe a Palavra: </h1>
            <h3>Dica sobre a palavra: {pickedWordAndCategory} </h3>
            <p>Você ainda tem 3 tentativa(s).</p>
            <Form />
            <p>Tente adivinhar uma letra da palavra: </p>
            <input type="text" />
            <Button funcao={handleGame} nome="JOGAR!" /> 

            <p>Letras utilizadas:  </p>
            <Button funcao={verifyLetters} nome="Finalize o jogo!" /> 
        </>
    )
}
export default Dashboard