var PassToken = null;
var TTK_Login = null;
var TTK_Password = null;
var LoginKey = null;

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "TTK",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            console.log(request, sender, sendResponse);
            console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'TTK') {
                if (request.Message=='true') {
                    console.log("Хуй1");
                    PassToken = request.Token;
                    LoginKey = request.LogToken
                    //console.log(request, sender, sendResponse);
                    //console.log(request.Recipient, request.Recipient, request.Message);

                    fetch('https://'+PassToken+'.mockapi.io/MyPartners/EISSD_Pass/1', {
                      method: 'GET',
                      headers: {'content-type':'application/json'},
                    }).then(res => {
                      if (res.ok) {
                          return res.json();
                      }
                      // handle error
                    }).then(tasks => {
                        console.log(tasks.LoginCode)
                        console.log(tasks.LoginCode)
                        if (LoginKey == tasks.LoginCode) {
                          TTK_Login = tasks.TTK_Log
                          TTK_Password  = tasks.TTK_Pass
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


    if (document.getElementById("id_login") != undefined) {
        document.getElementById("id_login").setAttribute('type', 'password')
    }
    if (document.getElementById("id_password") != undefined) {
        document.getElementById("id_password").setAttribute('type', 'password')
    }

    if (document.getElementsByClassName('login-tabs')[0] != undefined) {
        if (document.getElementsByClassName('platform')[0].innerHTML.indexOf("MyPartnersLog") < 0) {
            document.getElementsByClassName('platform')[0].innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }

    MyPartnersLog.onclick = function() {
        console.log(document.querySelectorAll('[type="submit"]')[0])
        if (document.querySelectorAll('[type="submit"]')[0] != undefined) {
            document.getElementById("id_login").value = TTK_Login;
            document.getElementById("id_password").value = TTK_Password;
            document.getElementById('id_realm').value = 'ttk'

            document.getElementById("id_login").dispatchEvent(event);
            document.getElementById("id_password").dispatchEvent(event);


            document.querySelectorAll('[type="submit"]')[0].click();

            document.getElementById("id_login").value = 'Логин';
            document.getElementById("id_password").value = 'Пароль';

            document.getElementById("id_login").dispatchEvent(event);
            document.getElementById("id_password").dispatchEvent(event);

        }
    };
}


