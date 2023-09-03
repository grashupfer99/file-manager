import {
  truncateText,
  formatFileSize,
  formatTimestamp,
  formatExpiredDate,
  formatTotalFileCount,
  formatNumberWithCommas,
} from "utils";
import { it, expect, describe } from "vitest";
// ----------------------------------------------------------------------

// formatFileSize
describe("__formatFileSize__", () => {
  const TEST_CASES = [
    { input: 0, expected: "0 Bytes" },
    { input: 1024, expected: "1.00 KB" },
    { input: 2048, expected: "2.00 KB" },
    { input: 10860, expected: "10.61 KB" },
    { input: 34620, expected: "33.81 KB" },
    { input: 1048576, expected: "1.00 MB" },
    { input: 2097152, expected: "2.00 MB" },
    { input: 1073741824, expected: "1.00 GB" },
    { input: 1693409494, expected: "1.58 GB" },
    { input: 2147483648, expected: "2.00 GB" },
    { input: 1099511627776, expected: "1.00 TB" },
    { input: 2199023255552, expected: "2.00 TB" },
    { input: 512, expected: "512.00 Bytes" },
    { input: 768, expected: "768.00 Bytes" },
    { input: undefined, expected: "" },
  ];
  TEST_CASES.forEach(({ input, expected }, i) => {
    it(`Test case ${i + 1}: should format ${input} bytes correctly`, () => {
      const result = formatFileSize(input as number);
      expect(result).toBe(expected);
    });
  });
});

// formatTotalFileCount
describe("__formatTotalFileCount__", () => {
  const TEST_CASES = [
    { input: 0, expected: "Total 0 Files" },
    { input: 1, expected: "Total 1 File" },
    { input: 2, expected: "Total 2 Files" },
    { input: 10, expected: "Total 10 Files" },
    { input: 100, expected: "Total 100 Files" },
    { input: undefined, expected: "" },
    { input: null, expected: "" },
  ];

  TEST_CASES.forEach(({ input, expected }) => {
    it(`should return '${expected}' for input '${input}'`, () => {
      const result = formatTotalFileCount(input as number);
      expect(result).toBe(expected);
    });
  });
});

// formatNumberWithCommas
describe("__formatNumberWithCommas__", () => {
  const TEST_CASES = [
    { input: 0, expected: "0" },
    { input: 1, expected: "1" },
    { input: 12, expected: "12" },
    { input: 123, expected: "123" },
    { input: 1234, expected: "1,234" },
    { input: 12345, expected: "12,345" },
    { input: 123456, expected: "123,456" },
    { input: 1234567, expected: "1,234,567" },
    { input: 0.5, expected: "0.5" }, // Decimal values
    { input: 10000.5, expected: "10,000.5" },
    { input: null, expected: "" }, // Null input
    { input: undefined, expected: "" }, // Undefined input
    { input: "", expected: "" }, // Empty string input
  ];

  TEST_CASES.forEach(({ input, expected }) => {
    it(`should return '${expected}' for input '${input}'`, () => {
      const result = formatNumberWithCommas(input as number);
      expect(result).toBe(expected);
    });
  });
});

// truncateText
describe("__truncateText__", () => {
  const TEST_CASES = [
    {
      input: "Short text",
      maxLength: 20,
      expected: "Short text",
    },
    {
      input: "This is a longer text that needs to be truncated.",
      maxLength: 20,
      expected: "This is a longer tex...",
    },
    {
      input:
        "This is a longer text that needs to be truncated too but it should be tested again.",
      maxLength: 40,
      expected: "This is a longer text that needs to be t...",
    },
    {
      input: "1234567890",
      maxLength: 5,
      expected: "12345...",
    },
    {
      input: "",
      maxLength: 10,
      expected: "",
    },
    {
      input: null,
      maxLength: 10,
      expected: "",
    },
    {
      input: undefined,
      maxLength: 10,
      expected: "",
    },
  ];

  TEST_CASES.forEach(({ input, maxLength, expected }, i) => {
    it(`test case ${i + 1}: should truncate text correctly`, () => {
      const result = truncateText(input as string, maxLength);
      expect(result).toBe(expected);
    });
  });
});

// formatTimestamp
describe("__formatTimestamp__", () => {
  const TEST_CASES = [
    {
      input: 1693239694,
      expected: "Tue, Aug 29, 2023, 01:21:34 AM GMT+9",
    },
    {
      input: 1693241001,
      expected: "Tue, Aug 29, 2023, 01:43:21 AM GMT+9",
    },
    {
      input: 1304246400,
      expected: "Sun, May 01, 2011, 07:40:00 PM GMT+9",
    },
    {
      input: 0,
      expected: "Thu, Jan 01, 1970, 09:00:00 AM GMT+9",
    },
    {
      input: undefined,
      expected: "Invalid Date",
    },
  ];

  TEST_CASES.forEach(({ input, expected }, i) => {
    it(`test case ${i + 1}: should format timestamp correctly`, () => {
      const result = formatTimestamp(input as number);
      expect(result).toBe(expected);
    });
  });
});

// formatExpiredDate
describe("formatExpiredDate", () => {
  const TEST_CASES = [
    {
      input: 0,
      expected: "Expired",
    },
    {
      input: 34, // 34 seconds
      expected: "0 hours 0 minutes",
    },
    {
      input: 3600, // 1 hour
      expected: "1 hours 0 minutes",
    },
    {
      input: 7200, // 2 hours
      expected: "2 hours 0 minutes",
    },
    {
      input: 7260, // 2 hours and 1 minute
      expected: "2 hours 1 minutes",
    },
    {
      input: 86400, // 24 hours
      expected: "24 hours 0 minutes",
    },
    {
      input: 169200, // 47 hours
      expected: "47 hours 0 minutes",
    },
    {
      input: 172800, // 48 hours
      expected: "2 days",
    },
    {
      input: 180000, // 50 hours
      expected: "2 days",
    },
    {
      input: 360000, // 100 hours
      expected: "4 days",
    },
  ];

  TEST_CASES.forEach(({ input, expected }, i) => {
    it(`test case ${i + 1}: should format expired date correctly`, () => {
      const result = formatExpiredDate(input);
      expect(result).toBe(expected);
    });
  });
});
