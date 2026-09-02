"use client";

import { useEffect, useState } from "react";
import PremiumLoader from "./PremiumLoader";

export default function InitialLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PremiumLoader />;
  }

  return <>{children}</>;
}