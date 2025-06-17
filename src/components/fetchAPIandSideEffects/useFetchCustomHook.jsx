import { useState, useEffect } from "react";

const useFetchCustomHook = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!url){
            setData(null);
            setLoading(false);
            setError(null);
            return;
        }
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return {data, loading, error};
}

export default useFetchCustomHook;


// example usage:
// const {data, loading, error} = useFetchCustomHook('https://api.example.com/data');
// if(loading) return <p>Loading...</p>
// if(error) return <p>Error: {error}</p>
// return <pre>{JSON.stringify(data, null, 2)}</pre>