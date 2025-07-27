"use client";

import React from "react";
import { useRouter } from "next/navigation";
import css from "./ErrorMessage.module.css";
import { useUiStore } from "@/lib/store/LoadingStore";
import Loading from "@/src/app/[locale]/loading";
import { useTranslations } from "next-intl";

type ErrorMessageProps = {
  message?: string;
  onRetry?: () => Promise<void> | void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  const router = useRouter();
  const [localLoading, setLocalLoading] = React.useState(false);
  const isGlobalLoading = useUiStore((state) => state.isLoading);
  const t = useTranslations("ErrorMessage");

  const handleRetry = async () => {
    if (!onRetry) return;

    setLocalLoading(true);
    useUiStore.getState().setLoading(true);

    try {
      await onRetry();
    } finally {
      setLocalLoading(false);
      useUiStore.getState().setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className={css.errorContainer}>
        <p className={css.errorMessage}>{message || t("defaultMessage")}</p>
        <div className={css.btns}>
          {onRetry && (
            <button
              className={css.retryButton}
              onClick={handleRetry}
              disabled={localLoading || isGlobalLoading}
            >
              {localLoading || isGlobalLoading ? t("retrying") : t("retry")}
            </button>
          )}
          <button onClick={() => router.back()} className={css.navButton}>
            ← {t("back")}
          </button>
        </div>
        {(localLoading || isGlobalLoading) && (
          <div className="loaderOverlay">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
