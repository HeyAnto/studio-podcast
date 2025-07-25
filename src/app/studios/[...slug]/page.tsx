"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CatchAllStudiosPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/studios/podcast/all");
  }, [router]);

  return null;
};

export default CatchAllStudiosPage;
