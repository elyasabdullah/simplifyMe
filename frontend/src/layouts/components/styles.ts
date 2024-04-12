import styled from "styled-components";

export const HeaderContainer = styled.div`
  display:flex;
  justify-content:space-between;
  position:sticky;
  z-index:100;
  background-color:${(props) => props.theme.mainBgColor};
  top:0;
  padding:1.5rem 1rem 1rem;
  @media(max-width:768px) {
    flex-direction:column;
  }
  @media(max-width:478px) {
    padding-left:0;
    padding-right:0;
  }
`

export const Title = styled.h2`
  
`
export const ThemeContainer = styled.div`
  width:60px;
  height:1.5rem;
  margin-top:0.5rem;
  background-color: ${(props) => props.theme.themeSwitcherBgColor};
  margin:0 0.8rem;
  border-radius:2px;
  cursor:pointer;
`
export const IconContainer = styled.div`
  background-color:#139ae1;
  width:35px;
  height:35px;
  border-radius:2px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  top:-6px;
  left: ${(props) => props.theme.ThemeIconLeft};
  transition:0.4s;
`

export const HeaderSectionContainerOne = styled.div`
  display:flex;
  @media(max-width:768px) {
    justify-content:space-between;
  }
`
export const TitleThemeContainer = styled.div`
  display:flex;
`

export const HeaderSectionContainerTwo = styled.div`
  display:flex;
  align-items:flex-end;
  margin-top:1rem;
  justify-content:flex-end;
  @media(max-width:768px) {
    position:absolute;
    top:4rem;
    width:100%;
    left:0;
    height:100%;
    align-items:flex-start;
    &.hide {
      display:none;
    }
  }
  @media(max-width:320px) {
    justify-content:center;
  }
`

export const LinksContainer = styled.div`
  display:flex;
  justify-content:space-between;
  transition:0.5s;
  @media(max-width:768px) {
    flex-direction:column;
    padding:1rem 0rem 1rem 2rem;
    width: 300px;
    margin-left:1rem
    border-radius: 0.3rem;
    background-color: #f8f8f8;
    border: 2px solid #03A9F4;
    border-radius:4px;
    background-color:${(props) => props.theme.mainBgColor}
  }
  @media(max-width:500px) {
    width:250px;
  }
  @media(max-width:500px) and (min-width:320px) {
    margin-right:2rem;
  }
`
export const HeaderListIconCon = styled.div`
  width:2rem;
  height:2rem;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  border-radius:2px;
  &:hover {
    background-color:${(props) => props.theme.themeSwitcherBgColor};
  }
  @media(min-width:769px) {
    display:none;
  }
`
export const ActivitiesLinksContainer = styled.div`
  margin-top:5px;
  @media(min-width:769px) {
    display:none;
  }
`
export const ActivityLinkContainer = styled.div`
  height:35px;
  margin-left:2rem;
  opacity:0.9;
  border-top-left-radius:4px;
  border-top-right-radius:4px;
  &:hover {
    background-color: ${(props)=> props.theme.secondaryBtnhoverBgColor};
    border-bottom: 1px solid #139ae1;
  }
`
export const ProfileContainer = styled.div`
  border-top-left-radius:4px;
  border-top-right-radius:4px;
  width:200px;
  &:hover {
    background-color: #262634;
    border-bottom: 1px solid #139ae1;
  }
`
// ======================================================= Footer

export const FooterContainer = styled.div`
  text-align:center;
  background-color:${(props) => props.theme.secondaryBtnhoverBgColor};
  padding:2rem;
  width:100%;
`
export const FooterText = styled.p`
  
`