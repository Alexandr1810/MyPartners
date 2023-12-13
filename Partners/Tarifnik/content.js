
var suggestions = document.getElementsByClassName('btn_sup_tariff_mob');
window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "Tarifnik",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            console.log(request, sender, sendResponse);
            console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'Tarifnik') {
                if (request.Message=='true') {
                    console.log("Хуй");
                    setInterval(GetProviders, 2000);
                }
                if (request.Message=='false') {
                    console.log("НеХуй");
                }
            }
        }
    );

    
})

function GetProviders(){
  Providers = document.getElementsByClassName('btn_sup_tariff_mob');
  IDs = document.getElementsByClassName('prov-logo');
  
  
  for (var i = 0; i < Providers.length; ++i) {
      var item = Providers[i];  
      //console.log(IDs[i]);
      Tester = String(IDs[i].src);
      //console.log(Tester);
      
      if  (Tester.indexOf("100") >= 0){ //НИЧЕГО
      //console.log("ЛОКАТОР");
      }
      
      else if  (Tester.indexOf("47") >= 0){ //ттк
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip" style="background-color: #ff1515b0;"><h3 class="Provider">ТТК</h3><span>Моно *2  * 0,93</span><br><span>Пакет *4 * 0,93</span><br><span>5% с рассрочки оборудки * 0,93</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      //console.log("Сделал ТТК");
      }
      else if  (Tester.indexOf("25") >= 0){ //РТК
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip" style="height: 300px; top: 17%;"><span>Ростелеком Москва:</span><br><span>Инет: *3,2 * 0.87</span><br><span>Игровой: *3,5  * 0.87</span><br><span>Пакет: *4,6 * 0.87</span><br><span>КВГ: 5,1* 0.87</span><br><br><span>Все Регионы кроме МСК:</span><br><span>Моно и Пакет *2,24 </span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("61") >= 0){ //СС
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Сибирские сети</h3><span> До 499: 1674 руб.</span><br><span> От 500 до 799: 2139 руб.</span><br><span> От 800: 2418 руб.</span><br><span>Скидка за свой счет</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      
      else if  (Tester.indexOf("11") >= 0){ //МТС
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"  style="background-color: #ff1515b0;"><h3 class="Provider">МТС</h3><span>Моно, Пакет, Конвергент *3</span><br><span> Норильск *2</span><br><span> Москва(МГТС) *2,15</span><br><span>Скидка за свой счет</span><br><span>Роутер в рассрочку/покупку: 350р</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("32") >= 0){ //SamaraLan
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">SamaraLan</h3><span>Сдаем на Тарифник</span><br><span> 465 руб.</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("35") >= 0){ //TeleNet
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">TeleNet</h3><span>Сдаем на Тарифник</span><br><span> 465 руб.</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("36") >= 0){ //SumTel
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">SumTel</h3><span>НЕ ПРОДАЕМ</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("39") >= 0){ //SibTelecom
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">SibTelecom</h3><span>НЕ ПРОДАЕМ</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("40") >= 0){ //Almatel
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Almatel</h3><span>Моно и Пакет *3,2</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("42") >= 0){ //Цифра1


      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Цифра1</h3><span>Моно и Пакет *3,2</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("44") >= 0){ //Wifire
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip" style="background-color: #f14d41db;"><h3 class="Provider">Wifire</h3><span>Моно и пакет * 1,93</span><br><span> Конвергент *2,32</span><br><span>Скидка за свой счет</span><br><span>Оборудка не платится</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("45") >= 0){ //NetByNet
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">NetByNet</h3><span>Моно и пакет * 1,93</span><br><span> Конвергент *2,32</span><br><span>Скидка за свой счет</span><br><span>Оборудка не платится</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("46") >= 0){ //Акадо
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip" style="background-color: #f14d41db;"><h3 class="Provider">Акадо</h3><span>Моно: 1488 руб.</span><br><span>Пакет: 1581 руб.</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("48") >= 0){ //Электронный город
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Электронный город</h3><span>Моно: *2,2 * 0.93</span><br><span>Пакет: *2,2 * 0.93</span><br><span>КТВ: 372 руб.</span><br><span>За оборудку *0,08*0,93</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("51") >= 0){ //TomTel
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">TomTel</h3><span>НЕ ПРОДАЕМ</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("52") >= 0){ //Стрела Телеком
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Стрела Телеком</h3><span>НЕ ПРОДАЕМ</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("53") >= 0){ //Мегафон
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip" style="background-color: #19c067c2"><h3 class="Provider">Мегафон</h3><span>Моно и пакет * 1,93</span><br><span> Конвергент *2,32</span><br><span>Скидка за свой счет</span><br><span>Оборудка не платится</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("54") >= 0){ //Rinet
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Rinet</h3><span>100МБит: 1500 руб. *0,93</span><br><span>1ГБ: 1800 руб. *0,93</span><span>КТВ: 600 руб. *0,93</span><br><span>ЦТВ: 800 руб. *0,93р</span><br><span>Роутер: 325р и Приставка: 465р</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("55") >= 0){ //Марьино-Нет
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Марьино-Нет</h3><span>Моно: 1162р</span><br><span>Пакет: 1302р</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("56") >= 0){ //Convex


      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Convex</h3><span>Пакет *2,55 с IPTV</span><br><span>Пакет *2,2 с КТВ</span><span>Моно 1,35</span><br><span>Роутер 325р</span><br><span>Приставки 465р</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("57") >= 0){ //EVO
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">EVO</h3><span>Сдаем на Тарифник</span><br><span> 465 руб.</span></div></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("58") >= 0){ //УфаНет
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">УфаНет</h3><span>Моно: 744р</span><br><span>Пакет: 1488р</span><br><span>КТВ: 372р</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("59") >= 0){ //SkyNet
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip" style="background-color: #19c067c2;height: 241px;top: 16%;"><h3 class="Provider">SkyNet</h3><span>Хочу SkyNet 2232 руб</span><br><span>Терминатор - 1674 руб</span><br><span>Моно - 2232 руб</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("62") >= 0){ //НорКом
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">НорКом</h3><span>До 2500: 930р</span><br><span>От 2501 до 3000: 1395р</span><br><span>От 3301: 1760р</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("63") >= 0){ //Летай
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Летай</h3><span>Сдаем на Тарифник</span><br><span> 465 руб.</span></div></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("64") >= 0){ //Реал
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Реал</h3><span>Сдаем на Тарифник</span><br><span> 465 руб.</span></div></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("65") >= 0){ //Орион
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Орион</h3><span>До 499р *2,4</span><br><span>От 500р до 649р *2,9</span><br><span>От 650р *3,4</span><br><span>Оборудка  в аренду идет в КЭФ</span><br><span>Продажа домофона считается как 100р*кэф</span></div></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("69") >= 0){ //Зеленая точка
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Зеленая точка</h3><span>Сдаем на Тарифник</span><br><span> 465 руб.</span></div></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("70") >= 0){ //Новгород-Телеком
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Новгород-Телеком</h3><span>Моно и Пакет:</span><br><span> 2.3 * 0,93</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("71") >= 0){ //Череповец-Телеком
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Череповец-Телеком</h3><span>Моно и Пакет:</span><br><span> 2.3 * 0,93</span></div></label');
      Providers[i].innerHTML = MyProvider;

    //console.log(MyProvider);
      }
      else if  (Tester.indexOf("72") >= 0){ //ЯрКом
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">ЯрКом</h3><span>Моно и Пакет:</span><br><span> 2.3 * 0,93</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("73") >= 0){ //Izet
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">Izet</h3><span>Моно и Пакет:</span><br><span> 2.3 * 0,93</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("74") >= 0){ //QWERTY
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip" style="background-color: #19c067c2"><h3 class="Provider">QWERTY</h3><span>Сдаем на Тарифник</span><br><span> 465 руб.</span></div></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("77") >= 0){ //Т2
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip" style="background-color: #00000085"><h3 class="Provider">TELE2</h3><span>Сдаем на Тарифник</span><br><span> 465 руб.</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("80") >= 0){ //ПАКТ
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip" style="background-color: #00000085"><h3 class="Provider">ПАКТ</h3><span>НЕ ПРОДАЕМ</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("7") >= 0){ //Билайн
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltipBilya" style="background-color: #ffcd19"><h3 class="Provider">Билайн</h3><span>Моно и Пакет *2,3</span><br><span>КВГ с новой Сим:</span><br><span>до 500р = 1441 руб</span><br><span>от 501р - 649р = 2092 руб</span><br><span>от 650р - 799р = 2557 руб</span><br><span>от 800 - 999р = 2976 руб</span><br><span>от 1000р - 1399р = 3720 руб</span><br><span>от 1400р = 5208 руб</span><br><br><span>КВГ Уже есть сим Билайна:</span><br><span>до 500р = 1162 руб</span><br><span>от 501р - 649р = 1674 руб</span><br><span>от 650р - 799р = 1953 руб</span><br><span>от 800р - 999р = 2371 руб</span><br><span>от 1000р-1399р = 2976 руб</span><br></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      //console.log("Сделал Билайн");
      }
      else if  (Tester.indexOf("2") >= 0){ //2КОМ
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip" style="background-color: #f14d41db;"><h3 class="Provider">2КОМ</h3><span>Моно и Пакет *3,2</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }

      else if  (Tester.indexOf("3") >= 0){ //ИнтерZet
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip"><h3 class="Provider">ИнтерZet</h3><span>Пакет *2,55 с IPTV</span><br><span>Пакет *2,2 с КТВ</span><span>Моно 1,35</span><br><span>Роутер 325р</span><br><span>Приставки 465р</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
      else if  (Tester.indexOf("8") >= 0){ //ДомРу
      MyProvider = item.innerHTML.replace('rov-logo"></label','rov-logo"><div id="tooltip" style="background-color: #ff1515b0;"><h3 class="Provider">ДомРу</h3><span>Пакет *2,55 с IPTV</span><br><span>Пакет *2,2 с КТВ</span><br><span>Моно *1,35</span><br><span>Роутер 325р</span><br><span>Приставки 465р</span><br><span>КТВ 372р</span></div></label');
      Providers[i].innerHTML = MyProvider;
      //console.log(MyProvider);
      }
  }

}


