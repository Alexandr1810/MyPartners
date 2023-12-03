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

var ESSD_On_Off = '';
var OtherMRF_login = 'strijak_ov';
var OtherMRF_password = 'Poiuyt123!';


window.addEventListener('load', function () { 

    chrome.runtime.sendMessage({
        user: "essd",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            console.log(request, sender, sendResponse);
            console.log(request.Recipient);
            if (request.Recipient == 'essd') {
                if (request.Message=='true') {
                    console.log("Хуй");
                    localStorage.setItem("ESSDlog", request.login);
                    localStorage.setItem("ESSDpass", request.password);
                    OtherMRF_login = request.login;
                    OtherMRF_password = request.password;
                    ESSD_ON();
                    setInterval(FindError, 2000);
                    setInterval(FindPaste, 2000);
                }
                if (request.Message=='false') {
                    console.log("НеХуй");
                }
            }
        }
    );

    
})





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
    try { 
        MoscowObl.onclick = function() {
            RTcheckbox[0].dispatchEvent(clickEvent);
            for (var i = 0; i < LoginInput.length; i++) {
                LoginInput[0].value = "мо_полховская_оф"; // подставляем логин и пароль
                LoginInput[1].value = "cpJ-jqa-9Ku-Rs6";
            }
            EnterFormButton[0].dispatchEvent(clickEvent);

        };
        
        OtherMRF.onclick = function() {
            RTcheckbox[0].dispatchEvent(clickEvent);
            for (var i = 0; i < LoginInput.length; i++) {
                console.log(OtherMRF_login);
                console.log(OtherMRF_login);
                if (OtherMRF_login != undefined || OtherMRF_password != undefined) {
                    LoginInput[0].value = OtherMRF_login; // подставляем логин и пароль
                    LoginInput[1].value = OtherMRF_password; 
                }
                else{
                    LoginInput[0].value = "strijak_ov";
                    LoginInput[1].value = "Poiuyt123!";
                }
            }
            EnterFormButton[0].dispatchEvent(clickEvent);
            
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
// При загрузке станицы удаляем все МРы кроме центра если учетка Попова(Центр)
window.addEventListener('load', function () { 
    try { 
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
        MoscowOblErr.onclick = function() {

            document.getElementById("login").value = "мо_полховская_оф"; // подставляем логин и пароль
            document.getElementById("passw").value = "cpJ-jqa-9Ku-Rs6";
            
            document.getElementsByClassName('btn-type-1_ib')[8].dispatchEvent(clickEvent);

        };
        
        OtherMRFErr.onclick = function() {

            if (OtherMRF_login != undefined || OtherMRF_password != undefined || OtherMRF_login != null || OtherMRF_password != null) {
                document.getElementById("login").value = OtherMRF_login; // подставляем логин и пароль
                document.getElementById("passw").value = OtherMRF_password; 
            }
            else{
                document.getElementById("login").value = "strijak_ov";
                document.getElementById("passw").value = "Poiuyt123!";
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