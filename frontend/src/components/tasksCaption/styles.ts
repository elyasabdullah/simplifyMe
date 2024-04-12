import styled from "styled-components";

export const CaptionContainer = styled.div`
  display:grid;
  grid-template-columns:50px calc(100% - 50px);
  margin:12px 0;
  border-radius:6px;
  box-shadow:0px 0px 3px 0px ${(props) => props.theme.shadowColor};
  background-color:${(props) => props.theme.secondaryBtnhoverBgColor};
  align-items:center;
  @media(max-width:868px) {
    grid-template-columns:50px calc(100% - 50px);
  }
  @media(max-width:678px) {
    display:none;
  }
`

export const TasksInfoContainer = styled.div`
  display:grid;
  grid-template-columns:calc(100% - 330px) 330px;
  @media(max-width:890px) {
    grid-template-columns:calc(100% - 240px) 240px;
  }
`
export const DateEditContainer = styled.div`
  display:flex;
  justify-content:space-between;
  margin-right:1rem;
`
export const EditContainer = styled.div`
  display:flex;
  justify-content:space-between;
`
export const CompletedCon = styled.div`
  border-right:1px solid white;
  padding:0.5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
`
export const Completed = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #139ae1;
  width:20px;
  height:20px;
  border-radius:50%;
`
export const TaskDescription = styled.div`
  padding:0.5rem;
  display:flex;
  align-items:center;
  justify-content:left;
  opacity:0.9;
`
export const TaskDate = styled.div`
  padding:0.5rem;
  display:flex;
  align-items:center;
  justify-content:left;
  color:${(props) => props.theme.textSecondaryColor};
`
export const Edit = styled.div`
  padding:0.5rem;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  color:${(props) => props.theme.textSecondaryColor};
`
export const Delete = styled.div`
  padding:0.5rem;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  color:${(props) => props.theme.textSecondaryColor};
`