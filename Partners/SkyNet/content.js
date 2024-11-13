var PassToken = null;
var SkyNet_Login = null;
var SkyNet_Password = null;
var LoginKey = null;

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "SkyNet",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'SkyNet') {
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
                          SkyNet_Login = tasks.SkyNet_Log
                          SkyNet_Password  = tasks.SkyNet_Pass
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

    if (document.querySelectorAll('[name="login"]')[0] != undefined) {
        document.querySelectorAll('[name="login"]')[0].setAttribute('type', 'password')

        document.querySelectorAll('[name="login"]')[0].setAttribute('autocomplete', 'oh')
        

        document.querySelectorAll('[name="login"]')[0].removeAttribute('readonly');

        document.getElementsByTagName('svg')[0].style.display = 'none'
    }
    if (document.querySelectorAll('[name="password"]')[0] != undefined) {
        document.querySelectorAll('[name="password"]')[0].setAttribute('type', 'password')

        document.querySelectorAll('[name="password"]')[0].setAttribute('autocomplete', 'oh')

        document.querySelectorAll('[name="password"]')[0].removeAttribute('readonly'); 
    }

    if (window.location.href.indexOf("/login") >= 0) {
        if (document.getElementsByTagName('div')[14].innerHTML.indexOf("MyPartnersLog") < 0) {
            document.getElementsByTagName('div')[14].innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }
    try{
        MyPartnersLog.onclick = function() {
            console.log(document.querySelectorAll('[role="button"]')[0])
            if (document.querySelectorAll('[role="button"]')[0] != undefined) {
                document.querySelectorAll('[name="login"]')[0].value = SkyNet_Login;
                document.querySelectorAll('[name="password"]')[0].value = SkyNet_Password;

                document.querySelectorAll('[name="login"]')[0].dispatchEvent(event);
                document.querySelectorAll('[name="password"]')[0].dispatchEvent(event);


                document.querySelectorAll('[role="button"]')[0].click();

                document.querySelectorAll('[name="login"]')[0].value = 'Логин';
                document.querySelectorAll('[name="password"]')[0].value = 'Пароль';

                document.querySelectorAll('[name="login"]')[0].dispatchEvent(event);
                document.querySelectorAll('[name="password"]')[0].dispatchEvent(event);

                document.querySelectorAll('[role="button"]')[0].click();

            }
        };
    }
    catch(e){

    }
    /*
    try{
        if (document.getElementsByTagName("span")[11].innerHTML.indexOf("tooltiptext1") < 0 && document.getElementsByTagName("div")[5].innerText == 'Создание заявки') {
            document.getElementsByTagName("span")[11].innerHTML += '<span class="tooltiptext1" style="">Мы самостоятельно ставим СЗ в график подключений. Нужно согласовать с клиентом.</span>'
            document.getElementsByTagName("span")[15].innerHTML += '<span class="tooltiptext1" style="top: 45%;">Контактный и дополнительный телефон можно писать как «7», так и с «+7», так и со второй цифры - все настраивается под нужный формат.</span>'
            document.getElementsByTagName("span")[19].innerHTML += '<span class="tooltiptext1" style="top: 61%;">Записать ФИО нужно без лишних пробелов и ошибок.</span>'
            document.getElementsByTagName("span")[21].innerHTML += '<span class="tooltiptext1" style="top: 61%;">Записать ФИО нужно без лишних пробелов и ошибок.</span>'
            document.getElementsByTagName("section")[11].innerHTML += '<span class="tooltiptext2" style="top: 126%;">Указываем особенности подключения и дополнительную информацию по ТП.<br>Пример: пакет с цтв за 1300р (абонемент на 4 мес) + роутер под выкуп за 5000р. подключение бесплатно. #гарантия, просят 22.04 в 11:00.</span>'
            //document.getElementsByTagName("span")[11].innerHTML += '<span class="tooltiptext1" style="">Указываем особенности подключения и дополнительную информацию по ТП.<br>Пример: пакет с цтв за 1300р (абонемент на 4 мес) + роутер под выкуп за 5000р. подключение бесплатно. #гарантия, просят 22.04 в 11:00.</span>'
        }
    }
    catch(e){

    }
    */
}


