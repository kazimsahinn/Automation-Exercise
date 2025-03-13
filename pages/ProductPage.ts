import {expect, Page} from '@playwright/test';
import * as sea from "node:sea";


export class ProductPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }





    async verifyAllProductsTitleVisibility(){
        const AllProductsTitle = await this.page.locator('//h2[@class=\'title text-center\']');
        await expect(AllProductsTitle).toBeVisible();
    }

    async clickFirstViewProduct(){
        const ViewProduct = await this.page.getByText('View Product').first();
        await ViewProduct.click();

    }


    async verifyProductDetails() {
        const productName = await this.page.locator('//div[@class=\'product-information\']//h2');
        const category = await this.page.locator('//div[@class=\'product-information\']//p').first();
        const price = await this.page.locator('//span[.=\'Rs. 500\']');
        const availability = await this.page.locator('//div[@class=\'product-information\']//p').nth(1);
        const condition = await this.page.locator('//div[@class=\'product-information\']//p').nth(2);
        const brand = await this.page.locator('//div[@class=\'product-information\']//p').last();


        await expect(productName).toBeVisible();
        await expect(category).toBeVisible();
        await expect(price).toBeVisible();
        await expect(availability).toBeVisible();
        await expect(condition).toBeVisible();
        await expect(brand).toBeVisible();
    }


    async inputSearchProductText(text: string){
        const searchText = await this.page.locator('//input[@id=\'search_product\']');
        await searchText.fill(text);
        const searchButton = await this.page.locator('//button[@id=\'submit_search\']');
        await searchButton.click();
    }

    async verifySearchTextVisibility(){
        const search = await this.page.locator('//div[@class=\'productinfo text-center\']//p');
        let actualSearchText = await search.innerText();
        let expectedSearchText = 'Men Tshirt';

        await expect(actualSearchText).toBe(expectedSearchText);

    }


    async clickViewCart(){
        const viewCart = await this.page.getByText('View Cart');
        await viewCart.click();
    }

    async verifyAddedProductsVisibility(){
        const firstProduct = await this.page.getByText('Blue Top');
        await expect(firstProduct).toBeVisible();
        const secondProduct = await this.page.getByText('Men Tshirt');
        await expect(secondProduct).toBeVisible();
    }


    async verifyProductsQuantityInformations(){
        const firstQuantity = await this.page.locator('//button[@class=\'disabled\']').first();
        let actualFirstQuantity = await firstQuantity.innerText();
        let expectedFirstQuantity = '1';
        await expect(actualFirstQuantity).toBe(expectedFirstQuantity);


        const secondQuantity = await this.page.locator('//button[@class=\'disabled\']').last();
        let actualSecondQuantity = await secondQuantity.innerText();
        let expecetedSecondQuantity = '1';
        await expect(actualSecondQuantity).toBe(expecetedSecondQuantity);


    }

    async verifyProductTotalPriceInformations(){
        const firstTotalPrice = await this.page.locator('//p[@class=\'cart_total_price\']').first();
        let actualFirstTotalPrice = await firstTotalPrice.innerText();
        let expectedFirstTotalPrice = 'Rs. 500';
        await expect(actualFirstTotalPrice).toBe(expectedFirstTotalPrice);

        const secondTotalPrice = await this.page.locator('//p[@class=\'cart_total_price\']').last();
        let actualSecondTotalPrice = await secondTotalPrice.innerText();
        let expectedSecondTotalPrice = 'Rs. 400';
        await expect(actualSecondTotalPrice).toBe(expectedSecondTotalPrice);
    }


    async verifyWriteYourReviewVisibility(){
        const writeYourReview = await this.page.getByText('Write Your Review');
        await expect(writeYourReview).toBeVisible();

    }

    async inputQuantity(Number: string){
        const quantity = await this.page.locator('//input[@id=\'quantity\']');
        await quantity.clear();
        await quantity.fill(Number);
    }

    async clickAddToCart(){
        const addToCart = await this.page.locator('//button[@class=\'btn btn-default cart\']');
        await addToCart.click();
    }


    async verifyQuantityNumberVisibility() {
        const firstQuantity = await this.page.locator('//button[@class=\'disabled\']').first();
        let actualQuantity = await firstQuantity.innerText();
        let expectedQuantity = '4';
        await expect(actualQuantity).toBe(expectedQuantity);

    }




    async clickRegisterLoginButton(){
        const RegisterLogin = await this.page.locator('//u[text()=\'Register / Login\']');
        await RegisterLogin.click();
    }


    async verifyWomenDressProductsTitleVisibility(){
        const WomenDressProductsTitle = await this.page.getByText('Women - Dress Products');
        await expect(WomenDressProductsTitle).toBeVisible();
    }


    async verifyMenTshirtsProductsTitleVisibility(){
        const MenTshirtsTitle = await this.page.getByText('Men - Tshirts Products');
        await expect(MenTshirtsTitle).toBeVisible();
    }


    async verifyBrandsVisibility(){
        const Brands = await this.page.locator('//h2[.=\'Brands\']');
        await expect(Brands).toBeVisible();
    }

    async clickHMbrand(){
        const HM = await this.page.getByText('H&M');
        await HM.click();
    }


    async verifyBrandHMProductsTitleVisibility(){
        const BrandHM = await this.page.getByText('Brand - H&M Products');
        await expect(BrandHM).toBeVisible();
    }


    async clickPoloBrand(){
        const Polo = await this.page.getByText('Polo');
        await Polo.click();
    }

    async verifyBrandPoloProductsTitleVisibility(){
        const BrandPolo = await this.page.getByText('Brand - Polo Products');
        await expect(BrandPolo).toBeVisible();
    }


    async clickAddSearchedProductCart(){
        const AddCart = await this.page.getByText('Add to cart').first();
        await AddCart.hover();
        await AddCart.click();
    }


    async inputYourReviewDetails(ReviewDetails:{
        YourName: string,
        EmailAddress: string,
        AddReview: string,

    }){
        const yourName = await this.page.getByPlaceholder('Your Name');
        await yourName.fill(ReviewDetails.YourName);
        const email = await this.page.getByPlaceholder('Email Address').first();
        await email.fill(ReviewDetails.EmailAddress);
        const addReview = await this.page.getByPlaceholder('Add Review Here!');
        await addReview.fill(ReviewDetails.AddReview);
    }


    async clickSubmitButton(){
        const submit = await this.page.locator('//button[@id=\'button-review\']');
        await submit.click();
    }

    async verifyThankYouReviewVisibility(){
        const ThankYouReview = await this.page.getByText('Thank you for your review.');
        await expect(ThankYouReview).toBeVisible();
    }









}