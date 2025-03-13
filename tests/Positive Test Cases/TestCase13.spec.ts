// Test Case 13: Verify Product quantity in Cart
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'View Product' for any product on home page
// 5. Verify product detail is opened
// 6. Increase quantity to 4
// 7. Click 'Add to cart' button
// 8. Click 'View Cart' button
// 9. Verify that product is displayed in cart page with exact quantity




import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {ProductPage} from "../../pages/ProductPage";





test.describe.serial('Test Case 13: Verify Product quantity in Cart', () => {

    let homePage: HomePage;
    let productPage: ProductPage;


    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        await homePage.verifyLogoVisibility();



    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Verify Product quantity in Cart', async ({ page }) => {

        await homePage.clickFirstViewProduct();
        await productPage.verifyWriteYourReviewVisibility();
        await productPage.inputQuantity('4');
        await productPage.clickAddToCart();
        await productPage.clickViewCart();
        await productPage.verifyQuantityNumberVisibility();


    });
});