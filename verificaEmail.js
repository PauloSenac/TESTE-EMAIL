//lista de e-mails válidos

var finaisEmails = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@outlook.com", "@aol.com", "@icloud.com", "@live.com", "@msn.com", "@me.com", "@ymail.com", "@rocketmail.com", "@inbox.com", "@gmx.com", "@mail.com", "@zoho.com"];


// Verifica o valor inserido no Input//

function verificarInput() {
    var inputValor = document.getElementsByClassName("email")[0].value;

// Tratamento de erro para caso nada seja inserido//

    if (inputValor == "") {
        alert('Email não foi preenchido');
    } else 
    {
        var emailCorreto = false;


        for (var i = 0; i < finaisEmails.length; i++) {
            if (inputValor.endsWith(finaisEmails[i])) {
                emailCorreto = true;
                break;
            }
        }

        if (emailCorreto) {
            alert('O email inserido foi ' + inputValor);
        } else {
            alert('O email não está correto ou não foi inserido corretamente! Por Favor verifique e Tente Novamente');
            document.getElementsByClassName("email")[0].value = "";
        }
    } 
}