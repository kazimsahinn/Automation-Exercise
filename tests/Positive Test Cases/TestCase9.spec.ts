// Test Case 9: Search Product
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. Enter product name in search input and click search button
// 7. Verify 'SEARCHED PRODUCTS' is visible
// 8. Verify all the products related to search are visible



import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {ProductPage} from "../../pages/ProductPage";



test.describe.serial('Test Case 9: Search Product', () => {

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



    test('Search Product', async ({ page }) => {

        await homePage.clickProducts();
        await productsPage.verifyAllProductsTitleVisibility();
        await productsPage.inputSearchProductText('Men Tshirt');
        await productsPage.verifySearchTextVisibility();






    });
});