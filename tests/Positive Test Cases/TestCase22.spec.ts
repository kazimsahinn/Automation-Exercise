// Test Case 22: Add to cart from Recommended items
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Scroll to bottom of page
// 4. Verify 'RECOMMENDED ITEMS' are visible
// 5. Click on 'Add To Cart' on Recommended product
// 6. Click on 'View Cart' button
// 7. Verify that product is displayed in cart page



import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {CartPage} from "../../pages/CartPage";



test.describe.serial('Test Case 22: Add to cart from Recommended items', () => {

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



    test('Add to cart from Recommended items', async ({ page }) => {

        await homePage.scrollRecommendedItems();
        await homePage.verifyRecommendedItemsVisibility();
        await homePage.clickRecommendedProductAddToCart();
        await homePage.clickViewCart();
        await cartPage.verifyBlueTopProductVisibility();


    });
});
