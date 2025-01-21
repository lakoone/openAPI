import React, { createContext, useContext, useEffect, useState } from "react";
import * as YAML from "js-yaml";
import {extractRelevantData} from "./helpers/extractRelevantData";
import {fetchAndParse} from "./helpers/fetchAndParse";

interface OpenApiContextValue {
    apiData: ReturnType<typeof extractRelevantData> | null;
    loading: boolean;
    error: string | null;
    uploadUserFile: (file: File) => Promise<void>;
}

const OpenApiContext = createContext<OpenApiContextValue>({
    apiData: null,
    loading: true,
    error: null,
    uploadUserFile: async () => {},
});

interface OpenApiProviderProps {
    yamlUrl: string;
    children: React.ReactNode;
}

// Провайдер, який завантажує та парсить YAML-файл, а потім ділиться ним через контекст
export const OpenApiProvider: React.FC<OpenApiProviderProps> = ({ yamlUrl, children }) => {
    const [apiData, setApiData] = useState<ReturnType<typeof extractRelevantData> | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getData(){
            try {
            setLoading(true);
            setError(null);
            const result = await fetchAndParse(yamlUrl)
            setApiData(result)
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [yamlUrl]);


    const uploadUserFile = async (file: File) => {
        try {
            setLoading(true);
            setError(null);


            const text = await file.text();

            const data = YAML.load(text);
            const relevantData = extractRelevantData(data);
            console.log(relevantData)
            setApiData(relevantData);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };
    const getPathsByTags= ()=>{
        const result = {}
        return apiData.paths.forEach(path=>{
            path.tags.forEach(tag=>{

            })
        })
    }
    const value: OpenApiContextValue = {
        apiData,
        loading,
        error,
        uploadUserFile,
    };

    return (
        <OpenApiContext.Provider value={value}>
            {children}
        </OpenApiContext.Provider>
    );
};

export function useOpenApiContext() {
    return useContext(OpenApiContext);
}
