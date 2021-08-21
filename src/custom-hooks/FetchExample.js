import React, { useEffect, useState } from 'react';
import { useFetch } from './useFetch';

const url = 'https://course-api.netlify.app/api/javascript-store-products'

const FetchExample = () => {
    const {loading, products} = useFetch(url)
    return (
        <div>
            <h2>{ loading ? 'loading...' : 'data' }</h2>
        </div>
    );
};

export default FetchExample;