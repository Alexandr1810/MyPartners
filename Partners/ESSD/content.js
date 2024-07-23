CreateApplicationLink = document.querySelectorAll('[href="/order/phys/edit"]');
Profile = document.getElementsByClassName('hide-690');
FirstBlock1 = document.getElementsByClassName('nav-tiles__tile-title');
LoginPage = document.getElementsByClassName('auth-page__header-title');
LoginInput = document.getElementsByClassName('input-main');
MyComboTree = document.getElementsByClassName('expandable');
RTcheckbox = document.getElementsByClassName('fs-checkbox');
EnterFormButton = document.getElementsByClassName('button-main');
EnterMRF = document.getElementsByClassName('c-head-36');
IstochnicList = document.getElementsByClassName('form-1-list');
IstochnicList1 = document.getElementsByClassName('fs-checkbox-label');
FirstBlock = document.getElementById('main-info');
SessionError = null;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var RosRf_Log = 'nm97' 
var RosRf_Pass = 'Vra-DJp-QCk-7ts'

var LoginKey = null;


var PassToken = null;

var ESSD_On_Off = '';
var OtherMRF_login = 'strijak_ov';
var OtherMRF_password = 'Poiuyt123!';

var MoskowObl_login = null;
var MoskowObl_password = null;
var OtherMRF_login_FromApi = null;
var OtherMRF_password_FromApi = null;

var OtherMRF_login_FromApi_1 = null;
var OtherMRF_password_FromApi_1 = null;

var OtherMRF_login_FromApi_2 = null;
var OtherMRF_password_FromApi_2 = null;

var randomIndex1 = getRandomInt(3)
console.log(randomIndex1)

var d = new Date();
var Day_Of_Week = d.getUTCDay();
var Hour_Of_Day = d.getUTCHours()+7;
console.log('d: ', d)
console.log('Day_Of_Week:', Day_Of_Week) 
console.log('Hour_Of_Day:', Hour_Of_Day)

if (localStorage.getItem("AutomaticSaveOnStart")=="true"){
    console.log("TRUE");
}


