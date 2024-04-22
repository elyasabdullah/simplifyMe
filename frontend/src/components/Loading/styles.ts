import styled from "styled-components";

export const LoadContainer = styled.div`
  display:flex;
  justify-content:center;
  margin:50px auto;
  
  & div {
    width: 20px;
    height: 20px;
    background-color: orchid;
    border-radius: 50%;
    margin: 0 5px;
    animation-name: up-and-down;
    animation-duration: 0.9s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes up-and-down {
    to {
        opacity:0.2;
        transform:translateY(20px)
    }
}
`
export const FirstEle = styled.div`

`
export const SecondEle = styled.div`
  animation-delay:0.3s;
`
export const LastEle = styled.div`
  animation-delay:0.6s;
`