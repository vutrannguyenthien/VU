import { expect, selectors, test } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage.ts';
import { ProfilePage } from './pageObjects/ProfilePage.ts';

test('login', async ({ page }) => {
    //test.slow();    
    const newLogin = new LoginPage(page);
    await newLogin.goto();
    await page.waitForTimeout(5000);

    await newLogin.loginAction('testuser','Password@123');
    await page.waitForTimeout(5000);

    const newProfile = new ProfilePage(page);
    await newProfile.checkLogoutBtnDisplay();
    await newProfile.clickElementBtnDisplay();
    await newProfile.clickWebTableBtnDisplay();
    await newProfile.checkTableDisplay();
});







