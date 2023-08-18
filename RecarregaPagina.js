const menu = document.querySelector('.menu_item-home');
var finaisEmails = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@outlook.com", "@aol.com", "@icloud.com", "@live.com", "@msn.com", "@me.com", "@ymail.com", "@rocketmail.com", "@inbox.com", "@gmx.com", "@mail.com", "@zoho.com"];

function recarregaPagina() {
    window.location.reload();
  }
  
  menu.onclick = recarregaPagina;
