// Test Case 11: Verify Subscription in Cart page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'Cart' button
// 5. Scroll down to footer
// 6. Verify text 'SUBSCRIPTION'
// 7. Enter email address in input and click arrow button
// 8. Verify success message 'You have been successfully subscribed!' is visible



import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";




test.describe.serial('Test Case 11: Verify Subscription in Cart page', () => {

    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        await homePage.verifyLogoVisibility();



    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Verify Subscription in Cart page', async ({ page }) => {

        await homePage.clickCart();
        await homePage.scrollSubscriptionAndVisibility();
        await homePage.inputSubscriptionEmail('test6544@test.com');
        await homePage.verifySuccessfullySubscribedVisiblity();

        
    });
});