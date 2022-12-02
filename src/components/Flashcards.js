import Pergunta from "./Pergunta"
import {useState} from 'react'
import deck from './deck'
import CartaoFechado from "./CartaoFechado"
import CartaoAberto from "./CartaoAberto"

export default function Flashcards(){

  const [clicada, setClicada] = useState([])
  const [status, setStatus] = useState(false)

  function abrirCartao(pergunta){
    setClicada([...clicada, pergunta])
    setStatus(true)
  }

  return(
    deck.map(
      (pergunta) =>
    <Pergunta clicada={clicada} abrirCartao={abrirCartao} pergunta={pergunta}>
      {clicada.includes(pergunta)? <CartaoAberto pergunta={pergunta}/> : <CartaoFechado pergunta={pergunta}/>}
    </Pergunta>
    )
    )
}

