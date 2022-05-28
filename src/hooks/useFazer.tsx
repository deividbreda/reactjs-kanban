import { useEffect, useState, createContext, ReactNode, useContext } from "react";
import { api } from "../services/api";

export interface Fazer {
    id: number,
    aFazer: string,
}

type FazerInput = Omit<Fazer, 'id'>

interface FazeresContextData {
    fazeres: Fazer[];
    createFazer: (fazer: FazerInput) => Promise<void>;
    deleteFazer(fazer: Fazer): void;
}

interface FazerProviderProps{
    children: ReactNode;
}

const FazerContext = createContext<FazeresContextData>({} as FazeresContextData);

export function FazerProvider({ children }: FazerProviderProps){
    const [fazeres, setFazeres] = useState<Fazer[]>([]);

    useEffect(() => {
        api.get('kanban/fazers')
        .then(response => setFazeres(response.data.fazers))
    }, [])

    function deleteFazer(fazer: Fazer){
        const removeFazer = fazeres.filter((fazerFilter) => fazerFilter.id !== fazer.id);
        setFazeres(removeFazer);
    }

    async function createFazer(fazerInput: FazerInput){
        const response = await api.post('kanban/fazers', {
            ...fazerInput,
        });
        const { fazer } = response.data;
        setFazeres([...fazeres, fazer])
    }

    return(
        <>
            <FazerContext.Provider value={{ fazeres, createFazer, deleteFazer }}>
                {children}
            </FazerContext.Provider>
        </>
    );
}

export function useFazer(){
    const context = useContext(FazerContext);

    return context;
}