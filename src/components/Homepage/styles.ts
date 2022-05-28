import styled from "styled-components";

export const Content = styled.div`
    background: #d76300;
    margin-top: 32px;
    padding: 32px;

    .insereObjetivo {   
        display: flex;
       
        margin-top: 5px;
    }

    input {
        width: 100%;
        background: transparent;
        border: none;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        padding: 8px;
        color: #fff;  

        &::placeholder {
            color: #fcad6a;
        }
    }

    button {
        background: #fff;
        border: none;
        color: #d76300;
        padding: 0 8px;
    }

    h1 {
        color: #fff;
    }

    h2 {
        text-align: center;
        margin-top: 6px;

        span {
            color: #e42121;
            background: #f6b0b0;
            border: 2px solid #e42121;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 400;
            padding: 5px 30px;
        }
    }
`;

export const ContentTable = styled.div`
    padding: 32px;
    background: #fff;
    margin-top: 16px;
`;

export const ContentFlexBox = styled.div`
    display: flex;
`;