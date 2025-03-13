// Test Case 18: View Category Products
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that categories are visible on left side bar
// 4. Click on 'Women' category
// 5. Click on any category link under 'Women' category, for example: Dress
// 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
// 7. On left side bar, click on any sub-category link of 'Men' category
// 8. Verify that user is navigated to that category page


import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {ProductPage} from "../../pages/ProductPage";





test.describe.serial('Test Case 18: View Category Products', () => {

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



    test('View Category Products', async ({ page }) => {

        await homePage.verifyCategoryVisibility();
        await homePage.clickWomenCategory();
        await homePage.clickWomenDressCategory();
        await productPage.verifyWomenDressProductsTitleVisibility();
        await homePage.clickMenCategory();
        await homePage.clickMenTshirtsCategory();
        await productPage.verifyMenTshirtsProductsTitleVisibility();







    });
});