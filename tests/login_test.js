Feature("login");

const LoginPage = require("../pages/login");
const {
  falseLoginUser,
  emptyNameLoginUser,
  emptyPasswordLoginUser,
} = require("../data/loginData");


let loginPage=new LoginPage();

Before(({I}) => {
    I.closeModal();
})

Scenario("wrong user", ({ I }) => {

    loginPage.fillLoginFields(falseLoginUser);
    loginPage.tryLogin();    
    I.waitForElement(loginPage.errorMessage.class,10);
    I.see(loginPage.errorMessage.text);
    // pause();

});
Scenario("empty username", ({ I }) => {

    loginPage.fillLoginFields(emptyNameLoginUser);
    loginPage.tryLogin();    
    I.waitForElement(loginPage.errorMessage.class,10);
    I.see(loginPage.errorMessage.text);
    // pause();

});
Scenario("empty password", ({ I }) => {

    loginPage.fillLoginFields(emptyPasswordLoginUser);
    loginPage.tryLogin();    
    I.waitForElement(loginPage.errorMessage.class,10);
    I.see(loginPage.errorMessage.text);
    // pause();

});
