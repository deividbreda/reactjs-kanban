import { useState, createContext, useEffect, ReactNode, useContext } from "react";
import { api } from "../services/api";

export interface Fazendo {
    id: number,
    aFazendo: string
}

type FazendoInput = Omit<Fazendo, 'id'>;

interface FazendoContextData {
    fazeresFazendo: Fazendo[],
    createFazendo: (fazendo: FazendoInput) => Promise<void>;
    deleteFazendo(fazendo: Fazendo): void;
}

const FazendoContext = createContext<FazendoContextData>({} as FazendoContextData);

interface FazendoContextProps {
    children: ReactNode
}

export function FazendoProvider({ children }: FazendoContextProps){
    const [fazeresFazendo, setFazeresFazendo] = useState<Fazendo[]>([]);

    useEffect(() => {
        api.get('kanban/fazendos')
        .then(response => setFazeresFazendo(response.data.fazendos))
    }, [])

    function deleteFazendo(fazendo: Fazendo){
        const removeFazendo = fazeresFazendo.filter(fazendoFilter => fazendoFilter.id !== fazendo.id)
        setFazeresFazendo(removeFazendo);
    }

    async function createFazendo(fazendoInput: FazendoInput){
        const response = await api.post('kanban/fazendos', {
            ...fazendoInput,
        });

        const { fazendo } = response.data;
        setFazeresFazendo([...fazeresFazendo, fazendo]);
    }

    return(
        <FazendoContext.Provider value={{ fazeresFazendo, deleteFazendo, createFazendo }}>
            {children}
        </FazendoContext.Provider>
    );
}

export function useFazendo(){
    const context = useContext(FazendoContext);

    return context;
}