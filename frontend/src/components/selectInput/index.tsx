import { 
  ElementContainer, 
  InputElement, 
  InputLabel,
} from "./styles";

interface Iprops {
  id: string
  label: string;
  onChange: (value: string, name: string) => void;
  isDisabled?: boolean;
  error?: string | undefined;
  value: string | undefined;
  required?: boolean;
  autoComplete?: "on" | "off";
  list?: Array<string>;
  onFocus?: (value: string) => void
  onBlur?: () => void
  name?: string;
  pattern?: string,
  data: string[];
}
const SelectInput = ({
  label,
  onChange,
  isDisabled = false,
  value,
  required = false,
  error,
  autoComplete = "off",
  onFocus,
  onBlur,
  name,
  id,
  data
}: Iprops) => {
  return (
    <ElementContainer>
      <InputLabel>{label}</InputLabel>
      <InputElement 
        onChange={(e: { target: { value: string, name: string } }) =>
        onChange(e.target.value, e.target.name)
        }
        disabled = {false}
        value = {value}
        required = {required}
        autoComplete = "off"
        onFocus = {(e: { target: { name: string } }) => onFocus && onFocus(e?.target?.name ?? '')}
        onBlur = {onBlur}
        name = {name}
      >
        <option value="">Select an option</option>
        {data?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </InputElement>
      <span style={{ visibility: error ? 'visible' : 'hidden', color:'red' }}>{error}</span>

    </ElementContainer>
  )
}

export default SelectInput;