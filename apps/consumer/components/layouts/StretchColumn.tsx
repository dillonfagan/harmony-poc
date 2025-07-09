import { PropsWithChildren } from "react";

export default function StretchColumn({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-stretch gap-4 p-4 lg:p-8">
      {children}
    </div>
  );
}