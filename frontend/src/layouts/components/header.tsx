import { useContext, useState } from "react";
import { 
  LinksContainer, 
  HeaderContainer, 
  HeaderSectionContainerOne, 
  HeaderSectionContainerTwo,
  TitleThemeContainer,
  Title, 
  ThemeContainer, 
  IconContainer,
  HeaderListIconCon,
  ActivitiesLinksContainer,
  ActivityLinkContainer,
  ProfileContainer
} from "./styles";
import { AppContext } from "../../AppLoader";
import DarkIcon from "src/components/DarkIcon";
import LightIcon from "src/components/LightIcon";
import darkTheme from "src/themes/darkTheme";
import ListLink from "src/components/ListLink"; 
import HideListIcon from "src/components/hideListIcon";
import ShowListIcon from "src/components/showListIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface Iprops {
  linksTexts: {
    data: string,
    link: string
  }[]
}

const Header = (props: Iprops) => {
  const {toggleTheme, theme, setShowNavbarList, showNavbarList} = useContext(AppContext);
  const isAuthenticated = useSelector((state:any) => state.user.isAuthenticated);

  const links = props.linksTexts.map((ele, index) => {
    return (
      <ListLink 
        showList={showNavbarList}
        setShowList={setShowNavbarList} 
        link={ele.link} 
        data={ele.data} 
        key={index} 
      />
    )
  }) 
  
  const handleViewList = () => {
    setShowNavbarList(!showNavbarList)
  }
  return (
    <HeaderContainer>
      <HeaderSectionContainerOne>
        <TitleThemeContainer>
          <Title>
            SimplifyMe
          </Title>
          <ThemeContainer onClick={toggleTheme}>
            <IconContainer>
              {theme === darkTheme ? <DarkIcon/> : <LightIcon/> }
            </IconContainer>
          </ThemeContainer>
        </TitleThemeContainer>
        <HeaderListIconCon onClick={handleViewList}>
          {showNavbarList ? <HideListIcon /> : <ShowListIcon />}
        </HeaderListIconCon>
      </HeaderSectionContainerOne>
      <HeaderSectionContainerTwo className={showNavbarList ? '' : 'hide'}>
        <LinksContainer>
          {links}
          <ActivitiesLinksContainer>
            <ActivityLinkContainer onClick={() => setShowNavbarList(!showNavbarList)}>
              <Link style={{padding:"0.5rem 1rem", display:'block'}} to={isAuthenticated ? 'activities' : '/login'}>Today Activities</Link>
            </ActivityLinkContainer>
            <ActivityLinkContainer onClick={() => setShowNavbarList(!showNavbarList)}>
              <Link style={{padding:"0.5rem 1rem", display:'block'}} to={isAuthenticated ? 'activities/weeklyactivities' : '/login'}>This Week Activities</Link>
            </ActivityLinkContainer>
            <ActivityLinkContainer onClick={() => setShowNavbarList(!showNavbarList)}>
              <Link style={{padding:"0.5rem 1rem", display:'block'}} to={isAuthenticated ? 'activities/generalactivities' : '/login'}>General Activities</Link>
            </ActivityLinkContainer>
            <ActivityLinkContainer onClick={() => setShowNavbarList(!showNavbarList)}>
              <Link style={{padding:"0.5rem 1rem", display:'block'}} to={isAuthenticated ? 'activities/relatedactivities' : '/login'}>Related Activities</Link>
            </ActivityLinkContainer>
          </ActivitiesLinksContainer>
        </LinksContainer>
      </HeaderSectionContainerTwo>
    </HeaderContainer>
  )
}

export default Header