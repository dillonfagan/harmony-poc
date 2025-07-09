import { PropsWithChildren } from "react";

export default function ResponsiveGrid({ children }: PropsWithChildren) {
  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
}