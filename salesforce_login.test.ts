import { test, expect } from '@playwright/test';

test('Verify Salesforce Login', async ({ page }) => {
  await page.goto('https://pophealthcare--uat.sandbox.my.salesforce.com/');
  await expect(page.getByAltText('Salesforce')).toBeVisible();
  await expect(page.locator('text=Forgot Your Password')).toBeEnabled();
  await expect(page.locator('text=© 2023 Salesforce, Inc. All rights reserved.')).toBeVisible();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('bruce.lewis@pophealthcare.com.uat');
  await page.getByLabel('Password').press('Tab');
  await page.getByLabel('Password').fill('Q0M!dgetG!dget2024');
  await expect(page).toHaveScreenshot();
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await expect(page).toHaveURL('https://pophealthcare--uat.sandbox.lightning.force.com/lightning/o/UserAppMenuItem/home');
  await expect(page).toHaveScreenshot();
  await page.getByPlaceholder('uiImage').click();
  await page.getByText('Log Out').click();
  page.close
});

