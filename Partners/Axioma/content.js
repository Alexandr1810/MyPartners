var PassToken = null;
var Axioma_Login = null;
var Axioma_Password = null;
var LoginKey = null;

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "Axioma",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'Axioma') {
                if (request.Message=='true') {
                    console.log("Хуй");
                    PassToken = request.Token;
                    LoginKey = request.LogToken

                    fetch('https://'+PassToken+'.mockapi.io/MyPartners/EISSD_Pass/1', {
                      method: 'GET',
                      headers: {'content-type':'application/json'},
                    }).then(res => {
                      if (res.ok) {
                          return res.json();
                      }
                      // handle error
                    }).then(tasks => {
                        if (LoginKey == tasks.LoginCode) {
                          Axioma_Login = tasks.Axioma_Log
                          Axioma_Password  = tasks.Axioma_Pass
                          setInterval(InStart, 200);
                        }
                        else{
                            console.log('Код не подходит')
                            document.body.innerHTML += `<h1 class="ExtenAlertText" style="
                                position: absolute;
                                top: 10px !important;
                                color: white !important;
                                background: #0056a399 !important;
                                right: 40%;
                                border-radius: 10px;
                                padding: 10px;
                                font-size: 34px;
                                z-index: 1000;
                            ">Вы не вошли в MyPartners!</h1>`
                        }
                    }).catch(error => {
                      // handle error
                    })
                }
                if (request.Message=='false') {
                    console.log("НеХуй");
                }
            }
        }
    );

    
})

function InStart(){
    console.log("Получил, Делаю!")

    const event = new Event('input', { bubbles: true });


    if (document.querySelectorAll('[placeholder="Имя пользователя"]')[0] != undefined) {
        document.querySelectorAll('[placeholder="Имя пользователя"]')[0].setAttribute('type', 'password')
    }
    if (document.querySelectorAll('[placeholder="Пароль"]')[0] != undefined) {
        document.querySelectorAll('[placeholder="Пароль"]')[0].setAttribute('type', 'password')
    }

    if (document.querySelectorAll('[placeholder="Пароль"]')[0] != undefined) {
        if (document.getElementById('login_container').innerHTML.indexOf("MyPartnersLog") < 0) {
            document.getElementById('login_container').innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }

    MyPartnersLog.onclick = function() {
        console.log(document.querySelectorAll('[type="submit"]')[0])
        if (document.querySelectorAll('[type="submit"]')[0] != undefined) {
            document.querySelectorAll('[placeholder="Имя пользователя"]')[0].value = Axioma_Login;
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = Axioma_Password;

            document.querySelectorAll('[placeholder="Имя пользователя"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);


            document.querySelectorAll('[type="submit"]')[0].click();

            document.querySelectorAll('[placeholder="Имя пользователя"]')[0].value = 'Логин';
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = 'Пароль';

            setTimeOut(document.querySelectorAll('[type="submit"]')[0].click(), 500);
        }
    };
}


