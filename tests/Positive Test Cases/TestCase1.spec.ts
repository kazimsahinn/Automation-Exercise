
// Test Case 1: Register User
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and email address
// 7. Click 'Signup' button
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button



import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {SignLoginPage} from "../../pages/SignLoginPage";



test.describe.serial('Test Case 1: Register User', () => {

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

    test('Register User and Delete Test', async ({ page }) => {

       await homePage.clickSignupLoginButton();
       await signLoginPage.verifyNewUserSignupVisibility();
       await signLoginPage.inputNewUserName('Kazim');
       await signLoginPage.inputNewUserEmail('test787@test.com');
       await signLoginPage.clickSignUpButton();
       await signLoginPage.verifyEnterAccountInformationVisibility();
       await signLoginPage.checkGenderTitle();
       await signLoginPage.inputPassword('123456');
       await signLoginPage.inputDateOfBirth({
            day:'29',
            month: 'July',
            year: '1994'
       });
       await signLoginPage.checkNewsletter();
       await signLoginPage.inputAdressDetails({
           FirstName: 'Kazim',
           LastName: 'Şahin',
           Adress: '1234 Ocean Drive, Suite 567',
           Country: 'United States',
           State: 'Florida',
           City: 'Miami',
           Zipcode: '33101',
           MobileNumber: '555444333'
       })

        await signLoginPage.clickCreateAccountButton();
        await signLoginPage.verifyAccountCreatedTextVisibility();
        await signLoginPage.clickContinueButton();
        await homePage.verifyAccountNameVisibility();
        await homePage.clickDeleteAccount();
        await homePage.verifyAccountDeletedVisibility();

    });

});



