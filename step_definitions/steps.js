const { I } = inject();
const { LoginPage } = require('../Pages/LoginPage');
const login = new LoginPage();

Given('User is on login page', async () => {
  await login.homepage();
});

When('User enters username {string} and password {string}', async (username, password) => {
  await login.enterUsername(username);
  await login.enterPassword(password);
});

// When('User enters {string}', async (password) => {
//   await login.enterPassword(password);
// });

When('User clicks on login button', async () => {
  await login.clickLoginButton();
});

Then('User verifies {string} is displayed on page', async (text) => {
  await login.verifyDashboard(text);
});
