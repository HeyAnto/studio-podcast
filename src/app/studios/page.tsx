"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const StudiosPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/studios/podcast/all");
  }, [router]);

  return null;
};

export default StudiosPage;
