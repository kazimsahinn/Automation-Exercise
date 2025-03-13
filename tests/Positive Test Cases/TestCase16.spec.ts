// Test Case 16: Place Order: Login before Checkout
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'Signup / Login' button
// 5. Fill email, password and click 'Login' button
// 6. Verify 'Logged in as username' at top
// 7. Add products to cart
// 8. Click 'Cart' button
// 9. Verify that cart page is displayed
// 10. Click Proceed To Checkout
// 11. Verify Address Details and Review Your Order
// 12. Enter description in comment text area and click 'Place Order'
// 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
// 14. Click 'Pay and Confirm Order' button
// 15. Verify success message 'Your order has been placed successfully!'



import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {SignLoginPage} from "../../pages/SignLoginPage";
import {CartPage} from "../../pages/CartPage";



test.describe.serial('Test Case 16: Place Order: Login before Checkout', () => {

    let homePage: HomePage;
    let signLoginPage: SignLoginPage;
    let cartPage: CartPage;


    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        signLoginPage = new SignLoginPage(page);
        cartPage = new CartPage(page);
        await homePage.verifyLogoVisibility();




    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Place Order: Login before Checkout', async ({ page }) => {

        await homePage.clickSignupLoginButton();
        await signLoginPage.inputLoginEmail('test3444@test.com');
        await signLoginPage.inputLoginPassword('123456');
        await signLoginPage.clickLoginButton();
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

    });
});