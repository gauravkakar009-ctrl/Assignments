// Annotations : Annotations are a set of keywords and default methods that will help us to run all our test cases.

// test => This refers to an independent test method to be executed by Playwright.
// test.describe => test.describe represents a group of test cases to be executed together by Playwright.


// test.only()
// test.skip()
// test.fixme()
// test.fail()
// test.slow()



import { test } from '@playwright/test';

// Independent test case
test('Indenpendent test case' , async({}) => {
    console.log("This is an independent test case");
});

// Group of test cases (Command to run only one group in one browser:- npx playwright test tests/1-annotations/annotations.spec.ts --grep="Group 1" --project=Chromium)
test.describe('Group 1' , async() => {
    test('Test case 1 - Group 1' , async({ page }) => {
        console.log("This is test case 1 in Group 1");
    });

    test('Test case 2 - Group 1' , async({ page }) => {
        console.log("This is test case 2 in Group 1");
    });

    test('Test case 3 - Group 1' , async({ page }) => {
        console.log("This is test case 3 in Group 1");

    });
});

test.describe('Group 2' , async() => {
    test('Test case 1 - Group 2' , async({}) => {
        console.log("This is test case 1 in Group 2");
    });

     test('Test case 2 - Group 2' , async({}) => {
        console.log("This is test case 2 in Group 2");
    });

     test('Test case 3 - Group 2' , async({}) => {
        console.log("This is test case 3 in Group 2");
    });

});