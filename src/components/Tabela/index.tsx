import { Content, ContentTable } from "./styles";
import { FaTrashAlt, FaCheck } from "react-icons/fa";
import { Fazer, useFazer } from "../../hooks/useFazer";

export function Tabela(){
    const { fazeres, deleteFazer } = useFazer();

    function handleDeleteFazer(fazer: Fazer){
        deleteFazer(fazer);
    }

    return(
        <ContentTable>
            <Content>
                <div className="col">
                    <div className="col col-3">
                        <div className="itemConteudo">
                            <h1> A Fazer </h1> 
                            {fazeres.map(fazer => {
                                return(
                                    <div key={fazer.id} className="contentFazer">
                                        <h2> {fazer.aFazer} </h2>
                                        <div className="botoesContent">
                                            <button onClick={() => handleDeleteFazer(fazer)}> {<FaTrashAlt/>} </button>
                                            <button> {<FaCheck/>} </button>
                                        </div>
                                    </div>
                                );
                            })}
                            
                        </div>
                    </div>

                    <div className="col col-3">
                        <div className="itemConteudo middle">
                            <h1> Fazendo </h1>
                            <div className="contentFazendo">
                                <h2> Anotar dados </h2>
                                <div className="botoesContent">
                                    <button> {<FaTrashAlt/>} </button>
                                    <button> {<FaCheck/>} </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-3">
                        <div className="itemConteudo">
                            <h1> Finalizado </h1>
                            <div className="contentFinalizado">
                                <h2> Anotar dados </h2>
                                <div className="botoesContent">
                                    <button> {<FaTrashAlt/>} </button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
            </Content>
        </ContentTable>
    );
}