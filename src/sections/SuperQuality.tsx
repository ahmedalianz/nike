import {images} from '../assets';
import {Button} from '../components';

export const SuperQuality = () => {
  return (
    <section
      className="padding flex justify-between items-center w-full max-container max-lg:flex-col"
      id="about-us">
      <div className="flex flex-1 flex-col">
        <h1 className="text-4xl font-bold font-palanquin capitalize lg:max-w-lg">
          We Provide You
          <span className="px-1 text-coral-red">Super Quality</span>
          Shoes
        </h1>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={images.shoe8}
          alt="about us"
          className="object-contain"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};
