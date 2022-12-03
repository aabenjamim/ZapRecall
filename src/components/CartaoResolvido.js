import icone_certo from "../assets/img/icone_certo.png"
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"
import deck from "./deck"
import styled from "styled-components"

export default function CartaoResolvido(props){

    const {pergunta} = props

    return(
        <>
            <p>{`Pergunta ${deck.indexOf(pergunta) + 1}`}</p>
            <img src={icone_certo}/>
        </>

    )
}

function CartaoErrou(props){

    const {pergunta} = props

    return(
        <>
            <p>{`Pergunta ${deck.indexOf(pergunta) + 1}`}</p>
            <img src={icone_erro} />
        </>
    )
}

function CartaoAcertou(props){

    const {pergunta} = props
    
    return(
        <>
            <p>{`Pergunta ${deck.indexOf(pergunta) + 1}`}</p>
            <img src={icone_certo} />
        </>
    )
}

function CartaoQuase(props){

    const {pergunta} = props
    
    return(
        <>
            <p>{`Pergunta ${deck.indexOf(pergunta) + 1}`}</p>
            <img src={icone_quase} />
        </>
    )
}

const Resolvido = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  & img{
    width: 20px;
    height: 23px;
  }
`