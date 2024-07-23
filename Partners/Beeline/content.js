var PassToken = null;
var Beeline_Login = null;
var Beeline_Password = null;
var BeelineMSK_Login = null;
var BeelineMSK_Password = null;
var IsReplase = false;
var LoginKey = null;

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "Beeline",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient);
            if (request.Recipient == 'Beeline') {
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
                          Beeline_Login = tasks.Beeline_Log
                          Beeline_Password  = tasks.Beeline_Pass
                          BeelineMSK_Login = tasks.BeelineMSK_Log
                          BeelineMSK_Password = tasks.BeelineMSK_Pass
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
    var IsMSK = false;

    const event = new Event('input', { bubbles: true });


    if (document.getElementById('id_login') != undefined) {
        document.getElementById('id_login').setAttribute('type', 'password')
        document.getElementById('id_login').setAttribute('autocomplete', 'oh')
        document.getElementById('id_password').setAttribute('autocomplete', 'oh')

        document.getElementById('id_login').removeAttribute('readonly');
        document.getElementById('id_password').removeAttribute('readonly'); 

    }
    if (document.getElementById('id_password') != undefined) {
        document.getElementById('id_password').setAttribute('type', 'password')
        document.getElementsByTagName('svg')[1].style.display = 'none'
    }

    if (document.getElementById('id_password') != undefined) { 
        if (document.querySelectorAll('[for="id_password"]')[0].innerHTML.indexOf("MyPartnersLog") < 0) {
            document.querySelectorAll('[for="id_password"]')[0].innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a><a id="MyPartnersLogMSK" style="display:none"><span id="MyPartnersTextMSK">Билайн МСК</span></a>'
        }
    }
    try{
        MyPartnersLog.onclick = function() {
            console.log(document.getElementsByClassName('button')[0])
            if (document.getElementsByClassName('button')[0] != undefined) {
                document.getElementById('id_login').value = Beeline_Login;
                document.getElementById('id_workercode').setAttribute('placeholder', '2000000000 (2 и 9 нулей)');
                document.getElementById('id_workercode').value = '2000000000'
                document.getElementById('id_password').value = Beeline_Password;

                document.getElementById('id_login').dispatchEvent(event);
                document.getElementById('id_workercode').dispatchEvent(event);
                document.getElementById('id_password').dispatchEvent(event);

                document.getElementsByClassName('button')[0].click()

                setTimeout(function(){
                    document.getElementById('id_login').value = 'Логин';
                    document.getElementById('id_workercode').value = 'Код Сотрудника'
                    document.getElementById('id_password').value = 'Пароль'

                    document.getElementById('id_login').dispatchEvent(event);
                    document.getElementById('id_password').dispatchEvent(event);
                    document.getElementById('id_workercode').dispatchEvent(event);

                    document.getElementsByClassName('button')[0].click()
                }, 200)
            }
        };
        MyPartnersLogMSK.onclick = function() {
            console.log(document.getElementsByClassName('button')[0])
            if (document.getElementsByClassName('button')[0] != undefined) {
                document.getElementById('id_login').value = BeelineMSK_Login;
                document.getElementById('id_workercode').setAttribute('placeholder', '1000000000 (1 и 9 нулей)');
                document.getElementById('id_workercode').value = '1000000000'
                document.getElementById('id_password').value = BeelineMSK_Password;

                document.getElementById('id_login').dispatchEvent(event);
                document.getElementById('id_password').dispatchEvent(event);
                document.getElementById('id_workercode').dispatchEvent(event);

                document.getElementsByClassName('button')[0].click()
                setTimeout(function(){
                    document.getElementById('id_login').value = 'Логин';
                    document.getElementById('id_workercode').value = 'Код Сотрудника'
                    document.getElementById('id_password').value = 'Пароль'

                    document.getElementById('id_login').dispatchEvent(event);
                    document.getElementById('id_password').dispatchEvent(event);
                    document.getElementById('id_workercode').dispatchEvent(event);

                    document.getElementsByClassName('button')[0].click()
                }, 200)
            }
        };
    }
    catch(e){

    }

    try{
        if (document.getElementsByClassName("mb-16")[0].innerHTML.indexOf("tooltiptext1") < 0 && document.getElementsByClassName("mb-16")[0].innerText == 'Адрес абонента') {
            document.getElementsByClassName("mb-16")[0].innerHTML += '<span class="tooltiptext1" style="top: 9%; width: 30%; left: 94%;"> Номер квартиры, подъезда и этажа обязательно нужно указать. В поле «Домофон» нужно вписать номер квартиры.</span>'
            document.getElementsByClassName("mb-16")[2].innerHTML += '<span class="tooltiptext1" style="top: 45%; width: 30%; left: 56%;"> ФИО вписываем по одному слову без пробелов. Контактный и дополнительный номер указываем со второй цифры без пробелов и тире.<br>Пример: 9332660125.</span>'
            
        }
    }
    catch(e){

    }
    /*
    if (document.getElementsByClassName('ng-binding')[0].innerText.indexOf('Новая заявка') >= 0)  {
        if (document.getElementsByClassName('ng-binding')[1].innerText == '1000000000') {
            //console.log("IsMSK до проверок: ", IsMSK)
            console.log("IsMSK до проверок: ", IsMSK)
            if (document.getElementsByClassName('ng-binding')[2].innerText.indexOf('Москва,') >= 0) {
                IsMSK = true
                console.log("IsMSK 1: ", IsMSK)
            }
            if (document.getElementsByClassName('ng-binding')[2].innerText.indexOf('МО,') >= 0) {
                IsMSK = true
                console.log("IsMSK 2: ", IsMSK)
            }
            if (document.getElementsByClassName('ng-binding')[2].innerText.indexOf('МО') >= 0) {
                IsMSK = true
                console.log("IsMSK 3: ", IsMSK)
            }
            if (document.getElementsByClassName('ng-binding')[2].innerText.indexOf('Москва г,') >= 0) {
                IsMSK = true
                console.log("IsMSK 4: ", IsMSK)
            }
            console.log("IsMSK после проверок: ", IsMSK)
            if (IsMSK == false){
                console.log("IsMSK в блоке 1: ", IsMSK)
                if (document.getElementsByClassName('ng-binding')[0].innerText.indexOf('Вы не можете завети этот адрес') < 0) {
                    for (var i = 0; i < document.querySelectorAll('[type="submit"]').length; i++) {
                        document.querySelectorAll('[type="submit"]')[i].style.display = 'none'
                    }
                    document.getElementsByClassName('ng-binding')[0].innerHTML += '<span id="AdrText" style="color: red;margin-left: 10px;font-weight: 700;font-size: 19px;">Вы не можете завети этот адрес в учетку Москва и МО, войдите в Билайн РФ</span>'
                }
            }
            if (IsMSK){
                console.log("IsMSK в блоке 2: ", IsMSK)
                if (document.getElementsByClassName('ng-binding')[0].innerText.indexOf('Вы не можете завети этот адрес') >= 0) {
                    for (var i = 0; i < document.querySelectorAll('[type="submit"]').length; i++) {
                        document.querySelectorAll('[type="submit"]')[i].style.display = 'inline-block'
                    }
                    document.getElementsByClassName('ng-binding')[0].innerText = 'Новая заявка'
                }
            }
            

        }
        else if(document.getElementsByClassName('ng-binding')[1].innerText == '2000000000'){
            if (document.getElementsByClassName('ng-binding')[2].innerText.indexOf('Москва,') >= 0 || document.getElementsByClassName('ng-binding')[2].innerText.indexOf('МО,') >= 0 || document.getElementsByClassName('ng-binding')[2].innerText.indexOf('Москва г,') >= 0) {
                for (var i = 0; i < document.querySelectorAll('[type="submit"]').length; i++) {
                    document.querySelectorAll('[type="submit"]')[i].style.display = 'none'

                }
                if (document.getElementsByClassName('ng-bindinНеаg')[0].innerText.indexOf('Вы не можете завети этот адрес') < 0) {
                    document.getElementsByClassName('ng-binding')[0].innerHTML += '<span id="AdrText" style="color: red;margin-left: 10px;font-weight: 700;font-size: 19px;">Вы не можете завети этот адрес в учетку Билайн РФ, войдите в Москва и МО!</span>'
                }
            }
        }
    }
    else if (document.getElementsByClassName('ng-binding')[0].innerText.indexOf('Новая заявка') < 0) {
        document.getElementsByClassName('ng-binding')[0].innerHTML = document.getElementsByClassName('ng-binding')[0].innerHTML.replace('<span id="AdrText" style="color: red;margin-left: 10px;font-weight: 700;font-size: 19px;">Вы не можете завети этот адрес в учетку Билайн РФ, войдите в Москва и МО!</span>', '')
        document.getElementsByClassName('ng-binding')[0].innerHTML = document.getElementsByClassName('ng-binding')[0].innerHTML.replace('<span id="AdrText" style="color: red;margin-left: 10px;font-weight: 700;font-size: 19px;">Вы не можете завети этот адрес в учетку Москва и МО, войдите в Билайн РФ</span>', '')
        for (var i = 0; i < document.querySelectorAll('[type="submit"]').length; i++) {
            document.querySelectorAll('[type="submit"]')[i].style.display = 'inline-block'
        }
    }
    */
}


