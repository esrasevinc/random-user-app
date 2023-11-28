import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useFetch = (url) => {

    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchData = async() => {
        try {
            let response = await axios.get(url);
            setResult(result => [...result, response.data]);
            setLoading(false);
        } 
        catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        const getData = async() => {
            await fetchData();
        }
        getData();
    
    }, [url])

    return { fetchData, result, loading, error };
}

export default useFetch