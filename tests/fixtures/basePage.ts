import { test as base } from '@playwright/test';
import NavigationBar from '../../page-objects/Pages/navigationBars';
import {ProductViewPage} from '../../page-objects/Pages/productViewPage'
import { SaleProductPage } from '../../page-objects/Pages/salesProductPage';
export const test = base.extend<{navigationBar: NavigationBar, productViewPage: ProductViewPage,saleProductPage: SaleProductPage }>
({
    navigationBar: async({page}, use) =>{
        await use(new NavigationBar(page))
    },

    productViewPage: async({page}, use) =>{
        await use(new ProductViewPage(page))
    },
    saleProductPage: async({page}, use) =>{
        await use(new SaleProductPage(page))
    }



})

