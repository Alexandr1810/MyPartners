var passToken  = null;
var RTKYr_Login = null;
var RTKYr_Password = null;
var LoginKey = null;

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "RTKYr",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient);
            passToken  = request.Token;

            if (request.Recipient == 'RTKYr') {
                if (request.Message=='true') {
                    console.log("Хуй");
                    passToken  = request.Token;
                    LoginKey = request.LogToken



                    fetch('https://'+passToken+'.mockapi.io/MyPartners/EISSD_Pass/1', {
                      method: 'GET',
                      headers: {'content-type':'application/json'},
                    }).then(res => {
                      if (res.ok) {
                          return res.json();
                      }
                      // handle error
                    }).then(tasks => {
                        if (LoginKey == tasks.LoginCode) {
                          RTKYr_Login = tasks.RTKYr_Log
                          RTKYr_Password  = tasks.RTKYr_Pass
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
    // Эмитация клика мыши, для ебучей кнопки в исполнении РТК 
    var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });
    
    if (document.querySelectorAll('[name="login-field"]')[0] != undefined) {
        document.querySelectorAll('[name="login-field"]')[0].setAttribute('type', 'password')
        document.getElementsByTagName('svg')[0].style.display = 'none'
      }
      if (document.querySelectorAll('[name="pwd-field"]')[0] != undefined) {
        document.querySelectorAll('[name="pwd-field"]')[0].setAttribute('type', 'password')

      }
    
    


    if (window.location.href.indexOf("admin/login") >= 0) {
        if (document.getElementsByClassName("uz-card-header")[0].innerHTML.indexOf("Вход") < 0) {
            document.getElementsByClassName("uz-card-header")[0].innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }

    MyPartnersLog.onclick = function() {
        console.log(document.querySelectorAll('[value="Войти"]')[0])
        if (document.querySelectorAll('[value="Войти"]')[0] != undefined) {
            document.querySelectorAll('[name="login-field"]')[0].value = RTKYr_Login;
            document.querySelectorAll('[name="pwd-field"]')[0].value = RTKYr_Password;

            document.querySelectorAll('[name="login-field"]')[0].dispatchEvent(event);
            document.querySelectorAll('[name="pwd-field"]')[0].dispatchEvent(event);


            document.querySelectorAll('[value="Войти"]')[0].dispatchEvent(clickEvent);

        }
    };

}


