// Test Case 4: Logout User
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter correct email address and password
// 7. Click 'login' button
// 8. Verify that 'Logged in as username' is visible
// 9. Click 'Logout' button
// 10. Verify that user is navigated to login page

import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {SignLoginPage} from "../../pages/SignLoginPage";



test.describe.serial('Test Case 4: Logout User', () => {

    let homePage: HomePage;
    let signLoginPage: SignLoginPage;

    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        signLoginPage = new SignLoginPage(page);
        await homePage.verifyLogoVisibility();



    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Logout User', async ({ page }) => {

        await homePage.clickSignupLoginButton();
        await signLoginPage.verifyLoginToYourAccountVisibility();
        await signLoginPage.inputLoginEmail('test6544@test.com');
        await signLoginPage.inputLoginPassword('123456');
        await signLoginPage.clickLoginButton();
        await homePage.verifyAccountNameVisibility();
        await homePage.clickLogout();
        await signLoginPage.verifyLoginToYourAccountVisibility();


    });
});