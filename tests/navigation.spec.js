import { test, expect } from '@playwright/test';

test.describe('Site navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // baseURL задаётся в playwright.config.js
  });

  test('Home page shows Home <h1>', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Home');
  });

  test('About link navigates to About and H1 updates', async ({ page }) => {
    await page.click('a[href="about.html"]');
    await expect(page).toHaveURL(/about\.html$/);
    await expect(page.locator('h1')).toHaveText('About');
    await expect(page).toHaveTitle('About');
  });

  test('Contact link navigates to Contact and H1 updates', async ({ page }) => {
    await page.click('a[href="contact.html"]');
    await expect(page).toHaveURL(/contact\.html$/);
    await expect(page.locator('h1')).toHaveText('Contact');
    await expect(page).toHaveTitle('Contact');
  });

});