var PassToken = null;
var RTKMos_Login = null;
var RTKMos_Password = null;
var LoginKey = null;

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "RTKMos",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'RTKMos') {
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
                          RTKMos_Login = tasks.RTKMos_Log
                          RTKMos_Password  = tasks.RTKMos_Pass
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


    if (document.querySelectorAll('[placeholder="логин"]')[0] != undefined) {
        document.querySelectorAll('[placeholder="логин"]')[0].setAttribute('type', 'password')
    }
    if (document.querySelectorAll('[placeholder="пароль"]')[0] != undefined) {
        document.querySelectorAll('[placeholder="пароль"]')[0].setAttribute('type', 'password')
    }

    if (window.location.href.indexOf("/login/") >= 0) {
        if (document.getElementsByClassName("col-md-12")[1].innerHTML.indexOf("MyPartnersLog") < 0) {
            document.getElementsByClassName("col-md-12")[1].innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }

    MyPartnersLog.onclick = function() {
        console.log(document.querySelectorAll('[type="submit"]')[0])
        if (document.querySelectorAll('[type="submit"]')[0] != undefined) {
            document.querySelectorAll('[placeholder="логин"]')[0].value = RTKMos_Login;
            document.querySelectorAll('[placeholder="пароль"]')[0].value = RTKMos_Password;

            document.querySelectorAll('[placeholder="логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="пароль"]')[0].dispatchEvent(event);


            document.querySelectorAll('[type="submit"]')[0].click();
            setTimeout(function(){
                document.querySelectorAll('[placeholder="логин"]')[0].value = 'Логин';
                document.querySelectorAll('[placeholder="пароль"]')[0].value = 'Пароль';
            }, 200);

            
        }
    };
}


