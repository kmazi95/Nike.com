import { Page } from "@playwright/test";

export class SaleProductPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page

    }

    //locator
    nikeDunkPanda = () => this.page.getByLabel('Nike Dunk Low Retro SE')

    async selectNikeDunkPanda(){
        await this.nikeDunkPanda().click()

    }
}