import {FC} from 'react';
import {icons} from '../assets';
interface PopularProductCardProps {
  imgURL: string;
  name: string;
  price: string;
}
export const PopularProductCard: FC<PopularProductCardProps> = ({
  imgURL,
  name,
  price,
}) => {
  return (
    <div className="flex flex-1 flex-col  max-sm:w-full">
      <img src={imgURL} alt={name} width={282} height={282} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={icons.star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};
