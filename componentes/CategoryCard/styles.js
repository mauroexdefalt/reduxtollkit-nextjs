import styled from "styled-components";




export const Info = styled.div`
width: 100px;
height: 70px;
  background: white;  
  text-align: center; 
  opacity: 0.8;
  border: 1px solid black;
  cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`


export const Card = styled.div`

background-image: url(${(props) => props.image}); 
height:150px;
width: 400px;
background-repeat: no-repeat;
background-size: 100% 100%;
align-items: center;
justify-content: center;
transition: all 5s cubic-bezier(0.14, 0.96, 0.91, 0.6);
display: flex;
align-items: center;
margin:20px;
&:hover{
        transform: scale(1.1);
    }





 
`
