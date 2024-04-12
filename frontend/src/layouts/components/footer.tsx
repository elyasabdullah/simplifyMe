import { FooterContainer, FooterText } from "./styles";

const Footer = () => {
  let date: Date | number = new Date();
  date = date.getFullYear();
  return (
    <FooterContainer>
      <FooterText>© Copyright {date} SimplifyMe. All rights reserved.</FooterText>
    </FooterContainer>
  )
};

export default Footer;
