import {expect, Page} from '@playwright/test';


export class SignLoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }



    async verifyNewUserSignupVisibility(){
        const  NewUserSignupText = await this.page.getByText('New User Signup!');
        await NewUserSignupText.click();
    }

    async inputNewUserName(Name: string){
        const NewUserName = await this.page.getByPlaceholder('Name');
        await NewUserName.fill(Name);

    }

    async inputNewUserEmail(Email: string){
        const NewUserEmail = await this.page.locator('//input[@data-qa=\'signup-email\']');
        await NewUserEmail.fill((Email));

    }

    async clickSignUpButton(){
        const SignUpButton = await this.page.locator('//button[@data-qa=\'signup-button\']');
        await SignUpButton.click();

    }


    async verifyEnterAccountInformationVisibility(){
        const EnterAccountInformation = await this.page.getByText('Enter Account Information');
        await expect(EnterAccountInformation).toBeVisible();
    }

    async checkGenderTitle(){
        const Mr = await this.page.locator('//input[@id=\'id_gender1\']');
        await Mr.check();

    }

    async inputPassword(Password: string){
        const password = await this.page.locator('//input[@data-qa=\'password\']');
        await password.fill(Password);

    }

    async inputDateOfBirth(dateInfo:{
        day: string,
        month: string,
        year: string
    }){

        const dateDay = await this.page.locator('//select[@data-qa=\'days\']');
        await dateDay.selectOption(dateInfo.day);

        const dateMonth = await this.page.locator('//select[@data-qa=\'months\']');
        await dateMonth.selectOption(dateInfo.month);

        const dateYear = await this.page.locator('//select[@data-qa=\'years\']');
        await dateYear.selectOption(dateInfo.year);
    }

    async checkNewsletter(){
        const Newsletter = await this.page.locator('//input[@id=\'newsletter\']');
        await Newsletter.check();
    }


    async inputAdressDetails(AddressInfo:{
        FirstName: string,
        LastName: string,
        Adress: string,
        Country: string,
        State: string,
        City: string,
        Zipcode: string,
        MobileNumber: string,
    }){

        const firstName = await this.page.locator('//input[@id=\'first_name\']');
        await firstName.fill(AddressInfo.FirstName);

        const lastName = await this.page.locator('//input[@id=\'last_name\']');
        await lastName.fill(AddressInfo.LastName);

        const address = await this.page.locator('//input[@id=\'address1\']');
        await address.fill(AddressInfo.Adress);

        const country = await this.page.locator('//select[@data-qa=\'country\']');
        await country.selectOption(AddressInfo.Country);

        const state = await this.page.locator('//input[@data-qa=\'state\']');
        await state.fill(AddressInfo.State);

        const city = await this.page.locator('//input[@data-qa=\'city\']');
        await city.fill(AddressInfo.City);

        const zipcode = await this.page.locator('//input[@data-qa=\'zipcode\']');
        await zipcode.fill(AddressInfo.Zipcode);

        const mobileNumber = await this.page.locator('//input[@data-qa=\'mobile_number\']');
        await mobileNumber.fill(AddressInfo.MobileNumber);


    }

    async clickCreateAccountButton(){
        const CreateAccount = await this.page.locator('//button[@data-qa=\'create-account\']');
        await CreateAccount.click();

    }

    async verifyAccountCreatedTextVisibility(){
        const AccountCreateText = await this.page.getByText('Account Created!');
        await expect(AccountCreateText).toBeVisible();
    }

    async clickContinueButton(){
        const ContinueButton = await this.page.locator('//a[@data-qa=\'continue-button\']');
        await ContinueButton.click();
    }

    //////////////// Login and Delete Account //////////////////////////////

    async inputLoginEmail(Email: string){
        const email = await this.page.locator('//input[@data-qa=\'login-email\']');
        await email.fill(Email);

    }

    async inputLoginPassword(Password: string){
        const password = await this.page.locator('//input[@data-qa=\'login-password\']');
        await password.fill(Password);

    }

    async clickLoginButton(){
        const loginButton = await this.page.locator('//button[@data-qa=\'login-button\']');
        await loginButton.click();

    }


    async verifyLoginToYourAccountVisibility(){
        const LoginYourAccountText = await this.page.getByText('Login to your account');
        await expect(LoginYourAccountText).toBeVisible();
    }

    async verifyEmailOrPasswordIncorrectVisibility(){
        const incorrectEmailOrPassword = await this.page.getByText('Your email or password is incorrect!');
        await expect(incorrectEmailOrPassword).toBeVisible();
    }

    async verifyEmailAddressAlreadyExistVisibility(){
        const AlreadyExistText = await this.page.getByText('Email Address already exist!');
        await expect(AlreadyExistText).toBeVisible();
    }










}