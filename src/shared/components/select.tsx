import { ChangeEventHandler } from "react";

type Option = {
  key: string;
  label: string;
};

export const Select = ({
  label,
  options,
  value,
  onChange,
}: {
  label?: string;
  options: Option[];
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        backgroundColor: "#f9f9f9",
        padding: 5,
        borderRadius: 10,
        border: "1px solid grey",
      }}
    >
      {options.map(({ key, label }) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))}
    </select>
  );
};
