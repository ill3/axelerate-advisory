"use client";
import { usePathname } from "next/navigation";
import Script from "next/script";

import { useEffect, useState } from "react";

export default function TallyScript() {
  const pathname = usePathname();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    loaded && Tally.loadEmbeds();
  }, [pathname]);
  return (
    <Script
      lazyOn
      src="https://tally.so/widgets/embed.js"
      onLoad={() => {
        setLoaded(true);
      }}></Script>
  );
}
