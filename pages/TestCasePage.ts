import {expect, Page} from '@playwright/test';


export class TestCasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }



    async clickTestCase(){
        const  TestCase = await this.page.getByText(' Test Cases').first();
        await TestCase.click();
    }


    async verifyFirstTestCaseVisibility(){
        const firstTestCase = await this.page.getByText('Test Case 1: Register User');
        await expect(firstTestCase).toBeVisible();
    }




}