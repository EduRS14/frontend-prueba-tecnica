import { useState, useEffect } from "react";
import { Bus } from "../modelos/Bus";

export function fetchUnBus(endpoint: string | null){

    const [bus, setBus] = useState<Bus | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<String| null>(null);

    useEffect(() => {
        if (!endpoint) return;
        const abortController = new AbortController();
        setLoading(true);
        setError(null);
        setBus(null);
        fetch(endpoint, {signal: abortController.signal})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => setBus(data))
            .catch((error) => {
                if(error.name === "AbortError"){
                    console.log("Solicitud cancelada");
                } else {
                    setError(error.message);
                }
            })
            .finally(() => setLoading(false));
        return () => abortController.abort();
    }, [endpoint])

    return {bus, loading, error};
}