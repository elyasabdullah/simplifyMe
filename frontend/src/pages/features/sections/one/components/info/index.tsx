import {
  Container,
  LeftContainer,
  HeadText,
  Paragraph,
  RightContainer,
  SImageElement
} from './styles'
interface Iprops {
  url: string,
  headText: string,
  paragraph: string
}

export const MoreInfo = (props:Iprops) => {
  return (
    <Container>
      <LeftContainer>
        <HeadText>
          {props.headText}
        </HeadText>
        <Paragraph>
          {props.paragraph}
        </Paragraph>
      </LeftContainer>
      <RightContainer>
        <SImageElement src={props.url} />
      </RightContainer>
    </Container>
  )
}
export default MoreInfo