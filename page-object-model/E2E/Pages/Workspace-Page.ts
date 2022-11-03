import { Page } from "@playwright/test";
import { AddWorkspaceItems } from "../Selectors/Workspace.json";

export class Workspace {

    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async newWorkspace(name, type, description) {
        await this.page.click(AddWorkspaceItems.AddBtn);
        await this.page.fill(AddWorkspaceItems.SpaceNameInp, name);
        await this.page.click(AddWorkspaceItems.SpaceTypeDrop);
        //await this.page.click(`li.OxQ89JiBTrc76e >> text=${type}`);
        await this.page.locator(AddWorkspaceItems.SpaceTypeElem).getByText(type).click();
        if (description != null) {
            await this.page.fill(AddWorkspaceItems.SpaceDescrInp, description);
        }
        await this.page.click(AddWorkspaceItems.ContinueBtn);
        await this.page.click(AddWorkspaceItems.InviteLaterLbl);
    }

    async deleteWorkspace(name) {

    }

}