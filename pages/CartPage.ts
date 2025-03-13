import {expect, Page} from '@playwright/test';
import * as path from "node:path";
import * as fs from "node:fs";


export class CartPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async clickProceedToCheckout(){
        const proceedCheckout = await this.page.getByText('Proceed To Checkout');
        await proceedCheckout.click();

    }


    async verifyDeliveryAddressVisibility(){

        const name = await this.page.getByText('Mr. Kazim Şahin').first().textContent();
        const address = await this.page.getByText('1234 Ocean Drive, Suite 567').first().textContent();
        const stateZip = await this.page.locator('//li[@class=\'address_city address_state_name address_postcode\']').first().textContent();
        const country = await this.page.getByText('United States').first().textContent();
        const phone = await this.page.getByText('555444333').first().textContent();


        expect(name).toBe('Mr. Kazim Şahin');
        expect(address).toBe('1234 Ocean Drive, Suite 567');
        expect(stateZip).toContain('Miami Florida');
        expect(country).toBe('United States');
        expect(phone).toBe('555444333');
    }

    async verifyBillingAddressVisibility(){

        const name = await this.page.getByText('Mr. Kazim Şahin').last().textContent();
        const address = await this.page.getByText('1234 Ocean Drive, Suite 567').last().textContent();
        const stateZip = await this.page.locator('//li[@class=\'address_city address_state_name address_postcode\']').last().textContent();
        const country = await this.page.getByText('United States').last().textContent();
        const phone = await this.page.getByText('555444333').last().textContent();


        expect(name).toBe('Mr. Kazim Şahin');
        expect(address).toBe('1234 Ocean Drive, Suite 567');
        expect(stateZip).toContain('Miami Florida');
        expect(country).toBe('United States');
        expect(phone).toBe('555444333');
    }

    async inputCommentText(Text: string){
        const commentText = await this.page.locator('//textarea[@name=\'message\']');
        await commentText.fill(Text);

    }

    async clickPlaceOrder(){
        const placeOrder = await this.page.getByText('Place Order');
        await placeOrder.click();

    }

    async verifyPaymentVisibility(){
        const paymentTitle = await this.page.locator('//h2[@class=\'heading\']');
        await expect(paymentTitle).toBeVisible();
    }


    async inputCardDetails(CardDetails: {
        CardName: string,
        CardNumber: string,
        CardCVC: string,
        ExpiraitonMM: string,
        ExpiraitonYY: string
    }){
        const cardName = await this.page.locator('//input[@data-qa=\'name-on-card\']');
        await cardName.fill(CardDetails.CardName);

        const cardNumber = await this.page.locator('//input[@data-qa=\'card-number\']');
        await cardNumber.fill(CardDetails.CardNumber);

        const cardCVC = await this.page.locator('//input[@data-qa=\'cvc\']');
        await cardCVC.fill(CardDetails.CardCVC);

        const expirationMM = await this.page.locator('//input[@data-qa=\'expiry-month\']');
        await expirationMM.fill(CardDetails.ExpiraitonMM);

        const expirationYY = await this.page.locator('//input[@data-qa=\'expiry-year\']');
        await expirationYY.fill(CardDetails.ExpiraitonYY);

    }

    async clickPayAndConfirmOrder(){
        const PayAndConfirmOrder = await this.page.getByText('Pay and Confirm Order');
        await PayAndConfirmOrder.click();
    }

    async verifyOrderPlacedVisibility(){
        const OrderPlaced = await this.page.getByText('Order Placed!');
        await expect(OrderPlaced).toBeVisible();
    }


    async verifyShoppingCartVisibility(){
        const ShoppingCart = await this.page.getByText('Shopping Cart');
        await expect(ShoppingCart).toBeVisible();
    }


    async clickRemoveProductButton(){
        const RemoveProduct = await this.page.locator('//a[@class=\'cart_quantity_delete\']');
        await RemoveProduct.click();

    }


    async verifyCartIsEmptyVisibility(){
        const CartEmpty = await this.page.getByText('Cart is empty!');
        await expect(CartEmpty).toBeVisible();
    }

    async verifyMenTshirtVisibilityInCart(){
        const MenTshirt = await this.page.getByText('Men Tshirt');
        await expect(MenTshirt).toBeVisible();
    }

    async verifyBlueTopProductVisibility(){
        const bluetop = await this.page.getByText('Blue Top');
        await expect(bluetop).toBeVisible();

    }

    async clickRegisterLoginButtonInCart(){
        const RegisterLogin = await this.page.getByText('Register / Login').last();
        await RegisterLogin.click();

    }

    async clickDownloadInvoice() {

        const downloadPath = path.resolve(__dirname, 'C:\\Users\\kazms\\AquaProjects\\Automation Exercise');


        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.page.getByText('Download Invoice').click()
        ]);


        const filePath = path.join(downloadPath, download.suggestedFilename());
        await download.saveAs(filePath);


        await this.verifyFileDownloaded(filePath);
    }

    async verifyFileDownloaded(filePath: string) {
        const fs = require('fs');


        if (fs.existsSync(filePath)) {
            console.log(`Dosya başarıyla indirildi: ${filePath}`);
            expect(fs.existsSync(filePath)).toBe(true);
        } else {
            console.log('Dosya indirilemedi.');
            expect(fs.existsSync(filePath)).toBe(true);
        }
    }

    async  deleteDownloadedFile(filePath: string) {
        try {

            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                console.log(`Dosya silindi: ${filePath}`);
            } else {
                console.log('Silinecek dosya bulunamadı.');
            }
        } catch (error) {
            console.error('Dosya silinirken hata oluştu:', error);
        }
    }




}