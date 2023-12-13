import { test, expect } from '@playwright/test';

test('Verify Innovaccer Login', async ({ page }) => {
  await page.goto('https://emcarahealth-staging.innovaccer.com/login');
  await page.getByText('Azure').click();
  await expect(page).toHaveURL('https://emcarahealth-staging.innovaccer.com/login');
  await expect(page).toHaveURL('https://emcarahealth-staging.innovaccer.com/overview');
  await page.getByText('bruce').hover();
  await page.getByRole('link', { name: 'Logout' }).click();
  page.close
});
