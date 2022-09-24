Feature("signup");

const {trueUser} = require('../data/signUpData');


Before(({I}) => {
    I.closeModal();
    I.gotoSignup();
})

Scenario("empty firstname", ({ I,signupPage }) => {
    signupPage.fillAll(trueUser);
    I.fillField(signupPage.fields.name,'');
    // pause();
    signupPage.sendForm();
    I.see(signupPage.errorText);
    // pause();
    I.click('Tamam');
    I.see(signupPage.requiredValidationText,'.fv-help-block');

});

Scenario("empty surname", ({ I,signupPage }) => {
    signupPage.fillAll(trueUser);
    I.fillField(signupPage.fields.surname,'');
    // pause();
    signupPage.sendForm();
    I.see(signupPage.errorText);
    // pause();
    I.click('Tamam');
    I.see(signupPage.requiredValidationText,'.fv-help-block');

});

Scenario("unchecked GDPR", ({ I,signupPage }) => {
    signupPage.fillAll(trueUser);
    I.uncheckOption(signupPage.fields.gdprCheckbox,'');
    // pause();
    signupPage.sendForm();
    I.see(signupPage.errorText);
    // pause();
    I.click('Tamam');
    I.see(signupPage.requiredValidationText,'.fv-help-block');

});

Scenario("different passwords", ({ I,signupPage }) => {
    signupPage.fillAll(trueUser);
    I.fillField(signupPage.fields.password2,'1234');
    // pause();
    signupPage.sendForm();
    I.see(signupPage.errorText);
    // pause();
    I.click('Tamam');
    I.see(signupPage.passwordValidationText,'.fv-help-block');

});
// npx codeceptjs run --grep "signup"