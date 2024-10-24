import { Page } from "@playwright/test";

export default class NavigationBar{
    page:Page;

    constructor(page: Page){
        this.page = page;
    }

    //locators
    headerNavSignUpTab = () => this.page.getByRole('link', { name: 'Join Us' })
    homePageNavMensProductTab = () => this.page.getByTestId('link').getByText('Men', { exact: true });
    ProductPageNavSaleProductTab = () => this.page.getByLabel('secondary').getByLabel('Sale').first();
    cookiePopUpAcceptButton = () => this.page.getByRole('button', { name: 'Accept All' })

    //actions
    public async goto()
    {
        await this.page.goto("https://computer-database.gatling.io/computers/new")
    }
    
    public async acceptCookiePopUp(){
    await this.cookiePopUpAcceptButton().click();
    }


    public async selectMainNavMensProductPage(){
        await this.homePageNavMensProductTab().click()

    }

    public async selectProductPageNavSaleItems(){
        await this.ProductPageNavSaleProductTab().click()

    }

    public async SelectJoinUsTab(){
        await this.headerNavSignUpTab().click();


    }
}