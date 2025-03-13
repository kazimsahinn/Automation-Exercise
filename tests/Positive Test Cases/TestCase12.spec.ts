// Test Case 12: Add Products in Cart
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'Products' button
// 5. Hover over first product and click 'Add to cart'
// 6. Click 'Continue Shopping' button
// 7. Hover over second product and click 'Add to cart'
// 8. Click 'View Cart' button
// 9. Verify both products are added to Cart
// 10. Verify their prices, quantity and total price




import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {ProductPage} from "../../pages/ProductPage";




test.describe.serial('Test Case 12: Add Products in Cart', () => {

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



    test('Add Products in Cart', async ({ page }) => {

        await homePage.clickProducts();
        await homePage.scrollFirstProduct();
        await homePage.clickFirstAddToCartButton();
        await homePage.clickContinueShoppingButton();
        await homePage.scrollSecondProduct();
        await homePage.clickSecondAddToCartButton();
        await homePage.clickViewCart();
        await productPage.verifyAddedProductsVisibility();
        await productPage.verifyProductsQuantityInformations();
        await productPage.verifyProductTotalPriceInformations();






    });
});