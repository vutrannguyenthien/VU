import { expect, type Locator, type Page } from '@playwright/test';
import { text } from 'stream/consumers';
export class Homepage {
    readonly page: Page
    readonly singoutBtn: Locator
    readonly headerTxt: Locator
    constructor (page:Page) {
        this.page=page;
        this.headerTxt="//h1[text()=' LetCode with Koushik']";
        this.singoutBtn="//div/a[text()='Sign out']";
    }
    async checkSignoutBtnDisplay() {
        await expect(this.page.locator(this.singoutBtn)).toBeVisible();
    }
    async checkHeaderDisplay() {
        await expect(this.page.locator(this.headerTxt)).toBeVisible();
    }
}