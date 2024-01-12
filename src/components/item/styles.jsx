import { styled } from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    width: 40%;
    background: #ffffff;
    padding-left: 20px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 10px;

    h3 {
        font-size: 32px;
        color:  #000000;
    }

    p {
        font-size: 17px;
        color: #00000090;
        margin-bottom: 20px;
    }

    button.remove {
        width: 40%;
        height: 30px;
        background: #000000;
        border-radius: 5px;
        color: #ffffff;
        font-size: 14px;
        margin-top: 10px;
        margin-left: 15px;
    }

    button.remove:hover {
        cursor: pointer;
    }

    hr {
        width: 90%;
        color: #ffffff;
        margin: 20px  0;
    }

    a {
        text-decoration: none;
    }
`