// Test Case 3: Login User with incorrect email and password
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter incorrect email address and password
// 7. Click 'login' button
// 8. Verify error 'Your email or password is incorrect!' is visible


import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {SignLoginPage} from "../../pages/SignLoginPage";



test.describe.serial('Test Case 3: Login User with incorrect email and password', () => {

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

    test('Login User with incorrect email and password', async ({ page }) => {

        await homePage.clickSignupLoginButton();
        await signLoginPage.verifyLoginToYourAccountVisibility();
        await signLoginPage.inputLoginEmail('test78@test.com');
        await signLoginPage.inputLoginPassword('12345');
        await signLoginPage.clickLoginButton();
        await signLoginPage.verifyEmailOrPasswordIncorrectVisibility();


    });


});