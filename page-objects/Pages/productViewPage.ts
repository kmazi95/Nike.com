import { Page, expect } from "@playwright/test";

export class ProductViewPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page

    }


     //locators
     
     itemSizeSelector = () => this.page.getByText('UK 7.5')
     addToBasketButton = () => this.page.getByTestId('atb-button')
     errorPopUpTxt = () => this.page.getByText('We had an issue with your')


   public async selectSize(){
        await this.itemSizeSelector().click();

    }

    public async selectAddToBasket(){
        await this.addToBasketButton().click();

    }

    public async checkErrortext(){
        await expect(this.errorPopUpTxt()).toContainText('We had an issue with your request. If you continue experiencing issues, try refreshing the page.')


    }
}