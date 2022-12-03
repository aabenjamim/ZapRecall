import deck from './deck'
import Cartao from './Cartao'

export default function Flashcards(){

    return(
        deck.map((questao) => 
        <Cartao questao={questao}/>
        )
    )
}