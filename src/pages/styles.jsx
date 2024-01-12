import { styled } from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding-left: 20px;

    form.card {
        width: 30%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff;
        border-radius: 10px;
    }

    svg {
        width: 60%;
        fill: #ffffff;
    }

    div.list {
        width: 100%;
        height: 50vh;
        overflow-y: scroll;
    }
`