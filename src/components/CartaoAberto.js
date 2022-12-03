import Tras from "./Tras"
import Frente from "./Frente"
import {useState} from 'react'

export default function CartaoAberto(props){
    const {pergunta, listaBotoes, lembrar} = props

    const [verResposta, setVerResposta] = useState([])


    function virar(pergunta){
        setVerResposta([...verResposta, pergunta.answer])
    }

    return(
        <>
        {
        verResposta.includes(pergunta.answer)? 
        <Frente pergunta={pergunta} listaBotoes={listaBotoes} lembrar={lembrar}/> : 
        <Tras pergunta={pergunta} verResposta={verResposta} setVerResposta={setVerResposta}
        virar={virar}/> 
        }
        </>
    )
}