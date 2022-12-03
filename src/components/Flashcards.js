import Pergunta from "./Pergunta"
import {useState} from 'react'
import deck from './deck'
import CartaoFechado from "./CartaoFechado"
import CartaoAberto from "./CartaoAberto"
import CartaoResolvido from "./CartaoResolvido"
import icone_certo from "../assets/img/icone_certo.png"
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"

export default function Flashcards(){

  const [clicada, setClicada] = useState([])
  const [lembrou, setLembrou] = useState([])
  const listaBotoes = ['Não lembrei', 'Quase não lembrei', 'Zap!']
  const [verificar, setVerificar] = useState([])
  const [texto, setTexto] = useState()

  const [valor, setValor] = useState([])

  let botao;
  let img;

  function lembrar(pergunta, value){

    botao = value.target.attributes.value.nodeValue

    setValor([...valor, botao])

    setTexto(botao)

    setLembrou([...lembrou, pergunta])

    if(botao == listaBotoes[0]){
      img = (icone_erro)
    } else if(botao == listaBotoes[1]){
      img = (icone_quase)
    } else if(botao == listaBotoes [2]){
      img = (icone_certo)
    }
  }

  function lembrei(pergunta, value){
    setVerificar([...verificar, {p: pergunta, v:value.target.attributes.value.nodeValue}])
  }

  function naoLembrei(pergunta, value){
    setVerificar([...verificar, {p: pergunta, v:value.target.attributes.value.nodeValue}])

  }

  function quase(pergunta, value){
    setVerificar([...verificar, {p: pergunta, v:value.target.attributes.value.nodeValue}])
  }

  function abrirCartao(pergunta){
    setClicada([...clicada, pergunta])
  }

  return(
    deck.map(
      (pergunta) =>

        <Pergunta clicada={clicada} abrirCartao={abrirCartao} pergunta={pergunta}
        lembrou={lembrou} setLembrou={setLembrou}>

          {lembrou.includes(pergunta)? 

          <CartaoResolvido pergunta={pergunta} lembrar={lembrar} texto={texto}/> : 

          (clicada.includes(pergunta)? 
          
          <CartaoAberto pergunta={pergunta} listaBotoes={listaBotoes} lembrar={lembrar}/> : 

          <CartaoFechado pergunta={pergunta}/>)}

        </Pergunta>
    )
  )
}

