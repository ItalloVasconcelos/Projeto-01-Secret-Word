import './Button.css'
const Button = ({ nome, funcao }) => {
    return (
        <button onClick={funcao}>{nome}</button>
    )
}
export default Button