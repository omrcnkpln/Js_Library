const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set up Chrome options
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--start-maximized'); // Maximize the browser window

// Create a new WebDriver instance with Chrome
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();
    const datas = [
        "walletProvisionResponseCodeDesc",
        "detailResultCode",
        "financialSign",
        "pinVerificationResult",
        "inquerySecondField",
        "categoryNameResourceKey",
        "cardId",
        "currentNote",
        "orderCustomType",
        "fromWalletId",
        "orderStatus",
        "errorGenericDesc",
        "bankTransferResult",
        "orderDate",
        "orderTime",
        "transferAmount",
        "toIbanBankName",
        "toIbanName",
        "toIban",
        "toIbanDesc",
        "bankTransferDate",
        "bankTransferTime",
        "bankFinishDate",
        "bankFinishTime",
        "refundDate",
        "refundTime",
        "insertedFrom",
        "epinGameListName",
        "epinGameListItemName",
        "epinPurchaseUserEmail",
        "epinPurchaseUserPhone",
        "itemUnitPrice",
        "itemQuantity",
        "totalOrderAmount",
        "transactionStatus",
        "declineErrorCodeDesc",
        "transactionStartDateTime",
        "transactionEndDateTime"
    ]

// Perform the login process
async function performLogin() {
    try {
        await driver.get('test adress');

        // Add a short delay for the page to load
        await driver.sleep(3000); // 3 seconds delay

        // Find the login input fields
        const usernameField = await driver.findElement(webdriver.By.id('username')); // Replace with the actual ID
        const passwordField = await driver.findElement(webdriver.By.id('password')); // Replace with the actual ID

        // Enter your login credentials
        await usernameField.sendKeys('testuser'); // Test username
        await driver.sleep(2000); // Wait for 2 seconds
        await passwordField.sendKeys('testpass'); // Test password

        // Find and click the "Giriş" button using its class name
        const loginButton = await driver.findElement(webdriver.By.className('ant-btn-default'));
        await loginButton.click();

        // Add a short delay for the login process to complete
        await driver.sleep(5000); // 5 seconds delay
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log("Login process finished. The browser window will stay open for inspection.");
        // Uncomment the following line if you want to keep the browser window open
        // await driver.quit();
    }
}

// Perform the search process
async function performSearch(searchQuery) {
    try {
        console.log('Starting search process...');
        await driver.sleep(5000);
        // Find the search input field at the top of the page
        const searchInput = await driver.findElement(webdriver.By.css('table input[type="text"]'));
        // const searchInput = table.findElement(webdriver.By.css('input'));

        // Enter the search query
        await searchInput.sendKeys(searchQuery);

        // Submit the search form (if needed)
        // await searchInput.submit();

        // Add a short delay for the search process to complete
        await driver.sleep(3000);
    } catch (error) {
        console.error('An error occurred during search:', error);
    } finally {
        console.log('Search process finished.');
    }
}

async function run() {
    await performLogin();

    for (const dataItem of datas) {
        console.log(`Searching for: ${dataItem}`);
        await driver.sleep(3000);
        await performSearch(dataItem);
    }
}

run();

// Wait for 5 seconds and alert that everything is done
setTimeout(() => {
    console.log('Everything is done.');
}, 5000);
