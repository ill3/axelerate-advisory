import { useMemo } from "react";

const sizes = {
  xs: "max-w-3xl",
  sm: "max-w-4xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export default function Container({
  children,
  size,
  background = "",
  className = "",
}) {
  const getSize = useMemo(() => {
    return sizes[size] || "max-w-7xl";
  });
  return (
    <section className={background}>
      <div
        className={`container mx-auto ${getSize} px-6 sm:px-12 py-16 ${className}`}>
        {children}
      </div>
    </section>
  );
}
