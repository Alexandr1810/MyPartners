var number;
var nameval;
var LoginKey = null;
var passToken = null;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var randomIndex1 = getRandomInt(100)
console.log(randomIndex1)

Agent_names = [["SPEEDINET "],["Брюзгин Дмитрий Владимирович "],["Горбань Карина Васильевна "],["Волохов Никита Романович ","Кулешов Павел Константинович "],["Пешкова Юлия Ивановна "],["Касьяненко Кристина Денисовна "]]

var RegionNames = {
  SpeedInet: [" г Новосибирск,", " г Бердск,", " г Искитим,", " г Обь,", " г Академгородок,", " г Красноярск,", " г Ачинск,", " г Лесосибирск,", " г Назарово,", " г Минусинск,", " г Зеленогорск,", " г Черногорск,"," г Заозерный,", " г Абакан,", " г Бородино,", " г Дивногорск,", " г Барнаул,", " г Бийск,"," г Новоалтайск,", " г Заринск,", " г Рубцовск,", " г Анжеро-Судженск,", " г.о. Анжеро-Судженский, ", " г Белово,", " г Березовский,", " г Грамотеино,", " г Гурьевск,", " г Инской,", " г Кемерово,", " г Ленинск-Кузнецкий", " г Полысаево,", " г Топки,", " г Юрга,", " г Новокузнецк,", " г Междуреченск,", " г Осинники,", " г Калтан,", " г Прокопьевск,", " г Киселевск,", " г Мыски,"],
  Norkom:[" г Норильск,", " г Игарка,", " г Кайеркан,", " г Талнах,"],
  Kemerovo: [" г Анжеро-Судженск,", " г.о. Анжеро-Судженский, ", " г Белово,", " г Березовский,", " г Грамотеино,", " г Гурьевск,", " г Инской,", " г Кемерово,", " г Ленинск-Кузнецкий", " г Полысаево,", " г Топки,", " г Юрга,"],
  Krasnoyarsk: [" г Ачинск,", " г Назарово,", " г Красноярск,", " г Минусинск,", " г Зеленогорск,", " г Абакан,", " г Черногорск,", " г Дивногорск,", " г Лесосибирск"],
  Novokyznetsk: [" г Новокузнецк,", " г Междуреченск,", " г Осинники,", " г Калтан,", " г Прокопьевск,", " г Киселевск,", " г Мыски,"],
  Novosibirsk: [" г -,", " г -,", " г -,", " г -,", " рп -,"],
  Barnaul: [" г Барнаул,", " г Бийск,", " г Заринск,", " г Новоалтайск,", " г Рубцовск,"]
}
//Novosibirsk: [" г Новосибирск,", " г Бердск,", " г Бердск,", " г Обь,", " рп Краснообск,"]
IsSpeedInet = false;
IsNorkom = false;
IsKemerovo = false;
IsNovokyznetsk = false;
IsNovosibirsk = false;
IsKrasnoyarsk = false;
IsBarnaul = false;

AccauntPasswords = {
    NorComLog: "",
    NorComPass: "",
    KemerovoLog: "",
    KemerovoPass: "",
    NovokyznezkLog: "",
    NovokyznezkPass: "",
    SpeedInetLog: "",
    SpeedInetPass: "",
    NovosibirskLog: "",
    NovosibirskPass: "",
    KrasnoyarskLog: "",
    KrasnoyarskPass: "",
    BarnaulLog: "",
    BarnaulPass: "",
    NovokyznezkLog1: "",
    NovokyznezkPass1: "",
    BarnaulLog1: "",
    BarnaulPass1: ""
  }

function ShowNorKom() {
  document.getElementById('NorComСities').style.display = 'block';
}
function HideNorKom() {
  document.getElementById('NorComСities').style.width = 'none';
}


