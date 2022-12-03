import { useState } from "react"
import CartaoInicial from './CartaoInicial'
import CartaoAbertoFrente from './CartaoAbertoFrente'
import CartaoAbertoTras from './CartaoAbertoTras'
import CartaoRiscado from './CartaoRiscado'
import icone_erro from '../assets/img/icone_erro.png'
import icone_quase from '../assets/img/icone_quase.png'
import icone_certo from '../assets/img/icone_certo.png'


export default function Cartao(props){

    const [abrirPergunta, setAbrirPergunta] = useState(false)
    const [aberta, setAberta] = useState([])
    const [fechado, setFechado] = useState([])
    const [textoBotao, setTextoBotao] = useState([])
    const {questao, contagem, setContagem} = props


    console.log(textoBotao)

    return(
        (abrirPergunta? 
        
        (aberta.includes(questao)? 

            ( aberta.includes(questao.answer)? 
            
                (fechado.includes(questao.answer)? 
                <CartaoRiscado questao={questao} setFechado={setFechado} fechado={fechado}
                textoBotao={textoBotao}/> :
                <CartaoAbertoTras questao={questao} setFechado={setFechado} fechado={fechado}
                textoBotao={textoBotao} setTextoBotao={setTextoBotao}
                contagem={contagem} setContagem={setContagem}/>) :
            
            <CartaoAbertoFrente questao={questao} aberta={aberta} setAberta={setAberta}/>) :
            ''
        ) : 

        <CartaoInicial questao={questao} setAbrirPergunta={setAbrirPergunta}
        aberta={aberta} setAberta={setAberta}/>)
        
    )
}