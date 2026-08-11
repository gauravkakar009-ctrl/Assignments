import { test, expect } from '@playwright/test'

test('Assignment15 - DemoQA Form', async ({ page }) => {

    // 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
    await page.goto('https://demoqa.com/automation-practice-form');

    // 2. Wait for Page-load
    const firstName = await page.locator('input[placeholder="First Name"]');
    await expect(firstName).toBeVisible();

    // 3. Enter First name and Last name
    await firstName.fill('Gaurav');
    const lastName = await page.locator('input[placeholder="Last Name"]');
    await lastName.fill('Kakkar');

    // 4. Enter Email
    const email = await page.locator('input[id="userEmail"]');
    await email.fill('GouravKakar007@gmail.com');

    // 5. Select Gender (Male)
    await genderLocator(page, "Male");


    // 6. Enter mobile number
    const mobileNumber = await page.locator('input[placeholder="Mobile Number"]');
    await mobileNumber.fill('9466401515');

    // 7.Select DOB (1-Feb-1991)
    await selectDOB(page, '1', 'February', '1991');


    // 8.Search and Select Computer Science and English
    await selectSubjects(page, ["Computer Science", "English"]);


        // 9.Select Hobbies as Sports and Reading
        await selectHobbies(page, ["Sports", "Reading"]);
 

        // 10.Upload photo
        const uploadPhoto = await page.locator('input[label="Select picture"]');
        await uploadPhoto.setInputFiles('test-data/Screenshot 2025-01-12 094756.png');

        // 11.Submit Details
        const submit = await page.locator('#submit');
        await submit.click();


    });


// Method for hobbies selection.

async function selectHobbies(page: any, hobbies: string[]) {
    for (const hobby of hobbies) {
        const hobbyLocator = await page.locator(`//label[text()="${hobby}"]`);
        await hobbyLocator.click({force: true});
    }
}

// Method for subject selection.
async function selectSubjects(page: any, subjects: string[]) {

        // locate the subject input box and click on it.
        const subjectInput = await page.locator('//div [contains(@class,"subjects-auto-complete__input-container")]');
        await subjectInput.click();

        // locate the subject suggestion box.
        const suggestionBox = await page.locator('input[id="subjectsInput"]');

        for (const subject of subjects) {
            await suggestionBox.fill(subject);
            await suggestionBox.press('Enter');

        }
    }

// Method for gender selection
async function genderLocator(page: any, gender: string) {
    const genderName = await page.locator(`input[value="${gender}"]`);
    await genderName.check();
}

// Method for DOB Selection

async function selectDOB(page: any, date: string, month: string, year: string) {

    // Click on DOB field and click on launch the Calendar.
    const dobField = await page.locator('#dateOfBirthInput');
    await dobField.click();

    // Select the month from month dropdown.
    const monthDropdown = await page.locator('.react-datepicker__month-select')
    await monthDropdown.selectOption({ label: month });

    // Select the year from year dropdown.
    const yearDropdown = await page.locator('.react-datepicker__year-select');
    await yearDropdown.selectOption({ label: year });

    // Select the date
    const dateSelect = await page.locator(`//div[text()="${date}" and contains(@aria-label, "${month}")]`);
    await dateSelect.click();
}
