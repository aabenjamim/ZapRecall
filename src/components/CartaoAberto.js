import seta_virar from "../assets/img/seta_virar.png"

export default function CartaoAberto(props){
    const {pergunta} = props

    return(
        <>
        <p>{pergunta.question}</p>
        <img src={seta_virar}/>
        </>
    )
}
