var PassToken = null;
var MTS_Login_Login = null;
var MTS_Login_Password = null;
var LoginKey = null;

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "MTS_Login",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'MTS_Login') {
                if (request.Message=='true') {
                    console.log("Хуй");
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
                        if (LoginKey == tasks.LoginCode) {
                          MTS_Login_Login = tasks.MTS_Log
                          MTS_Login_Password  = tasks.MTS_Pass
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
      console.log("Получил, Делаю!") //document.getElementsByClassName("b-header__corp-instruction")[0]

    const event = new Event('input', { bubbles: true });


    if (document.getElementById("phone") != undefined) {
        document.getElementById("phone").setAttribute('type', 'password')
    }
    if (document.getElementById("password") != undefined) {
        document.getElementById("password").setAttribute('type', 'password')
    }

    if (window.location.href.indexOf("login.mts") >= 0) {
        if (document.getElementsByClassName("b-header__corp-instruction")[0].innerHTML.indexOf("MyPartnersLog") < 0) {
            document.getElementsByClassName("b-header__corp-instruction")[0].innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }

    MyPartnersLog.onclick = function() {
        console.log(document.getElementsByClassName('btn_login')[0])
        if (document.getElementsByClassName('btn_login')[0] != undefined) {
            document.getElementById("phone").value = MTS_Login_Login;
            document.getElementById("password").value = MTS_Login_Password;

            document.getElementById("phone").dispatchEvent(event);
            document.getElementById("password").dispatchEvent(event);


            document.getElementsByClassName('btn_login')[0].click();

        }
    };
}


