import styled from 'styled-components';
export const Container = styled.div`
  margin-top:5rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
export const Title = styled.p`
  font-size:1.1rem;
  margin:1rem 0;
`
export const FormContainer = styled.div`
  width: 100%;
  max-width: 34rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
`;


export const RightTextPartOne = styled.div`
  text-align: center;
  font-size: 1rem;
  line-height: 1.8125rem;
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
}
`

export const RightTextPartTwo = styled.div`
  display: flex;
  gap: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8125rem;
  color: #139ae1;
`
export const ResendButton = styled.div`
  cursor:pointer;
`
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
`
