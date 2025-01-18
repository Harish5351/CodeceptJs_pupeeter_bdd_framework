const { I } = inject();

class LoginPage {
    // Navigate to the login page
    async homepage() {
      I.amOnPage('/'); // Replace with the actual login URL
      console.log('I am on login page')
      I.wait(5); // Add wait if necessary for the page to load
    }
  
    // Enter the username
    async enterUsername(username) {
      I.waitForElement('//input[@name="username"]', 10);
      I.fillField('//input[@name="username"]', username); // Use the appropriate selector for the username field
    }
  
    // Enter the password
    async enterPassword(password) {
      I.fillField('//input[@name="password"]', password); // Use the appropriate selector for the password field
    }
  
    // Click on the login button
    async clickLoginButton() {
      I.click('//button[@type="submit"]'); // Use the appropriate selector for the login button
      I.wait(5)
    }
  
    // Verify that the dashboard is displayed
    async verifyDashboard(text) {
      await I.waitForElement(`//h6[normalize-space()='${text}']`, 20); 
      await I.see(text, `//h6[normalize-space()='${text}']`);
    }    
  }
  
  module.exports = { LoginPage };
  