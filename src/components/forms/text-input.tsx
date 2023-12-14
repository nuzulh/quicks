import { Icons, cn } from "@/helpers";
import { assetService } from "@/services";
import { Control, Controller } from "react-hook-form";

type TextInputProps = {
  control: Control;
  name: string;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  icon?: keyof Icons;
};

export default function TextInput({
  control,
  name,
  className,
  defaultValue,
  placeholder,
  icon,
}: TextInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || ""}
      render={({ field }) => (
        <div className="w-full flex items-center">
          <input
            {...field}
            className={cn(
              "w-full outline-none font-lato text-sm px-6 py-1 rounded border-[1px] bg-white border-gray",
              className,
            )}
            placeholder={placeholder}
          />
          {icon && (
            <img
              src={assetService.getIcons(icon)}
              className="absolute right-10"
              alt="search-icon"
            />
          )}
        </div>
      )}
    />
  );
}
