var number = null;
var nameval = null;

var AbName = null;
var AbSername = null;
var AbPatronymic = null;
var isAdmin;
var isAdmin1 = false;


var CopyJSON = {
 AbName: '',
 Adress: '',
 Phone: '',
 City: '',
 ServicesCount: '',
 privider: '',
 Services: [],
 Comment: '',
 FullAP: '',
 FullAP_OutDiscount: '',
 RouterCount: '',
 PristavkaCount: '',
 id: ''
}


//Составляющие комментария
  ItogComment = ''       //Полный комментарий
  isHomeStr = ``
  ServicesStr = ``
  RouterStr = ``
  TerminalStr = ``
  PristavkaStr = ``
  PriseOfConnectionStr = ``
  PriceStr = ``
  FirstPaymentStr = ``
  
  //Переменные для формирования коммента
  isHome = false         //Частный дом?
  PriseOfConnection = '' //Стоимость подключения

  Inet = false     //Нужен инет?
  CTV = false      //Нужно ЦТВ?
  KTV = false      //Нужно КТВ?
  VN = false       //Нужно ВН?
  Domofon = false  //Нужнен домофон?

  NeedTerminal = 0  //Нужнен Терминал? 2 - В рассрочку; 1 = В покупку; 0 - Не нужен
  NeedRouter = 0    //Нужнен Роутер?   2 - В рассрочку; 1 = В покупку; 0 - Не нужен
  NeedPristavka = 0 //Нужна приставка? 2 - В рассрочку; 1 = В покупку; 0 - Не нужен

  RouterCount = ''    //Кол-во Роутеров
  PristavkaCount = '' //Кол-во Приставок

  RouterFullPrice = ''         //Полная цена роутера
  RouterRassrochka_Period = '' //Период рассрочки
  RouterRassrochka_Price = ''  //Цена в мес

  PristavkaFullPrice = ''         //Полная цена Пристаки
  PristavkaRassrochka_Period = '' //Период рассрочки
  PristavkaRassrochka_Price = ''  //Цена в мес

  TerminalFullPrice = ''         //Полная цена терминала
  TerminalRassrochka_Period = '' //Период рассрочки
  TerminalRassrochka_Price = ''  //Цена в мес

  HasPersonalDomRuRouter = false

  FullAP = ''             //Полная цена тарифа
  FullAP_OutDiscount = '' //Полная цена тарифа после акции
  DiscountAP = ''         //Цена по акции
  DiscountPeriod = '     ' //Период акции

  TP_Name = ''

  FirstPayment = 0

  //Эти данные воруем с полей заполнения самой заявки
  FIO = ''
  City = ''
  Adress = ''
  House = ''
  Phone = ''
  kv = ''
  DogID = ''

