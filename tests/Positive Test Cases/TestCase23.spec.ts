// Test Case 23: Verify address details in checkout page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'Signup / Login' button
// 5. Fill all details in Signup and create account
// 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
// 7. Verify ' Logged in as username' at top
// 8. Add products to cart
// 9. Click 'Cart' button
// 10. Verify that cart page is displayed
// 11. Click Proceed To Checkout
// 12. Verify that the delivery address is same address filled at the time registration of account
// 13. Verify that the billing address is same address filled at the time registration of account
// 14. Click 'Delete Account' button
// 15. Verify 'ACCOUNT DELETED!' and click 'Continue' button



import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {CartPage} from "../../pages/CartPage";
import {SignLoginPage} from "../../pages/SignLoginPage";



test.describe.serial('Test Case 23: Verify address details in checkout page', () => {

    let homePage: HomePage;
    let cartPage: CartPage;
    let signLoginPage: SignLoginPage;



    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        cartPage = new CartPage(page);
        signLoginPage = new SignLoginPage(page);
        await homePage.verifyLogoVisibility();




    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Verify address details in checkout page', async ({ page }) => {

        await homePage.clickSignupLoginButton();
        await signLoginPage.inputNewUserName('Kazim');
        await signLoginPage.inputNewUserEmail('test98765@test.com');
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
        await homePage.scrollFirstProduct();
        await homePage.clickFirstAddToCartButton();
        await homePage.clickContinueShoppingButton();
        await homePage.clickCart();
        await cartPage.verifyShoppingCartVisibility();
        await cartPage.clickProceedToCheckout();
        await cartPage.verifyDeliveryAddressVisibility();
        await cartPage.verifyBillingAddressVisibility();
        await homePage.clickDeleteAccount();
        await homePage.verifyAccountDeletedVisibility();

        

    });


});
