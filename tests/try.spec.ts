import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.waitForSelector('#app > div > div > div.pattern-backgound.playgound-header > div');
    
    // Check if the locator contains the text "Login" and is visible
    const loginElement = await page.locator('#app > div > div > div.pattern-backgound.playgound-header > div');
    await expect(loginElement).toHaveText('Login');
    await expect(loginElement).toBeVisible();
});