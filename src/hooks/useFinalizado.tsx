import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface Finalizado{
    id: number,
    aFinalizado: string,
}

interface FinalizadoContextProps {
    children: ReactNode
}

type FinalizadoInput = Omit<Finalizado, 'id'>

interface FinalizadoContextData {
    finalizados: Finalizado[],
    createFinalizado: (finalizado: FinalizadoInput) => Promise<void>;
    deleteFinalizado(finalizado: Finalizado): void;
}

const FinalizadoContext = createContext<FinalizadoContextData>({} as FinalizadoContextData);

export function FinalizadoProvider({ children }: FinalizadoContextProps){
    const [finalizados, setFinalizados] = useState<Finalizado[]>([]);

    useEffect(() => {
        api.get('kanban/finalizados')
        .then(response => setFinalizados(response.data.finalizados))
    }, [])

    async function createFinalizado(finalizadoinput: FinalizadoInput){
        const response = await api.post('kanban/finalizados', {
            ...finalizadoinput,
        })

        const { finalizado } = response.data;
        setFinalizados([...finalizados, finalizado])
    }

    function deleteFinalizado(finalizado: Finalizado){
        const removeFinalizado = finalizados.filter(finalizadosFilter => finalizadosFilter.id !== finalizado.id)
        setFinalizados(removeFinalizado);
    }

    return(
        <FinalizadoContext.Provider value={{ finalizados, createFinalizado, deleteFinalizado }}>
            {children}
        </FinalizadoContext.Provider>
    );
}

export function useFinalizado(){
    const context = useContext(FinalizadoContext);

    return context;
}