import { ContainerWidth } from "../../styles/global";
import { Tabela } from "../Tabela";
import { Content, ContentFlexBox, ContentTable } from "./styles";

export function Homepage(){
    return(
        <ContainerWidth>
            <Content>
                    <div className="col ">
                        <div className="col col-2">
                            <h1> Crie um novo objetivo! </h1>
                        </div>

                        <div className="col col-2">
                            <div className="insereObjetivo">
                                <input type="text" placeholder="Insira seu objetivo..." />
                                <button type="button"> Inserir </button>
                            </div>               
                        </div>
                    </div>
            </Content>

            <Tabela />
            
        </ContainerWidth>
    );
}