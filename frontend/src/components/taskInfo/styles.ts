import styled from "styled-components";

export const TaskContainer = styled.div`
  display:grid;
  grid-template-columns:50px calc(100% - 50px);
  margin:12px 0;
  box-shadow:0px 0px 3px 0px ${(props) => props.theme.shadowColor};
  background-color:${(props) => props.theme.secondaryBtnhoverBgColor};
  border-radius:6px;
  align-items:center;
  @media(max-width:678px) {
    // display:flex;
    // flex-direction:column;
  }
`
export const TasksInfoContainer = styled.div`
  display:grid;
  grid-template-columns:calc(100% - 330px) 330px;
  @media(max-width:890px) {
    grid-template-columns:calc(100% - 240px) 240px;
  }
  @media(max-width:678px) {
    display:flex;
    flex-direction:column;
  }
`
export const DateEditContainer = styled.div`
  display:flex;
  justify-content:space-between;
  margin-right:1rem;
  @media(max-width:678px) {
    display:grid;
    grid-template-columns:calc(100% - 120px) 120px;
  }
  @media(max-width:400px) {
    display:grid;
    grid-template-columns:calc(100% - 100px) 100px;
  }
  @media(max-width:375px) {
    display:flex;
    flex-direction:column;
  }
`
export const EditContainer = styled.div`
  display:flex;
  justify-content:space-between;
  @media(max-width:375px) {
    justify-content:flex-end;
  }
`
export const Completed = styled.div`
  border-right:1px solid white;
  padding:0.5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  @media(max-width:678px) {
    border:none;
    align-items:flex-start;
  }
`
export const CompletedBtn = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border:1px solid #139ae1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  &.completed {
    background-color: #139ae1;
  } 
  @media(max-width:678px) {
    margin-top:0.3rem;
  }
`
export const TaskDescription = styled.div`
  padding:0.5rem;
  display:flex;
  align-items:center;
  justify-content:left;
  opacity:0.9;
  @media(max-width:678px) {
    padding-bottom:0;
  }
`
export const TaskDate = styled.div`
  padding:0.5rem;
  display:flex;
  align-items:center;
  justify-content:left;
  color:${(props) => props.theme.textSecondaryColor};
  @media(max-width:375px) {
    padding:0.5rem 0.5rem 0;
  }
`
export const Edit = styled.div`
  padding:0.5rem;
  cursor:pointer;
  height:100%;
  color:${(props) => props.theme.textSecondaryColor};
  &:hover {
    opacity:0.6;
  };
  display:flex;
  align-items:center;
  justify-content:center;
`
export const Delete = styled.div`
  padding:0.5rem;
  cursor:pointer;
  color:${(props) => props.theme.textSecondaryColor};
  &:hover {
    opacity:0.6;
  };
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`