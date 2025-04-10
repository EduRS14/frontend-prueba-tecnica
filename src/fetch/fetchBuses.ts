import { useState, useEffect } from "react";
import { Bus } from "../modelos/Bus";

export function fetchBuses(endpoint: string){
    const [buses, setBuses] = useState<Bus[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<String| null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        setLoading(true);
        fetch(endpoint, {signal: abortController.signal})
            .then((response) => response.json())
            .then((data) => setBuses(data))
            .catch((error) => {
                if(error.name == "AbortError"){
                    console.log("Solicitud cancelada");
                } else {
                    setError(error);
                }
            })
            .finally(() => setLoading(false));
        return () => abortController.abort();
    }, [endpoint])

    return {buses, loading, error};
}