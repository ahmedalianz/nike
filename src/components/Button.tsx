import React, {FC} from 'react';
interface ButtonProps {
  label: string;
  icon: string;
}
export const Button: FC<ButtonProps> = ({label, icon}) => {
  return (
    <button className="flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      <img src={icon} alt={label} className="ml-2 rounded-full w-5 h-5" />
    </button>
  );
};
