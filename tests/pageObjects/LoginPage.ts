import { expect, type Locator, type Page } from '@playwright/test';
import { ProfilePage } from './ProfilePage';
export class LoginPage {
    readonly page: Page;
    readonly userNameTxt: Locator;
    readonly passwordTxt: Locator;
    readonly loginBtn: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.userNameTxt = "//input[@id='userName']";
      this.passwordTxt = "//input[@id='password']";
      this.loginBtn = "//button[@id='login']";
    }
    async goto() {
      await this.page.goto('https://demoqa.com/login');
    }

    async loginAction(username, password){
       await this.page.locator(this.userNameTxt).fill(username);
       await this.page.locator(this.passwordTxt).fill(password);
       await this.page.locator(this.loginBtn).click();
       //return ProfilePage();  
    }
}