import { test, expect } from "@playwright/test";
import { URL, CREDENTIALS } from "../../Data/constants";
import { Login } from "../Pages/Login-Page";
import { Home } from "../Pages/Home-Page";
import { Header } from "../Selectors/Base.json";
import { HomeHeader } from "../Selectors/Home.json";
import { Logout } from "../Pages/Logout-Page";

let loginPage: Login;
let logoutPage: Logout;
let homePage: Home;

test.describe("Login tests for Trello webpage", () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new Login(page);
        logoutPage = new Logout(page);
        homePage = new Home(page);

        await page.goto(URL.E2E.PROD);
        await page.click(Header.LoginBtn);
    });

    test("As a user I want to login using my Trello account", async ({ page }) => {
        await loginPage.loginForm(CREDENTIALS.REAL.USER, CREDENTIALS.REAL.PASSWORD);

        await expect(page.locator(HomeHeader.Header)).toBeVisible();
    });

    test.afterEach(async ({ page }) => {
        await homePage.logoutUser();
        await logoutPage.confirmLogout();

        await expect(page.locator(Header.LoginBtn)).toBeVisible();
    });

});