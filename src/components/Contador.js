import styled from 'styled-components'
import deck from './deck'

export default function Contador(props){

    const {contagem, setContagem} = props
    return(
        <Concluidos data-test="footer">
            {`${contagem}/${deck.length}`} CONCLUÍDOS
        </Concluidos>
    )
}

const Concluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`