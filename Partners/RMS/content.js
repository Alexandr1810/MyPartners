var number = null;
var nameval = null;

var AbName = null;
var AbSername = null;
var AbPatronymic = null;
var isAdmin;
var isAdmin1 = false;


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
                    setInterval(FindPaste, 1000)
                }
                if (request.Message=='false') {
                  console.log(request.Message);
                }
            }
        }
    );

    
})

function FindPaste(){
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
        console.log(document.querySelectorAll('div')[index])
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
      document.getElementById('AlertBlock').style.display = 'none'
      isAdmin1 = false;
    }
  }

  //console.log("FirstPage: ",FirstPage)
  //console.log("SecondPage: ",SecondPage)
  console.log("FourPage: ",FourPage)
  console.log("formGroup: ",formGroup)
  try{
    const FirstPage = document.querySelector('[placeholder="Комментарий"]');
    if (FirstPage != null && formGroup.innerHTML.indexOf("Вставить") < 0) {
      console.log(formGroup);
      formGroup.innerHTML += '<a id="PasteButton1" style="border-radius: 5px;padding: 7px;font-size: 17px;text-align: center;width: 100px;height: 40px;color: #2a3032;text-decoration: none;cursor: pointer;font-weight: 600;border: 2px solid #696b6e;background-color: #f5f8fb;position: relative;top: 10px;right: -72%;">Вставить</a>';
    }
  }
  catch(e){
    console.log(e);
  }
  try{
    const SecondPage = document.querySelector('[placeholder="Доступные рекламные акции"]');
    if (SecondPage != null && formGroup.innerHTML.indexOf("Заполнить") < 0){
      document.getElementById("PasteButton1").style.display = 'none';
    }
    
  }
  catch(e){
    console.log(e);
  }
  try{
    const ThirdPage = document.querySelector('[placeholder="Фамилия"]');
    if (ThirdPage != null && formGroup.innerHTML.indexOf("Заполнить") < 0){
      formGroup.innerHTML += '<a id="PasteButton2" style="border-radius: 5px;padding: 7px;font-size: 17px;text-align: center;width: 100px;height: 40px;color: #2a3032;text-decoration: none;cursor: pointer;font-weight: 600;border: 2px solid #696b6e;background-color: #f5f8fb;position: relative;top: 10px;right: -72%;">Заполнить</a>';
      //document.getElementById("PasteButton2").style.display = none;
    }
  }
  catch(e){
    console.log(e);
  }
  try{
    for (var i = 0; i < aTags.length; i++) {
      if (aTags[i].textContent == searchText) {
        found = aTags[i];
        break;
      }
    }
    if (found != undefined){
      //formGroup.innerHTML += '<a id="PasteButton2" style="border-radius: 5px;padding: 7px;font-size: 17px;text-align: center;width: 100px;height: 40px;color: #2a3032;text-decoration: none;cursor: pointer;font-weight: 600;border: 2px solid #696b6e;background-color: #f5f8fb;position: relative;top: 10px;right: -72%;">Вставить</a>';
      document.getElementById("PasteButton2").style.display = 'none';
    }
  }
  catch(e){
    console.log(e);
  }

  document.getElementById("PasteButton1").addEventListener("click", e => {
    navigator.clipboard.readText()
    .then(text => {
      //console.log(text);
      var json = JSON.parse(text);
      //console.log(json);

      
      document.querySelector('[placeholder="Комментарий"]').innerHTML = json.OtherInfo;



    })
    .catch(err => {
      // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
      //console.log('Something went wrong', err);
    });

  });
  document.getElementById("PasteButton2").addEventListener("click", e => {
    navigator.clipboard.readText()
    .then(text => {
      //console.log(text);
      var json = JSON.parse(text);
      //console.log(json);

      replaseName(json.fio)
      replaseNumber(json.PhoneNumber)
      
      const event = new Event('input', { bubbles: true });
      

      inputSername = document.querySelector('[placeholder="Фамилия"]');
      inputSername.value = AbSername;
      inputName = document.querySelector('[placeholder="Имя"]');
      inputName.value = AbName;
      inputPatronymic = document.querySelector('[placeholder="Отчество"]');
      inputPatronymic.value = AbPatronymic;
      inputnumber = document.querySelector('[placeholder="Телефон"]');
      inputnumber.value = '8'+number.slice(1);
      
      inputSername.dispatchEvent(event);
      inputName.dispatchEvent(event);
      inputPatronymic.dispatchEvent(event);
      inputnumber.dispatchEvent(event);
      //document.querySelector('[placeholder="Фамилия"]').value = AbSername;
      //document.querySelector('[placeholder="Имя"]').value = AbName;
      //document.querySelector('[placeholder="Отчество"]').value = AbPatronymic;
      //document.querySelector('[placeholder="Телефон"]').value = '8'+number.slice(1);;



    })
    .catch(err => {
      // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
      //console.log('Something went wrong', err);
    });

  });
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

function replaseNumber(num){
  //console.log(number);
  //console.log(num);

  number = num.replace(/[-+()\s]/g, '');
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