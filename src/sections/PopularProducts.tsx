import React from 'react';
import {icons} from '../assets';
import {products} from '../constants';

export const PopularProducts = () => {
  return (
    <section className="padding max-container max-sm:mt-12" id="products">
      <h1>
        Our
        <span className="text-coral-red">Popular</span>
        Products
      </h1>
      <p>
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="flex flex-col justify-start gap-5 xl:flex-row flex-wrap">
        {products.map(product => (
          <div>
            <img src={product.imgURL} alt={product.name} />
            <img src={icons.star} alt="rating" />
            <p>{product.name}</p>
            <p className="text-coral-red">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
