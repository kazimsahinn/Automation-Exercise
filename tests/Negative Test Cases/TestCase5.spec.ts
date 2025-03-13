// Test Case 5: Register User with existing email
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and already registered email address
// 7. Click 'Signup' button
// 8. Verify error 'Email Address already exist!' is visible


import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {SignLoginPage} from "../../pages/SignLoginPage";



test.describe.serial('Test Case 5: Register User with existing email', () => {

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



    test('Register User with existing email', async ({ page }) => {

        await homePage.clickSignupLoginButton();
        await signLoginPage.verifyNewUserSignupVisibility()
        await signLoginPage.inputNewUserName('Kazim')
        await signLoginPage.inputNewUserEmail('test6544@test.com')
        await signLoginPage.clickSignUpButton();
        await signLoginPage.verifyEmailAddressAlreadyExistVisibility();



    });
});