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
    
    try{
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
    catch(e){
        console.log(e)
    }
    try{
        if (document.getElementsByClassName("control-label")[0].innerHTML.indexOf("tooltiptext1") < 0 && document.querySelectorAll('[href="/onyma/dashboard/AAFefEAAwAAAAvjAAA/"]')[0].innerText == 'АРМ Удаленный продавец') {
            document.getElementsByClassName("control-label")[0].innerHTML += '<span class="tooltiptext1" style="top: -100%;width: 30%;left: 40%;">Населенный пункт вписываем полностью, нажимаем enter и выбираем вариант из выпадающего списка.<br><br> Адрес вписываем без города в формате: «улица, номер дома»,  нажимаем enter и выбираем вариант из выпадающего списка.<br><br> Если нужно указать номер квартиры- нажимаем «+» в правом верхнем углу выпадающего окна и вписываем его.<br><br> Далее нажимаем «Проверить адрес».<br><br> Далее внизу будут указаны технологии подключения, по которым работает ТТК на выбранном адресе и ограничения</span>'
            document.getElementsByClassName("control-label")[7].innerHTML += '<span class="tooltiptext1" style="top: 7%;width: 30%;left: 57%;">ФИО вписываем без лишних пробелов.</span>'
            document.getElementsByClassName("control-label")[8].innerHTML += '<span class="tooltiptext1" style="top: 15%;width: 30%;left: 57%;">ФИО вписываем без лишних пробелов.</span>'
            document.getElementsByClassName("control-label")[9].innerHTML += '<span class="tooltiptext1" style="top: 22%;width: 30%;left: 57%;">ФИО вписываем без лишних пробелов.</span>'
            document.getElementsByClassName("control-label")[10].innerHTML += '<span class="tooltiptext1" style="top: 24%;width: 30%;left: 57%;">Контактный и дополнительный номер указываем со второй цифры без пробелов и тире.<br>Пример: 9332660125.</span>'
            document.getElementsByClassName("control-label")[13].innerHTML += '<span class="tooltiptext1" style="top: 39%;width: 30%;left: 57%;">Контактный и дополнительный номер указываем со второй цифры без пробелов и тире.<br>Пример: 9332660125.</span>'
            document.getElementsByClassName("control-label")[14].innerHTML += '<span class="tooltiptext1" style="top: 61%;width: 30%;left: 57%;">Указываем «Агент компании»</span>'
            document.getElementsByClassName("control-label")[15].innerHTML += '<span class="tooltiptext1" style="top: 47%;width: 30%;left: 57%;">Пишем конфигурацию ТП, условия ТП, его название, период скидки и стоимость по скидке (при наличии), оборудование, стоимость его аренды/рассрочки (срок рассрочки)/выкупа и дополнительную информацию.<br>Пример: пакет с цтв «Бонус» за 575р + роутер в рассрочку на 6 мес за 220р. телевизор смарт, подключение бесплатно.</span>'
        }
    }
    catch(e){
        console.log(e)
    }

}


