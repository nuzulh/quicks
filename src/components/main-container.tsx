import { ReactNode } from "react";

type MainContainerProps = {
  children?: ReactNode;
};

export function MainContainer({
  children,
}: MainContainerProps) {
  return (
    <div className="pt-14 p-4">{children}</div>
  );
}
