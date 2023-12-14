import { useEffect } from "react";

export function useDebounce(
  cb: () => void,
  ms: number,
  deps: unknown[],
  initialAction?: () => void
) {
  useEffect(() => {
    if (initialAction) initialAction();

    const t = setTimeout(() => cb(), ms);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
