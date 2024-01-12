import { InputContainer } from "./styles";

export default function Input ({value, placeholder, onChange}) {
    return (
        <InputContainer placeholder = {placeholder} value = {value} onChange = {onChange} />
    );
}