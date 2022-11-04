import { Page } from "@playwright/test";
import { HomeHeader } from "../Selectors/Home.json";

export class Home {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async logoutUser() {
        await this.page.click(HomeHeader.UserLogo);
        await this.page.click(HomeHeader.LogoutLink);
    }

}