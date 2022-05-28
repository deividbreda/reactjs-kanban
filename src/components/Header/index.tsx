import { ContainerWidth } from "../../styles/global";
import { Content } from "./styles";

export function Header(){
    return(
        <Content>
          <ContainerWidth>
            <h1> Kanban </h1>

            <p> <span> Organize a sua rotina! </span> </p>
          </ContainerWidth>
        </Content>
    );
}