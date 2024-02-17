import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
/*test('has titles', async ({ page }) => {
  await //page.goto('https://www.foody.vn/');

  // Expect a title "to contain" a substring.
  await //expect(page).toHaveTitle("Địa điểm ăn uống, ẩm thực, ăn gì ở đâu tại Hà Nội, nhà hàng, cafe | Ăn uống | Foody.vn");
*/

test('has titles', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
});

