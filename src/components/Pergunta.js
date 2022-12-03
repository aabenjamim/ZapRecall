import styled from "styled-components"

export default function Pergunta(props){

    const {abrirCartao, clicada, pergunta, lembrou, setLembrou} = props

  return(
    <PerguntaCompleta onClick={()=>abrirCartao(pergunta)} clicada={clicada.includes(pergunta)}
    lembrou={lembrou.includes(pergunta)}>
        {props.children}
    </PerguntaCompleta>
    )
}


const PerguntaCompleta = styled.div`
  width: 300px;
  height: 35px;
  min-height: ${props => props.lembrou ? '35px' : (props.clicada && '100px')};
  background-color: ${props => props.lembrou ?  '#FFFFFF' : (props.clicada ? '#FFFFD5' : '#FFFFFF')};
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
    font-weight: ${props => props.lembrou ?  '700' : (props.clicada ? '400' : '700')};
    font-size: ${props => props.lembrou ?  '16px' : (props.clicada ? '18px' : '16px')};
    line-height: ${props => props.lembrou ?  '19px' : (props.clicada ? '22px' : '19px')};
    color: #333333;
    text-decoration: ${props => props.lembrou ? "line-through" : "none"}
  }
  & ion-icon{
    width: 20px;
    height: 23px;
    cursor: pointer;
  }

  & img{
    position: ${props => props.lembrou ?  '' : (props.clicada && 'absolute')};
    bottom: ${props => props.lembrou ?  '' : (props.clicada && '10px')};
    right: ${props => props.lembrou ?  '' : (props.clicada && '10px')};
  }

  
`