import { useState, useEffect } from 'react';

function useCustomHook(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error al hacer fetch:', error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [url]);

    return { data, loading };
}

export default useCustomHook;
