import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { Container, InternalContainer } from './styles';

const PrivateLayout = () => {
  
  const linksTexts = [
    {data: "Home", link: '/'},
    {data: "Features", link: '/features'},
    {data: "My Activities", link: '/activities'},
    {data: "Profile", link: '/profile'},

  ]
  return (
    <>
      <Container>
        <InternalContainer>
          <Header linksTexts={linksTexts}/>
          <Outlet/>
        </InternalContainer>
      </Container>
      <Footer />
    </>
  )
}

export default PrivateLayout