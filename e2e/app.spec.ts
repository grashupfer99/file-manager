import { test, expect } from "@playwright/test";
// ----------------------------------------------------------------------
const APP_DEV_HOST = "http://localhost:8000";
const DOMAIN_ADDRESS = "localhost";
// ----------------------------------------------------------------------

test("app loads properly", async ({ page }) => {
  await page.goto(APP_DEV_HOST);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/File Manager/);
});

test("home should have a table with cols", async ({ page }) => {
  await page.goto(APP_DEV_HOST);
  await page.waitForTimeout(2000);

  await expect(page.getByText("Subject")).toBeVisible();
  await expect(page.getByText("Number of Files")).toBeVisible();
  await expect(page.getByText("Size")).toBeVisible();
  await expect(page.getByText("Validity Period")).toBeVisible();
  await expect(page.getByText("Recipients")).toBeVisible();
});

test("table should have items", async ({ page }) => {
  await page.goto(APP_DEV_HOST);
  await page.waitForTimeout(2000);

  await expect(page.locator("p")).toContainText(["Expired", DOMAIN_ADDRESS]);
});
