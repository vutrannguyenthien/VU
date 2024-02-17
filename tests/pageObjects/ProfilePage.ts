import { expect, type Locator, type Page } from '@playwright/test';
import { text } from 'stream/consumers';
export class ProfilePage {
    readonly page: Page;
    readonly elementList: Locator;
    readonly webtableList: Locator;
    readonly table: Locator;
    readonly logoutBtn: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.elementList ="//*[text()='Elements']";
      this.webtableList ="//*[text()='Web Tables']";
      this.table = "//div[@class='rt-table']";
      this.logoutBtn = "//button[@id='submit']";
    }
    async checkLogoutBtnDisplay(){
        await expect(this.page.locator(this.logoutBtn).getByText('Log out')).toBeVisible();

    }
     async clickElementBtnDisplay(){
       await this.page.locator(this.elementList).click();

    }
     async clickWebTableBtnDisplay(){
       await this.page.locator(this.webtableList).click();

    }
     async checkTableDisplay(){
       await expect(this.page.locator(this.table)).toBeVisible();
       

    }
    


}
// table:   //div[@class='rt-table']