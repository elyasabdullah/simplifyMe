import { StyledCodeInput } from './styles';


interface CodeInputProps {
  value: string
  onChangePinCode: (value: string) => any
  className?: string;
}
const Component = (props: CodeInputProps) => {
  const { value, onChangePinCode, className } = props;

  return (
    <StyledCodeInput
      className={className}
      type="tel"
      name={"pinCode"}
      inputMode={"numeric"}
      onChange={onChangePinCode}
      value={value}
    />
  )
}

export default Component;
