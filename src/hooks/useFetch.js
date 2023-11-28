import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useFetch = (url) => {

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchData = async() => {
        try {
            let response = await axios.get(url);
            setResult(response.data.results[0]);
            setLoading(false);
        } 
        catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { fetchData, result, loading, error };
}

export default useFetch