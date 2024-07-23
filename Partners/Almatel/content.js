var PassToken = null;
var Almatel_Login = null;
var Almatel_Password = null;
var LoginKey = null;

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "Almatel",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'Almatel') {
                if (request.Message=='true') {
                    console.log("Хуй");
                    PassToken = request.Token;
                    LoginKey = request.LogToken
                    //setInterval(InStart, 200);

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
                          Almatel_Login = tasks.Almatel_Log
                          Almatel_Password  = tasks.Almatel_Pass
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


    if (document.querySelectorAll('[placeholder="Логин"]')[0] != undefined) {
        document.querySelectorAll('[placeholder="Логин"]')[0].setAttribute('type', 'password')
    }
    if (document.querySelectorAll('[placeholder="Пароль"]')[0] != undefined) {
        document.querySelectorAll('[placeholder="Пароль"]')[0].setAttribute('type', 'password')
    }

    if (document.querySelectorAll('[placeholder="Пароль"]')[0] != undefined) {
        if (document.getElementsByClassName("login-info")[0].innerHTML.indexOf("MyPartnersLog") < 0) {
            document.getElementsByClassName("login-info")[0].innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }
    try{
        MyPartnersLog.onclick = function() {
            console.log(document.querySelectorAll('[type="submit"]')[0])
            if (document.querySelectorAll('[type="submit"]')[0] != undefined) {
                document.querySelectorAll('[placeholder="Логин"]')[0].value = Almatel_Login;
                document.querySelectorAll('[placeholder="Пароль"]')[0].value = Almatel_Password;

                document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
                document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);


                document.querySelectorAll('[type="submit"]')[0].click();

                document.querySelectorAll('[placeholder="Логин"]')[0].value = 'Логин';
                document.querySelectorAll('[placeholder="Пароль"]')[0].value = 'Пароль';

                document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
                document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);


                document.querySelectorAll('[type="submit"]')[0].click();

            }
        };
    }
    catch(e){
        if (document.getElementsByTagName("label")[0].innerHTML.indexOf("tooltiptext1") < 0 && document.getElementsByClassName('order-create__title').length > 0) {
            document.getElementsByTagName("label")[0].innerHTML += '<span class="tooltiptext1">Поля №1, №2, №3 («Фамилия», «Имя», «Отчество»)<br>Записываем без лишних пробелов.</span>'
            document.getElementsByTagName("label")[3].innerHTML += '<span class="tooltiptext1" style=" top: 45%; ">Контактный номер вписываем со второй цифры, без пробелов и тире. <br>При наличии записываем второй номер.</span>'
            document.getElementsByTagName("label")[4].innerHTML += '<span class="tooltiptext1" style=" top: 55%; ">Не пишем.</span>'
            document.getElementsByTagName("label")[5].innerHTML += '<span class="tooltiptext1" style=" top: 60%; ">Обозначаем наличие кабеля, тип кабеля и его исправность (по возможности),<br> наличие технологического отверстия, наличие паспорта РФ, потом оборудование и стоимость его аренды/рассрочки (срок рассрочки)/выкупа.<br>Пример: кабель есть, тех отверстие есть, паспорт рф, роутер в аренду за 150р.</span>'
        }
    }

}


