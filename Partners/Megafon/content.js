var PassToken = null;
var Megafon_Login = null;
var Megafon_Password = null;
var LoginKey = null;

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "Megafon",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient);
            if (request.Recipient == 'Megafon') {
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
                          Megafon_Login = tasks.Megafon_Log
                          Megafon_Password  = tasks.Megafon_Pass
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

    

    if (window.location.href.indexOf("/auth") >= 0) {
        if (document.getElementsByTagName('input')[0] != undefined) {
            document.getElementsByTagName('input')[0].setAttribute('type', 'password')

            document.getElementsByTagName('input')[0].setAttribute('autocomplete', 'oh')
            
            document.getElementsByTagName('input')[0].removeAttribute('readonly');
        
            document.getElementsByClassName("hide-password")[0].style.display = 'none';
        }
        if (document.getElementsByTagName('input')[1] != undefined) {
            document.getElementsByTagName('input')[1].setAttribute('type', 'password')

            document.getElementsByTagName('input')[1].setAttribute('autocomplete', 'oh')

            document.getElementsByTagName('input')[1].removeAttribute('readonly'); 

            
        }
        if (document.getElementsByClassName("auth__copyright")[0].innerHTML.indexOf("MyPartnersLog") < 0) {
            document.getElementsByClassName("auth__copyright")[0].innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }
    try{
        MyPartnersLog.onclick = function() {
            console.log(document.getElementsByClassName('btn')[0])
            if (document.getElementsByClassName('btn')[0] != undefined) {
                document.getElementsByTagName('input')[0].value = Megafon_Login;
                document.getElementsByTagName('input')[1].value = Megafon_Password;

                document.getElementsByTagName('input')[0].dispatchEvent(event);
                document.getElementsByTagName('input')[1].dispatchEvent(event);


                document.getElementsByClassName('btn')[0].click();

                document.getElementsByTagName('input')[0].value = 'Логин';
                document.getElementsByTagName('input')[1].value = 'Пароль';

                document.getElementsByTagName('input')[0].dispatchEvent(event);
                document.getElementsByTagName('input')[1].dispatchEvent(event);

                document.getElementsByClassName('btn')[0].click();

            }
        };
    }
    catch(e){

    }
    try{
        if (document.getElementsByClassName("check-address-hint")[0].innerHTML.indexOf("tooltiptext1") < 0 && document.getElementsByClassName("check-address-hint")[0].innerText == 'Укажите город, улицу, дом') {
            document.getElementsByClassName("check-address-hint")[0].innerHTML += '<span class="tooltiptext1" style="top: 17%;left: 69%;width: 17%;">Название населенного пункта, улицу, номер дома и квартиру вписываем вручную и выбираем адрес из выпадающего списка. Внизу будет указана технология подключения и другие особенности по адресу.</span>'
            
        }
    }
    catch(e){
        console.log(e)
    }
    try{
        if (document.getElementsByClassName("star")[0].innerHTML.indexOf("tooltiptext2") < 0 && document.getElementsByClassName("star")[0].innerText == 'Фамилия') {
           document.getElementsByClassName("star")[0].innerHTML += '<span class="tooltiptext2" style="top: 0%;left: 47%;width: 32%;">ФИО вписываем без лишних пробелов.</span>'
           document.getElementsByClassName("star")[1].innerHTML += '<span class="tooltiptext2" style="top: 10%;left: 47%;width: 32%;">ФИО вписываем без лишних пробелов.</span>'
           document.getElementsByClassName("star")[2].innerHTML += '<span class="tooltiptext2" style="top: 27%;left: 47%;width: 33%;">Контактный и дополнительный номер указываем с семерки, автоматически добавится знак плюса.</span>'
           document.getElementsByClassName("star")[3].innerHTML += '<span class="tooltiptext2" style="top: 56%;left: 47%;width: 33%;">Поле «Подъезд» обязательно к заполнению, а «Этаж» нет. </span>'
           document.querySelectorAll('[for="comment"]')[0].innerHTML += '<span class="tooltiptext2" style="top: 76%;left: 47%;width: 32%;">В поле «Комментарий при создании» можно указать дополнительную информацию.<br>Пример: домофон не работает, проход на чердак через тамбурные двери, клиент сказал, что договорится с соседями.</span>'
        }
    }
    catch(e){
        console.log(e)
    }
}


