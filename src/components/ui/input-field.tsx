import { FC } from "react";

interface InputFieldProps{
  label: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputField:FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="mt-5">{label}</span>
      <input
        className="bg-white border-2 rounded-lg h-8 px-2"
        type="text"
        value={value || ""}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
