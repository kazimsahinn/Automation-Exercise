// Test Case 6: Contact Us Form
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Contact Us' button
// 5. Verify 'GET IN TOUCH' is visible
// 6. Enter name, email, subject and message
// 7. Upload file
// 8. Click 'Submit' button
// 9. Click OK button
// 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
// 11. Click 'Home' button and verify that landed to home page successfully


import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {SignLoginPage} from "../../pages/SignLoginPage";
import {ContactUsPage} from "../../pages/ContactUsPage";



test.describe.serial('Test Case 6: Contact Us Form', () => {

    let homePage: HomePage;
    let contactUsPage: ContactUsPage;

    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        contactUsPage = new ContactUsPage(page);
        await homePage.verifyLogoVisibility();



    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Contact Us Form', async ({ page }) => {

        await homePage.clickContactUs();
        await contactUsPage.verifyContactUsTitleVisibility();
        await contactUsPage.inputName('Kazim');
        await contactUsPage.inputEmail('test6544@test.com');
        await contactUsPage.inputSubject('Bug');
        await contactUsPage.inputYourMessage('I found a bug on the website. Please check it.')
        await contactUsPage.uploadFile();
        await contactUsPage.acceptSubmitConfirmation();
        await contactUsPage.clickSubmitButton();
        await contactUsPage.verifySuccessMessageVisiblity();


    });
});