var Modalframes = `
<!-- Модальный -->
<div id="myModal" class="modal">

  <!-- Модальное содержание -->
  <div class="modal-contentr">
    <span class="close">&times;</span>
    <section id="s1">
      <div class="ModalHead"><h1>Где требуется подключение?</h1></div>
      <div class="ModalBody"><button id="s1_a">Квартира</button><button id="s1_1_a">Частный Сектор</button></div>
    </section> 


    <section id="s2" style="display:none">
      <div class="ModalHead"><h1>Стоимость подключения</h1></div>
      <div class="ModalBody"><input class="FullModal_input" id="PriseOfConnectionId"><h1 class="FullModal_input_text">руб.</h1></div>
      <div class="ModalFooter"><h1><button id="s2_a">Назад</button><button id="s2_1_a">Далее</button></h1></div>
    </section> 


    <section id="s3" style="display:none">
      <div class="ModalHead"><h1>Нужен ли Терминал?</h1></div>
      <div class="ModalBody">
        <select class="ModalSelect" id="Terminal_Select">
          <option selected value="0">Не нужен</option>
          <option value="1">В покупку</option>
          <option value="2">В рассрочку</option>
        </select>
      </div>
      <div class="ModalFooter"><h1><button id="s3_a">Назад</button><button id="s3_1_a">Далее</button></h1></div>
    </section> 

    <section id="s4" style="display:none">
      <div class="ModalHead"><h1>Введите цену</h1></div>
      <div class="ModalBody"><input class="FullModal_input" id="PriseOfTerminal"><h1 class="FullModal_input_text">руб.</h1></div>
      <div class="ModalFooter"><h1><button id="s4_a">Назад</button><button id="s4_1_a">Далее</button></h1></div>
    </section> 

    <section id="s5" style="display:none">
      <div class="ModalHead"><h1>Введите цену и период</h1></div>
      <div class="ModalBody"><h1 class="MiniInputText"><span>Терминал в рассрочку на </span><input type="text" class="MiniInput" id="TerminalRassrochka_Period"><span>мес. по </span><input type="text" class="MiniInput" id="TerminalRassrochka_Price"><span>руб./мес</span></h1></div>
      <div class="ModalFooter"><h1><button id="s5_a">Назад</button><button id="s5_1_a">Далее</button></h1></div>
    </section> 

    <section id="s6" style="display:none">
      <div class="ModalHead"><h1>Какие услуги подключаем?</h1></div>
      <div class="ModalBody">
        <div class="Yslygi_block" id="Yslygi_block_1">
          <select class="ModalSelect" id="Yslygi_Select_1">
            <option selected value="0">Не выбрано</option>
            <option value="1">Интернет</option>
            <option value="2">ЦТВ</option>
            <option value="3">КТВ</option>
            <option value="4">Видеонаблюдение</option>
            <option value="5">Домофон</option>
          </select>
        </div>
        <div class="Yslygi_block" style="display: none" id="Yslygi_block_2">
          <h1 class="Yslygi_block_plus">+</h1>
          <select class="ModalSelect" id="Yslygi_Select_2">
            <option selected value="0">Не выбрано</option>
            <option value="1">Интернет</option>
            <option value="2">ЦТВ</option>
            <option value="3">КТВ</option>
            <option value="4">Видеонаблюдение</option>
            <option value="5">Домофон</option>
          </select>
        </div>
        <div class="Yslygi_block" style="display: none" id="Yslygi_block_3">
          <h1 class="Yslygi_block_plus">+</h1>
          <select class="ModalSelect" id="Yslygi_Select_3">
            <option selected value="0">Не выбрано</option>
            <option value="1">Интернет</option>
            <option value="2">ЦТВ</option>
            <option value="3">КТВ</option>
            <option value="4">Видеонаблюдение</option>
            <option value="5">Домофон</option>
          </select>
        </div>
        <div class="Yslygi_block" style="display: none" id="Yslygi_block_4">
          <h1 class="Yslygi_block_plus">+</h1>
          <select class="ModalSelect" id="Yslygi_Select_4">
            <option selected value="0">Не выбрано</option>
            <option value="1">Интернет</option>
            <option value="2">ЦТВ</option>
            <option value="3">КТВ</option>
            <option value="4">Видеонаблюдение</option>
            <option value="5">Домофон</option>
          </select>
        </div>
        <div class="Yslygi_block" style="display: none" id="Yslygi_block_5">
          <h1 class="Yslygi_block_plus">+</h1>
          <select class="ModalSelect" id="Yslygi_Select_5">
            <option selected value="0">Не выбрано</option>
            <option value="1">Интернет</option>
            <option value="2">ЦТВ</option>
            <option value="3">КТВ</option>
            <option value="4">Видеонаблюдение</option>
            <option value="5">Домофон</option>
          </select>
        </div>
      </div>
      <div class="ModalFooter"><h1><button id="s6_a">Назад</button><button id="s6_1_a">Далее</button></h1></div>
    </section> 


    <section id="s7" style="display:none">
      <div class="ModalHead"><h1>Нужен ли роутер?</h1></div>
      <div class="ModalBody">
        <select class="ModalSelect" id="Router_Select">
          <option selected value="0">Не нужен</option>
          <option value="1">В покупку</option>
          <option value="2">В рассрочку</option>
        </select>
      </div>
      <div class="ModalFooter"><h1><button id="s7_a">Назад</button><button id="s7_1_a">Далее</button></h1></div>
    </section> 

    <section id="s8" style="display:none">
      <div class="ModalHead"><h1>Введите цену и количество</h1></div>
      <div class="ModalBody"><h1 class="MiniInputText"><span>Роутер под выкуп за </span><input type="text" class="MiniInput" id="RouterFullPrice"><span> руб. </span><input type="text" class="MiniInput" id="RouterCount"><span> шт.</span></h1></div>
      <div class="ModalFooter"><h1><button id="s8_a">Назад</button><button id="s8_1_a">Далее</button></h1></div>
    </section> 

    
    <section id="s9" style="display:none">
      <div class="ModalHead"><h1>Введите цену, количество и период</h1></div>
      <div class="ModalBody">
        <h1  class="MiniInputText">
          <span>Роутер в рассрочку на </span>
          <input type="text" class="MiniInput" id="RouterRassrochka_Period">
          <span>мес. по </span>
          <input type="text" class="MiniInput" id="RouterRassrochka_Price">
          <span> руб./мес </span>
          <input type="text" class="MiniInput" id="RouterCount_R">
          <span> шт.</span>
        </h1>
      </div>
      <div class="ModalFooter"><h1><button id="s9_a">Назад</button><button id="s9_1_a">Далее</button></h1></div>
    </section> 

    <section id="s10" style="display:none">
      <div class="ModalHead"><h1>У абонентра есть роутер от ДомРу?</h1></div>
      <div class="ModalBody"><button id="s10_a">Да</button><button id="s10_1_a">Нет</button></div>
    </section> 



    <section id="s11" style="display:none">
      <div class="ModalHead"><h1>Нужна ли приставка?</h1></div>
      <div class="ModalBody">
        <select class="ModalSelect" id="Pristavka_Select">
          <option selected value="0">Не нужен</option>
          <option value="1">В покупку</option>
          <option value="2">В рассрочку</option>
        </select>
      </div>
      <div class="ModalFooter"><h1><button id="s11_a">Назад</button><button id="s11_1_a">Далее</button></h1></div>
    </section> 

    <section id="s12" style="display:none">
      <div class="ModalHead"><h1>Введите цену и количество</h1></div>
      <div class="ModalBody"><h1 class="MiniInputText"><span>Приставка под выкуп за </span><input type="text" class="MiniInput" id="PristavkaFullPrice"><span> руб. </span><input type="text" class="MiniInput" id="PristavkaCount"><span> шт.</span></h1></div>
      <div class="ModalFooter"><h1><button id="s12_a">Назад</button><button id="s12_1_a">Далее</button></h1></div>
    </section> 

    <section id="s13" style="display:none">
      <div class="ModalHead"><h1>Введите цену, количество и период</h1></div>
      <div class="ModalBody"><h1 class="MiniInputText"><span><h1 class="MiniInputText">Приставка в рассрочку на </span><input type="text" class="MiniInput" id="PristavkaRassrochka_Period"><span>мес. по </span><input type="text" class="MiniInput" id="PristavkaRassrochka_Price"><span> руб./мес </span><input type="text" class="MiniInput" id="PristavkaCount_R"><span> шт.</span></h1></div>
      <div class="ModalFooter"><h1><button id="s13_a">Назад</button><button id="s13_1_a">Далее</button></h1></div>
    </section> 

    <section id="s14" style="display:none">
      <div class="ModalHead"><h1>Тариф со скидкой?</div>
      <div class="ModalBody"><button id="s14_a">Да</button><button id="s14_1_a">Нет</button></div>
      <div class="ModalFooter"><h1><button id="s14_2_a">Назад</button></h1></div>
    </section> 
  

    <section id="s15" style="display:none">
      <div class="ModalHead"><h1>Полная цена ТП</h1></div>
      <div class="ModalBody"><input class="FullModal_input" id="FullAP1"><h1 class="FullModal_input_text">руб.</h1></div>
      <div class="ModalFooter"><h1><button id="s15_a">Назад</button><button id="s15_1_a">Далее</button></h1></div>
    </section> 

    <section id="s16" style="display:none">
      <div class="ModalHead"><h1>Введите период, цену по акции и полную цену ТП</h1></div>
      <div class="ModalBody"><h1 class="MiniInputText"><h1 class="MiniInputText"><span>ТП со скидкой на  </span><input type="text" class="MiniInput" id="DiscountPeriod"><span> мес. по </span><input type="text" class="MiniInput" id="DiscountAP"><span>руб./мес,</span><br><span> далее</span><input type="text" class="MiniInput" id="FullAP"><span> руб./мес</span></h1></div>
      <div class="ModalFooter"><h1><button id="s16_a">Назад</button><button id="s16_1_a">Далее</button></h1></div>
    </section> 

    <section id="s17" style="display:none">
      <div class="ModalHead"><h1>Название ТП</h1></div>
      <div class="ModalBody"><input class="FullModal_input" id="TP_Name"></div>
      <div class="ModalFooter"><h1><button id="s17_a">Назад</button><button id="s17_1_a">Далее</button></h1></div>
    </section> 

    <section id="s18" style="display:none">
      <div class="ModalHead"><h1>Отлично!</h1></div>
      <div class="ModalBody"><a href="#" class="CopyText">Текст комментария</a></div>
      <div class="ModalFooter"><h1><button id="s18_a">Назад</button><button id="s18_1_a">Далее</button></h1></div>
    </section> 

    </div>

</div>
` 
window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "RMS",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            console.log(request, sender, sendResponse);
            console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'RMS') {
                if (request.Message=='true') {
                    setTimeout(InStart(), 5000);
                    setInterval(FindDD, 1000);
                    setInterval(FindComment, 1000);
                    setInterval(FindFio, 100);
                    setInterval(FindDogID, 100)
                    //document.getElementsByTagName("style")[0].innerHTML += innerCSS;
                }
                if (request.Message=='false') {
                  console.log(request.Message);
                }
            }
        }
    );
    
})

