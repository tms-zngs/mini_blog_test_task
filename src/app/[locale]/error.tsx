"use client";

import { useEffect } from "react";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Global error captured:", error);
  }, [error]);

  return (
    <div style={{ padding: "2rem" }}>
      <ErrorMessage
        message={"Something went wrong while loading the page."}
        onRetry={reset}
      />
    </div>
  );
}
