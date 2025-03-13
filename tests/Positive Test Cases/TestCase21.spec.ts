// Test Case 21: Add review on product
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify user is navigated to ALL PRODUCTS page successfully
// 5. Click on 'View Product' button
// 6. Verify 'Write Your Review' is visible
// 7. Enter name, email and review
// 8. Click 'Submit' button
// 9. Verify success message 'Thank you for your review.'


import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {ProductPage} from "../../pages/ProductPage";


test.describe.serial('Test Case 21: Add review on product', () => {

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



    test('Add review on product', async ({ page }) => {

        await homePage.clickProducts();
        await productPage.verifyAllProductsTitleVisibility();
        await productPage.clickFirstViewProduct();
        await productPage.verifyWriteYourReviewVisibility();
        await productPage.inputYourReviewDetails({
            YourName: 'Kazim',
            EmailAddress: 'test3444@test.com',
            AddReview: 'Great quality for the price! It met my expectations and I would definitely recommend it.'
        })
        await productPage.clickSubmitButton();
        await productPage.verifyThankYouReviewVisibility();






    });
});
