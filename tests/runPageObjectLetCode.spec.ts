import { expect, selectors, test } from '@playwright/test';
import { LoginPageLetCode } from './pageObjects/LoginPageLetCode.ts';
import { Homepage } from './pageObjects/HomePageLetCode.ts';
test('login', async ({ page }) => {
      
    const newLogin = new LoginPageLetCode(page);
    await newLogin.goto();
    
    await newLogin.click();
    await page.waitForTimeout(2000);
    await newLogin.loginAction('koushik1@letcode.in','Pass123$');
    await page.waitForTimeout(3000);
    
    const newProfile = new Homepage(page);
    await newProfile.checkHeaderDisplay();
    await newProfile.checkSignoutBtnDisplay();
    
   
});