window.addEventListener('load', function () { 
    //console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "SibSeti",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.sender, request.Recipient, request.Message);
            passToken = request.Token;
            if (request.Recipient == 'SibSeti') {
                if (request.Message=='true') {
                    
                    
                    passToken  = request.Token;
                    LoginKey = request.LogToken

                    fetch('https://'+passToken+'.mockapi.io/MyPartners/EISSD_Pass/1', {
                      method: 'GET',
                      headers: {'content-type':'application/json'},
                    }).then(res => {
                      if (res.ok) {
                          return res.json();
                      }
                      // handle error
                    }).then(tasks => {
                      if (LoginKey == tasks.LoginCode) {
                        GetPasswords();
                        setInterval(InStart, 500); 
                        setInterval(HidePassword, 100);
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
                  //console.log(request.Message);
                }
            }
        }
    );
})

function HidePassword(){
  if (document.querySelectorAll('[placeholder="Логин"]')[0] != undefined) {
    document.querySelectorAll('[placeholder="Логин"]')[0].setAttribute('type', 'password')

    document.querySelectorAll('[placeholder="Логин"]')[0].setAttribute('autocomplete', 'oh')
    document.querySelectorAll('[placeholder="Пароль"]')[0].setAttribute('autocomplete', 'oh')

    document.querySelectorAll('[placeholder="Логин"]')[0].removeAttribute('readonly');
    document.querySelectorAll('[placeholder="Пароль"]')[0].removeAttribute('readonly');
    try{
      document.querySelectorAll('[role="alert"]')[0].style.display = 'none'
    }
    catch{

    }
  }
  if (document.querySelectorAll('[placeholder="Пароль"]')[0] != undefined) {
    document.querySelectorAll('[placeholder="Пароль"]')[0].setAttribute('type', 'password')

    document.querySelectorAll('[placeholder="Логин"]')[0].setAttribute('autocomplete', 'oh')
    document.querySelectorAll('[placeholder="Пароль"]')[0].setAttribute('autocomplete', 'oh')

    document.querySelectorAll('[placeholder="Логин"]')[0].removeAttribute('readonly');
    document.querySelectorAll('[placeholder="Пароль"]')[0].removeAttribute('readonly'); 

    try{
      document.querySelectorAll('[role="alert"]')[0].style.display = 'none'
    }
    catch{

    }

  }
}


function GetPasswords(){
  const event = new Event('input', { bubbles: true });

  if (window.location.href.indexOf("/auth/login") >= 0) {
    if (document.body.innerHTML.indexOf("ChangeAccountBlock") < 0) {
      document.getElementsByClassName("text-muted")[0].innerHTML += `
        <div id="ChangeAccountBlock"> 
          <h1 class="ChangeAccountHeader">Выбор учетной записи:</h1>
          <a class="ChangeAccount" id="ChangeNorCom" onmouseover="javascript:document.getElementById('NorComСities').style.display = 'block'" onmouseout="javascript:document.getElementById('NorComСities').style.display = 'none'">Норильск</a> 
          <a class="ChangeAccount" id="ChangeKemerovo" onmouseover="javascript:document.getElementById('KemerovoСities').style.display = 'block'" onmouseout="javascript:document.getElementById('KemerovoСities').style.display = 'none'">Кемерово</a>
          <a class="ChangeAccount" id="ChangeNovokyznezk" onmouseover="javascript:document.getElementById('NovokyznezkСities').style.display = 'block'" onmouseout="javascript:document.getElementById('NovokyznezkСities').style.display = 'none'">Новокузнецк</a>
          <a class="ChangeAccount" id="ChangeNovosibirsk" onmouseover="javascript:document.getElementById('NovosibirskСities').style.display = 'block'" onmouseout="javascript:document.getElementById('NovosibirskСities').style.display = 'none'">Новосибирск</a>
          <a class="ChangeAccount" id="ChangeKrasnoyarsk" onmouseover="javascript:document.getElementById('KrasnoyarskСities').style.display = 'block'" onmouseout="javascript:document.getElementById('KrasnoyarskСities').style.display = 'none'">Красноярск</a>
          <a class="ChangeAccount" id="ChangeBarnaul" onmouseover="javascript:document.getElementById('BarnaulСities').style.display = 'block'" onmouseout="javascript:document.getElementById('BarnaulСities').style.display = 'none'">Барнаул</a>
          <a class="ChangeAccount" id="ChangeSpeedInet" onmouseover="javascript:document.getElementById('SpeedInetСities').style.display = 'block'" onmouseout="javascript:document.getElementById('SpeedInetСities').style.display = 'none'">SpeedInet</a>

          <div class="СitiesInfo" id="NorComСities">
              <h1 class="СitiesInfoHeader">Города</h1>
              <h3 class="СitiesInfoBody">Норильск,<br> Кайеркан,<br> Игарка,<br> Талнах</h3>
          </div>
          <div class="СitiesInfo" id="KemerovoСities">
              <h1 class="СitiesInfoHeader">Города</h1>
              <h3 class="СitiesInfoBody">Анжеро-Судженск,<br> Белово,<br> Березовский,<br> Грамотеино,<br> Гурьевск, Инской,<br> Кемерово,<br> Ленинск-Кузнецкий, Полысаево, Топки, Юрга</h3>
          </div>
          <div class="СitiesInfo" id="NovokyznezkСities">
              <h1 class="СitiesInfoHeader">Города</h1>
              <h3 class="СitiesInfoBody">Новокузнецк,<br> Междуреченск,<br> Осинники,<br> Калтан,<br> Прокопьевск,<br> Киселевск,<br> Мыски</h3>
          </div>
          <div class="СitiesInfo" id="SpeedInetСities">
              <h1 class="СitiesInfoHeader">Города</h1>
              <h3 class="СitiesInfoBody">Все регионы кроме Норильска<br> УЧЕТКА ЗАКРЫТА!!!</h3>
          </div>
          <div class="СitiesInfo" id="NovosibirskСities">
              <h1 class="СitiesInfoHeader">Города</h1>
              <h3 class="СitiesInfoBody">Новосибирск,<br> Бердск,<br> Искитим,<br> Обь,<br> Краснообск<br> Регнуть нельзя, отправляй заявку в чат!</h3>
          </div>
          <div class="СitiesInfo" id="KrasnoyarskСities">
              <h1 class="СitiesInfoHeader">Города</h1>
              <h3 class="СitiesInfoBody">Ачинск,<br> Назарово,<br> Красноярск,<br> Минусинск,<br> Зеленогорск,<br> Абакан,<br> Черногорск,<br> Дивногорск,<br> Лесосибирск</h3>
          </div>
          <div class="СitiesInfo" id="BarnaulСities">
              <h1 class="СitiesInfoHeader">Города</h1>
              <h3 class="СitiesInfoBody">Барнаул,<br> Бийск,<br> Заринск,<br> Новоалтайск,<br> Рубцовск</h3>
          </div>
        </div>
        `
    }
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
      
      AccauntPasswords.NorComLog = tasks.NorComLog
      AccauntPasswords.NorComPass  = tasks.NorComPass
      AccauntPasswords.KemerovoLog = tasks.KemerovoLog
      AccauntPasswords.KemerovoPass = tasks.KemerovoPass
      AccauntPasswords.NovokyznezkLog = tasks.NovokyznezkLog
      AccauntPasswords.NovokyznezkPass  = tasks.NovokyznezkPass
      AccauntPasswords.SpeedInetLog = tasks.SpeedInetLog
      AccauntPasswords.SpeedInetPass = tasks.SpeedInetPass
      AccauntPasswords.NovosibirskLog = tasks.NovosibirskLog
      AccauntPasswords.NovosibirskPass = tasks.NovosibirskPass
      AccauntPasswords.KrasnoyarskLog = tasks.KrasnoyarskLog
      AccauntPasswords.KrasnoyarskPass = tasks.KrasnoyarskPass
      AccauntPasswords.BarnaulLog = tasks.BarnaulLog
      AccauntPasswords.BarnaulPass = tasks.BarnaulPass
      AccauntPasswords.BarnaulLog = tasks.BarnaulLog
      AccauntPasswords.BarnaulPass = tasks.BarnaulPass
      AccauntPasswords.NovokyznezkLog1 = tasks.NovokyznezkLog1
      AccauntPasswords.NovokyznezkPass1 = tasks.NovokyznezkPass1
      AccauntPasswords.BarnaulLog1 = tasks.BarnaulLog1
      AccauntPasswords.BarnaulPass1 = tasks.BarnaulPass1
    }).catch(error => {
      // handle error
    })


    try { 
        ChangeNorCom.onclick = function() {
          if (document.getElementsByClassName("btn")[0] != undefined) {
            document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.NorComLog;
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.NorComPass;

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);


            document.getElementsByClassName("btn")[0].click()

            document.querySelectorAll('[placeholder="Логин"]')[0].value = 'Логин';
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = 'Пароль';

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);

            document.getElementsByClassName("btn")[0].click()
          }
        };
        ChangeKemerovo.onclick = function() {
          if (document.getElementsByClassName("btn")[0] != undefined) {
            document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.KemerovoLog;
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.KemerovoPass;

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);

            
            document.getElementsByClassName("btn")[0].click()

            document.querySelectorAll('[placeholder="Логин"]')[0].value = 'Логин';
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = 'Пароль';

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);

            document.getElementsByClassName("btn")[0].click()
          }
        };
        ChangeNovokyznezk.onclick = function() {
          if (document.getElementsByClassName("btn")[0] != undefined) {
            if (randomIndex1 < 50) {
              document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.NovokyznezkLog;
              document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.NovokyznezkPass;
            }
            else{
              document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.NovokyznezkLog1;
              document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.NovokyznezkPass1;
            }
            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);


            
            document.getElementsByClassName("btn")[0].click()

            document.querySelectorAll('[placeholder="Логин"]')[0].value = 'Логин';
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = 'Пароль';

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);

            document.getElementsByClassName("btn")[0].click()
          }
        };
        ChangeSpeedInet.onclick = function() {
          if (document.getElementsByClassName("btn")[0] != undefined) {
            document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.SpeedInetLog;
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.SpeedInetPass;

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);

            
            document.getElementsByClassName("btn")[0].click()

            document.querySelectorAll('[placeholder="Логин"]')[0].value = 'Логин';
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = 'Пароль';

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);

            document.getElementsByClassName("btn")[0].click()
          }
        };
        ChangeNovosibirsk.onclick = function() {
          if (document.getElementsByClassName("btn")[0] != undefined) {
            document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.NovosibirskLog;
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.NovosibirskPass;

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);

            
            document.getElementsByClassName("btn")[0].click()

            document.querySelectorAll('[placeholder="Логин"]')[0].value = 'Логин';
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = 'Пароль';

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);

            document.getElementsByClassName("btn")[0].click()
          }
        };
        ChangeKrasnoyarsk.onclick = function() {
          if (document.getElementsByClassName("btn")[0] != undefined) {
            document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.KrasnoyarskLog;
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.KrasnoyarskPass;

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);

            
            document.getElementsByClassName("btn")[0].click()

            document.querySelectorAll('[placeholder="Логин"]')[0].value = 'Логин';
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = 'Пароль';

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);

            document.getElementsByClassName("btn")[0].click()

          }
        };
        ChangeBarnaul.onclick = function() {
          if (document.getElementsByClassName("btn")[0] != undefined) {
            if (randomIndex1 < 50) {
              document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.BarnaulLog;
              document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.BarnaulPass;
            }
            else{
              document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.BarnaulLog1;
              document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.BarnaulPass1;
            }

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);
            
            document.getElementsByClassName("btn")[0].click()

            document.querySelectorAll('[placeholder="Логин"]')[0].value = 'Логин';
            document.querySelectorAll('[placeholder="Пароль"]')[0].value = 'Пароль';

            document.querySelectorAll('[placeholder="Логин"]')[0].dispatchEvent(event);
            document.querySelectorAll('[placeholder="Пароль"]')[0].dispatchEvent(event);

            document.getElementsByClassName("btn")[0].click()
          }
        };
        

    } catch (e) {
        //console.log(e)
    }



    
}

