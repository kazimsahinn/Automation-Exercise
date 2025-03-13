import {expect, Page} from '@playwright/test';


export class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async verifyLogoVisibility(){
        const Logo = await this.page.locator('//div[@class=\'logo pull-left\']');
        await Logo.waitFor({state: 'visible'});
        return await Logo.isVisible();
    }

    async clickSignupLoginButton(){
        const  SignUpLoginButton = await this.page.getByText(' Signup / Login');
        await SignUpLoginButton.click();
    }

    async verifyAccountNameVisibility(){
        const AccountName = await this.page.getByText('Kazim');
        await expect(AccountName).toBeVisible();

    }

    async clickDeleteAccount(){
        const deleteAccount = await this.page.getByText(' Delete Account');
        await deleteAccount.click();

    }


    async verifyAccountDeletedVisibility(){
        const AccountDeleted = await this.page.getByText('Account Deleted!');
        await expect(AccountDeleted).toBeVisible();
    }

    async clickLogout(){
        const Logout = await this.page.getByText(' Logout');
        await Logout.click();
    }

    async clickContactUs(){
        const ContactUs = await this.page.getByText(' Contact us');
        await ContactUs.click();
    }


    async scrollSubscriptionAndVisibility(){
        const Subscription = await this.page.locator('//div[@class=\'single-widget\']//h2[text()=\'Subscription\']');
        await Subscription.scrollIntoViewIfNeeded();
        await expect(Subscription).toBeVisible();

    }

    async inputSubscriptionEmail(Email: string){
        const emailText = await this.page.locator('//input[@id=\'susbscribe_email\']');
        await emailText.fill(Email);
        const sendEmail = await this.page.locator('//i[@class=\'fa fa-arrow-circle-o-right\']');
        await sendEmail.click();
    }


    async verifySuccessfullySubscribedVisiblity(){
        const successSubs = await this.page.getByText('You have been successfully subscribed!');
        await expect(successSubs).toBeVisible();
    }

    async clickCart(){
        const Cart = await this.page.locator('//ul[@class=\'nav navbar-nav\']//a[contains(.,\'Cart\')]');
        await Cart.click();

    }

    async clickProducts(){
        const  Products = await this.page.getByText(' Products').first();
        await Products.click();
    }


    async clickFirstViewProduct(){
        const viewProduct = await this.page.getByText('View Product').first();
        await viewProduct.click();
    }

    async scrollFirstProduct(){
        const firstProduct = await this.page.getByText('Add to cart').first();
        await firstProduct.scrollIntoViewIfNeeded();
        await firstProduct.hover();
    }


    async clickFirstAddToCartButton(){
        const addCart = await this.page.getByText('Add to cart').nth(1);
        await addCart.click();

    }


    async clickContinueShoppingButton(){
        const continueShopping = await this.page.getByText('Continue Shopping');
        await continueShopping.click();
    }


    async scrollSecondProduct(){
        const secondProduct = await this.page.getByText('Add to cart').nth(2);
        await secondProduct.scrollIntoViewIfNeeded();
        await secondProduct.hover();
    }

    async clickSecondAddToCartButton(){
        const SecondAddCart = await this.page.getByText('Add to cart').nth(3);
        await SecondAddCart.click();
    }

    async clickViewCart(){
        const viewCart = await this.page.getByText('View Cart');
        await viewCart.click();
    }


    async verifyCategoryVisibility(){
        const Category = await this.page.locator('//h2[.=\'Category\']');
        await expect(Category).toBeVisible();
    }


    async clickWomenCategory(){
        const WomenCategory = await this.page.locator('//a[contains(.,\'Women\')]');
        await WomenCategory.click();
    }

    async clickWomenDressCategory(){
        const WomenDressCategory = await this.page.getByText('Dress ').first();
        await WomenDressCategory.click();
    }

    async clickMenCategory(){
        const MenCategory = await this.page.locator('//a[contains(.,\'Men\')]');
        await MenCategory.click();
    }

    async clickMenTshirtsCategory(){
        const TshirtsCategory = await this.page.getByText('Tshirts ');
        await TshirtsCategory.click();
    }


    async scrollRecommendedItems(){
        const RecommendedItems = await this.page.getByText('recommended items');
        await RecommendedItems.scrollIntoViewIfNeeded();
    }

    async verifyRecommendedItemsVisibility(){
        const RecommendedItems = await this.page.getByText('recommended items');
        await expect(RecommendedItems).toBeVisible();
    }

    async clickRecommendedProductAddToCart(){
        const firstRecommededProduct = await this.page.locator('(//div[@id=\'recommended-item-carousel\']//div[contains(@class, \'item\')]//a[text()=\'Add to cart\'])').first();
        await firstRecommededProduct.click();

    }


    async clickArrowToScrollUp(){
        const arrowbutton = await this.page.locator('//i[@class=\'fa fa-angle-up\']');
        await arrowbutton.click();

    }

    async verifyFullFledgedTextVisibility(){
        const FullFledgedText = await this.page.getByText('Full-Fledged practice website for Automation Engineers').first();
        await expect(FullFledgedText).toBeVisible();

    }

    async verifySubscriptionVisibility(){
        const Subscription = await this.page.locator('//div[@class=\'single-widget\']//h2[text()=\'Subscription\']');
        await expect(Subscription).toBeVisible();
    }








}