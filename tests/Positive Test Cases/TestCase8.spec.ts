// Test Case 8: Verify All Products and product detail page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. The products list is visible
// 7. Click on 'View Product' of first product
// 8. User is landed to product detail page
// 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand




import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {ProductPage} from "../../pages/ProductPage";



test.describe.serial('Test Case 8: Verify All Products and product detail page', () => {

    let homePage: HomePage;
    let productsPage: ProductPage;

    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        productsPage = new ProductPage(page);
        await homePage.verifyLogoVisibility();



    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Verify All Products and product detail page', async ({ page }) => {

        await homePage.clickProducts();
        await productsPage.verifyAllProductsTitleVisibility();
        await productsPage.clickFirstViewProduct();
        await productsPage.verifyProductDetails();




    });
});