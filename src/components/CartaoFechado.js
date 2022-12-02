import deck from './deck'

export default function CartaoFechado(props){
    const {pergunta} = props
    return(
        <>
        <p>{`Pergunta ${deck.indexOf(pergunta) + 1}`}</p>
        <ion-icon name="play-outline"></ion-icon>
        </>
    )
}