function FindDD(){
  //console.log("Есть контакт");
  const formGroup = document.getElementsByClassName("cTzeva")[1]; // вроде остается недвижимая
  const FourPage = document.getElementsByClassName("kURjtw")[0]; //Непонятные символы из 2го класса

  var aTags = document.getElementsByTagName("span");
  var searchText = "Создать договор";
  var found;

  for (let index = 0; index < document.querySelectorAll('div').length; index++) {
    if (document.querySelectorAll('div')[index].innerHTML.indexOf('Двойной договор')>=0) {
        console.log(document.querySelectorAll('div')[index])
        if (!isAdmin) {
          isAdmin  = confirm("Двойной договор! Заявку назначить нельзя. Абоненту перезвонят. ОБЯЗАТЕЛЬНО предупреди клиента чтобы создал новый договор и не соглашался на переоформление.")
          isAdmin  = confirm("Двойной договор! Заявку назначить нельзя. Абоненту перезвонят. ОБЯЗАТЕЛЬНО предупреди клиента чтобы создал новый договор и не соглашался на переоформление.")
        }
    }
    if (document.body.innerHTML.indexOf('Будет создан договор')>=0) {
        //console.log(document.querySelectorAll('div')[index])
        if (!isAdmin1) {
          if (document.querySelector('[data-qa="Text"]').innerHTML.indexOf('AlertBlock')<0) {
            document.querySelector('[data-qa="Text"]').innerHTML += `<div id="AlertBlock" style="position: fixed;top: 10px;right: 18px;border-radius: 10px;padding: 10px;border: 2px solid gray;width: 400px;background: white;z-index: 9999;"><p style="
  float: none;
  font-size: 18px;
  font-weight: 600;
  ">Будь внимателен!</p><br>
            <p style="float: left;">По регламенту, если с заявкой никто не работает 48<br>часов, её может перехватить любой другой канал</p>
            <br><br>
            <p style="float: left;">Важно назначать заявки сразу и отслеживать, в случае,<br>если по ним дата подключения свыше 48 часов</p>
            <br><br>
            <p style="float: left;">Все заявки, по которым подключение больше 2-х дней -<br>обязательно нужно писать комментарий. По какой <br> причине (Нет свободных слотов/желание абонента и т.д)</p>
            <br><br><br>
            <p style="float: left;">При Двойном Договоре заявку назначить нельзя.<br> Абоненту перезвонят. ОБЯЗАТЕЛЬНО предупреди</p>
            <p style="float: left;">Клиента чтобы создал новый договор и не соглашался <br>на переоформление.</p>
            </div>`
          }
          isAdmin1 = true;
          document.getElementById('AlertBlock').style.display = 'block'
        }
    }
    else{
      try{
        document.getElementById('AlertBlock').style.display = 'none'
      }
      catch(e){

      }
      isAdmin1 = false;
    }
  }

}
function InStart(){
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
      
  }
  link.href = 'https://krasnoyarsk.internetv-dom.ru/files/storage/f-logo.svg';
}
function FindComment(){
  if (findElementByText('div', 'Комментарий').parentNode.innerHTML.indexOf("Заполнить") < 0) {
    if (document.querySelectorAll('[data-qa="Heading"]').length > 1) {
      if (document.querySelectorAll('[data-qa="Heading"]')[1].innerText == 'Создание договора' && document.querySelectorAll('[placeholder="Комментарий"]').length > 0) {
        console.log("Открыта страница с комментарием")
        document.querySelectorAll('[data-qa="Heading"]')[0].parentNode.innerHTML += Modalframes
        commentHead = findElementByText('div', 'Комментарий').parentNode;
        commentHead.innerHTML += '<span href="#OpenModal" id="myBtn" class="FillComment">Заполнить</span>'
        GetDataFromModal()
        setProperties_forModal()
        setInterval(Check_ChengeofServices, 100)
      }
    }
  }
}
function FindFio(){
  if (document.querySelectorAll('[data-qa="Heading"]').length > 1) {

    if (document.querySelectorAll('[data-qa="Heading"]')[1].innerText == 'Создание договора' && document.querySelectorAll('[placeholder="Фамилия"]').length > 0) {
      FIO = `${document.querySelectorAll('[placeholder="Фамилия"]')[0].value} ${document.querySelectorAll('[placeholder="Имя"]')[0].value} ${document.querySelectorAll('[placeholder="Отчество"]')[0].value}`
      City = document.getElementsByClassName("filter-large")[0].innerText
      Adress = document.getElementsByClassName("filter-large")[1].innerText
      House = `${document.getElementsByClassName("filter-small")[0].innerText} ${document.getElementsByClassName("filter-small")[1].innerText}`
      kv = document.querySelectorAll('[placeholder="Номер квартиры"]')[0].value
      Phone = document.querySelectorAll('[placeholder="Телефон"]')[0].value

      console.log(`ФИО: ${FIO}, Город: ${City}, Улица: ${Adress}, Дом: ${House}, Квартира: ${kv}, Номер Телефона: ${Phone}`)

      if (findElementByText("div", "Фамилия").parentNode.innerHTML.indexOf("Вставить") < 0) {
        findElementByText("div", "Фамилия").parentNode.innerHTML += '<span id="pasteButt" class="FillComment">Вставить</span>'
        
        document.getElementById("pasteButt").onclick = function() {
          navigator.clipboard.readText()
          .then(text => {
            console.log(text);
            var json = JSON.parse(text);
            const event = new Event('input', { bubbles: true });
            inputSername = document.querySelector('[placeholder="Фамилия"]');
            inputName = document.querySelector('[placeholder="Имя"]');
            inputPatronymic = document.querySelector('[placeholder="Отчество"]');
            inputPhone = document.querySelector('[placeholder="Телефон"]')

            inputSername.value = JSON.fio.split(" ")[0]
            inputSername.dispatchEvent(event);
            inputName.value = JSON.fio.split(" ")[1]
            inputName.dispatchEvent(event);
            inputPatronymic.value = JSON.fio.split(" ")[2]
            inputPatronymic.dispatchEvent(event);
            ReplacedNum = replaseNumber(JSON.PhoneNumber)
            ReplacedNum = (ReplacedNum[0] === '7' || ReplacedNum[0] === '8') ? ReplacedNum.slice(1) : ReplacedNum
            inputPhone.value = '8' + ReplacedNum;
            inputPhone.dispatchEvent(event);

          })
          .catch(err => {
            // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
            console.log('Something went wrong', err);
          });
          

        } 
      }
    }
  }
}
function FindDogID(){
  if (findElementByText("h4","Успешная операция") != undefined) {
    if (DogID != findElementByText("div", "Будет создан договор").innerText.match(/№(\d+)\./g)[0].replace('№', '').replace('.', '')) {
      DogID = findElementByText("div", "Будет создан договор").innerText.match(/№(\d+)\./g)[0].replace('№', '').replace('.', '');
      console.log("Договор:", DogID)
      sendMessageToBackground()
    }
  }
}
function findElementByText(tag, text) {
    const elements = document.getElementsByTagName(tag); // Получаем все элементы div
    var elem;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].textContent.includes(text)) { // Проверяем наличие текста
            elem = elements[i]; // Возвращаем найденный элемент
        }
    }

    return elem
}
function replaseNumber(num){
  number = num.replace(/[-+()\s]/g, '');
  console.log(number);
  return number
}