window.addEventListener('load', function () { 

    chrome.runtime.sendMessage({
        user: "essd",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            console.log(request, sender, sendResponse);
            if (request.Recipient == 'essd') {
                if (request.Message=='true') {
                    console.log("Хуй");

                    if (request.login != undefined){
                        localStorage.setItem("ESSDlog", request.login);
                    }
                    if (request.password != undefined){
                        localStorage.setItem("ESSDpass", request.password);
                    }

                    passToken = request.Token;
                    LoginKey = request.LogToken
                    fetch('https://'+request.Token+'.mockapi.io/MyPartners/EISSD_Pass/1', {
                      method: 'GET',
                      headers: {'content-type':'application/json'},
                    }).then(res => {
                      if (res.ok) {
                          return res.json();
                      }
                      // handle error
                    }).then(tasks => {
                        if (LoginKey == tasks.LoginCode) {
                            if (localStorage.getItem("ESSDlog") != 'undefined'){
                                OtherMRF_login = localStorage.getItem("ESSDlog");
                            }
                            else{
                                OtherMRF_login = request.login;
                            }
                            if (localStorage.getItem("ESSDpass") != 'undefined'){
                                OtherMRF_password = localStorage.getItem("ESSDpass");
                            }
                            else{
                                OtherMRF_password = request.password;
                            }

                            
                            ESSD_ON();
                            setInterval(FindError, 2000);
                            setInterval(FindPaste, 2000);
                            setInterval(HidePassword, 200);
                            setInterval(SetTickets, 2000);
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


function SetTickets(){
    try{
        for (var i = 0; i < document.getElementsByClassName("expanded-box__title").length; i++) {
            if (document.getElementsByClassName("expanded-box__title")[i].innerText == "Общая информация по заявке") {
                if (document.getElementsByClassName("expanded-box__title")[i].innerHTML.indexOf("tooltiptext1") < 0) {
                    document.getElementsByClassName("expanded-box__title")[i].innerHTML += '<span class="tooltiptext1" >В поле «Регион» нужно выбрать ФО РФ, в котором планируется подключение и область/округ/край/республику.<br> Далее в поле «Организация», если филиал не выбрался автоматически, нужно указать его вручную.</span>'
                }
            } 
            if (document.getElementsByClassName("expanded-box__title")[i].innerText == "Адрес подключения и проверка технической возможности") {
                if (document.getElementsByClassName("expanded-box__title")[i].innerHTML.indexOf("tooltiptext1") < 0) {
                    document.getElementsByClassName("expanded-box__title")[i].innerHTML += '<span class="tooltiptext1" >В поля «Населенный пункт», «Улица», «Дом» и «Квартира» нужно ввести адрес для проверки технической возможности подключения. В таблице справа должны появиться услуги и технологии, по которым на этом адресе работает провайдер.</span>'
                }
            } 
            if (document.getElementsByClassName("expanded-box__title")[i].innerText == "Контактная информация") {
                if (document.getElementsByClassName("expanded-box__title")[i].innerHTML.indexOf("tooltiptext1") < 0) {
                    document.getElementsByClassName("expanded-box__title")[i].innerHTML += '<span class="tooltiptext1">В поля «Фамилия», «Имя» и «Отчество» информацию записываем с большой буквы без пробелов. В поле «Моб. Телефон» указываем контактный номер со второй цифры без пробелов и тире.Пример: 9332660125. В поле «Дополнительная информация» подробно прописываем конфигурацию ТП, название ТП, условия ТП, период скидки и стоимость по скидке (при наличии), оборудование и стоимость подключения.</span>'
                }
            } 
            if (document.getElementsByClassName("expanded-box__title")[i].innerText == "Персональные данные клиента") {
                if (document.getElementsByClassName("expanded-box__title")[i].innerHTML.indexOf("tooltiptext1") < 0) {
                    document.getElementsByClassName("expanded-box__title")[i].innerHTML += '<span class="tooltiptext1" >Поля «Фамилия», «Имя» и «Отчество» заполняются нажатием кнопки «Копировать из контактной информации». Поле «Тип документа» должно быть в значении «Не определен».</span>'
                }
            } 
            if (document.getElementsByClassName("expanded-box__title")[i].innerText == "Подключаемые услуги") {
                if (document.getElementsByClassName("expanded-box__title")[i].innerHTML.indexOf("tooltiptext1") < 0) {
                    document.getElementsByClassName("expanded-box__title")[i].innerHTML += '<span class="tooltiptext1" ">Ставим галочки рядом с теми услугами, которые входят в ТП, который предложили.</span>'
                }
            } 
            if (document.getElementsByClassName("expanded-box__title")[i].innerText == "Домашний Интернет") {
                if (document.getElementsByClassName("expanded-box__title")[i].innerHTML.indexOf("tooltiptext1") < 0) {
                    document.getElementsByClassName("expanded-box__title")[i].innerHTML += '<span class="tooltiptext1">ТП можно выбрать рандомно: основную информацию КЦ будут брать из поля «Дополнительная информация».</span>'
                }
            }
            if (document.getElementsByClassName("expanded-box__title")[i].innerText == "Дата и время подключения") {
                if (document.getElementsByClassName("expanded-box__title")[i].innerHTML.indexOf("tooltiptext1") < 0) {
                    document.getElementsByClassName("expanded-box__title")[i].innerHTML += '<span class="tooltiptext1">Не трогаем.</span>'
                }
            } 
        }
    }
    catch(e){

    }
}
function HidePassword(){
    if (LoginInput.length > 0) {
        LoginInput[0].setAttribute('type', 'password')
        LoginInput[1].setAttribute('type', 'password')
    }
}

function ESSD_ON(){

    //-------------------------------Выбор учетки при входе в партнерку-----------//
    try { 
        if(LoginInput.length > 0){
            console.log("Добавил кнопочки!")
            LoginPage[0].innerHTML += '<center class="logins"><a id="MoscowObl" class="btn" href="#" >Московская Область</a><a id="OtherMRF" class="btn" href="#">Все регионы кроме МО</a></center>'            //console.log("Добавил"); <a id="Center" class="btn" href="#">Центр</a>
        }

    } catch (e) {
        console.log(e);
        
    }



    console.log(Profile);
    console.log(Profile[0]);
    /*
    //--------------------------Шпаргалка "Создать заявку" на главной странице-----------//
    window.addEventListener('load', function () { 
        try { 
            FirstBlock1[0].style = "margin-bottom: -10px;"
            
            CreateApplicationLink[1].id = "CreateApplicationLink";
            //innerHTML почему то работает только в цикле, так что почему бы и нет =)
            for (var i = 0; i < CreateApplicationLink.length; i++) {  
                //на разный учетках элементы располагаются по разному, так что проверяем, дабы подсказка появлялась там где нужно
                
                if (Profile[0].innerText == "Полховская Ольга Фёдоровна-Инсталл") {
                    CreateApplicationLink[i].parentNode.innerHTML += '<div class="tooltipN" style="top: 20%;"><span>Coздать заявку или проверить ТХВ</span></div>';
                }
                else if (Profile[0].innerText == "Попов Дмитрий Владимирович") {
                    CreateApplicationLink[i].parentNode.innerHTML += '<div class="tooltipN" style="top: 24.5%;"><span>Coздать заявку или проверить ТХВ</span></div>';
                }
                else if (Profile[0].innerText == "Стрижак Олег Викторович") {
                    CreateApplicationLink[i].parentNode.innerHTML += '<div class="tooltipN" style="top: 22%;"><span>Coздать заявку или проверить ТХВ</span></div>';
                }
                else {
                    CreateApplicationLink[i].parentNode.innerHTML += '<div class="tooltipN" style="top: 22%;"><span>Coздать заявку или проверить ТХВ</span></div>';
                }
                
            }
        } catch (e) {
            console.log(e);
            }
    })
    */

    // При загрузке станицы удаляем все МРы кроме центра если учетка Попова(Центр)
    //window.addEventListener('load', function () { 
    /*--    try { 
            console.log("1");
            if (Profile[1].innerText == "Попов Дмитрий Владимирович") {
                console.log("2");
                for (var i = 0; i < MyComboTree.length; i++) {
                    if (i != 6) {
                        MyComboTree[i].style.display = "none";
                        console.log("4");
                    }
                }
                
            }
        } catch (e) {
            console.log(e);
            
        } --*/
    //})
    
    try { 
        console.log("1");

        for (var i = 0; i < IstochnicList.length; i++) {
            console.log(IstochnicList[i])
            IstochnicList[i].style.display = "none";
        }
        for (var i = 0; i < IstochnicList1.length; i++) {
            if (i == 4) {
                console.log(IstochnicList1[i])
                //IstochnicList1[i].style.display = "none";
            }
        }
    } catch (e) {
        console.log(e);
            
    }
    

    //-------------------------------Выбор учетки при входе в партнерку-----------//
    fetch('https://'+passToken+'.mockapi.io/MyPartners/EISSD_Pass/1', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(tasks => {
      console.log(tasks.MoskowOblLog)
      MoskowObl_login = tasks.MoskowOblLog
      MoskowObl_password  = tasks.MoskowOblPass
      OtherMRF_login_FromApi = tasks.OtherMrfLog
      OtherMRF_password_FromApi = tasks.OtherMrfPass

      OtherMRF_login_FromApi_1 = tasks.OtherMrfLog1
      OtherMRF_password_FromApi_1 = tasks.OtherMrfPass1

      OtherMRF_login_FromApi_2 = tasks.OtherMrfLog2
      OtherMRF_password_FromApi_2 = tasks.OtherMrfPass2
      RosRf_Log = tasks.RosRF_Log
      RosRf_Pass = tasks.RosRF_Pass
    }).catch(error => {
      // handle error
    })

    try { 
        MoscowObl.onclick = function() {
            RTcheckbox[0].dispatchEvent(clickEvent);
            for (var i = 0; i < LoginInput.length; i++) {
                if (EnterFormButton[0] != undefined){
                    console.log('EnterFormButton: ', EnterFormButton[0])
                    LoginInput[0].value = MoskowObl_login; // подставляем логин и пароль
                    LoginInput[1].value = MoskowObl_password;
                }
            }
            EnterFormButton[0].dispatchEvent(clickEvent);

        };
        
        OtherMRF.onclick = function() {
            //RTcheckbox[0].dispatchEvent(clickEvent);
            for (var i = 0; i < LoginInput.length; i++) {
                console.log(OtherMRF_login);
                console.log(OtherMRF_login);
                console.log('EnterFormButton: ', EnterFormButton[0])
                if (Hour_Of_Day >= 24 && Hour_Of_Day < 30 || Day_Of_Week == 6 || Day_Of_Week == 0) {
                    RTcheckbox[0].dispatchEvent(clickEvent);
                    LoginInput[0].value = RosRf_Log; // подставляем логин и пароль
                    LoginInput[1].value = RosRf_Pass; 
                    console.log('Хуй1');
                    console.log("RosRf")
                    EnterFormButton[0].dispatchEvent(clickEvent);   
                }
                else{
                    if (OtherMRF_login != undefined && OtherMRF_login != '' && EnterFormButton[0] != undefined || OtherMRF_password != undefined && OtherMRF_password != '' && EnterFormButton[0] != undefined) {
                        RTcheckbox[0].dispatchEvent(clickEvent);
                        LoginInput[0].value = OtherMRF_login; // подставляем логин и пароль
                        LoginInput[1].value = OtherMRF_password; 
                        console.log('Хуй1');
                        console.log("OtherMRF")
                        EnterFormButton[0].dispatchEvent(clickEvent);   
                    }
                    else if (OtherMRF_login == undefined && EnterFormButton[0] != undefined || OtherMRF_login == '' && EnterFormButton[0] != undefined || OtherMRF_password == undefined && EnterFormButton[0] != undefined || OtherMRF_password == '' && EnterFormButton[0] != undefined){
                        LoginInput[0].value = OtherMRF_login_FromApi;
                        LoginInput[1].value = OtherMRF_password_FromApi;
                        EnterFormButton[0].dispatchEvent(clickEvent);
                        if (document.getElementsByClassName("auth-page__header")[0].innerHTML.indexOf(alert) < 0) {
                            document.getElementsByClassName("auth-page__header")[0].innerHTML += '<div class="alert" style="position: absolute; top: 10%; right: 6%; width: 15%; font-size: 23px; padding: 14px; border-radius: 10px; background: #445469; color: white; font-weight: 500; box-shadow: 0px 0px 5px 0px #445469;"><span>Первая учетка занята, попробую вторую...</span></div>'
                        }
                        else{
                            document.getElementsByClassName("alert")[0].innerText = "Первая учетка занята, попробую вторую..."
                        }

                        setTimeout(function(){
                            
                            LoginInput[0].value = OtherMRF_login_FromApi_1;
                            LoginInput[1].value = OtherMRF_password_FromApi_1;
                            EnterFormButton[0].dispatchEvent(clickEvent);
                            document.getElementsByClassName("alert")[1].style.display = 'none'
                            document.getElementsByClassName("alert")[0].innerText = "Там тоже занято, подождите, у меня есть еще одна!"
                            //document.getElementsByClassName("auth-page__header")[0].innerHTML += '<div id="alert2" style="position: absolute; top: 10%; right: 6%; width: 15%; font-size: 23px; padding: 14px; border-radius: 10px; background: #445469; color: white; font-weight: 500; box-shadow: 0px 0px 5px 0px #445469;"><span>Там тоже занято, подождите, у меня есть еще одна!</span></div>'
                            
                            setTimeout(function(){
                                
                                LoginInput[0].value = OtherMRF_login_FromApi_2;
                                LoginInput[1].value = OtherMRF_password_FromApi_2;
                                EnterFormButton[0].dispatchEvent(clickEvent);
                                document.getElementsByClassName("alert")[0].innerText = "И тут занято! Сейчас выкину кого нибудь!"
                                //document.getElementsByClassName("auth-page__header")[0].innerHTML += '<div id="alert3" style="position: absolute; top: 10%; right: 6%; width: 15%; font-size: 23px; padding: 14px; border-radius: 10px; background: #445469; color: white; font-weight: 500; box-shadow: 0px 0px 5px 0px #445469;"><span>И тут занято! Сейчас выкину кого нибудь!</span></div>'
                                setTimeout(function(){
                                    RTcheckbox[0].dispatchEvent(clickEvent);
                                    if (randomIndex1 == 0) {
                                        LoginInput[0].value = OtherMRF_login_FromApi;
                                        LoginInput[1].value = OtherMRF_password_FromApi;
                                    }
                                    if (randomIndex1 == 1) {
                                        LoginInput[0].value = OtherMRF_login_FromApi_1;
                                        LoginInput[1].value = OtherMRF_password_FromApi_1;
                                    }
                                    if (randomIndex1 == 2) {
                                        LoginInput[0].value = OtherMRF_login_FromApi_2;
                                        LoginInput[1].value = OtherMRF_password_FromApi_2;
                                    }

                                    EnterFormButton[0].dispatchEvent(clickEvent);
                                    document.getElementsByClassName("alert")[0].innerText = "И тут занято! Сейчас выкину кого нибудь!"
                                    //document.getElementsByClassName("auth-page__header")[0].innerHTML += '<div id="alert3" style="position: absolute; top: 10%; right: 6%; width: 15%; font-size: 23px; padding: 14px; border-radius: 10px; background: #445469; color: white; font-weight: 500; box-shadow: 0px 0px 5px 0px #445469;"><span>И тут занято! Сейчас выкину кого нибудь!</span></div>'
                                }, 2000)
                            }, 2000)

                        }, 2000)
                        
                        console.log('Хуй2');
                        console.log("OtherMRF_FromApi")
                    }
                }
            }
            
            
        };

    } catch (e) {
        
    }



    // Эмитация клика мыши, для ебучего Чекбокса в исполнении РТК 
    var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });

/*


    try { 
        //innerHTML почему то работает только в цикле, так что почему бы и нет =)
        for (var i = 0; i < CreateApplicationLink.length; i++) {  
            console.log(EnterMRF[0]);
            EnterMRF[0].innerHTML += '<div id="tooltipMRFid" class="tooltipMRF"><span>Обязательно укажите регион</span></div>';
        }
        tooltipMRFid = document.getElementById('tooltipMRFid');
    } catch (e) {
        console.log(e);
        }


try { 
    FirstBlock.addEventListener("mouseover", function() {
      tooltipMRFid.style.display = "block";
    });
    FirstBlock.addEventListener("mouseout", function() {
      tooltipMRFid.style.display = "none";
    });
} catch (e) {
        console.log(e);
}

*/

}

// Выходим из Попова если время не подходит 
window.addEventListener('load', function () { 
    try { 
        if (Profile[1].innerText == "Попов Дмитрий Владимирович" || Profile[1].innerText == "Ветров Иван Петрович") {
            document.getElementsByClassName('top-logo')[0].innerHTML += '<span id="MovedText" style="position: absolute;right: 30%;color: white;">На эту учетку можно заводить заявки только в Субботу, Воскресенье и Ночью!</span>'
            if (Hour_Of_Day >= 7 &&  Hour_Of_Day < 24 && Day_Of_Week != 6 && Day_Of_Week != 0) {
                //document.getElementsByClassName('logout')[0].click()
            }
            MyComboTree[2].style.display = "none";
        }
    } catch (e) {
        console.log(e);
            
    }
})

function FindError(){
    var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });
    try {
        SessionError = document.getElementsByClassName('auth-window__box-error')[0];

        
        if (SessionError.parentNode.innerHTML.indexOf("Московская") < 0) {
            console.log("Выкинуло из партнерки")    
            console.log("Добавил кнопочки! 1")
            SessionError.parentNode.innerHTML += '<a id="MoscowOblErr" class="btn">Московская Область</a><a id="OtherMRFErr" class="btn">Все регионы кроме МО</a>';
        }
        //#login #passw
    }
    catch(e){

    }

    try { 
        fetch('https://'+passToken+'.mockapi.io/MyPartners/EISSD_Pass/1', {
          method: 'GET',
          headers: {'content-type':'application/json'},
        }).then(res => {
          if (res.ok) {
              return res.json();
          }
          // handle error
        }).then(tasks => {
          console.log(tasks.MoskowOblLog)
          MoskowObl_login = tasks.MoskowOblLog
          MoskowObl_password  = tasks.MoskowOblPass
          OtherMRF_login_FromApi = tasks.OtherMrfLog
          OtherMRF_password_FromApi = tasks.OtherMrfPass

          OtherMRF_login_FromApi_1 = tasks.OtherMrfLog1
          OtherMRF_password_FromApi_1 = tasks.OtherMrfPass1

          OtherMRF_login_FromApi_2 = tasks.OtherMrfLog2
          OtherMRF_password_FromApi_2 = tasks.OtherMrfPass2
        }).catch(error => {
          // handle error
        })
        MoscowOblErr.onclick = function() {

            document.getElementById("login").value = MoskowObl_login; // подставляем логин и пароль
            document.getElementById("passw").value = MoskowObl_password;

            
            document.getElementsByClassName('btn-type-1_ib')[8].dispatchEvent(clickEvent);

        };
        
        OtherMRFErr.onclick = function() {
            if (Hour_Of_Day >= 24 && Hour_Of_Day < 30 || Day_Of_Week == 6 || Day_Of_Week == 0) {
                document.getElementById("login").value = RosRf_Log; // подставляем логин и пароль
                document.getElementById("passw").value = RosRf_Pass; 
                console.log("RosRf")
            }

            else {
                if (OtherMRF_login != undefined || OtherMRF_password != undefined || OtherMRF_login != null || OtherMRF_password != null) {
                    document.getElementById("login").value = OtherMRF_login; // подставляем логин и пароль
                    document.getElementById("passw").value = OtherMRF_password; 
                    console.log("OtherMRF")
                }
                else{
                    document.getElementById("login").value = OtherMRF_login_FromApi;
                    document.getElementById("passw").value = OtherMRF_password_FromApi;
                    console.log("OtherMRF_FromApi")
                }
            }
            document.getElementsByClassName('btn-type-1_ib')[8].dispatchEvent(clickEvent);
     
        };

    } 
    catch (e) {
        
    }
}

function FindPaste(){
    var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });
    try {
        BlockHeader = document.getElementsByClassName('expanded-box__header')[4];

        if (BlockHeader.innerHTML.indexOf("Вставить") < 0) {
    
            BlockHeader.innerHTML += '<a id="PasteButton1">Вставить</a>';
        }

        document.getElementById("PasteButton1").addEventListener("click", e => {
            navigator.clipboard.readText()
            .then(text => {
              console.log(text);
              var json = JSON.parse(text);
              console.log(json);

              const event = new Event('input', { bubbles: true });

              replaseName(json.fio)
              replaseNumber(json.PhoneNumber)

              


              document.querySelectorAll('[data-fieldname="Фамилия"]')[0].value = AbSername;
              document.querySelectorAll('[data-fieldname="Имя"]')[0].value = AbName;
              document.querySelectorAll('[data-fieldname="Отчество"]')[0].value = AbPatronymic;

              document.querySelectorAll('[data-fieldname="Фамилия"]')[1].value = AbSername;
              document.querySelectorAll('[data-fieldname="Имя"]')[1].value = AbName;
              document.querySelectorAll('[data-fieldname="Отчество"]')[1].value = AbPatronymic;

              document.querySelectorAll('[data-fieldname="Моб. телефон"]')[0].value = number;

              document.getElementById('additionalInfo').value = json.OtherInfo;
              
              //document.querySelectorAll('[placeholder="Имя"]').dispatchEvent(event);
              //document.querySelectorAll('[placeholder="+7 (Основной номер)"]').dispatchEvent(event);
              //document.querySelectorAll('[placeholder="Комментарий"]').dispatchEvent(event);

              
              BlockHeader.click()
            })
            .catch(err => {
              // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
              //console.log('Something went wrong', err);
            });

          });
 
    }
    catch(e){
        console.log(e);
    }
}


function replaseNumber(num){
  //console.log(number);
  //console.log(num);

  number = num.replace(/[-+()\s]/g, ''); //Удаляет все непонятные символы
  number = number.slice(1) // Удаляем первый символ (7 или 8)
  //console.log(number);
  //console.log(num);
}

function replaseName(nam){
  AbSername = nam.split(' ')[0];
  AbName = nam.split(' ')[1];
  AbPatronymic = nam.split(' ')[2];

  //console.log(nam.split(' ')[0]);
  //console.log(nam.split(' ')[1]);
  //console.log(nam.split(' ')[2]);
}