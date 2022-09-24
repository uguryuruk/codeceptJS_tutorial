const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields: {
    name: '#firstname',
    surname: '#surname',
    email: '#email',
    nationality: '#nationality',
    graduationYear: '#licaYear',
    credentialType: '#idNumberType',
    credentialNumber: '#idnumber',
    birthDate: '#birthDate',
    gender: '#gender',
    password1: '#password',
    password2: '//*[@id="kt_login_signup_form"]/div[3]/div[4]/input',
    certifyCheckbox: '#agreeInfo',
    gdprCheckbox: '#agreeKVKK',
  },
  submitButton: '#kt_login_signup_submit',
  //try false signup
  errorText:
    'Üzgünüz. Lütfen zorunlu alanları ve gerekli bilgileri doldurduğunuzdan emin olun.',
    requiredValidationText: 'Bu alan zorunludur.',
    //try different passwords
  passwordValidationText: 'Sifreler birbiri ile uyumlu degil.',

  //methods
  fillAll({
    name,
surname,
email,
nationality,
graduationYear,
credentialType,
credentialNumber,
birthDate,
gender,
password1,
password2,   
  }){
    I.fillField(this.fields.name,name);
    I.fillField(this.fields.surname,surname);
    I.fillField(this.fields.email,email);
    I.selectOption(this.fields.nationality,nationality);
    I.fillField(this.fields.graduationYear,graduationYear);
    I.selectOption(this.fields.credentialType,credentialType);
    I.fillField(this.fields.credentialNumber,credentialNumber);
    I.fillField(this.fields.birthDate,birthDate);
    I.fillField(this.fields.gender,gender);
    I.fillField(this.fields.password1,password1);
    I.fillField(this.fields.password2,password2);
  },
  sendForm(){
    I.click(this.submitButton);
  }
}
