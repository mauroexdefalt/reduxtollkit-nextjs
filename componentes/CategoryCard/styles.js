import styled from "styled-components";




export const Info = styled.div`
position: relative;
  bottom:-30px;
  opacity: 0.8;  
  cursor: pointer;
  color:#FFF;
  font-size: 34px;
  

`
export const Fundo = styled.div`
height: 100vh;
width:100%;
background: black;
z-index: 2;
`

export const Card = styled.div`

background-image: url(${(props) => props.image}); 
height:300px;
width: 300px;
background-repeat: no-repeat;
background-position: center;
background-size: 60% 60%;
background-color:${(props) => props.colorBack};
display: flex;
align-items: center;
justify-content: center;
transition: all 0.3s cubic-bezier(0.2, 0.2, 0.2, 0.2);
align-items: flex-end;
margin:20px;
border-radius: 40px;

&:hover{
    
        transform: scale(1.2);        
        z-index: 1;
        border-radius: 50%;
        background-size: 70% 70%;
        background-position: center;
        background-color:#ED465D ; 

        ${Info}{
        position: relative;
        font-size: 40px;
        color: #fff;
        bottom:-40px;
        z-index: 3;       

        }

        
        
        
        
    }





 
`
