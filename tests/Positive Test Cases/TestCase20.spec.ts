// Test Case 20: Search Products and Verify Cart After Login
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify user is navigated to ALL PRODUCTS page successfully
// 5. Enter product name in search input and click search button
// 6. Verify 'SEARCHED PRODUCTS' is visible
// 7. Verify all the products related to search are visible
// 8. Add those products to cart
// 9. Click 'Cart' button and verify that products are visible in cart
// 10. Click 'Signup / Login' button and submit login details
// 11. Again, go to Cart page
// 12. Verify that those products are visible in cart after login as well


import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../../setupTest/test-setup';
import {HomePage} from "../../pages/HomePage";
import {ProductPage} from "../../pages/ProductPage";
import {CartPage} from "../../pages/CartPage";
import {SignLoginPage} from "../../pages/SignLoginPage";





test.describe.serial('Test Case 20: Search Products and Verify Cart After Login', () => {

    let homePage: HomePage;
    let productPage: ProductPage;
    let cartPage: CartPage;
    let signLoginPage: SignLoginPage;


    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);
        signLoginPage = new SignLoginPage(page);
        await homePage.verifyLogoVisibility();




    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });



    test('Search Products and Verify Cart After Login', async ({ page }) => {

        await homePage.clickProducts();
        await productPage.verifyAllProductsTitleVisibility();
        await productPage.inputSearchProductText('Men Tshirt');
        await productPage.verifySearchTextVisibility();
        await productPage.clickAddSearchedProductCart();
        await homePage.clickContinueShoppingButton();
        await homePage.clickCart();
        await cartPage.verifyMenTshirtVisibilityInCart();
        await homePage.clickSignupLoginButton();
        await signLoginPage.inputLoginEmail('test3444@test.com');
        await signLoginPage.inputLoginPassword('123456');
        await signLoginPage.clickLoginButton();
        await homePage.verifyAccountNameVisibility();
        await homePage.clickCart();
        await cartPage.verifyMenTshirtVisibilityInCart();




    });
});
