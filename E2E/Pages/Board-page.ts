import { Page } from "@playwright/test";
import { NewBoardSelectors } from "../Selectors/Board.json";

export class Board {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async newBoard(name) {
        await this.page.click(NewBoardSelectors.NewBoardBtn);
        await this.page.fill(NewBoardSelectors.BoardNameInp, name);
        await this.page.click(NewBoardSelectors.SaveBoardBtn);
    }

    async deleteBoard(name) {

    }

}