import {expect, Page} from '@playwright/test';


export class ContactUsPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async verifyContactUsTitleVisibility() {
        const ContactUsTitle = await this.page.locator('//h2[.=\'Contact Us\']');
        await expect(ContactUsTitle).toBeVisible();
    }

    async inputName(Name: string){
        const name = await this.page.locator('//input[@placeholder=\'Name\']');
        await name.fill(Name);
    }

    async inputEmail(Email: string){
        const email = await this.page.locator('//input[@placeholder=\'Email\']');
        await email.fill(Email);
    }

    async inputSubject(Subject: string){
        const subject = await this.page.getByPlaceholder('Subject');
        await subject.fill(Subject);
    }

    async inputYourMessage(Message: string){
        const message = await this.page.getByPlaceholder('Your Message Here');
        await message.fill(Message);

    }

    async uploadFile(){
        const fileInput = await this.page.locator('//input[@name=\'upload_file\']');
        await fileInput.setInputFiles('inputFile.png');
        await this.page.waitForTimeout(2000);

    }

    async clickSubmitButton(){
        const submit = await this.page.getByRole('button', { name: 'Submit' });
        await submit.click();
    }

    async acceptSubmitConfirmation() {
        this.page.on('dialog', async (dialog) => {
            await dialog.accept();
        });

    }



    async verifySuccessMessageVisiblity(){
        const successMessage = await this.page.locator('//div[@class=\'status alert alert-success\']');
        await expect(successMessage).toBeVisible();
        await expect(successMessage).toHaveText('Success! Your details have been submitted successfully.');
    }

}