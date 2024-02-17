import { expect, selectors, test } from '@playwright/test';
test('login', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.waitForTimeout(8000);
    
    //await page.waitForSelector('#app > div > div > div.pattern-backgound.playgound-header > div');
   //expect: kiem tra login jhioen thj
    //const loginElement = await page.locator('#app > div > div > div.pattern-backgound.playgound-header > div');
    const loginElement = await page.locator("//div/h1[text()='Login']");
    await expect(loginElement).toHaveText('Login');
    await expect(loginElement).toBeVisible();
    await page.fill('#userName', 'testuser');
    await page.fill('#password', 'Password@123');
    await page.click('#login');
    await page.waitForTimeout(5000);
    
    
//check: logout button hien thi
    await expect(page.getByRole('button',{name: 'Log out'})).toBeVisible();

//click     Elements
    await page.locator("//div[@class='header-text']").getByText('Elements').isVisible();
    await page.locator("//div[@class='header-text']").getByText('Elements').click();
    

//click Textbox
    await page.locator("//ul[@class='menu-list']").getByText('Text Box').click();
//click Upload and Download
    await page.locator("//ul[@class='menu-list']").getByText('Upload and Download').click();
 //check: "Select a file" text displays   
 await page.locator("//div[@class='form-file']").getByText('Select a file').isVisible()


});


//nav[@class='menu-24h-main']/div/ul/li/a[contains(text(),'Tin tức')]









