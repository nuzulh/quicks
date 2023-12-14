import { cn } from "@/helpers";
import { Control, Controller } from "react-hook-form";

export type SelectInputItem = {
  label: string;
  value: string;
};

type SelectInputProps = {
  control: Control;
  name: string;
  data: SelectInputItem[];
  className?: string;
  defaultValue?: string;
};

export default function SelectInput({
  control,
  name,
  data,
  className,
  defaultValue,
}: SelectInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <select
          {...field}
          className={cn(
            "w-fit px-4 outline-none rounded border-[1px] border-gray/50 font-lato text-sm",
            className,
          )}
        >
          {data.map((item, index) => (
            <option
              key={index}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>
      )}
    />
  );
}
