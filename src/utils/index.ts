// ----------------------------------------------------------------------
export function formatFileSize(bytes: number) {
  if (isNaN(bytes)) return "";
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Bytes";

  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
}

export function formatTotalFileCount(files: number) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (files === null || isNaN(files)) return "";
  const pluralSuffix = files === 1 ? "" : "s";
  return `Total ${files} File${pluralSuffix}`;
}

export function formatNumberWithCommas(number: number) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (number === null || isNaN(number)) return "";
  const numberString = number.toString();
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function truncateText(text: string, maxLength: number = 20) {
  if (typeof text !== "string") return "";
  if (text.length <= maxLength) return text;
  const truncatedText = text.slice(0, maxLength);
  return `${truncatedText}...`;
}

export function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000); // to ms

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  return date.toLocaleString("en-US", options);
}

export function formatExpiredDate(sec: number) {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);

  if (hours === 0 && minutes === 0) {
    if (sec >= 1 && sec <= 59) return `0 hours 0 minutes`;
    else return "Expired";
  } else if (hours < 48) {
    return `${hours} hours ${minutes} minutes`;
  } else if (hours >= 48) {
    const days = Math.floor(hours / 24);
    return `${days} days`;
  } else {
    return "Expired";
  }
}

export async function copyUrlToClipboard(url: string) {
  try {
    await navigator.clipboard.writeText(url);
    alert(`Copied the address of ${url}.`);
  } catch (error) {
    console.error("Copy to clipboard failed: ", error);
  }
}

export function getRemainingSec(expiryTimestamp: number) {
  const now = getCurTimestampSec();
  const initialTimeLeft = expiryTimestamp - now;
  return initialTimeLeft > 0 ? initialTimeLeft : null;
}

export function getCurTimestampSec() {
  return Math.floor(Date.now() / 1000);
}
