import { ButtonContainer } from "./styles";

export default function Button ({blocked, onClick}) {
    return (
        <ButtonContainer disabled = {blocked} onClick = {onClick}>
            Buscar
        </ButtonContainer>
    );
}