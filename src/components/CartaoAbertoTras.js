import styled from 'styled-components'
import icone_erro from '../assets/img/icone_erro.png'
import icone_quase from '../assets/img/icone_quase.png'
import icone_certo from '../assets/img/icone_certo.png'

export default function CartaoAbertoTras(props){

    const {questao, fechado, setFechado, textoBotao, setTextoBotao} = props


    function concluir(texto){
        setFechado([...fechado, questao.answer])
        setTextoBotao([...textoBotao, texto])
    }
    
    return(
        <CartaoTras>
            <p>{questao.answer}</p>
            <AlinharBotoes>
                <Botao cor='#FF3030' onClick={()=>concluir(icone_erro)}>Não lembrei</Botao>
                <Botao cor='#FF922E' onClick={()=>concluir(icone_quase)}>Quase não lembrei</Botao>
                <Botao cor='#2FBE34' onClick={()=>concluir(icone_certo)}>Zap!</Botao>
            </AlinharBotoes>
        </CartaoTras>
    )
}

const CartaoTras = styled.div`
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
`

const AlinharBotoes = styled.div`
    display: flex;
    justify-content: space-between;
`

const Botao = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.cor};
    border-radius: 5px;
    border: 1px solid ${props => props.cor};
    padding:5px;
`