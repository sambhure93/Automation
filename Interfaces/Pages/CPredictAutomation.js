
const { I } = inject();

module.exports = {
	
	  fields:{
    	username_textbox:"input[id='username']",
      password_textbox:"input[id='password']",
      login_button:"button[id='btn-login']",
      insigh_header:"//div[@id='app-content-layout']//span//span[contains(normalize-space(),'Insigh')]"
  	},

      userAuthentication(userData) {
        I.amOnPage('https://predict-staging.netlify.app'); 
          this.fillUsernameTextbox(userData['username']);
          this.fillPasswordTextbox(userData['password']);
          this.clickOnLoginButton();
          },

      fillUsernameTextbox(username) {
       I.fillField(this.fields.username_textbox,username); 
      },

      fillPasswordTextbox(password) {
       I.fillField(this.fields.password_textbox,password);
      },

      clickOnLoginButton() {
          I.click(this.fields.login_button);
      },

      validatePredictHeader() {
        I.wait(10);
        I.seeElement(this.fields.insigh_header);
      }
    
}
