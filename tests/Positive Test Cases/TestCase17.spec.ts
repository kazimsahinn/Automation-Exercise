// Test Case 17: Remove Products From Cart
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Add products to cart
// 5. Click 'Cart' button
// 6. Verify that cart page is displayed
// 7. Click 'X' button corresponding to particular product
// 8. Verify that product is removed from the cart


import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {CartPage} from "../../pages/CartPage";





test.describe.serial('Test Case 17: Remove Products From Cart', () => {

    let homePage: HomePage;
    let cartPage: CartPage;


    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        cartPage = new CartPage(page);
        await homePage.verifyLogoVisibility();




    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Remove Products From Cart', async ({ page }) => {

        await homePage.scrollFirstProduct();
        await homePage.clickFirstAddToCartButton();
        await homePage.clickContinueShoppingButton();
        await homePage.clickCart();
        await cartPage.clickRemoveProductButton();
        await cartPage.verifyCartIsEmptyVisibility();



    });
});