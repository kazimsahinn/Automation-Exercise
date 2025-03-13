// Test Case 7: Verify Test Cases Page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Test Cases' button
// 5. Verify user is navigated to test cases page successfully

import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {TestCasePage} from "../../pages/TestCasePage";


test.describe.serial('Test Case 7: Verify Test Cases Page', () => {

    let homePage: HomePage;
    let testCasePage: TestCasePage;

    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        testCasePage = new TestCasePage(page);
        await homePage.verifyLogoVisibility();



    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Verify Test Cases Page', async ({ page }) => {

        await testCasePage.clickTestCase();
        await testCasePage.verifyFirstTestCaseVisibility();
        
    });
});