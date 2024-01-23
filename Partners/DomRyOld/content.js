var PassToken = null;
var DomRu_Login = null;
var DomRu_Password = null;
var LoginKey = null;

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "DomRyOld",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'DomRyOld') {
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
                          DomRu_Login = tasks.DomRyOld_Log
                          DomRu_Password  = tasks.DomRyOld_Pass
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
    var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });


    

    if (window.location.href.indexOf("ds_main.login") >= 0) {
        if (document.getElementsByTagName("input")[0] != undefined) {
            document.getElementsByTagName("input")[0].setAttribute('type', 'password')
        }
        if (document.getElementsByTagName("input")[1] != undefined) {
            document.getElementsByTagName("input")[1].setAttribute('type', 'password')
        }
        if (document.getElementsByClassName("info_win_warn")[0].innerHTML.indexOf("MyPartnersLog") < 0) {
            document.getElementsByClassName("info_win_warn")[0].innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }

    MyPartnersLog.onclick = function() {
        console.log(document.getElementsByTagName("input")[2])
        if (document.getElementsByTagName("input")[2] != undefined) {
            document.getElementsByTagName("input")[0].value = DomRu_Login;
            document.getElementsByTagName("input")[1].value = DomRu_Password;

            document.getElementsByTagName("input")[0].dispatchEvent(event);
            document.getElementsByTagName("input")[1].dispatchEvent(event);


            document.querySelectorAll('[method="post"]')[0].submit();

            document.getElementsByTagName("input")[0].value = 'Логин';
            document.getElementsByTagName("input")[1].value = 'Пароль';

            document.getElementsByTagName("input")[0].dispatchEvent(event);
            document.getElementsByTagName("input")[1].dispatchEvent(event);

        }
    };
}


