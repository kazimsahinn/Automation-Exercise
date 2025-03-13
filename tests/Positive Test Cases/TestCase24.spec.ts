// Test Case 24: Download Invoice after purchase order
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Add products to cart
// 5. Click 'Cart' button
// 6. Verify that cart page is displayed
// 7. Click Proceed To Checkout
// 8. Click 'Register / Login' button
// 9. Fill all details in Signup and create account
// 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
// 11. Verify ' Logged in as username' at top
// 12.Click 'Cart' button
// 13. Click 'Proceed To Checkout' button
// 14. Verify Address Details and Review Your Order
// 15. Enter description in comment text area and click 'Place Order'
// 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
// 17. Click 'Pay and Confirm Order' button
// 18. Verify success message 'Your order has been placed successfully!'
// 19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
// 20. Click 'Continue' button
// 21. Click 'Delete Account' button
// 22. Verify 'ACCOUNT DELETED!' and click 'Continue' button


import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {CartPage} from "../../pages/CartPage";
import {SignLoginPage} from "../../pages/SignLoginPage";



test.describe.serial('Test Case 24: Download Invoice after purchase order', () => {

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



    test('Download Invoice after purchase order', async ({ page }) => {

        await homePage.scrollFirstProduct();
        await homePage.clickFirstAddToCartButton();
        await homePage.clickContinueShoppingButton();
        await homePage.clickCart();
        await cartPage.verifyShoppingCartVisibility();
        await cartPage.clickProceedToCheckout();
        await cartPage.clickRegisterLoginButtonInCart();
        await signLoginPage.inputNewUserName('Kazim');
        await signLoginPage.inputNewUserEmail('test2875@test.com');
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
        await homePage.clickCart();
        await cartPage.clickProceedToCheckout();
        await cartPage.verifyDeliveryAddressVisibility();
        await cartPage.verifyBillingAddressVisibility();
        await cartPage.inputCommentText('Please deliver between 9 AM - 5 PM. Thank you!');
        await cartPage.clickPlaceOrder();
        await cartPage.verifyPaymentVisibility();
        await cartPage.inputCardDetails({
            CardName: 'Kazim',
            CardNumber: '321654987',
            CardCVC: '321',
            ExpiraitonMM: '07',
            ExpiraitonYY: '2035'
        })

        await cartPage.clickPayAndConfirmOrder();
        await cartPage.verifyOrderPlacedVisibility();
        await cartPage.clickDownloadInvoice();
        await cartPage.verifyFileDownloaded('C:\\Users\\kazms\\AquaProjects\\Automation Exercise');
        await cartPage.deleteDownloadedFile('invoice.txt');
        await homePage.clickDeleteAccount();





    });


});
