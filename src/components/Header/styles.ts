import styled from "styled-components";

export const Content = styled.header`
    padding: 16px 0;

    h1 {
        position: relative;
        text-align: left;
        font-size: 120px;
        font-family: 'Caveat', sans-serif;
        color: #fff;
    }

    p {
        position: relative;
        margin-bottom: 0;
        font-size: 45px;
        font-weight: 600;
        color: #fff;
        text-align: center;
        display: inline-block;

        &::before {
            content: '';
            margin: 0 auto;
            position: absolute;
            left: 0;
            bottom: 3px;
            background: #d76300;
            width: 100%;
            height: 21px;
            z-index: 1;
            transition: all .2s ease-in-out;
            background-size: 1800% 100%;
            animation: rainbow 6s ease infinite;
        }

        span {
            position: relative;
            z-index: 10;
            text-shadow: 1px 3px 3px #00000024;
        }
    }

    @media(min-width: 30px) and (max-width: 550px){
        h1{
            font-size: 70px;
        }

        p {
            font-size: 26px;
        }
    }
`;