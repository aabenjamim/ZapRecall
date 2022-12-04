import deck from './deck'
import styled from 'styled-components'
import icone_erro from '../assets/img/icone_erro.png'
import icone_quase from '../assets/img/icone_quase.png'
import icone_certo from '../assets/img/icone_certo.png'


export default function CartaoRiscado(props){

    const {questao, textoBotao, fechado} = props

    console.log(textoBotao)

    return(
        <CartaoConcluido cor={textoBotao.includes('icone_certo')? '#2FBE34' :
        (textoBotao.includes('icone_erro')? '#FF3030' : 
        (textoBotao.includes('icone_quase') && '#FF922E'))}
        data-test="flashcard">
            <p data-test="flashcard-text">{`Pergunta ${deck.indexOf(questao) + 1}`}</p>
            <img src={textoBotao.includes('icone_certo')? icone_certo :
          (textoBotao.includes('icone_erro')? icone_erro : 
          (textoBotao.includes('icone_quase') && icone_quase))}
          data-test={textoBotao.includes('icone_certo')? 'zap-icon' :
          (textoBotao.includes('icone_erro')? 'no-icon' : 
          (textoBotao.includes('icone_quase') && 'partial-icon'))}/>
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
  text-decoration-color: ${props => props.cor};

  & p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.cor};
  }

  & ion-icon{
    width: 20px;
    height: 23px;
    cursor: pointer;
  }
`