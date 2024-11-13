var number;
var nameval;
var LoginKey = null;
var passToken = null;

var Norilsk_SS_Names = null;
var Kemerovo_SS_Names = null;
var Novokuznezk_SS_Names = null;
var Novosibirsk_SS_Names = null;
var Krasnoyarsk_SS_Names = null;
var Barnaul_SS_Names = null;

var SpeedInet_yz_Name;
var Norilsk_yz_Name;

var Tarifs = []

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var randomIndex1 = getRandomInt(100)
console.log(randomIndex1)
if (randomIndex1 < 50) {
  SpeedInet_yz_Name = "Ерисов";
  Norilsk_yz_Name = "Ерисова";
}
else{
  SpeedInet_yz_Name = "Полховский";
  Norilsk_yz_Name = "Брюзгин";
}
//Agent_names = [["SPEEDINET "],["Брюзгин Дмитрий Владимирович "],["Горбань Карина Васильевна "],["Волохов Никита Романович ","Кулешов Павел Константинович "],["Пешкова Юлия Ивановна "],["Касьяненко Кристина Денисовна "]]
/*
var RegionNames = {
  SpeedInet: [" г Новосибирск,", " г Бердск,", " г Искитим,", " г Обь,", " г Академгородок,", " г Красноярск,", " г Ачинск,", " г Лесосибирск,", " г Назарово,", " г Минусинск,", " г Зеленогорск,", " г Черногорск,"," г Заозерный,", " г Абакан,", " г Бородино,", " г Дивногорск,", " г Анжеро-Судженск,", " г.о. Анжеро-Судженский, ", " г Белово,", " г Березовский,", " г Грамотеино,", " г Гурьевск,", " г Инской,", " г Кемерово,", " г Ленинск-Кузнецкий", " г Полысаево,", " г Топки,", " г Юрга,", " г Новокузнецк,", " г Междуреченск,", " г Осинники,", " г Калтан,", " г Прокопьевск,", " г Киселевск,", " г Мыски,"],
  Norkom:[" г Норильск,", " г Игарка,", " г Кайеркан,", " г Талнах,"],
  Kemerovo: [" г Анжеро-Судженск,", " г.о. Анжеро-Судженский, ", " г Белово,", " г Березовский,", " г Грамотеино,", " г Гурьевск,", " г Инской,", " г Кемерово,", " г Ленинск-Кузнецкий", " г Полысаево,", " г Топки,", " г Юрга,"],
  Krasnoyarsk: [" г Ачинск,", " г Назарово,", " г Красноярск,", " г Минусинск,", " г Зеленогорск,", " г Абакан,", " г Черногорск,", " г Дивногорск,", " г Лесосибирск"],
  Novokyznetsk: [" г Новокузнецк,", " г Междуреченск,", " г Осинники,", " г Калтан,", " г Прокопьевск,", " г Киселевск,", " г Мыски,"],
  Novosibirsk: [" г -,", " г -,", " г -,", " г -,", " рп -,"],
  Barnaul: [" г Барнаул,", " г Бийск,", " г Заринск,", " г Новоалтайск,", " г Рубцовск,"]
}

*/
var RegionNames = {
  SpeedInet: [],
  Norkom:[],
  Krasnoyarsk: [],
  Novokyznetsk: [],
  Novosibirsk: [],
  Barnaul: []
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
    BarnaulPass1: "",
    NorComLog1: "",
    NorComPass1: ""
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
            console.log(request, sender, sendResponse);
            console.log(request.sender, request.Recipient, request.Message);
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
                      AccauntPasswords.NorComLog1 = tasks.NorComLog1
                      AccauntPasswords.NorComPass1 = tasks.NorComPass1
                      AccauntPasswords.SpeedInetLog1 = tasks.SpeedInetLog1
                      AccauntPasswords.SpeedInetPass1 = tasks.SpeedInetPass1
                      Norilsk_SS_Names = tasks.Norilsk_SS_Names;
                      Kemerovo_SS_Names = tasks.Kemerovo_SS_Names;
                      Novokuznezk_SS_Names = tasks.Novokuznezk_SS_Names;
                      Novosibirsk_SS_Names = tasks.Novosibirsk_SS_Names;
                      Krasnoyarsk_SS_Names = tasks.Krasnoyarsk_SS_Names;
                      Barnaul_SS_Names = tasks.Barnaul_SS_Names;
                      Speedinet_SS_Names = tasks.Speedinet_SS_Names;
                      console.log(Norilsk_SS_Names,Kemerovo_SS_Names,Novokuznezk_SS_Names,Novosibirsk_SS_Names,Krasnoyarsk_SS_Names,Barnaul_SS_Names)
                      RegionNames.SpeedInet = tasks.RegionNames_SpeedInet
                      RegionNames.Norkom = tasks.RegionNames_Norkom
                      RegionNames.Kemerovo = tasks.RegionNames_Kemerovo
                      RegionNames.Krasnoyarsk = tasks.RegionNames_Krasnoyarsk
                      RegionNames.Novokyznetsk = tasks.RegionNames_Novokyznetsk
                      RegionNames.Novosibirsk = tasks.RegionNames_Novosibirsk
                      RegionNames.Barnaul = tasks.RegionNames_Barnaul
                      Tarifs = tasks.SS_Tarifs

                      console.log(RegionNames)

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
          <a class="ChangeAccount" id="ChangeKemerovo" onmouseover="javascript:document.getElementById('KemerovoСities').style.display = 'block'" onmouseout="javascript:document.getElementById('KemerovoСities').style.display = 'none'" style="display:none;">Кемерово</a>
          <a class="ChangeAccount" id="ChangeNovokyznezk" onmouseover="javascript:document.getElementById('NovokyznezkСities').style.display = 'block'" onmouseout="javascript:document.getElementById('NovokyznezkСities').style.display = 'none'" style="display:none;">Новокузнецк</a>
          <a class="ChangeAccount" id="ChangeNovosibirsk" onmouseover="javascript:document.getElementById('NovosibirskСities').style.display = 'block'" onmouseout="javascript:document.getElementById('NovosibirskСities').style.display = 'none'" style="display:none;">Новосибирск</a>
          <a class="ChangeAccount" id="ChangeKrasnoyarsk" onmouseover="javascript:document.getElementById('KrasnoyarskСities').style.display = 'block'" onmouseout="javascript:document.getElementById('KrasnoyarskСities').style.display = 'none'" style="display:none;">Красноярск</a>
          <a class="ChangeAccount" id="ChangeBarnaul" onmouseover="javascript:document.getElementById('BarnaulСities').style.display = 'block'" onmouseout="javascript:document.getElementById('BarnaulСities').style.display = 'none'" style="display:none;">Барнаул</a>
          <a class="ChangeAccount" id="ChangeSpeedInet" onmouseover="javascript:document.getElementById('SpeedInetСities').style.display = 'block'" onmouseout="javascript:document.getElementById('SpeedInetСities').style.display = 'none'">SpeedInet</a>

          <div class="СitiesInfo" id="NorComСities">
              <h1 class="СitiesInfoHeader">Города</h1>
              <h3 class="СitiesInfoBody">Норильск,<br> Кайеркан,<br> Игарка,<br> Талнах,<br> Учетка: `+Norilsk_yz_Name+` </h3>
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
              <h3 class="СitiesInfoBody">Все регионы кроме Норильска!<br> Учетка: `+SpeedInet_yz_Name+` </h3>
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



    try { 
        ChangeNorCom.onclick = function() {
          if (document.getElementsByClassName("btn")[0] != undefined) {
            if (randomIndex1 < 50) {
              document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.NorComLog;
              document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.NorComPass;
            }
            else{
              document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.NorComLog1;
              document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.NorComPass1;
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

            if (randomIndex1 < 50) {
              document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.SpeedInetLog;
              document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.SpeedInetPass;
            }
            else{
              document.querySelectorAll('[placeholder="Логин"]')[0].value = AccauntPasswords.SpeedInetLog1;
              document.querySelectorAll('[placeholder="Пароль"]')[0].value = AccauntPasswords.SpeedInetPass1;
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
      if (СurrentAccount == Speedinet_SS_Names[0] || СurrentAccount == Speedinet_SS_Names[1]) {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText">Все регионы кроме Норильска!!!!</h1>';
      }
      if (СurrentAccount == Norilsk_SS_Names[0] || СurrentAccount == Norilsk_SS_Names[1]) {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText">Только Норильск, Игарка!</h1>';
      }
      if (СurrentAccount == Kemerovo_SS_Names[0] || СurrentAccount == Kemerovo_SS_Names[1]) {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText" style="font-size: 18px;left: 12%;">Только Анжеро-Судженск, Белово, Березовский, Грамотеино, Гурьевск,<br> Инской, Кемерово, Ленинск-Кузнецкий, Полысаево, Топки, Юрга!</h1>';
      }
      if (СurrentAccount == Novosibirsk_SS_Names[0] || СurrentAccount == Novosibirsk_SS_Names[1]) {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText" style="font-size: 20px; left: 12%;">Только Новосибирск, Бердск, Искитим, Обь, Краснообск<br> Регнуть нельзя, отправляй заявку в чат!!</h1>';
      }
      if (СurrentAccount == Novokuznezk_SS_Names[0] || СurrentAccount == Novokuznezk_SS_Names[1]) {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText" style="font-size: 20px; left: 12%;">Только Новокузнецк, Междуреченск, Осинники, Калтан, Прокопьевск, Киселевск, Мыски!</h1>';
      }
      if (СurrentAccount == Krasnoyarsk_SS_Names[0] || СurrentAccount == Krasnoyarsk_SS_Names[1]) {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText" style="font-size: 20px; left: 12%;">Только Ачинск, Назарово, Красноярск, Минусинск,<br> Зеленогорск, Абакан, Черногорск, Дивногорск, Лесосибирск!</h1>';
      }
      if (СurrentAccount == Barnaul_SS_Names[0] || СurrentAccount == Barnaul_SS_Names[1] || СurrentAccount == Barnaul_SS_Names[2]) {
        document.getElementsByClassName("navbar-brand")[0].innerHTML += '<h1 id="RegionText" style="font-size: 20px; left: 12%;">Только Барнаул, Бийск, Заринск, Новоалтайск, Рубцовск!</h1>';
      }

    }
    try{
      for (var i = 0; i <= (RegionNames.SpeedInet.length); i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.SpeedInet[i]) >= 0 && СurrentAccount == Speedinet_SS_Names[0] || document.getElementById("input-location-house").value.indexOf(RegionNames.SpeedInet[i]) >= 0 && СurrentAccount == Speedinet_SS_Names[1]) {
          IsSpeedInet = true
          //console.log("Тригер на: ", RegionNames.SpeedInet[i])
        }
      }
      for (var i = 0; i <= (RegionNames.Norkom.length); i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.Norkom[i]) >= 0 && СurrentAccount == Norilsk_SS_Names[0] || document.getElementById("input-location-house").value.indexOf(RegionNames.Norkom[i]) >= 0 && СurrentAccount == Norilsk_SS_Names[1]) {
          IsNorkom = true
          //console.log("Тригер на: ", RegionNames.SpeedInet[i])
        }
      }
      for (var i = 0; i <= RegionNames.Kemerovo.length; i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.Kemerovo[i]) >= 0 && СurrentAccount == Kemerovo_SS_Names[0] || document.getElementById("input-location-house").value.indexOf(RegionNames.Kemerovo[i]) >= 0 && СurrentAccount == Kemerovo_SS_Names[1]) {
          IsKemerovo = true
          //console.log("Тригер на: ", RegionNames.SpeedInet[i])
        }
      }
      for (var i = 0; i <= RegionNames.Novokyznetsk.length; i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.Novokyznetsk[i]) >= 0 && СurrentAccount == Novokuznezk_SS_Names[0] || document.getElementById("input-location-house").value.indexOf(RegionNames.Novokyznetsk[i]) >= 0 && СurrentAccount == Novokuznezk_SS_Names[1]) {
          IsNovokyznetsk = true
          //console.log("Тригер на: ", RegionNames.SpeedInet[i])
        }
      }
      for (var i = 0; i <= RegionNames.Novosibirsk.length; i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.Novosibirsk[i]) >= 0 && СurrentAccount == Novosibirsk_SS_Names[0]) {
          IsNovosibirsk = true
          //console.log("Тригер на: ", RegionNames.Novosibirsk[i])
        }
      }
      for (var i = 0; i <= RegionNames.Krasnoyarsk.length; i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.Krasnoyarsk[i]) >= 0 && СurrentAccount == Krasnoyarsk_SS_Names[0]) {
          IsKrasnoyarsk = true
          //console.log("Тригер на: ", RegionNames.Krasnoyarsk[i])
        }
      }
      for (var i = 0; i <= RegionNames.Barnaul.length; i++) {
        if (document.getElementById("input-location-house").value.indexOf(RegionNames.Barnaul[i]) >= 0 && СurrentAccount == Barnaul_SS_Names[0] || document.getElementById("input-location-house").value.indexOf(RegionNames.Barnaul[i]) >= 0 && СurrentAccount == Barnaul_SS_Names[1] || document.getElementById("input-location-house").value.indexOf(RegionNames.Barnaul[i]) >= 0 && СurrentAccount == Barnaul_SS_Names[2]) {
          IsBarnaul = true
          //console.log("Тригер на: ", RegionNames.Barnaul[i])
        }
      }



      console.log("IsNorkom: ", IsNorkom)
      console.log("IsKemerovo: ", IsKemerovo)
      console.log("IsNovokyznetsk: ", IsNovokyznetsk)
      console.log("IsSpeedInet: ", IsSpeedInet)
      console.log("IsNovosibirsk: ", IsNovosibirsk)
      console.log("IsKrasnoyarsk: ", IsKrasnoyarsk)
      console.log("IsBarnaul: ", IsBarnaul)

      if (IsNorkom == true && IsKemerovo == false && IsNovokyznetsk == false && IsNovosibirsk == false && IsKrasnoyarsk == false && IsSpeedInet == false && IsBarnaul == false) { // Даем кнопку
        console.log("Даем кнопку Норком")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }

      else if (IsNorkom == false && IsKemerovo == true && IsNovokyznetsk == false && IsNovosibirsk == false && IsKrasnoyarsk == false && IsSpeedInet == false && IsBarnaul == false) { // Даем кнопку
        console.log("Даем кнопку Кемерово")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }

      else if (IsNorkom == false && IsKemerovo == false && IsNovokyznetsk == true && IsNovosibirsk == false && IsKrasnoyarsk == false && IsSpeedInet == false && IsBarnaul == false) { // Даем кнопку
        console.log("Даем кнопку Новокузнецк")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }
      
      else if (IsNorkom == false && IsKemerovo == false && IsNovokyznetsk == false && IsNovosibirsk == true && IsKrasnoyarsk == false && IsSpeedInet == false && IsBarnaul == false) { // Даем кнопку
        console.log("Даем кнопку Новосибирск")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }
      else if (IsNorkom == false && IsKemerovo == false && IsNovokyznetsk == false && IsNovosibirsk == false && IsKrasnoyarsk == true && IsSpeedInet == false && IsBarnaul == false) { // Даем кнопку
        console.log("Даем кнопку Красноярск")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }
      else if (IsNorkom == false && IsKemerovo == false && IsNovokyznetsk == false && IsNovosibirsk == false && IsKrasnoyarsk == false && IsSpeedInet == false && IsBarnaul == true) { // Даем кнопку
        console.log("Даем кнопку Барнаул")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }
      else if (IsNorkom == false && IsKemerovo == false && IsNovokyznetsk == false && IsNovosibirsk == false && IsKrasnoyarsk == false && IsSpeedInet == true && IsBarnaul == false) { // Даем кнопку
        console.log("Даем кнопку SpeedInet")
        document.getElementsByClassName("btn-primary")[2].style.display = "block";

        document.getElementById("RegionError").style.display = "none";
      }
      else{ // Забираем кнопку
        console.log("Забираем кнопку")
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
  try{
    var wrapper1 = document.getElementsByClassName('multiselect__content-wrapper')[8]
    var wrapper2 = document.getElementsByClassName('multiselect__content-wrapper')[9]
    var Pakets = wrapper1.getElementsByClassName('multiselect__element')
    var Monos = wrapper2.getElementsByClassName('multiselect__element')
    var AllFields = []
    AllFields.push.apply(AllFields, Monos);
    AllFields.push.apply(AllFields, Pakets);
    var indicator = false;
    //console.log("============================================================================================")
    if (Tarifs.length > 0) {
      for (var i = 0; i < AllFields.length; i++) {
        for (var j = 0; j < Tarifs.length; j++) {
          //console.log("Сравниваю", AllFields[i].innerText, " и ", Tarifs[j]+' ')
          if (AllFields[i].innerText.indexOf(Tarifs[j]) >= 0) {
            //console.log("Сошлось!")
            indicator = true;
          }
        }
        if (indicator) {
          indicator = false
          AllFields[i].style.display = 'block'
        }
        else {
          
          //console.log("Удалить", AllFields[i].innerText)
          
          AllFields[i].style.display = 'none'
        }
        
      }
    }
    //console.log("============================================================================================")
  }
  catch(e){
    console.log(e)
  }


  try{
    if (document.getElementById("input-group-description__BV_label_").innerHTML.indexOf("tooltiptext1") < 0) {
        document.getElementById("input-group-description__BV_label_").innerHTML += '<span class="tooltiptext1" style="top: 25%;width: 30%;left: 53%;">Указываем конфигурацию ТП, условия ТП, период скидки и стоимость по скидке (при наличии), оборудование, стоимость его аренды/рассрочки (срок рассрочки)/выкупа и дополнительную информацию.</span>'
        document.getElementById("input-group-location-house__BV_label_").innerHTML += '<span class="tooltiptext1" style="top: 0%;width: 40%; left: 103%;">Вписать нужно вручную, а потом выбрать из выпадающего списка. Обязательно вписать номер квартиры. Если после проверки адреса внизу будет указано, что дом на аутсорсинге - не обращаем внимания, а если указано, что дом обслуживается на линиях ТТК -  лучше продать ТТК. Так будет быстрее.</span>'
        document.getElementById("input-group-types__BV_label_").innerHTML += '<span class="tooltiptext1" style="top: 25%;width: 60%;left: 103%;">В поле «Тип» всегда «Физ. Лицо».<br> Нажимаем галочку «Без паспортных данных».<br> ФИО указываем с большой буквы по одному слову, потом нажимаем «Поиск».<br> Если ничего не найдено - нажимаем «Новый контакт +».<br> А если нашелся какой-то контакт - либо выбираем его, либо просим у клиента доп номер или заводим заявку на другого человека.<br> В поле «Основной телефон» и «Дополнительные телефоны» контактный номер вписываем со второй цифры без пробелов и тире.<br> Поле «Дата рождения» заполняется обязательно через точку в формате: «дд.м.гггг».</span>'
        document.getElementById("input-group-phone__BV_label_").innerHTML += '<span class="tooltiptext2" style="">В поле «Телефон для связи по заявке» вписываем основной номер для связи с клиентом.<br><br> Поле «Лицевой счет» не трогаем.<br><br> В поле «Вид операции» указываем «Новое подключение».<br><br> В поле «Тематика» указывается конфигурация ТП (пакет/моно шпд).<br><br> После выбора в «Тематике», в поле «Вид услуги» указываем услги, которые есть в тарифе, который мы продали.<br><br> В поле «Причина тематики» вставляем всегда «Абонент отказался от ответа»</span>'
        document.getElementById("input-group-channel__BV_label_").innerHTML += '<span class="tooltiptext2" style="">Поля «Канал продаж» и «Агент» в агентских учетках заполнены автоматически, не трогаем.<br><br> Поле «Пакет» будет открыто для выбора,<br> если в «Тематике» мы выбрали «702 Подключение пакета», а поле «Тариф», если выбрали «701 Подключение моно услуги».<br><br> Поле «Услуги» мы не трогаем. В поле «Оборудование» указываем роутеры и тв-приставки, а также формат их приобретения (стоимость аренды/рассрочки (срок рассрочки)/выкупа).<br><br> Поле «Перешел с провайдера» не обязательно для заполнения.</span>'
        
    }
    
  }
  catch(e){
    console.log(e)
  }
}




  