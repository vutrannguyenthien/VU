import { expect, type Locator, type Page } from '@playwright/test';
import {Homepage} from './HomePageLetCode';
export class LoginPageLetCode {
    readonly page: Page
    readonly loginBtn: Locator
    readonly mailTxt: Locator
    readonly passwordTxt: Locator
    readonly login1Btn:Locator
    constructor(page: Page) {
        this.page = page;
        this.mailTxt ="//input[@name='email']" ;
        this.passwordTxt ="//input[@name='password']" ;
        this.loginBtn ="//div/a[text()='Log in']" ;
        this.login1Btn="//button[text()='LOGIN']";
      }
      async goto() {
        await this.page.goto("https://letcode.in/");
      }
      async click() {
        await this.page.locator(this.loginBtn).click();
      }
      async loginAction(username, password){
        await this.page.locator(this.mailTxt).fill(username);
        await this.page.locator(this.passwordTxt).fill(password);
        await this.page.locator(this.login1Btn).click();
     }
}