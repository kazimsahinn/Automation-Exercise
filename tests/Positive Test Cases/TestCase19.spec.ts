// Test Case 19: View & Cart Brand Products
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify that Brands are visible on left side bar
// 5. Click on any brand name
// 6. Verify that user is navigated to brand page and brand products are displayed
// 7. On left side bar, click on any other brand link
// 8. Verify that user is navigated to that brand page and can see products



import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {ProductPage} from "../../pages/ProductPage";





test.describe.serial('Test Case 19: View & Cart Brand Products', () => {

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



    test('View & Cart Brand Products', async ({ page }) => {

        await homePage.clickProducts();
        await productPage.verifyBrandsVisibility();
        await productPage.clickHMbrand();
        await productPage.verifyBrandHMProductsTitleVisibility();
        await productPage.clickPoloBrand();
        await productPage.verifyBrandPoloProductsTitleVisibility();

        

    });
});