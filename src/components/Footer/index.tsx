import { ContainerWidth } from "../../styles/global";
import { Content } from "./styles";

export function Footer(){
    return(
        <ContainerWidth>
            <Content>
                <p> &copy; Desenvolvido por <a href="https://github.com/deividbreda" target="_blank">Deivid Breda</a></p>
            </Content>
        </ContainerWidth>
    );
}