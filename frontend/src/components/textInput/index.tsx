import { 
  ElementContainer, 
  InputElement, 
  InputLabel,
} from "./styles";

interface Iprops {
  id: string
  label: string;
  onChange: (value: string, name: string) => void;
  type?: "text" | "email" | "number" | "tel" | 'password';
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
const TextInput = ({
  label,
  onChange,
  type = "text",
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
      <InputLabel 
        
      >{label}</InputLabel>
      <InputElement
        onChange={(e: { target: { value: string, name: string } }) =>
          onChange(e.target.value, e.target.name)
        }
        type ={type}
        disabled = {false}
        value = {value}
        required = {required}
        placeholder= {placeholder || ''}
        autoComplete = "off"
        onFocus = {(e: { target: { name: string } }) => onFocus && onFocus(e?.target?.name ?? '')}
        onBlur = {onBlur}
        name = {name}
      />
      <span style={{ visibility: error ? 'visible' : 'hidden', color:'red' }}>{error}</span>
    </ElementContainer>
  )
}

export default TextInput;