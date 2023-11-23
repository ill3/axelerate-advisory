import { useMemo } from "react";

const sizes = {
  xs: "max-w-3xl",
  sm: "max-w-4xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  xl2: "max-w-8xl",
  xl3: "max-w-9xl",
};

export default function Container({
  id = "",
  children,
  size,
  background = "",
  className = "",
}) {
  const getSize = useMemo(() => {
    return sizes[size] || "max-w-7xl";
  }, [size]);
  return (
    <section id={id} className={background}>
      <div
        className={`container mx-auto ${getSize} px-6 sm:px-12 py-24 ${className}`}>
        {children}
      </div>
    </section>
  );
}
