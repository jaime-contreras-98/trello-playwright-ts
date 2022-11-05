import { Page } from "@playwright/test";
import { LoginForm } from "../Selectors/Login.json";

export class Login {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async loginForm(username, password) {
        await this.page.fill(LoginForm.EmailInp, username);
        await this.page.click(LoginForm.ContinueBtn);
        await this.page.fill(LoginForm.PasswordInp, password);
        await this.page.click(LoginForm.LogInBtn);
    }

}