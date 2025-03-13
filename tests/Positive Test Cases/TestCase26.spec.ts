// Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down page to bottom
// 5. Verify 'SUBSCRIPTION' is visible
// 6. Scroll up page to top
// 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen



import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";



test.describe.serial('Test Case 26: Verify Scroll Up without \'Arrow\' button and Scroll Down functionality', () => {

    let homePage: HomePage;




    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        await homePage.verifyLogoVisibility();




    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Test Case 26: Verify Scroll Up without \'Arrow\' button and Scroll Down functionality', async ({ page }) => {

        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await homePage.verifySubscriptionVisibility();
        await page.evaluate(() => {
            window.scrollTo(0, 0);
        });
        await homePage.verifyFullFledgedTextVisibility();



    });
});
