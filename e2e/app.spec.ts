import { test, expect } from "@playwright/test";
// ----------------------------------------------------------------------
const APP_DEV_HOST = "http://localhost:8000";
const DOMAIN_ADDRESS = "localhost";
// ----------------------------------------------------------------------

test.beforeEach(async ({ page }) => {
  await page.goto(APP_DEV_HOST);
});

test.describe("File Manager", () => {
  test("should have a main title", async ({ page }) => {
    await expect(page).toHaveTitle(/File Manager/);
  });

  test("should have a table with cols", async ({ page }) => {
    await page.waitForTimeout(1000);

    await expect(page.getByText("Subject")).toBeVisible();
    await expect(page.getByText("Number of Files")).toBeVisible();
    await expect(page.getByText("Size")).toBeVisible();
    await expect(page.getByText("Validity Period")).toBeVisible();
    await expect(page.getByText("Recipients")).toBeVisible();
  });

  test("should have a table with data items", async ({ page }) => {
    await page.waitForTimeout(1000);
    await expect(page.locator("p")).toContainText(["Expired", DOMAIN_ADDRESS]);
  });

  test("should click on item and redirect to detail page", async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByTestId("totalFiles").first().click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveTitle(/Link Detail/);
    await expect(page.locator("button")).toHaveText("Download");
  });
});
