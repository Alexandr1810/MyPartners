var PassToken = null;
var YfaNet_Login = null;
var YfaNet_Password = null;


window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "YfaNet",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            console.log(request, sender, sendResponse);
            console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'YfaNet') {
                if (request.Message=='true') {
                    console.log("Хуй");
                    PassToken = request.Token;
                    setInterval(InStart, 200);

                    fetch('https://'+PassToken+'.mockapi.io/MyPartners/EISSD_Pass/1', {
                      method: 'GET',
                      headers: {'content-type':'application/json'},
                    }).then(res => {
                      if (res.ok) {
                          return res.json();
                      }
                      // handle error
                    }).then(tasks => {
                      YfaNet_Login = tasks.YfaNet_Log
                      YfaNet_Password  = tasks.YfaNet_Pass
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

    /*
    if (document.querySelectorAll('[name="login"]')[0] != undefined) {
        document.querySelectorAll('[name="login"]')[0].setAttribute('type', 'password')
    }
    if (document.querySelectorAll('[name="password"]')[0] != undefined) {
        document.querySelectorAll('[name="password"]')[0].setAttribute('type', 'password')
    }

    if (window.location.href.indexOf("/login") >= 0) {
        if (document.getElementsByClassName("v-card")[0].innerHTML.indexOf("MyPartnersLog") < 0) {
            document.getElementsByClassName("v-card")[0].innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }

    MyPartnersLog.onclick = function() {
        console.log(document.querySelectorAll('[type="submit"]')[0])
        if (document.querySelectorAll('[type="submit"]')[0] != undefined) {
            document.querySelectorAll('[name="login"]')[0].value = YfaNet_Login;
            document.querySelectorAll('[name="password"]')[0].value = YfaNet_Password;

            document.querySelectorAll('[name="login"]')[0].dispatchEvent(event);
            document.querySelectorAll('[name="password"]')[0].dispatchEvent(event);


            document.querySelectorAll('[type="submit"]')[0].click();

        }
    };
    */
}


