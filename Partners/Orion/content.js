var number;
var nameval;
var Hide_SendCode_Button = true;
var Citys = ["красноярск", "иркутск", "абакан", "канск", "братск", "черногорск", "минусинск", "железногорск", "зеленогорск", "саяногорск", "новокузнецк", "киселевск", "прокопьевск"]


window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "Orion",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            console.log(request, sender, sendResponse);
            console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'Orion') {
                if (request.Message=='true') {
                    setTimeout(InStart(), 5000);
                    setTimeout(FindPaste(), 1000);
                    setInterval(CheckComment, 1000);
                    setInterval(Find_SendCode_Button, 1000);
                }
                if (request.Message=='false') {
                  console.log(request.Message);
                }
            }
        }
    );
})

function Find_SendCode_Button(){
  try{
    console.log(Hide_SendCode_Button)
    document.getElementById("Show_SendCode_Button").onclick = function(){
      console.log('ТЫК')
      if (prompt('Ваш код доступа: ', '') == 'R_B') {
        Hide_SendCode_Button = false;
      }
    }
    if (Hide_SendCode_Button) {
      document.getElementById('sendcodebut').style.display = 'none'
    }
    else{
      document.getElementById('sendcodebut').style.display = 'inline-block'
    }
  }
  catch(e){

  }
}


function InStart(){
  try{
    console.log("Получил, делаю =)");
    var link = document.querySelector("link[rel~='icon']");

    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);

    var img = document.querySelector("img[src~='/sales_mobile/favicon-96x96.png']");
    img.src = 'https://static.tildacdn.com/tild3363-6434-4135-a233-393231333432/___.png';
    ExitText = document.getElementsByClassName("navbar-text")[0];
    ExitText.innerHTML += '<a href="http://sales.krk.ru/" style="margin-left: 10px; color: white;">Выбор Региона</a>';
    ExitText.innerHTML += '<a id="Show_SendCode_Button" style="margin-left: 30px;color: white;cursor: pointer;float: right;">Заказать код</a>';
    formGroup = document.getElementsByTagName("label")[0];
    formGroup.innerHTML += '<div id="tooltip"><img src="https://cdn3.iconfinder.com/data/icons/pix-glyph-set/50/520769-paper_pin-1024.png" style=" height: 8%; position: absolute; filter: grayscale(1) brightness(1000%); right: 5%; "><span style="text-align: center">ВАЖНО!!!</span><br><br> <span>КОММЕНТАРИЙ ДОЛЖЕН ВЫГЛЯДЕТЬ СЛЕДУЮЩИМ ОБРАЗОМ:</span><br><br><span>"Улица, дом, квартира.   Необходимое оборудование(Роутер, Приставка, Домофон) и Стоимость подключения"</span><br><br><span>Тарифный план и Город указывать ЗАПРЕЩЕНО!!</span></div>';
    comment.setAttribute('placeholder','Улица, дом, квартира. Стоимость подключения + (Роутер, Приставка, Домофон)');

    document.getElementsByTagName("label")[0].innerHTML += '<span class="tooltiptext1">Записываем в порядке: сначала фамилия, потом имя, потом отчество (при наличии).</span>'
    document.getElementsByTagName("label")[1].innerHTML += '<span class="tooltiptext1" style=" top: 100px; ">Контактный номер вписываем с восьмерки, без пробелов и тире.</span>'
    document.getElementsByTagName("label")[2].innerHTML += '<span class="tooltiptext1" style=" top: 180px; ">Контактный номер вписываем со второй цифры, без пробелов и тире. Во второй строке только имя контактного лица.</span>'
    document.getElementsByTagName("label")[3].innerHTML += '<span class="tooltiptext1" style=" top: 325px; ">Выбираем тариф, который продали.</span>'
    document.getElementsByTagName("label")[4].innerHTML += '<span class="tooltiptext1" style=" top: 385px; ">Выбираем «Активная продажа».</span>'
    document.getElementsByTagName("label")[5].innerHTML += '<span class="tooltiptext1" style=" top: 460px; ">Заполняется автоматически.</span>'
    document.getElementsByTagName("label")[6].innerHTML += '<span class="tooltiptext1" style=" top: 530px; ">Всегда выбираем «Из другого города - первое подключение».</span>'
  
    
  }
  catch(e){
    console.log(e)
  }
  
}


