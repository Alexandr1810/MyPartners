var PassToken = null;
var Telecoma_Login = null;
var Telecoma_Password = null;
var LoginKey = null;

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "Telecoma",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'Telecoma') {
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
                          Telecoma_Login = tasks.Telecoma_Log
                          Telecoma_Password  = tasks.Telecoma_Pass
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


    if (document.querySelectorAll('[name="auth_name"]')[0] != undefined) {
        document.querySelectorAll('[name="auth_name"]')[0].setAttribute('type', 'password')
    }
    if (document.querySelectorAll('[name="auth_pass"]')[0] != undefined) {
        document.querySelectorAll('[name="auth_pass"]')[0].setAttribute('type', 'password')
    }

    if (document.querySelectorAll('[name="auth_name"]')[0] != undefined) {
        if (document.getElementById("play").innerHTML.indexOf("MyPartnersLog") < 0) {
            document.getElementById("play").innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }


    try{
        MyPartnersLog.onclick = function() {
            console.log(document.querySelectorAll('[type="submit"]')[0])
            if (document.querySelectorAll('[type="submit"]')[0] != undefined) {
                document.querySelectorAll('[name="auth_name"]')[0].value = Telecoma_Login;
                document.querySelectorAll('[name="auth_pass"]')[0].value = Telecoma_Password;

                document.querySelectorAll('[name="auth_name"]')[0].dispatchEvent(event);
                document.querySelectorAll('[name="auth_pass"]')[0].dispatchEvent(event);


                document.querySelectorAll('[type="submit"]')[0].click();


                document.querySelectorAll('[name="auth_name"]')[0].value = 'Логин';
                document.querySelectorAll('[name="auth_pass"]')[0].value = 'Пароль';

                document.querySelectorAll('[name="auth_name"]')[0].dispatchEvent(event);
                document.querySelectorAll('[name="auth_pass"]')[0].dispatchEvent(event);
            }
        };
    }
    catch(e){
        //console.log(e)
    }

    try{
        if (document.getElementsByClassName("formname")[0].innerHTML.indexOf("tooltiptext1") < 0 && document.getElementsByClassName("title")[0].innerText == 'Регистрация заявки') {
            document.getElementsByClassName("formname")[0].innerHTML += '<span class="tooltiptext1" style="top: 22%;">Мы самостоятельно ставим СЗ в график подключений. Нужно согласовать с клиентом.</span>'
            document.getElementsByClassName("formname")[1].innerHTML += '<span class="tooltiptext1" style="top: 25%;">Поле «Адрес подключения» заполняется автоматически, а номер квартиры нужно вписать вручную.</span>'
            document.getElementsByClassName("formname")[3].innerHTML += '<span class="tooltiptext1" style="top: 32%;">ФИО вписываем без лишних пробелов.<br>Пример: Шатохин Иван Павлович.</span>'
            document.getElementsByClassName("formname")[4].innerHTML += '<span class="tooltiptext1" style="top: 35%;">Контактный номер вписываем с «+7» без лишних пробелов и тире.<br>Пример: +79332660125.</span>'
            document.getElementsByClassName("formname")[5].innerHTML += '<span class="tooltiptext1" style="top: 39%;">Эти поля обязательны к заполнению, поэтому у клиента важно уточнить эти данные в диалоге.</span>'
            document.getElementsByClassName("formname")[6].innerHTML += '<span class="tooltiptext1" style="top: 42%;">Эти поля обязательны к заполнению, поэтому у клиента важно уточнить эти данные в диалоге.</span>'
            document.getElementsByClassName("formname")[7].innerHTML += '<span class="tooltiptext1" style="top: 40%;">Здесь нужно указать конфигурацию ТП, название ТП, помесячную АП за ТП, потом оборудование, стоимость его аренды/рассрочки (срок рассрочки)/выкупа и стоимость подключения и дополнительную информацию. Обязательно нужно прописать, что настройка роутера бесплатно! Здесь никакие акции, включенные в ТП, не прописываются.<br><br>Пример: пакет с ктв "ПАКЕТ 200" за 850р + роутер в аренду за 100р + подключение 300р. настройка роутера бесплатно, два телевизора, кабель есть (орион).</span>'
            document.getElementsByClassName("formname")[8].innerHTML += '<span class="tooltiptext1" style="top: 51%;">Вручную выбираем «Сотрудник компании - Полховский Дмитрий Алексеевич».</span>'
            document.getElementsByClassName("formname")[9].innerHTML += '<span class="tooltiptext1" style="top: 55%;">Поле «Тип подключения» заполнено автоматически, мы его не трогаем. </span>'
            document.getElementsByClassName("formname")[10].innerHTML += '<span class="tooltiptext1" style="top: 54%;">В поле «Подключаемые услуги» нужно указать галочками конфигурацию ТП. В поле «Подключение  по акции» нужно указать акцию, если она была обговорена с клиентом и применима к выбранному ТП. В поле «Оборудование» нужно прописать информацию, касаемо аренды/рассрочки (срока рассрочки)/выкупа роутеров и дополнительную информацию.</span>'
            
        }
    }
    catch(e){
        console.log(e)
    }

}


