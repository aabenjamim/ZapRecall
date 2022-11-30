import deck from "./deck"
import styled from "styled-components"

export default function Flashcards(){

    return(
        deck.map(
        (pergunta) =>
        <PerguntaFechada>
            <p>{`Pergunta ${deck.indexOf(pergunta) + 1}`}</p>
            <ion-icon name="play-outline"></ion-icon>
        </PerguntaFechada>
        )
    )
}

const PerguntaFechada = styled.div`
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
  & ion-icon{
    width: 20px;
    height: 23px;
    cursor: pointer;
  }
`