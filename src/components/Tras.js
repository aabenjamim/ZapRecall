import seta_virar from "../assets/img/seta_virar.png"

export default function Tras(props){

    const {pergunta, virar} = props

    return(
        <>
        <p>{pergunta.question}</p>
        <img src={seta_virar} onClick={()=>virar(pergunta)} />
        </>
    )
}