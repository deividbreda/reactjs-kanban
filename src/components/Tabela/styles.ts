import styled from "styled-components";

export const Content = styled.div`
    background: #fff;
    box-shadow: 0px 0px 12px #0000002b;
    padding: 32px 0;

    h1 {
        color: #000;
        font-family: 'Caveat', sans-serif;
        text-align: center;
    }

    .itemConteudo {
        padding: 0 16px;

        h2 {
            font-family: 'Caveat', sans-serif;
            color: #000;
            text-align: center;
            margin-top: 10px;
        }

        .contentFazer,.contentFazendo,.contentFinalizado {
            margin: 32px 24px;
            box-shadow: 2px 2px 7px #00000047;
            padding: 32px 16px;
            display: flex;
            justify-content: center;
            gap: 12px;
            position: relative;
        }

        .contentFazer { 
            background: #ff4a4a;
        }

        .contentFazendo {     
            background: #ffd54a;
        }

        .contentFinalizado {
            background: #66ff4a;
        }

        .botoesContent {
            position: absolute;
            top: 6px;
            right: 6px;
        }

        button {
            border: none;
            background: transparent;
            padding: 8px;
            line-height: 8px;
            font-size: 19px;
            border-radius: 50%;
        }
    }
`;

export const ContentTable = styled.div`
    padding: 32px;
    background: #bd5700;
    margin-bottom: 64px;
`;

export const ContentSpace = styled.div`
    gap: 30px;
`;