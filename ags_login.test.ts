//npx playwright codegen
//npx playwright test
import { test, expect } from '@playwright/test';
 
test('Verify AGS Landing Page Content', async ({ page }) => {
    await page.goto('https://stgezauthentication.ezdicloud.com/login');
    await expect(page).toHaveURL('https://stgezauthentication.ezdicloud.com/login');
    await expect(page).toHaveTitle('AGS Health - Revenue to Realize Your Vision');
    await expect(page.locator('.ags-logo-new')).toBeVisible();
    await expect(page.locator('text=CPT © 2023 American Medical')).toBeVisible();
    await expect(page.locator('text=CPT ® is a registered')).toBeVisible();
    await expect(page.locator('text=© 2023 AGS Health LLC')).toBeVisible();
    await expect(page.locator('text=AMA Copyright')).toBeEnabled();
    await expect(page.locator('text=AHA Copyright')).toBeEnabled();
    await expect(page.locator('text=Privacy Policy')).toBeEnabled();
    await expect(page.locator('text=Terms of Use')).toBeEnabled();
    await expect(page.locator('text=Forgot password')).toBeEnabled();
    await expect(page).toHaveScreenshot();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('blewis.emcara');
    await page.getByPlaceholder('Password').press('Tab');
    await page.getByPlaceholder('Password').fill('M!dgetG!dget2024');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page).toHaveURL('https://stgezauthentication.ezdicloud.com/home');
    await expect(page.locator('text=Admin')).toBeEnabled();
    await expect(page.locator('text=CAPC')).toBeEnabled();
    await expect(page).toHaveScreenshot();
    if( await page.$('text=CAPC')){
        await page.locator('text=CAPC').click()};
    await expect(page).toHaveURL('https://stgezcapc.ezdicloud.com/worklist');
    await expect(page.locator('text=home')).toBeEnabled();
    await expect(page.locator('text=notification_important')).toBeEnabled();
    await expect(page.locator('text=Saved Searches')).toBeVisible();
    await expect(page).toHaveScreenshot();
    await page.getByRole('button', { name: 'B' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    page.close
});
