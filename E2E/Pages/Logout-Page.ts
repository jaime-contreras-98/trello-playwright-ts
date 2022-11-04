import { expect, Page } from "@playwright/test";
import { CREDENTIALS } from "../../Data/constants";
import { UserInfo } from "../Selectors/Logout.json";

export class Logout {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async confirmLogout() {
        await expect(await this.page.innerText(UserInfo.EmailLabel)).toBe(CREDENTIALS.REAL.USER);
        await this.page.click(UserInfo.LogoutBtn);
    }

}