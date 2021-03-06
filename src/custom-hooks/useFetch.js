import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async() => {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [url])
    return {loading, products}
};

