import { useState } from "react";
import { useFazer } from "../../hooks/useFazer";
import { ContainerWidth } from "../../styles/global";
import { Tabela } from "../Tabela";
import { Content } from "./styles";

export function Homepage(){
    const { createFazer } = useFazer();

    const [aFazer, setAFazer] = useState('');

    function handleNovoFazer(){
        createFazer({aFazer});

        setAFazer('');
    }

    return(
        <ContainerWidth>
            <Content>
                    <div className="col ">
                        <div className="col col-2">
                            <h1> Crie um novo objetivo! </h1>
                        </div>

                        <div className="col col-2">
                            <div className="insereObjetivo">
                                <input type="text" value={aFazer} placeholder="Insira seu objetivo..." onChange={(e) => setAFazer(e.target.value)} />
                                <button type="button" onClick={handleNovoFazer}> Inserir </button>
                            </div>               
                        </div>
                    </div>
            </Content>

            <Tabela />
            
        </ContainerWidth>
    );
}