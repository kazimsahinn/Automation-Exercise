import { test, Page } from '@playwright/test';

export async function setupPage(page: Page) {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.automationexercise.com/');
}

export async function cleanupPage(page: Page) {
    await page.close();
}

test.describe('Test Setup', () => {


    test.beforeEach(async ({ page }) => {
        await setupPage(page);
    });

    test.afterEach(async ({ page }) => {
        await cleanupPage(page);
    });
});
