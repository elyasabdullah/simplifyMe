import { ButtonEle } from "./styles";

interface propsI {
  text: string,
  onClick: () => void,
  isDisabled?: boolean
}
const Button = (props:propsI) => {
  return (
    <ButtonEle type="submit" disabled={props.isDisabled} onClick={props.onClick}>{props.text}</ButtonEle>
  )
}

export default Button;