import styled from "styled-components";

export const Container = styled.div`
  padding:2rem 1rem;
`
export const BtnsContainer = styled.div`
  
`
export const BtnContainer = styled.div`
  width:fit-content;
  margin-bottom:1rem;
`
export const TasksContainer = styled.div`
  margin:1.5rem 0;
`
export const CaptionContainer = styled.div`
  display:grid;
  grid-template-columns:5% 50% 24% 10% 10%;
  border:1px solid gray;
  align-items:center;
`
export const Completed = styled.div`
  border-right:1px solid white;
  padding:0.5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  height:100%;
`
export const TaskDescription = styled.div`
  padding:0.5rem;
`
export const TaskDate = styled.div`
  padding:0.5rem;
`
export const Edit = styled.div`
  padding:0.5rem;
`
export const Delete = styled.div`
  padding:0.5rem;
`
export const GroupInputCon = styled.div`
  &.hide {
    display:none;
  }
  width:420px;
  @media(max-width:500px) {
    width:75vw;
  }
`
