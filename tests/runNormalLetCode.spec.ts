import { expect, selectors, test } from '@playwright/test';
test('login', async ({ page }) => {
    await page.goto('https://letcode.in/');
    await page.waitForTimeout(4000);
    await page.locator("//div/a[text()='Log in']").click();
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='email']").fill('koushik1@letcode.in');
    await page.locator("//input[@name='password']").fill('Pass123$');
    await page.locator("//button[text()='LOGIN']").click();
    await page.waitForTimeout(5000);
    await expect(page.locator("//div/a[text()='Sign out']")).toBeVisible();
    await expect(page.locator("//h1[text()=' LetCode with Koushik']")).toBeVisible();
   
});
