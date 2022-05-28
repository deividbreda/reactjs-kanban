import { Content, ContentTable } from "./styles";
import { Fazer, useFazer } from "../../hooks/useFazer";
import { Fazendo, useFazendo } from "../../hooks/useFazendo";
import { Finalizado, useFinalizado } from "../../hooks/useFinalizado";
import { TabelaObjetivos } from "../TabelaObjetivos";

export function Tabela(){
    const { fazeres, deleteFazer } = useFazer();
    const { fazeresFazendo, createFazendo, deleteFazendo } = useFazendo();
    const { finalizados, createFinalizado, deleteFinalizado } = useFinalizado();

    function handleDeleteFazer(fazer: Fazer){
        deleteFazer(fazer);
    }

    function handleDeletaFazendo(fazendo: Fazendo){
        deleteFazendo(fazendo);
    }

    function handleDeletaFinalizado(finalizado: Finalizado){
        deleteFinalizado(finalizado);
    }

    function handleCriaFazendo(fazer: Fazer){
        createFazendo({
            aFazendo: fazer.aFazer
        })

        deleteFazer(fazer);
    }

    function handleCriaFinalizado(fazendo: Fazendo){
        createFinalizado({
            aFinalizado: fazendo.aFazendo
        });

        deleteFazendo(fazendo);
    }

    return(
        <ContentTable>
            <Content>
                {fazeres.length | fazeresFazendo.length | finalizados.length ?
                    <TabelaObjetivos 
                    deleteFazer={handleDeleteFazer} deleteFazendo={handleDeletaFazendo} deleteFinalizado={handleDeletaFinalizado}
                    criaFazendo={handleCriaFazendo} criaFinalizado={handleCriaFinalizado}
                    />
                : <h1 className="verificaObjetivos"> Insira um novo objetivo... </h1>
                }   
            </Content>
        </ContentTable>
    );
}