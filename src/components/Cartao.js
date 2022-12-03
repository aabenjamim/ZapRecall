import deck from './deck'
import { useState } from "react"
import CartaoInicial from './CartaoInicial'
import CartaoAbertoFrente from './CartaoAbertoFrente'
import CartaoAbertoTras from './CartaoAbertoTras'
import CartaoRiscado from './CartaoRiscado'

export default function Cartao(props){

    const [abrirPergunta, setAbrirPergunta] = useState(false)
    const [aberta, setAberta] = useState([])
    const [fechado, setFechado] = useState([])
    const [textoBotao, setTextoBotao] = useState([])
    const {questao} = props

    console.log(textoBotao)

    return(
        (abrirPergunta? 
        
        (aberta.includes(questao)? 

            ( aberta.includes(questao.answer)? 
            
                (fechado.includes(questao.answer)? 
                <CartaoRiscado questao={questao} setFechado={setFechado} fechado={fechado}/> :
                <CartaoAbertoTras questao={questao} setFechado={setFechado} fechado={fechado}
                textoBotao={textoBotao} setTextoBotao={setTextoBotao}/>) :
            
            <CartaoAbertoFrente questao={questao} aberta={aberta} setAberta={setAberta}/>) :

        <CartaoRiscado questao={questao} setFechado={setFechado} fechado={fechado} 
        textoBotao={textoBotao}/>
        ) : 

        <CartaoInicial questao={questao} setAbrirPergunta={setAbrirPergunta}
        aberta={aberta} setAberta={setAberta}/>)
        
    )
}