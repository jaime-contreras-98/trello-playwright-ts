import { test, expect } from "@playwright/test";
import { URL, CREDENTIALS, WORKSPACES, workspaceDropElements } from "../../Data/constants";
import { Login } from "../Pages/Login-Page";
import { Home } from "../Pages/Home-Page";
import { Workspace } from "../Pages/Workspace-Page";
import { Header } from "../Selectors/Base.json";
import { WorskpacePage } from "../Selectors/Workspace.json";

let loginPage: Login;
let workspacePage: Workspace;
let homePage: Home;

test.describe("Workspaces tests on Trello webpage", () => {

    test.beforeEach(async ({ page }) => {

        loginPage = new Login(page);
        workspacePage = new Workspace(page);
        homePage = new Home(page);

        await page.goto(URL.E2E.PROD);
        await page.click(Header.LoginBtn);
        await loginPage.loginForm(CREDENTIALS.REAL.USER, CREDENTIALS.REAL.PASSWORD);
    });

    test("As a user, I want to create a new Workspace", async ({ page }) => {
        await workspacePage.newWorkspace(WORKSPACES.NEW_NAME, workspaceDropElements[7], WORKSPACES.DESCRIPTION);

        await expect(await page.innerText(WorskpacePage.NavNameLabel)).toBe(WORKSPACES.NEW_NAME);
    });

    test.afterEach(async ({ page }) => {

    });

});