import React, {FC} from 'react';
interface ShoeCardProps {
  img: string;
  thumbnail: string;
  active: boolean;
  onChange: (img: string) => void;
}
export const ShoeCard: FC<ShoeCardProps> = ({
  img,
  onChange,
  thumbnail,
  active,
}) => {
  const handleClick = () => {
    if (!active) {
      onChange(img);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        active ? 'border-coral-red' : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:mp-4">
        <img
          src={thumbnail}
          alt={thumbnail}
          onClick={handleClick}
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};
