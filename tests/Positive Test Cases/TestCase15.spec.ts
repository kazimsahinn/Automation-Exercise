// Test Case 15: Place Order: Register before Checkout
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
// 12. Verify Address Details and Review Your Order
// 13. Enter description in comment text area and click 'Place Order'
// 14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
// 15. Click 'Pay and Confirm Order' button
// 16. Verify success message 'Your order has been placed successfully!'
// 17. Click 'Delete Account' button
// 18. Verify 'ACCOUNT DELETED!' and click 'Continue' button


import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {ProductPage} from "../../pages/ProductPage";
import {SignLoginPage} from "../../pages/SignLoginPage";
import {sign} from "node:crypto";
import {CartPage} from "../../pages/CartPage";





test.describe.serial('Test Case 15: Place Order: Register before Checkout', () => {

    let homePage: HomePage;
    let productPage: ProductPage;
    let signLoginPage: SignLoginPage;
    let cartPage: CartPage;


    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        signLoginPage = new SignLoginPage(page);
        cartPage = new CartPage(page);
        await homePage.verifyLogoVisibility();




    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Place Order: Register before Checkout', async ({ page }) => {

        await homePage.clickSignupLoginButton();
        await signLoginPage.inputNewUserName('Kazim');
        await signLoginPage.inputNewUserEmail('test18765@test.com');
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
        await homePage.clickDeleteAccount();
        await homePage.verifyAccountDeletedVisibility();

    });
});