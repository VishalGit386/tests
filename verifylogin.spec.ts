import {test,expect} from '@playwright/test';
import POManager from '../POM/POManager';

test('verify saucedemo login', async ({ page }) => {
const poManager = new POManager(page);
const loginpage = poManager.getLoginPage();
const locator = page.locator('.title');

 loginpage.goTo();
await loginpage.validlogin();
await expect(locator).toBeVisible();
console.log(locator);



await page.pause();


});