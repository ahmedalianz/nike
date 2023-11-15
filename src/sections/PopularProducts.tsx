import {PopularProductCard} from '../components';
import {products} from '../constants';

export const PopularProducts = () => {
  return (
    <section className="padding max-container max-sm:mt-12" id="products">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          Our
          <span className="text-coral-red px-1">Popular</span>
          Products
        </h2>
        <p className="font-montserrat text-slate-gray lg:max-w-lg mt-2">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 gap-14 sm:gap-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map(({name, imgURL, price}) => (
          <PopularProductCard
            imgURL={imgURL}
            name={name}
            price={price}
            key={name}
          />
        ))}
      </div>
    </section>
  );
};
