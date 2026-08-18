import {Page, Locator, expect} from "@playwright/test"

export class WebCommons{

    page : Page;

    constructor(page : Page){
        this.page = page;
    }

    // Launch the application and verify the title (optional).
    async launchApplication(url : string, expectedTitle? : string){
        await this.page.goto(url);
        if(expectedTitle){
            await expect(this.page).toHaveTitle(expectedTitle);
        }
    }

    // Generate Web Element from the locator.
    async element(locator : string): Promise<Locator>{
        const element = this.page.locator(locator);
        await expect(element).toBeVisible();
        return element;
    }

    // Scroll to the target element, is not visible in the window.
    async scrollToElement(locator : string){
        const element = await this.element(locator);
        await element.scrollIntoViewIfNeeded();
    }

    // Click on the element.
    async clickElement(locator : string){
        const element = await this.element(locator);
        await element.click();
    }

    // Type the text into the input field.
    async enterText(locator : string, text : string){
        const element = await this.element(locator);
        await element.clear();
        await element.fill(text);
    }

    // Method to select the option from dropdown.
    async selectOption(locator : string, option : string | number){
        const element = await this.element(locator);
        if(typeof option === "string"){
            await element.selectOption({ label : option });
        }else{
            await element.selectOption({ index : option });
        }
    }

    // Method to check the checkbox.
    async selectCheckbox(locator : string){
        const element = await this.element(locator);
        const checked = await element.isChecked();
        if(!checked){
            await element.check();
        }
    }

    // Method to uncheck the checkbox.
    async checkbox(locator : string, status : boolean){
        const element = await this.element(locator);
        const checked = await element.isChecked();
        if(checked! == status){
            await element.check();
        }
    }

    // Method to copy the text from webelement.
    async getText(locator : string): Promise<String | null>{
        const element = await this.element(locator);
        let text = await element.textContent();
        return text;
    }

    // Method to verify if element is visible or not.
    async isElementVisible(locator : string){
        const element = await this.element(locator);
        await expect(element).toBeVisible();
    }

    // Method to verify if element is disappeared.
    async isElementDisappeared(locator : string){
        const element = await this.element(locator);
        await expect(element).toBeHidden();
    }

    // Method to upload the file.
    async uploadFile(locator : string, filePath : string){
        const element = await this.element(locator);
        await element.setInputFiles(filePath);
    }

    // Method to handle alerts.
    async handleAlert(action : 'accept' | 'dismiss', promptText? : string){
        this.page.once('dialog' , async dialog => {
            if(action === "accept"){
                await dialog.accept(promptText);
            }else{
                await dialog.dismiss();
            }
        })
    }

    // Method to refresh the page.
    async refreshPage(){
        await this.page.reload();
    }

}