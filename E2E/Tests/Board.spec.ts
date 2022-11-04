import { test, expect } from "@playwright/test";
import { URL, CREDENTIALS, WORKSPACES, BOARDS, workspaceDropElements } from "../../Data/constants";
import { Login } from "../Pages/Login-Page";
import { Workspace } from "../Pages/Workspace-Page";
import { Board } from "../Pages/Board-page";
import { Header } from "../Selectors/Base.json";
import { BoardSelectors } from "../Selectors/Board.json";

let loginPage: Login;
let workspacePage: Workspace;
let boardPage: Board;

test.describe("Test suite for Trello boards", () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new Login(page);
        workspacePage = new Workspace(page);
        boardPage = new Board(page);

        await page.goto(URL.E2E.PROD);
        await page.click(Header.LoginBtn);
        await loginPage.loginForm(CREDENTIALS.REAL.USER, CREDENTIALS.REAL.PASSWORD);
        await workspacePage.newWorkspace(WORKSPACES.NEW_NAME, workspaceDropElements[5], WORKSPACES.DESCRIPTION);
    });

    test("As a user I want to create a new board with a custom name", async ({ page }) => {
        await boardPage.newBoard(BOARDS.NEW_NAME);

        await expect(await page.innerText(BoardSelectors.ViewBoardNameLbl)).toBe(BOARDS.NEW_NAME);
    });

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(2000);
    });

});