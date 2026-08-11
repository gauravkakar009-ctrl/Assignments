import { test, expect } from '@playwright/test';

test('Assignment - Parabank', async ({ page }) => {

// 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
await page.goto("https://parabank.parasoft.com/parabank/index.htm");

// 2.verify application logo is displayed
const logo = await page.locator('img.logo');
await expect(logo).toBeVisible();

// 3.Verify application caption displayed as "Experience the difference"
const caption = await page.locator('p.caption');
await expect(caption).toHaveText('Experience the difference');

// 4.Enter invalid username
const username = await page.locator('input[name="username"]');
await username.fill('invalidUser');

// 5.Enter empty Password
const password = await page.locator('input[name="password"]')
await password.fill(" ");

// 6.Click on login button
const loginButton = await page.locator('input[value="Log In"]')
await loginButton.click();

// 7.Verify the error message "Please enter a username and password."
const errorMessage = await page.locator('p.error');
await expect(errorMessage).toHaveText('Please enter a username and password.');

// 8.Click on admin page link
const adminLink = await page.locator('//a[text()="Admin Page"]');
await adminLink.click();

// 9.select the option "soap" from dba mode radio button
await selectDataAccessMode(page, "soap");

// 10.Scroll to element dropdown
const loanProvider = await page.locator('select[name="loanProvider"]');
await loanProvider.scrollIntoViewIfNeeded();

// 11.Select the option web service from the dropdown
await loanProvider.selectOption({label: 'Web Service'});

// 12.click on submit button
const submitButton = await page.locator('input[value="Submit"]');
await submitButton.click();

// 13.verify submission is successful by validating success message
const successMessage = await page.locator('//b[text()="Settings saved successfully."]');
await expect(successMessage).toBeVisible();

// 14.Click on services page link
// 15.wait for service page
// 16.Scroll down till bookstore services table
// 17.get total rows of books store services table
// 18.get total columns of books store services table
// 19.Print table data (row wise and column wise data)

});

//Select the Data Access Mode. 
async function selectDataAccessMode(page: any, option :string):Promise<void>{

    //Locate the radio button
    const radioButton = await page.locator(`input[value="${option}"]`);

    //click on the radio button
    await radioButton.click();

}