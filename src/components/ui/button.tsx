import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode
  onClick: ()=>void
}
const Button:FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer bg-amber-950 text-white px-5 py-3 rounded-lg hover:bg-amber-800 transition"
    >
      {children}
    </button>
  );
};
export default Button;
