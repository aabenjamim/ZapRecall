import deck from './deck'
import Cartao from './Cartao'

export default function Flashcards(props){

    const {contagem, setContagem} = props

    return(
        deck.map((questao) => 
        <Cartao questao={questao} contagem={contagem} setContagem={setContagem}/>
        )
    )
}