import deck from './deck'
import styled from 'styled-components'


export default function CartaoRiscado(props){

    const {questao, textoBotao} = props

    return(
        <CartaoConcluido>
            <p>{`Pergunta ${deck.indexOf(questao) + 1}`}</p>
            {textoBotao}
        </CartaoConcluido>
    )
}

const CartaoConcluido = styled.div`
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
  text-decoration: line-through;

  & p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }

  & ion-icon{
    width: 20px;
    height: 23px;
    cursor: pointer;
  }
`