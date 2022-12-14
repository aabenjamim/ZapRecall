import deck from './deck'
import styled from 'styled-components'
import seta_virar from '../assets/img/seta_virar.png'

export default function CartaoAbertoFrente(props){

    const {questao, aberta, setAberta} = props

    function verResposta(){
        setAberta([...aberta, questao.answer])
    }

    return(
        <CartaoFrente data-test="flashcard">
            <p data-test="flashcard-text">{questao.question}</p>
            <img src={seta_virar} onClick={verResposta} data-test="turn-btn"/>
        </CartaoFrente>
    )
}

const CartaoFrente = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & img{
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`