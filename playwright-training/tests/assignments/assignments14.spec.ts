import{test, expect, chromium} from '@playwright/test'

test('Assignment 14' , async() => {

    // Launch the Chromium browser engine to get the Edge browser. 
        const browserEngine = await chromium.launch({headless : false}); //default chrome browser, if we update '{channel : 'msedge'}' it will launch edge browser.
    
        // Launch the browser context within the browser engine. (Incognito tab)
        const browserContext = await browserEngine.newContext();    
    
        // Clear all the cookies within the browser context. 
        await browserContext.clearCookies();
    
        // Launch the new page within the browser context. (browser tab)
        const page = await browserContext.newPage();

        // Open the Parabank website
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');

        // Locate the Parabank logo and verify if it is visible.
        const logo = await page.getByTitle('ParaBank');
        await expect(logo).toBeVisible();

        // Locate the Caption and verify if it is visible.
        const caption = await page.locator('p.caption');
        await expect(caption).toHaveText("Experience the difference");

        // Locate the Username textbox and enter invalid username.
        await page.locator('//input[@name = "username"]').type('Gaurav' , {delay : 100});

        // Locate the Username textbox and enter invalid username.
        await page.locator('//input[@name = "password"]').fill('');

        // Click on Login button.
        await page.locator('//input[@value="Log In"]').click();

        // Locate the error and verify the error message.
        const errorMessage = await page.locator('p.error');
        await expect(errorMessage).toHaveText("Please enter a username and password.");

        // Click on Admin page link
        await page.getByRole('link', {name : 'Admin Page'}).click();

        // Locate the Frame and Click on Soap radio button
        await page.locator('//input[@value="soap"]').click();

        // Store the "Loan Provider" value and Scroll till dropdown.
        const dropdown = await page.locator('//select[@name="loanProvider"]');
        await dropdown.scrollIntoViewIfNeeded();
        await dropdown.selectOption({value : 'ws'});

        // Click on Submit button
        await page.locator('input[value = "Submit"]').click();

        // verify submission is successful by validating success message
        const submit = await page.locator('//b[text() = "Settings saved successfully."]');
        await expect(submit).toHaveText("Settings saved successfully.");



});