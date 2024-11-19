import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BrandDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();

    console.log(data);

    const details = data.find((brand) => brand._id === id);

    if(!details) {
        return <p>Not found</p>
    }

const {brand_name, brand_logo} = details;
    return (
        <div>
          <h1>{brand_name}</h1>
          <img src={brand_logo} alt="" />
        </div>
    );
};

export default BrandDetails;