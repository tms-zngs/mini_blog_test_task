"use client";

import React from "react";
import { useRouter } from "next/navigation";
import css from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message?: string;
  onRetry?: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  const router = useRouter();

  return (
    <div className={css.errorContainer} role="alert">
      <svg
        className={css.errorIcon}
        fill="none"
        viewBox="0 0 40 40"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="18" />
        <line x1="20" y1="12" x2="20" y2="24" />
        <circle cx="20" cy="32" r="1" />
      </svg>

      <p style={{ margin: 0, fontWeight: "bold" }}>
        {message || "Something went wrong. Please try again later."}
      </p>

      {onRetry && (
        <button
          className={css.retryButton}
          onClick={onRetry}
          aria-label="Retry loading"
        >
          Retry
        </button>
      )}

      <div className={css.navigationButtons}>
        <button onClick={() => router.back()} className={css.navButton}>
          ← Back
        </button>
        <button onClick={() => router.push("/")} className={css.navButton}>
          ⌂ Home
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
