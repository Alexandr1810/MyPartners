var PassToken = null;
var Akado_Login = null;
var Akado_Password = null;
var LoginKey = null;
window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "Akado",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'Akado') {
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
                            Akado_Login = tasks.Akado_Log
                            Akado_Password  = tasks.Akado_Pass
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
                    console.log("НеХуй");
                }
            }
        }
    );

    
})

function InStart(){
    console.log("Получил, Делаю!")

    const event = new Event('input', { bubbles: true });


    if (document.querySelectorAll('[placeholder="Ваш логин"]')[0] != undefined) {
        document.querySelectorAll('[placeholder="Ваш логин"]')[0].setAttribute('type', 'password')
    }
    if (document.querySelectorAll('[placeholder="Пароль"]')[0] != undefined) {
        document.querySelectorAll('[placeholder="Пароль"]')[0].setAttribute('type', 'password')
    }

    if (window.location.href.indexOf("/user") >= 0) {
        if (document.getElementsByClassName("active")[0].innerHTML.indexOf("MyPartnersLog") < 0) {
            document.getElementsByClassName("active")[0].innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }
    try{
        MyPartnersLog.onclick = function() { //мкр Северное Чертаново, д 3 к Б-261
            console.log(document.querySelectorAll('[type="submit"]')[0])
            if (document.querySelectorAll('[type="submit"]')[0] != undefined) {
                document.querySelectorAll('[placeholder="Ваш логин"]')[0].value = Akado_Login;
                document.querySelectorAll('[placeholder="Пароль"]')[0].value = Akado_Password;

                document.querySelectorAll('[placeholder="Ваш логин"]')[0].dispatchEvent(event);
                document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);


                document.querySelectorAll('[type="submit"]')[0].click();

                document.querySelectorAll('[placeholder="Ваш логин"]')[0] = 'Логин';
                document.querySelectorAll('[placeholder="Пароль"]')[0] = 'Пароль';



                setTimeout(document.querySelectorAll('[type="submit"]')[0].click(), 500);
            }

        };
    }
    catch(e){
        if (document.getElementsByTagName("label")[20].innerHTML.indexOf("tooltiptext1") < 0) {
            document.getElementsByTagName("label")[20].innerHTML += '<span style="top: 65%; left: 31%;" class="tooltiptext1">Услуги, которые будут подключаться, нужно выбрать галочками. Далее выбрать тариф.</span>'
            document.getElementsByTagName("label")[23].innerHTML += '<span style="top: 28%; left: 55%;" class="tooltiptext1">В полях «Дата планируемого подключения» и «Выберите временной интервал» указываем желаемые дату и время выезда монтажника.</span>'
            document.getElementsByTagName("h3")[5].innerHTML += '<span style="top: 28%;left: 69%;" class="tooltiptext1">Указываем сам ТП и оборудование.<br>Пример: моно шпд 200мбит/с за 518р + роутер в аренду за 150р.</span>'
        }
    }
}