function setProperties_forModal(){
  // Получить модальный окн
  var modal = document.getElementById("myModal");

  // Получить кнопку, которая открывает модальный
  var btn = document.getElementById("myBtn");

  // Получить элемент <span>, который закрывает модальный
  var span = document.getElementsByClassName("close")[0];

  // Когда пользователь нажимает на кнопку, откройте модальный
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // Когда пользователь нажимает на <span> (x), закройте модальное окно
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Когда пользователь щелкает в любом месте за пределами модального, закройте его
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function OpenDialogModal(ModalId){
  document.getElementById(ModalId).style.display = 'block'
}
function CloseDialogModal(ModalId){
  document.getElementById(ModalId).style.display = 'none'
}

function GetDataFromModal(){
  //получаем все кнопки для навигации
  var s1Next = document.getElementById("s1_a");     //Квартира
  var s1_1Next = document.getElementById("s1_1_a"); //Частный сектов
  var s2Next = document.getElementById("s2_a");
  var s2_1Next = document.getElementById("s2_1_a");
  var s3Next = document.getElementById("s3_a");
  var s3_1Next = document.getElementById("s3_1_a");
  var s4Next = document.getElementById("s4_a");
  var s4_1Next = document.getElementById("s4_1_a");
  var s5Next = document.getElementById("s5_a");
  var s5_1Next = document.getElementById("s5_1_a");
  var s6Next = document.getElementById("s6_a");
  var s6_1Next = document.getElementById("s6_1_a");
  var s7Next = document.getElementById("s7_a");
  var s7_1Next = document.getElementById("s7_1_a");
  var s8Next = document.getElementById("s8_a");
  var s8_1Next = document.getElementById("s8_1_a");
  var s9Next = document.getElementById("s9_a");
  var s9_1Next = document.getElementById("s9_1_a");
  var s10Next = document.getElementById("s10_a");
  var s10_1Next = document.getElementById("s10_1_a");
  var s11Next = document.getElementById("s11_a");
  var s11_1Next = document.getElementById("s11_1_a");
  var s12Next = document.getElementById("s12_a");
  var s12_1Next = document.getElementById("s12_1_a");
  var s13Next = document.getElementById("s13_a");
  var s13_1Next = document.getElementById("s13_1_a");
  var s14Next = document.getElementById("s14_a");
  var s14_1Next = document.getElementById("s14_1_a");
  var s14_2Next = document.getElementById("s14_2_a");
  var s15Next = document.getElementById("s15_a");
  var s15_1Next = document.getElementById("s15_1_a");
  var s16Next = document.getElementById("s16_a");
  var s16_1Next = document.getElementById("s16_1_a");
  var s17Next = document.getElementById("s17_a");
  var s17_1Next = document.getElementById("s17_1_a");
  var s18Next = document.getElementById("s18_a");
  var s18_1Next = document.getElementById("s18_1_a");


  s1Next.onclick = function() {
    CloseDialogModal("s1")
    OpenDialogModal("s2")
    isHome = false
    console.log("Квартира")
  }
  s1_1Next.onclick = function() {
    CloseDialogModal("s1")
    OpenDialogModal("s2")
    isHome = true
    console.log("ЧС")
  }
  s2Next.onclick = function() {
    CloseDialogModal("s2")
    OpenDialogModal("s1")
    console.log("Назад")
  }
  s2_1Next.onclick = function() {
    CloseDialogModal("s2")
    PriseOfConnection = document.getElementById("PriseOfConnectionId").value
    console.log("Стоимость подключения:", PriseOfConnection)
    if (isHome) {
      OpenDialogModal("s3")
    }
    else{
      OpenDialogModal("s6")
    }
  }
  s3Next.onclick = function() {
    CloseDialogModal("s3")
    OpenDialogModal("s2")
    console.log("Назад")
  }
  s3_1Next.onclick = function() {
    CloseDialogModal("s3")
    
    NeedTerminal = Number(document.getElementById("Terminal_Select").value)
    if (NeedTerminal == 0) {
      console.log("Терминал не нужен")
      OpenDialogModal("s6")
    }
    if (NeedTerminal == 1) {
      console.log("Терминал нужен под выкуп")
      OpenDialogModal("s4")
    }
    if (NeedTerminal == 2) {
      console.log("Терминал нужен в рассрочку")
      OpenDialogModal("s5")
    }
  }
  s4Next.onclick = function() {
    CloseDialogModal("s4")
    OpenDialogModal("s3")
    console.log("Назад")
  }
  s4_1Next.onclick = function() {
    CloseDialogModal("s4")
    OpenDialogModal("s6")
    TerminalFullPrice = document.getElementById("PriseOfTerminal").value
    console.log("Стоимость терминала:", TerminalFullPrice)
  }
  s5Next.onclick = function() {
    CloseDialogModal("s5")
    OpenDialogModal("s4")
    console.log("Назад")
  }
  s5_1Next.onclick = function() {
    CloseDialogModal("s5")
    OpenDialogModal("s6")
    TerminalRassrochka_Period = document.getElementById("TerminalRassrochka_Period").value
    TerminalRassrochka_Price = document.getElementById("TerminalRassrochka_Price").value
    console.log("Терминал в рассрочку на:", TerminalRassrochka_Period)
    console.log("Стоимость терминала в мес:", TerminalRassrochka_Price)
  }
  s6Next.onclick = function() {
    CloseDialogModal("s6")
    if (isHome) {
      OpenDialogModal("s3")
    }
    else{
      OpenDialogModal("s2")
    }
    console.log("Назад")
  }
  s6_1Next.onclick = function() {
    CloseDialogModal("s6")
    PullServices = []
    for (var i = 1; i <= 5; i++) {
      checked_Select = document.getElementById("Yslygi_Select_"+i)
      if(checked_Select.value == 1){
        Inet = true     //Нужен инет
        PullServices.push("Интернет")
      }
      if(checked_Select.value == 2){
        CTV = true      //Нужно ЦТВ
        PullServices.push("ЦТВ")
      }
      if(checked_Select.value == 3){
        KTV = true      //Нужно КТВ
      }
      if(checked_Select.value == 4){
        VN = true       //Нужно ВН
      }
      if(checked_Select.value == 5){
        Domofon = true  //Нужнен домофон
      }
    }

    switch(PullServices[0]) {
      case "Интернет":
          console.log("Значение Интернет");
          PullServices.splice(0, 1);
          OpenDialogModal("s7")
          break;
      case "ЦТВ":
          console.log("Значение ЦТВ");
          PullServices.splice(0, 1);
          OpenDialogModal("s11")
          break;
      default:
          console.log("Массив пуст");
          OpenDialogModal("s14")
    }

    console.log(`Нужен инет: ${Inet}, Нужно ЦТВ: ${CTV},  Нужно КТВ: ${KTV},  Нужно ВН: ${VN},  Нужен Домофон: ${Domofon}`)
  }
  s7Next.onclick = function() {
    CloseDialogModal("s7")
    OpenDialogModal("s6")
    console.log("Назад")
  }
  s7_1Next.onclick = function() {
    CloseDialogModal("s7")
    
    NeedRouter = Number(document.getElementById("Router_Select").value)
    if (NeedRouter == 0) {
      console.log("Роутер не нужен")
      OpenDialogModal("s10")
    }
    if (NeedRouter == 1) {
      console.log("Роутер нужен под выкуп")
      OpenDialogModal("s8")
    }
    if (NeedRouter == 2) {
      console.log("Роутер нужен в рассрочку")
      OpenDialogModal("s9")
    }
  }
  s8Next.onclick = function() {
    CloseDialogModal("s8")
    OpenDialogModal("s7")
    console.log("Назад")
  }
  s8_1Next.onclick = function() {
    CloseDialogModal("s8")
    switch(PullServices[0]) {
      case "ЦТВ":
          console.log("Значение ЦТВ");
          PullServices.splice(0, 1);
          OpenDialogModal("s11")
          break;
      default:
          console.log("Массив пуст");
          OpenDialogModal("s14")
    }
    RouterFullPrice = document.getElementById("RouterFullPrice").value
    RouterCount = document.getElementById("RouterCount").value
    console.log("Стоимость роутера:", RouterFullPrice)
    console.log("Роутер в шт:", RouterCount)
  }
  s9Next.onclick = function() {
    CloseDialogModal("s9")
    OpenDialogModal("s7")
    console.log("Назад")
  }
  s9_1Next.onclick = function() {
    CloseDialogModal("s9")
    switch(PullServices[0]) {
      case "ЦТВ":
          console.log("Значение ЦТВ");
          PullServices.splice(0, 1);
          OpenDialogModal("s11")
          break;
      default:
          console.log("Массив пуст");
          OpenDialogModal("s14")
    }
    RouterRassrochka_Period = document.getElementById("RouterRassrochka_Period").value
    RouterRassrochka_Price = document.getElementById("RouterRassrochka_Price").value
    RouterCount = document.getElementById("RouterCount_R").value
    console.log("Роутер в шт:", RouterCount)
    console.log("Роутер в рассрочку на:", RouterRassrochka_Period)
    console.log("Стоимость роутера в мес:", RouterRassrochka_Price)
  }
  s10Next.onclick = function() {
    CloseDialogModal("s10")
    switch(PullServices[0]) {
      case "ЦТВ":
          console.log("Значение ЦТВ");
          PullServices.splice(0, 1);
          OpenDialogModal("s11")
          break;
      default:
          console.log("Массив пуст");
          OpenDialogModal("s14")
    }
    HasPersonalDomRuRouter = true
    console.log("Есть свой роутер от домика")
  }
  s10_1Next.onclick = function() {
    CloseDialogModal("s10")
    switch(PullServices[0]) {
      case "ЦТВ":
          console.log("Значение ЦТВ");
          PullServices.splice(0, 1);
          OpenDialogModal("s11")
          break;
      default:
          console.log("Массив пуст");
          OpenDialogModal("s14")
    }
    HasPersonalDomRuRouter = false
    console.log("Есть свой роутер с магазина")
  }
  
  //---

  s11Next.onclick = function() {
    CloseDialogModal("s11")
    OpenDialogModal("s6")
    console.log("Назад")
  }
  s11_1Next.onclick = function() {
    CloseDialogModal("s11")
    
    NeedPristavka = Number(document.getElementById("Pristavka_Select").value)
    if (NeedPristavka == 0) {
      console.log("Приставка не нужен")
      switch(PullServices[0]) {
        case "Интернет":
            console.log("Значение Интернет");
            PullServices.splice(0, 1);
            OpenDialogModal("s7")
            break;
        default:
            console.log("Массив пуст");
            OpenDialogModal("s14")
      }
    }
    if (NeedPristavka == 1) {
      console.log("Приставка нужен под выкуп")
      OpenDialogModal("s12")
    }
    if (NeedPristavka == 2) {
      console.log("Приставка нужен в рассрочку")
      OpenDialogModal("s13")
    }
  }
  s12Next.onclick = function() {
    CloseDialogModal("s12")
    OpenDialogModal("s11")
    console.log("Назад")
  }
  s12_1Next.onclick = function() {
    CloseDialogModal("s12")
    switch(PullServices[0]) {
      case "Интернет":
          console.log("Значение Интернет");
          PullServices.splice(0, 1);
          OpenDialogModal("s7")
          break;
      default:
          console.log("Массив пуст");
          OpenDialogModal("s14")
    }
    PristavkaFullPrice = document.getElementById("PristavkaFullPrice").value
    PristavkaCount = document.getElementById("PristavkaCount").value
    console.log("Стоимость приставки:", PristavkaFullPrice)
    console.log("Приставка в шт:", PristavkaCount)
  }
  s13Next.onclick = function() {
    CloseDialogModal("s13")
    OpenDialogModal("s11")
    console.log("Назад")
  }
  s13_1Next.onclick = function() {
    CloseDialogModal("s13")
    switch(PullServices[0]) {
      case "Интернет":
          console.log("Значение Интернет");
          PullServices.splice(0, 1);
          OpenDialogModal("s7")
          break;
      default:
          console.log("Массив пуст");
          OpenDialogModal("s14")
    }
    PristavkaRassrochka_Period = document.getElementById("PristavkaRassrochka_Period").value
    PristavkaRassrochka_Price = document.getElementById("PristavkaRassrochka_Price").value
    PristavkaCount = document.getElementById("PristavkaCount_R").value
    console.log("Приставка в шт:", PristavkaCount)
    console.log("Приставка в рассрочку на:", PristavkaRassrochka_Period)
    console.log("Стоимость приставки в мес:", PristavkaRassrochka_Price)
  }
  s14Next.onclick = function() {
    CloseDialogModal("s14")

    OpenDialogModal("s16")
  }
  s14_1Next.onclick = function() {
    CloseDialogModal("s14")
    OpenDialogModal("s15")
  }
  s14_2Next.onclick = function() {
    CloseDialogModal("s14")
    OpenDialogModal("s6")
  }
  s15Next.onclick = function() {
    CloseDialogModal("s15")
    OpenDialogModal("s14")
  }
  s15_1Next.onclick = function() {
    CloseDialogModal("s15")
    OpenDialogModal("s17")
    FullAP = document.getElementById("FullAP1").value
    console.log(`Полная стоимость: ${FullAP}`)
    TheFormation_Of_ItogComment()
  }
  s16Next.onclick = function() {
    CloseDialogModal("s16")
    OpenDialogModal("s14")
  }
  s16_1Next.onclick = function() {
    CloseDialogModal("s16")
    OpenDialogModal("s17")
    DiscountPeriod = document.getElementById("DiscountPeriod").value
    DiscountAP = document.getElementById("DiscountAP").value
    FullAP_OutDiscount = document.getElementById("FullAP").value
    console.log(`ТП со скидкой на ${DiscountPeriod} мес. по ${DiscountAP} руб, далее ${FullAP_OutDiscount} руб/мес`)
  }
  s17Next.onclick = function() {
    CloseDialogModal("s17")
    OpenDialogModal("s16")
  }
  s17_1Next.onclick = function() {
    TP_Name = document.getElementById("TP_Name").value
    TheFormation_Of_ItogComment()
    CloseDialogModal("s17")
    OpenDialogModal("s18")
  }
  s18Next.onclick = function() {
    CloseDialogModal("s18")
    OpenDialogModal("s17")
  }
  s18_1Next.onclick = function() {
    modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.querySelectorAll('[placeholder="Комментарий"]')[0].value = ItogComment
  }
}

//Нужно дописать финальное окно, сформировать итоговый коммент и настроить обратную совместимость с БТ

function TheFormation_Of_ItogComment(){
  if (isHome) {
    isHomeStr = ''
    switch(Number(NeedTerminal)) {
      case 0:
        console.log("Терминал не нужен");
        TerminalStr = `Терминал не нужен. `
        break;
      case 1:
        console.log("Терминал в покупку");
        TerminalStr = `Терминал нужен в полный выкуп за ${TerminalFullPrice}. `
        break;
      case 2:
        console.log("Терминал в рассрочку");
        TerminalStr = `Терминал нужен в рассрочку на ${TerminalRassrochka_Period} мес, за ${TerminalRassrochka_Price} руб/мес. `
        break;
      default:
        console.log("Чет не по христьянски.");
    }
  }
  else{isHomeStr = ``}

  ServicesStr = ``
  if(Inet && ServicesStr.length > 0) {ServicesStr += "+ Интернет "}
  else if (Inet && ServicesStr.length == 0) {ServicesStr += "Интернет" }
  
  if (CTV && ServicesStr.length > 0) {ServicesStr += "+ ЦТВ "}
  else if (CTV && ServicesStr.length == 0) {ServicesStr += "ЦТВ "}
  
  if (KTV && ServicesStr.length > 0) {ServicesStr += "+ КТВ "}
  else if (KTV && ServicesStr.length == 0) {ServicesStr += "КТВ "}
  
  if (VN && ServicesStr.length > 0) {ServicesStr += "+ ВН "}
  else if (VN && ServicesStr.length == 0) {ServicesStr += "ВН "}
  
  if (Domofon && ServicesStr.length > 0) {ServicesStr += "+ Домофон" }
  else if (Domofon && ServicesStr.length == 0) {ServicesStr += "Домофон "}

  console.log("NeedTerminal:", NeedTerminal)
  console.log("NeedRouter:", NeedRouter)
  console.log("NeedPristavka:", NeedPristavka)
  if (Inet) {
    switch(Number(NeedRouter)) {
      case 0:
        console.log("Роутер не нужен");
        RouterStr = `Роутер не нужен, `
        if (HasPersonalDomRuRouter) {RouterStr += `есть свой роутер от ДомРу. `}
        else{RouterStr += `есть свой роутер, настройка 300р. `; PriseOfConnection = Number(PriseOfConnection)+300}
        break;
      case 1:
        console.log("Роутер в покупку");
        RouterStr = `Роутер нужен в полный выкуп за ${RouterFullPrice}, ${RouterCount} шт. `
        break;
      case 2:
        console.log("Роутер в рассрочку");
        RouterStr = `Роутер нужен в рассрочку на ${RouterRassrochka_Period} мес, за ${RouterRassrochka_Price} руб/мес, ${RouterCount} шт. `
        break;
      default:
        console.log("Чет не по христьянски.");
    }
  }
  if (CTV) {
    switch(Number(NeedPristavka)) {
      case 0:
        console.log("Приставка не нужна");
        PristavkaStr = `Приставка не нужна, ТВ СМАРТ. `
        break;
      case 1:
        console.log("Приставка в нужна");
        PristavkaStr = `Приставка нужна в полный выкуп за ${PristavkaFullPrice}, ${PristavkaCount} шт. `
        break;
      case 2:
        console.log("Приставка в рассрочку");
        PristavkaStr = `Приставка нужна в рассрочку на ${PristavkaRassrochka_Period} мес, за ${PristavkaRassrochka_Price} руб/мес, ${PristavkaCount} шт. `
        break;
      default:
        console.log("Чет не по христьянски.");
    }
  }
  FirstPayment = Number(TerminalFullPrice)+Number(TerminalRassrochka_Price) + Number(RouterRassrochka_Price)*Number(RouterCount) + Number(RouterFullPrice)*Number(RouterCount) + Number(PristavkaRassrochka_Price)*Number(PristavkaCount) + Number(PristavkaFullPrice)*Number(PristavkaCount) + Number(DiscountAP)+Number(FullAP) + Number(PriseOfConnection);
  FirstPaymentStr = `Первоначальный платеж: ${FirstPayment} руб. `
  PriseOfConnectionStr = `Подключение ${PriseOfConnection} руб. `

  if (DiscountAP == '') {
    PriceStr = `${FullAP} руб/мес. ` 
  }
  else{
    PriceStr = `${DiscountAP} на ${DiscountPeriod}мес, далее ${FullAP_OutDiscount} руб/мес. `
  }

  if (PriceStr != ``) {PriceStr += `\n`}  
  if (TerminalStr != ``) {TerminalStr += `\n`} 
  if (RouterStr != ``) {RouterStr += `\n`}
  if (PristavkaStr != ``) {PristavkaStr += `\n`}

  ItogComment = `ТП ${TP_Name} (${ServicesStr}) за ${PriceStr}${TerminalStr}${RouterStr}${PristavkaStr}${PriseOfConnectionStr} ${FirstPaymentStr}`

  document.getElementsByClassName("CopyText")[0].innerText = ItogComment
  console.log(ItogComment)



}

function Check_ChengeofServices(){
  var Select1 = document.getElementById("Yslygi_Select_1")
  var Select2 = document.getElementById("Yslygi_Select_2")
  var Select3 = document.getElementById("Yslygi_Select_3")
  var Select4 = document.getElementById("Yslygi_Select_4")
  var Select5 = document.getElementById("Yslygi_Select_5")

  var Select_block1 = document.getElementsByClassName("Yslygi_block")[0]
  var Select_block2 = document.getElementsByClassName("Yslygi_block")[1]
  var Select_block3 = document.getElementsByClassName("Yslygi_block")[2]
  var Select_block4 = document.getElementsByClassName("Yslygi_block")[3]
  var Select_block5 = document.getElementsByClassName("Yslygi_block")[4]

  if (Select1.value != 0) {
    Select_block2.style.display = 'flex'
  }
  else{
    Select_block2.style.display = 'none'
  }
  if (Select2.value != 0) {
    Select_block3.style.display = 'flex'
  }
  else{
    Select_block3.style.display = 'none'
  }
  if (Select3.value != 0) {
    Select_block4.style.display = 'flex'
  }
  else{
    Select_block4.style.display = 'none'
  }
  if (Select4.value != 0) {
    Select_block5.style.display = 'flex'
  }
  else{
    Select_block5.style.display = 'none'
  }
}

function sendMessageToBackground(){
  /*
  //блок тестов
  Inet = true; CTV = true; KTV = true; VN = false; Domofon = false;
  FIO = "Тестов Тест Тестович"
  Adress = "Такая-то"
  House = "12"
  kv = "1"
  Phone = '79233024909'
  City = 'Красноярск'
  ItogComment = 'Развлекательный та та ата та'
  FullAP = '750'
  RouterCount = 1
  PristavkaCount = 2
  DogID = "1234567890"
  */

  ServicesARR = [Inet, CTV, KTV, VN, Domofon]
  CopyJSON.Services = [Inet, CTV, KTV, VN, Domofon]

  for (var i = 4; i >= 0; i--) {
    if (!ServicesARR[i]) {
      ServicesARR.splice(i, 1);
      console.log("Удалил", i, "Теперь: ", ServicesARR)
    }
  }
  if (CTV && KTV) {ServicesARR.splice(0, 1);}

  CopyJSON.AbName = FIO
  CopyJSON.Adress = `ул. ${Adress}, д. ${House}, кв. ${kv}`
  CopyJSON.Phone = Phone
  CopyJSON.City = City
  CopyJSON.ServicesCount = ServicesARR.length
  CopyJSON.privider = 'DomRu'
  CopyJSON.Comment = ItogComment
  if (FullAP != '') { CopyJSON.FullAP = FullAP }
  else{ CopyJSON.FullAP = FullAP_OutDiscount }
  CopyJSON.RouterCount = RouterCount
  CopyJSON.PristavkaCount = PristavkaCount
  CopyJSON.id = DogID

  // Отправка сообщения в фоновый скрипт
  chrome.runtime.sendMessage({ action: "sendData1", data: CopyJSON });
  console.log("отправил данные в BG:", CopyJSON)
}