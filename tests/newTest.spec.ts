import {test} from "./fixtures/basePage";
import NavigationBar from "../page-objects/Pages/navigationBars";
import { ProductViewPage } from "../page-objects/Pages/productViewPage";
import { SaleProductPage } from "../page-objects/Pages/salesProductPage";


test("Basic simple trial", async ({navigationBar,productViewPage,saleProductPage}) => {

    await navigationBar.goto()
    await navigationBar.acceptCookiePopUp()

    await navigationBar.selectMainNavMensProductPage()
    await navigationBar.selectProductPageNavSaleItems()
    await saleProductPage.selectNikeDunkPanda()
    await productViewPage.selectSize()
    await productViewPage.selectAddToBasket()
    await productViewPage.checkErrortext()



   
    })