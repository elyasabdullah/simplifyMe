import { 
  ElementContainer, 
  InputElement, 
  InputLabel,
} from "./styles";

interface Iprops {
  id: string
  label: string;
  onChange: (value: string, name: string) => void;
  type?: "time";
  isDisabled?: boolean;
  placeholder?: string;
  error?: string | undefined;
  value: string | undefined;
  required?: boolean;
  autoComplete?: "on" | "off";
  list?: Array<string>;
  onFocus?: (value: string) => void
  onBlur?: () => void
  name?: string;
  pattern?: string
}
const TimeInput = ({
  label,
  onChange,
  type = "time",
  isDisabled = false,
  value,
  required = false,
  error,
  placeholder,
  autoComplete = "off",
  onFocus,
  onBlur,
  name,
  id
}: Iprops) => {
  return (
    <ElementContainer>
      <InputLabel>{label}</InputLabel>
      <InputElement 
        onChange={(e: { target: { value: string, name: string } }) =>
        onChange(e.target.value, e.target.name)
        }
        type ={type}
        isDisabled = {false}
        value = {value}
        required = {required}
        placeholder= {placeholder || ''}
        autoComplete = "off"
        onfocus = {(e: { target: { name: string } }) => onFocus && onFocus(e?.target?.name ?? '')}
        onBlur = {onBlur}
        name = {name}
      />
    </ElementContainer>
  )
}

export default TimeInput;