function InStart(){
  

  if (window.location.href == "https://master.sibseti.ru/#/auth/login" || window.location.href == "https://master.sibseti.ru/?#/auth/login") {
    GetPasswords();
  }

  //console.log("Получил, делаю =)");
  //console.log(window.location.href)
  try { 
    СurrentAccount = document.getElementsByClassName("d-md-block")[0].innerText
    
    
    if (document.getElementsByClassName("btn-group")[1].innerHTML.indexOf("Выберите другую учетку") < 0 && document.getElementById("input-location-house").getAttribute("placeholder") == "Aдрес") {
      document.getElementsByClassName("btn-group")[1].innerHTML += '<a id="RegionError" href="#/auth/logout">Выберите другую учетку</a>'
      //console.log("Добавил кнопку")
    }

    //console.log("Учетка:", СurrentAccount)
    if (document.getElementsByClassName("navbar-brand")[0].innerHTML.indexOf("RegionText") < 0) {
      if (СurrentAccount == "SPEEDINET ") {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText">Все регионы кроме Норильска, УЧЕТКА ЗАКРЫТА!!!</h1>';
      }
      if (СurrentAccount == "Брюзгин Дмитрий Владимирович ") {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText">Только Норильск, Игарка!</h1>';
      }
      if (СurrentAccount == "Горбань Карина Васильевна ") {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText" style="font-size: 18px;left: 12%;">Только Анжеро-Судженск, Белово, Березовский, Грамотеино, Гурьевск,<br> Инской, Кемерово, Ленинск-Кузнецкий, Полысаево, Топки, Юрга!</h1>';
      }
      if (СurrentAccount == "Волохов Никита Романович " || СurrentAccount == "Кулешов Павел Константинович ") {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText" style="font-size: 20px; left: 12%;">Только Новокузнецк, Междуреченск, Осинники, Калтан, Прокопьевск, Киселевск, Мыски!</h1>';
      }
      if (СurrentAccount == "Пешкова Юлия Ивановна ") {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText" style="font-size: 20px; left: 12%;">Только Ачинск, Назарово, Красноярск, Минусинск,<br> Зеленогорск, Абакан, Черногорск, Дивногорск, Лесосибирск!</h1>';
      }
      if (СurrentAccount == "Касьяненко Кристина Денисовна " || СurrentAccount == "Чукаева Дарья Сергеевна ") {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText" style="font-size: 20px; left: 12%;">Только Барнаул, Бийск, Заринск, Новоалтайск, Рубцовск!</h1>';
      }

    }
    try{
      for (var i = 0; i <= (RegionNames.SpeedInet.length); i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.SpeedInet[i]) >= 0 && СurrentAccount == "SPEEDINET ") {
          IsSpeedInet = true
          //console.log("Тригер на: ", RegionNames.SpeedInet[i])
        }
      }
      for (var i = 0; i <= (RegionNames.Norkom.length); i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.Norkom[i]) >= 0 && СurrentAccount == "Брюзгин Дмитрий Владимирович ") {
          IsNorkom = true
          //console.log("Тригер на: ", RegionNames.SpeedInet[i])
        }
      }
      for (var i = 0; i <= RegionNames.Kemerovo.length; i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.Kemerovo[i]) >= 0 && СurrentAccount == "Горбань Карина Васильевна ") {
          IsKemerovo = true
          //console.log("Тригер на: ", RegionNames.SpeedInet[i])
        }
      }
      for (var i = 0; i <= RegionNames.Novokyznetsk.length; i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.Novokyznetsk[i]) >= 0 && СurrentAccount == "Волохов Никита Романович " || document.getElementById("input-location-house").value.indexOf(RegionNames.Novokyznetsk[i]) >= 0 && СurrentAccount == "Кулешов Павел Константинович ") {
          IsNovokyznetsk = true
          //console.log("Тригер на: ", RegionNames.SpeedInet[i])
        }
      }
      for (var i = 0; i <= RegionNames.Novosibirsk.length; i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.Novosibirsk[i]) >= 0 && СurrentAccount == "Белов Дмитрий Алексеевич ") {
          IsNovosibirsk = true
          //console.log("Тригер на: ", RegionNames.Novosibirsk[i])
        }
      }
      for (var i = 0; i <= RegionNames.Krasnoyarsk.length; i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.Krasnoyarsk[i]) >= 0 && СurrentAccount == "Пешкова Юлия Ивановна ") {
          IsKrasnoyarsk = true
          //console.log("Тригер на: ", RegionNames.Krasnoyarsk[i])
        }
      }
      for (var i = 0; i <= RegionNames.Barnaul.length; i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.Barnaul[i]) >= 0 && СurrentAccount == "Касьяненко Кристина Денисовна " || document.getElementById("input-location-house").value.indexOf(RegionNames.Barnaul[i]) >= 0 && СurrentAccount == "Чукаева Дарья Сергеевна ") {
          IsBarnaul = true
          //console.log("Тригер на: ", RegionNames.Barnaul[i])
        }
      }



      //console.log("IsNorkom: ", IsNorkom)
      //console.log("IsKemerovo: ", IsKemerovo)
      //console.log("IsNovokyznetsk: ", IsNovokyznetsk)
      //console.log("IsSpeedInet: ", IsSpeedInet)
      //console.log("IsNovosibirsk: ", IsNovosibirsk)
      //console.log("IsKrasnoyarsk: ", IsKrasnoyarsk)
      //console.log("IsBarnaul: ", IsBarnaul)

      if (IsNorkom == true && IsKemerovo == false && IsNovokyznetsk == false && IsNovosibirsk == false && IsKrasnoyarsk == false && IsSpeedInet == false && IsBarnaul == false) { // Даем кнопку
        //console.log("Даем кнопку Норком")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }

      else if (IsNorkom == false && IsKemerovo == true && IsNovokyznetsk == false && IsNovosibirsk == false && IsKrasnoyarsk == false && IsSpeedInet == false && IsBarnaul == false) { // Даем кнопку
        //console.log("Даем кнопку Кемерово")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }

      else if (IsNorkom == false && IsKemerovo == false && IsNovokyznetsk == true && IsNovosibirsk == false && IsKrasnoyarsk == false && IsSpeedInet == false && IsBarnaul == false) { // Даем кнопку
        //console.log("Даем кнопку Новокузнецк")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }
      
      else if (IsNorkom == false && IsKemerovo == false && IsNovokyznetsk == false && IsNovosibirsk == true && IsKrasnoyarsk == false && IsSpeedInet == false && IsBarnaul == false) { // Даем кнопку
        //console.log("Даем кнопку Новосибирск")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }
      else if (IsNorkom == false && IsKemerovo == false && IsNovokyznetsk == false && IsNovosibirsk == false && IsKrasnoyarsk == true && IsSpeedInet == false && IsBarnaul == false) { // Даем кнопку
        //console.log("Даем кнопку Красноярск")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }
      else if (IsNorkom == false && IsKemerovo == false && IsNovokyznetsk == false && IsNovosibirsk == false && IsKrasnoyarsk == false && IsSpeedInet == false && IsBarnaul == true) { // Даем кнопку
        //console.log("Даем кнопку Барнаул")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }
      else if (IsNorkom == false && IsKemerovo == false && IsNovokyznetsk == false && IsNovosibirsk == false && IsKrasnoyarsk == false && IsSpeedInet == true && IsBarnaul == false) { // Даем кнопку
        //console.log("Забираем кнопку SpeedInet")
        document.getElementsByClassName("btn-primary")[2].style.display = "none";

        document.getElementById("RegionError").style.display = "block";
      }
      else{ // Забираем кнопку
        //console.log("Забираем кнопку")
        document.getElementsByClassName("btn-primary")[2].style.display = "none";

        document.getElementById("RegionError").style.display = "block";
      }

    }
    catch(e){
      //console.log(e)
    }
    IsSpeedInet = false;
    IsNorkom = false;
    IsKemerovo = false;
    IsNovokyznetsk = false;
    IsKrasnoyarsk = false;
    IsNovosibirsk = false;
    IsBarnaul = false;
  }
  catch(e){
    //console.log(e)
  }
}




  


/*
    if (document.getElementById("input-location-house").value.indexOf(" г Норильск,") >= 0 && СurrentAccount == "SPEEDINET " || document.getElementById("input-location-house").value.indexOf(" г Игарка,") >= 0 && СurrentAccount == "SPEEDINET ") {
      
    }
    else if(document.getElementById("input-location-house").value.indexOf(" г Норильск,") < 0 && СurrentAccount == "SPEEDINET " || document.getElementById("input-location-house").value.indexOf(" г Игарка,") < 0 && СurrentAccount == "SPEEDINET "){
      document.getElementsByClassName("btn-primary")[2].style.display = "block";
      if (document.getElementById("RegionError") != null) {
        document.getElementById("RegionError").style.display = "none";
      }
    }
    
    if (document.getElementById("input-location-house").value.indexOf(" г Норильск,") < 0 && document.getElementsByClassName("d-md-block")[0].innerText == "Брюзгин Дмитрий Владимирович " || document.getElementById("input-location-house").value.indexOf(" г Игарка,") < 0 && СurrentAccount == "Брюзгин Дмитрий Владимирович ") {
      document.getElementsByClassName("btn-primary")[2].style.display = "none";
      if (document.getElementsByClassName("btn-group")[1].innerText.indexOf("Выберите другую учетку") < 0) {
        document.getElementsByClassName("btn-group")[1].innerHTML += '<a id="RegionError" href="#/auth/logout">Выберите другую учетку</a>'
      }
    }

    
    else if(document.getElementById("input-location-house").value.indexOf(" г Норильск,") >= 0 && СurrentAccount == "Брюзгин Дмитрий Владимирович " || document.getElementById("input-location-house").value.indexOf(" г Игарка,") >= 0 && СurrentAccount == "Брюзгин Дмитрий Владимирович "){
      document.getElementsByClassName("btn-primary")[2].style.display = "block";
      if (document.getElementById("RegionError") != null) {
        document.getElementById("RegionError").style.display = "none";
      }
    }
*/