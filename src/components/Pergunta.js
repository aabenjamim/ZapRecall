import styled from "styled-components"

export default function Pergunta(props){

    const {abrirCartao, clicada, pergunta} = props

  return(
    <PerguntaFechada onClick={()=>abrirCartao(pergunta)} clicada={clicada.includes(pergunta)}>
        {props.children}
    </PerguntaFechada>
    )
}


const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  min-height: ${props => props.clicada && '100px'};
  cursor: pointer;
  background-color: ${props => props.clicada ? '#FFFFD5' : '#FFFFFF'};
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${props => props.clicada && 'position: relative;'}
  & p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: ${props => props.clicada ? '400' : '700'};
    font-size: ${props => props.clicada ? '18px' : '16px'};
    line-height: ${props => props.clicada ? '22px' : '19px'};
    color: #333333;
  }
  & ion-icon{
    width: 20px;
    height: 23px;
    cursor: pointer;
  }

  & img{
    position: ${props => props.clicada && 'absolute'};
    bottom: ${props => props.clicada && '10px'};
    right: ${props => props.clicada && '10px'};
  }

  
`