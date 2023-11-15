import React, {FC} from 'react';
interface ButtonProps {
  label: string;
  icon?: string;
  variant?: 'primary' | 'secondary';
}
export const Button: FC<ButtonProps> = ({label, icon, variant = 'primary'}) => {
  return (
    <button
      className={`${
        variant === 'primary'
          ? 'bg-coral-red border-coral-red hover:bg-white hover:border-white hover:text-coral-red text-white'
          : 'bg-white border-white hover:bg-coral-red hover:border-coral-red hover:text-white text-coral-red'
      } flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full transition-colors`}>
      {label}
      {icon && (
        <img src={icon} alt={label} className="ml-2 rounded-full w-5 h-5" />
      )}{' '}
    </button>
  );
};