function FindPaste(){
  try{
  const formGroup = document.getElementsByClassName("form-group")[12];
  console.log(formGroup);

  formGroup.innerHTML += '<a style="border-radius: 4px;padding: 9px;color: white;border: 1px solid;text-decoration: none;cursor: pointer;background-image: linear-gradient(to bottom,#2aafff 0,#008ef1 100%);background-repeat: repeat-x;border-color: #3e8f3e;" id="PasteButton">Вставить</a>';
  formGroup.innerHTML += '<h2 id="MyErrorText" style=" display: inline-block; margin: 0; margin-left: 3%; font-size: 16px; color: red; "></h2>'
  formGroup.innerHTML += '<img style="display:none" src="https://detskiy-sad.com/wp-content/uploads/2021/12/plakaty-ng-elka4.png" style="position: fixed;height: 20%; bottom: 10%;   left: 5%;">';
  
  document.getElementById("PasteButton").addEventListener("click", e => {
    navigator.clipboard.readText()
    .then(text => {
      console.log(text);
      var json = JSON.parse(text);
      console.log(json);
      fio = document.getElementById("fio")
      contacts = document.querySelector('[name="contacts"]')
      phone = document.getElementById("phone")
      nameInput = document.getElementById('name')
      comment = document.getElementById("comment")


      

      replaseNumber(json.PhoneNumber);
      replaseName(json.fio);
      replaseAdress(json.Adress)
      console.log(nameInput);

      fio.value = json.fio;
      contacts.value = number;
      
      if(document.getElementsByClassName("navbar-text")[0].innerText == 'Daily KRK Sales MobileВыбор Региона\nЗаказать код') {
        comment.value = json.Adress + ' Подключение 315 руб. ' + json.OtherInfo;
      }
      else if(document.getElementsByClassName("navbar-text")[0].innerText == 'Daily ABK Sales MobileВыбор Региона\nЗаказать код') {
        comment.value = json.Adress + ' Подключение 100 руб. ' + json.OtherInfo;
      }
      else if(document.getElementsByClassName("navbar-text")[0].innerText == 'Daily KRK Sales Mobile') {
        comment.value = json.Adress + ' Подключение 315 руб. ' + json.OtherInfo;
      }
      else if(document.getElementsByClassName("navbar-text")[0].innerText == 'Daily ABK Sales Mobile') {
        comment.value = json.Adress + ' Подключение 100 руб. ' + json.OtherInfo;
      }
      else {
        comment.value = json.Adress + ' Подключение Бесплатно ' + json.OtherInfo;
      }
      phone.value = number.slice(1);
      nameInput.value = nameval;
      //phone.click();
      SetStyles();
      //selectElement('known-from-sources', 'printable_commercial');
      


    })
    .catch(err => {
      // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
      console.log('Something went wrong', err);
    });

  });
  }
  catch(e){
    console.log(e)
  }
  

}

function replaseNumber(num){
  console.log(number);
  console.log(num);

  number = num.replace(/[-+()\s]/g, '');
  console.log(number);
  console.log(num);
}

function replaseName(nam){
  
  nameval = nam.split(' ')[1];

  console.log(nameval);
  console.log(nam);
}
function replaseAdress(adr){
  
  adressVal = adr.replace('г', ' ');
  adr = adr.replace('д', '');
  adr = adr.replace('кв', '');
  adr = adr.replace('ул', '');
  adr = adr.replace('-', ' ');
  adr = adr.replace('Г', '');
  adr = adr.replace('УЛ', '');
  adr = adr.replace('Д', '');
  adr = adr.replace('КВ', '');
  adr = adr.replace('Город', '');
  adr = adr.replace('Дом', '');
  adr = adr.replace('Квартира', '');
  adressVal = adr.replace('.', '');

  console.log(adressVal);
  console.log(adr);
}
function SetStyles(){
  Inputs = document.getElementsByClassName("select2-selection--single");
  console.log(Inputs);
  for (var i = 0; i <= Inputs.length; i++) {
    console.log(i);
    Inputs[i].style.borderColor = "red";
  }

}
function selectElement(id, valueToSelect) {    
  console.log(id, valueToSelect);
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

function CheckComment(){
  comment = document.getElementById("comment")
  MyErrorTextEl = document.getElementById("MyErrorText")

  for (var i = 0; i <= Citys.length; i++) {
    if (comment.value.toLowerCase().indexOf("прокопьевск") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("киселевск") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("киселевск") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("новокузнецк") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("саяногорск") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("зеленогорск") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("железногорск") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("минусинск") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("черногорск") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("братск") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("канск") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("абакан") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("иркутск") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }
    else if (comment.value.toLowerCase().indexOf("красноярск") >= 0) {
      console.log("Ошибка в комментарии, указан Город!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, указан Город!"
    }

    else if (comment.value.toLowerCase().indexOf("моно") >= 0) {
      console.log("Ошибка в комментарии, Моно!");
      MyErrorTextEl.innerHTML = "Ошибка в комментарии, Моно!"
    }
    else if (comment.value.toLowerCase().indexOf("инет") >= 0) {
        console.log("Ошибка в комментарии, Инет!");
        MyErrorTextEl.innerHTML = "Ошибка в комментарии, Инет!"
    }
    else if (comment.value.toLowerCase().indexOf("интернет") >= 0) {
        console.log("Ошибка в комментарии, Интернет!");
        MyErrorTextEl.innerHTML = "Ошибка в комментарии, Интернет!"
    }
    else if (comment.value.toLowerCase().indexOf("пакет") >= 0) {
        console.log("Ошибка в комментарии, Пакет!");
        MyErrorTextEl.innerHTML = "Ошибка в комментарии, Пакет!"
    }
    else if (comment.value.toLowerCase().indexOf("orion") >= 0) {
        console.log("Ошибка в комментарии, Orion!");
        MyErrorTextEl.innerHTML = "Ошибка в комментарии, Orion"
    }
    else if (comment.value.toLowerCase().indexOf("express") >= 0) {
        console.log("Ошибка в комментарии, Express!");
        MyErrorTextEl.innerHTML = "Ошибка в комментарии, Express!"
    }
    else{
      console.log("Чисто");
      MyErrorTextEl.innerHTML = ""
    }
  }
  
  


}


  


/*
fio
contacts (Полный номер)
phone (номер без 7)
name (Имя)
comment (Адрес) + Оборудование 
*/