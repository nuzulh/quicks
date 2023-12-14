import { useState } from "react";

export function useToggle(initialValue?: boolean) {
  const [value, setValue] = useState<boolean>(initialValue || false);

  const toggle = () => setValue((prev) => !prev);
  const on = () => setValue(true);
  const off = () => setValue(false);

  return {
    value,
    toggle,
    on,
    off,
  };
}
