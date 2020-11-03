import React from 'react';
import styled from 'styled-components';
import photo from '/home/wilder/react/card/src/photo.png';

const Title = styled.h1`
   
   font-size: 20px;
   &:hover {
    color: darkred;
    transition: 1s;
  }
-
`
const CardContainer = styled.div`
   
    width: 25%;
    display : flex;
    justify-content: space-around;
    margin: 50px;
    height: 200px;
    border: 1px solid grey
`

const ContainerA = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
`

const ContainerB = styled.div`
    Width: 40%;
    pading: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    

`
const Img = styled.img`
     width: 50%;
     padding: 2px;
     &:hover {
        transform: scale(1.01);
        transition: 1s;
      }
`
const TexteA = styled.p`
     font-size: 15px
`

    

const CardComponent = () => {
    return (
        <CardContainer>
            <Img src ={photo}/>
            <ContainerA>
                <Title>Amel Mac Riff</Title>
                <TexteA>FREAKS, 2020</TexteA>
                <ContainerB>
                   <a href="https://www.instagram.com/"  target="blank"><i class="fab fa-instagram"></i></a>
                   <a href="https://www.facebook.com/"  target="blank"><i class="fab fa-facebook-square"></i></a>
                </ContainerB>
            </ContainerA>
           

        </CardContainer>
    )}




export default CardComponent;