import { useState } from "react";
import { useFazer } from "../../hooks/useFazer";
import { ContainerWidth } from "../../styles/global";
import { Tabela } from "../Tabela";
import { Content } from "./styles";

export function Homepage(){
    const { createFazer } = useFazer();

    const [aFazer, setAFazer] = useState('');
    const [validaInput, setValidaInput] = useState(false)

    function handleNovoFazer(){
        if(aFazer == ''){
            setValidaInput(true)       
        } else {
            setValidaInput(false)  
            createFazer({aFazer})
        }
    
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
                            {validaInput ? <h2> <span> Insira um objetivo válido! </span> </h2> : null}   
                        </div>
                    </div>
            </Content>

            <Tabela />
            
        </ContainerWidth>
    );
}