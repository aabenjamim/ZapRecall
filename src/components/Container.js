import styled from "styled-components"
import logo from "../assets/img/logo.png"
import Flashcards from "./Flashcards"
import Contador from "./Contador"
import { useState } from "react"

export default function Container(){

    const [contagem, setContagem] = useState(0) 

    console.log(contagem)

    return(
        <ScreenContainer>
            <LogoContainer>
                <img src={logo}/>
                <h1>ZapRecall</h1>
            </LogoContainer>
            <Flashcards contagem={contagem} setContagem={setContagem}/>
            <Contador contagem={contagem} setContagem={setContagem}/>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
    
  img{
    width: 52px;
   }

   h1{
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
   }
`