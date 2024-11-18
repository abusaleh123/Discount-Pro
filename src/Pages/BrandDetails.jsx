import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BrandDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>BrandDetails</h1>
        </div>
    );
};

export default BrandDetails;