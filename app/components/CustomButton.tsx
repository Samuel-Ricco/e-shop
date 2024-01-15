import React from "react";
import { IconType } from "react-icons";

interface CustomButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;  
  custom?: boolean;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}) => {
  return (
    <button disabled={disabled} 
      className={`
      rounded-md
       disabled:opacity-70
      disable:cursor-not-allowed 
      hover:opacity-80 
      transition 
      w-full 
      border-slate-700 
      flex 
      items-center 
      justify-center 
      gap-2 
      ${outline? "bg-white" : "bg-slate-700"}
      ${outline? "text-slate-700":"text-white"}
      ${small? "text-sm font-light":"text-md font-semibold"}
      ${small? "py-1 px-2 border-[1px]":"py-3 px-4 borde-2"}
      ${custom? custom : ""}`}
    >
      {Icon && <Icon size={24} />}
      {label  }
    </button>
  );
};

export default CustomButton;
