import { Fazendo, useFazendo } from "../../hooks/useFazendo";
import { Fazer, useFazer } from "../../hooks/useFazer";
import { Finalizado, useFinalizado } from "../../hooks/useFinalizado";

import { FaTrashAlt, FaCheck } from "react-icons/fa";

interface handleFunctionsProps {
    deleteFazer: (fazer: Fazer) => void;
    deleteFazendo: (fazendo: Fazendo) => void;
    deleteFinalizado: (finalizado: Finalizado) => void;
    criaFazendo: (fazer: Fazer) => void;
    criaFinalizado: (fazendo: Fazendo) => void;
}

export function TabelaObjetivos({ deleteFazer, deleteFazendo, deleteFinalizado, criaFazendo, criaFinalizado }: handleFunctionsProps){
    const { fazeres } = useFazer();
    const { fazeresFazendo } = useFazendo();
    const { finalizados } = useFinalizado();

    return(
        <>
            <div className="col">
                    <div className="col col-3">
                        <div className="itemConteudo">
                            <h1> A Fazer </h1> 
                            {fazeres.map(fazer => {
                                return(
                                    <div key={fazer.id} className="contentFazer">
                                        <h2> {fazer.aFazer} </h2>
                                        <div className="botoesContent">
                                            <button onClick={() => deleteFazer(fazer)}> {<FaTrashAlt/>} </button>
                                            <button onClick={() => criaFazendo(fazer)}> {<FaCheck/>} </button>
                                        </div>
                                    </div>
                                );
                            })}
                            
                        </div>
                    </div>

                    <div className="col col-3">
                        <div className="itemConteudo middle">
                            <h1> Fazendo </h1>
                            {fazeresFazendo.map(fazendo => {
                                return(
                                    <div key={fazendo.id} className="contentFazendo">
                                        <h2> {fazendo.aFazendo} </h2>
                                        <div className="botoesContent">
                                            <button onClick={() => deleteFazendo(fazendo)}> {<FaTrashAlt/>} </button>
                                            <button onClick={() => criaFinalizado(fazendo)}> {<FaCheck/>} </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="col col-3">
                        <div className="itemConteudo">
                            <h1> Finalizado </h1>
                            {finalizados.map(finalizado => {
                                return(
                                    <div key={finalizado.id} className="contentFinalizado">
                                        <h2> {finalizado.aFinalizado} </h2>
                                        <div className="botoesContent">
                                            <button onClick={() => deleteFinalizado(finalizado)}> {<FaTrashAlt/>} </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>    
        </>
    );
}