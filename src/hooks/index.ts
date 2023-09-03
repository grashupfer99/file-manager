// core
import { useEffect, useState, useMemo } from "react";
// utils
import { getCurTimestampSec, getRemainingSec, formatExpiredDate } from "utils";
// ----------------------------------------------------------------------

export function usePageTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

// ----------------------------------------------------------------------

export function useValidityPeriod({
  expiryTimestamp,
  refreshIntervalMs,
}: {
  expiryTimestamp: number;
  refreshIntervalMs: number;
}) {
  const [timeLeft, setTimeLeft] = useState<number | null>(() =>
    getRemainingSec(expiryTimestamp)
  );

  const validityPeriod = useMemo(() => {
    return timeLeft !== null ? formatExpiredDate(timeLeft) : "Expired";
  }, [timeLeft]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = getCurTimestampSec();
      const timeRemaining = expiryTimestamp - now;

      if (timeRemaining <= 0) {
        setTimeLeft(null);
        clearInterval(intervalId);
      } else {
        setTimeLeft(timeRemaining);
      }
    }, refreshIntervalMs);

    return () => {
      clearInterval(intervalId);
    };
  }, [expiryTimestamp, refreshIntervalMs]);

  return { validityPeriod };
}
