const {I}=inject();

class LoginPage{
    //fields
    username={name:'UserNameOrEmailAddress'};
    loginPassword='#ps';
    loginButton='#lBtn'
    errorMessage={
        class:{css:'.swal2-container .swal2-html-container'},
        text:'Geçersiz işlem. Kullanıcı adı ya da şifre hatalı. Lütfen kontrol ediniz ve tekrar deneyiniz.'
    }
    //methods
    fillLoginFields(user){
        I.fillField(this.username,user.username);
        I.fillField(this.loginPassword,user.password);        
    }

    tryLogin(){
        I.click(this.loginButton);
    }
}

module.exports= LoginPage;