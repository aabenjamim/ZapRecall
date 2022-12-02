import styled from 'styled-components'

export default function Frente(props){

    const {pergunta} = props

    return(
        <Traseira>
            <Alinhamento>
                <p>{pergunta.answer}</p>
            </Alinhamento>
            <Alinhamento>
                <Botao cor="#FF3030">Não lemBrei</Botao>
                <Botao cor="#FF922E">Quase não lemBrei</Botao>
                <Botao cor="#2FBE34">Zap!</Botao>
            </Alinhamento>
        </Traseira>
    )
}

const Botao = styled.div`
  width: 80px;
  font-family: 'Recursive';
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: ${props=> props.cor};
  border-radius: 5px;
  border: 1px solid ${props=> props.cor};
  padding:5px;
`
const Alinhamento = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`

const Traseira = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }

`