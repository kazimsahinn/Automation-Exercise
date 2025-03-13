// Test Case 10: Verify Subscription in home page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down to footer
// 5. Verify text 'SUBSCRIPTION'
// 6. Enter email address in input and click arrow button
// 7. Verify success message 'You have been successfully subscribed!' is visible

import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";




test.describe.serial('Test Case 10: Verify Subscription in home page', () => {

    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        await homePage.verifyLogoVisibility();



    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Verify Subscription in home page', async ({ page }) => {

        await homePage.scrollSubscriptionAndVisibility();
        await homePage.inputSubscriptionEmail('test6544@test.com');
        await homePage.verifySuccessfullySubscribedVisiblity();

    });
});