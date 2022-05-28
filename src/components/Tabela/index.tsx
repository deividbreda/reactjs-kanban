import { Content, ContentTable } from "./styles";
import { FaTrashAlt, FaCheck } from "react-icons/fa";

export function Tabela(){
    return(
        <ContentTable>
            <Content>
                <div className="col">
                    <div className="col col-3">
                        <div className="itemConteudo">
                            <h1> A Fazer </h1> 
                            <div className="contentFazer">
                                <h2> Anotar dados </h2>
                                <div className="botoesContent">
                                    <button> {<FaTrashAlt/>} </button>
                                    <button> {<FaCheck/>} </button>
                                </div>
                            </div>
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