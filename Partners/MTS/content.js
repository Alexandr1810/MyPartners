var number = null;
var nameval = null;

var AbSername = null;
var AbName = null;
var AbPatronymic = null;

var FullAP = 0 
var FIO = ``
var OborudkaPull = []
var InnerSim = false
var PromoPeriod = ''
var PromoAP = ''
var TP_Type = ''
var Phone = ''
var id = ''
var adress = ''
var ItogComment = ''

var CopyJSON = {
 AbName: '',
 Adress: '',
 Phone: '',
 City: '',
 ServicesCount: '',
 privider: '',
 Comment: '',
 FullAP: '',
 ObodudkaCount: '',
 id: ''
}
window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "MTS",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            console.log(request, sender, sendResponse);
            console.log(request.Recipient, request.Recipient, request.Message);
            if (request.Recipient == 'MTS') {
                if (request.Message=='true') {
                    setTimeout(InStart(), 5000);
                    setInterval(FindPaste, 1000)

                    var found;
                    var found1;
                    var Isfound = false;


                }
                if (request.Message=='false') {
                  console.log(request.Message);
                }
            }
        }
    );

    
})


function FindPaste(){
  if (findElementByText("h4", "Доступные слоты") != undefined) {
    if (findElementByText("h4", "Доступные слоты").parentNode.innerHTML.indexOf("Вставить") < 0) {
        findElementByText("h4", "Доступные слоты").style.display = 'inline-block'
        findElementByText("h4", "Доступные слоты").parentNode.innerHTML += '<span id="pasteButt" class="FillComment">Вставить</span>'

        document.getElementById("pasteButt").onclick = function() {
          getData()
          navigator.clipboard.readText()
          .then(text => {
            console.log(text);
            var json = JSON.parse(text);
            const event = new Event('input', { bubbles: true });
            inputSername = document.querySelector('[placeholder="Фамилия"]');
            inputName = document.querySelector('[placeholder="Имя"]');
            inputPatronymic = document.querySelector('[placeholder="Отчество"]');
            inputPhone = document.querySelector('[placeholder="+7 (Контактный номер)"]')

            inputSername.value = json.fio.split(" ")[0]
            inputSername.dispatchEvent(event);
            inputName.value = json.fio.split(" ")[1]
            inputName.dispatchEvent(event);
            inputPatronymic.value = json.fio.split(" ")[2]
            inputPatronymic.dispatchEvent(event);
            ReplacedNum = replaseNumber(json.PhoneNumber)
            ReplacedNum = (ReplacedNum[0] === '7' || ReplacedNum[0] === '8') ? ReplacedNum.slice(1) : ReplacedNum
            inputPhone.value = ReplacedNum;
            inputPhone.dispatchEvent(event);

          })
          .catch(err => {
            // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
            console.log('Something went wrong', err);
          });
          
        } 
    }
  }
  if (findElementByText("h2", "УРА! Удалось оформить еще одну заявку") != undefined) {
    if (id != document.querySelector('[data-testid="order-result-id"]').innerText) {
      id = document.querySelector('[data-testid="order-result-id"]').innerText
      getData()
    }
  }
}
function getData(){
  Phone = document.querySelector('[placeholder="+7 (Контактный номер)"]').value
  Adress = document.querySelector('[placeholder="Введите адрес"]').value

  for (let index = 0; index < document.querySelectorAll('[placeholder="Цена"]').length; index++) {
    FullAP += Number(document.querySelectorAll('[placeholder="Цена"]')[index].value)
  }
  FIO = `${document.querySelector('[placeholder="Фамилия"]').value} ${document.querySelector('[placeholder="Имя"]').value} ${document.querySelector('[placeholder="Отчество"]').value}`
  TPName = document.querySelector('[placeholder="Укажите название тарифа"]').value
  if (document.querySelectorAll('[data-testid="order-comment-calculator-promo-period"]').length > 0) {
    PromoPeriod = document.querySelector('[placeholder="Период"]').value
    PromoAP = document.querySelector('[placeholder="Цена по акции"]').value
  }
  innerIndex = -1;
  for (let index = 0; index < document.querySelectorAll('[data-testid="order-comment-added-equip-name"]').length; index++) {
    if(document.querySelectorAll('[data-testid="order-comment-added-equip-name"]')[index].innerText.indexOf("Роутер") >= 0 || document.querySelectorAll('[data-testid="order-comment-added-equip-name"]')[index].innerText.indexOf("ТВ-оборудование") >= 0){
      if (innerIndex+1 == index) {
        innerIndex = index
      }
      else{
        innerIndex = index-1
      }
      console.log(`innerIndex: ${innerIndex} index: ${index} OborudkaPull: ${OborudkaPull}`)
      OborudkaPull.push([])
      OborudkaPull[innerIndex].push(document.querySelectorAll('[data-testid="order-comment-added-equip-name"]')[index].innerText)
      OborudkaPull[innerIndex].push(findClass("OrderCommentAddedList_addedEquipment__selectUsage")[innerIndex].value)
      OborudkaPull[innerIndex].push(document.querySelectorAll('[data-testid="order-comment-added-price-input"]')[index].value)
      if (document.querySelectorAll('[data-testid="order-comment-added-equip-name"]')[index].parentNode.parentNode.parentNode.innerText.indexOf("шт")>=0) {
        OborudkaPull[innerIndex].push("1 шт.")
      }
      else{
        OborudkaPull[innerIndex].push(document.querySelectorAll('[data-testid="order-comment-added-equip-name"]')[index].parentNode.parentNode.parentNode.querySelectorAll('input[data-testid="select-show"]')[1].value)
      }
    }
    else if(document.querySelectorAll('[data-testid="order-comment-added-equip-name"]')[index].innerText.indexOf("Новая SIM") >= 0){
      InnerSim = true
    }
  }
  console.log(`ФИО Абонента: ${FIO}
  Название ТП: ${TPName};
  Полная АП: ${FullAP};
  Оборудка: ${OborudkaPull};
  Включена сим: ${InnerSim};
  Цена по Акции: ${PromoAP}
  Промо-период: ${PromoPeriod}
  `)

  if (TPName == "Тариф №3") {
    CopyJSON.ServicesCount = 1
    TP_Type = 'Моно'
  }
  else{
    CopyJSON.ServicesCount = 3
    TP_Type = 'КВГ'
  }

  if (PromoPeriod == '') {
    ItogComment = `${TP_Type} ${TPName} ${FullAP}руб/мес `
  }
  else{
    ItogComment = `${TP_Type} ${TPName} ${PromoAP}руб/${PromoPeriod} далее ${FullAP}руб/мес; `
  }

  if (OborudkaPull.length > 0) {
    for (var i = 0; i < OborudkaPull.length; i++) {
      ItogComment += `${OborudkaPull[i][0]} ${OborudkaPull[i][1]} за ${OborudkaPull[i][2]}, ${OborudkaPull[i][3]}; `
    }
  }
  const array = [
    ["ТВ-оборудование (Дополнительное)", "Продажа", "5000", "1 шт."],
    ["Роутер", "Рассрочка 36 мес.", "100", "1 шт."],
    ["Роутер", "Рассрочка 12 мес.", "295", "1 шт."],
    ["ТВ-оборудование", "Рассрочка 24 мес.", "250", "1 шт."]
  ];

  const filteredElements = array.filter(OborudkaPull => 
      OborudkaPull.includes("Рассрочка 24 мес.") || OborudkaPull.includes("Рассрочка 12 мес.") || OborudkaPull.includes("Продажа")
  );

  const ObodudkaCount = filteredElements.length;

  CopyJSON.AbName = FIO
  CopyJSON.Adress = Adress
  CopyJSON.Phone = Phone
  CopyJSON.privider = 'MTS'
  CopyJSON.Comment = ItogComment
  CopyJSON.FullAP = FullAP 
  CopyJSON.ObodudkaCount = ObodudkaCount
  CopyJSON.id = id

  FullAP = 0 
  FIO = ``
  OborudkaPull = []
  InnerSim = false
  PromoPeriod = ''
  PromoAP = ''
  TP_Type = ''
  Phone = ''
  City = ''
  adress = ''
  ItogComment = ''


  // Отправка сообщения в фоновый скрипт
  chrome.runtime.sendMessage({ action: "sendData1", data: CopyJSON });
  console.log("отправил данные в BG:", CopyJSON)
}
function findClass(partialClass) {
    return Array.from(document.querySelectorAll(`[class*="${partialClass}"]`));
}
function InStart(){
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
      
  }
  link.href = 'https://sun9-75.userapi.com/s/v1/if2/4-_9vy2biZB1OE9KZlKihxrwvPY0NIrwRD7covbamWIaYUFRkrc8FmR69SpVIywoDI3Xie2BrCEYuvswhoZq_-9q.jpg?size=1280x1280&quality=96&type=album';
}

function replaseNumber(num){
  //console.log(number);
  //console.log(num);

  number1 = num.replace(/[-+()\s]/g, ''); //Удаляет все непонятные символы
  number2 = (number1[0] === '7' || number1[0] === '8') ? number1.slice(1) : number1 // Удаляем первый символ (7 или 8)
  number3 = number2.slice(0,-7); // Первые 3 символа, например 923
  number4 = number2.slice(3,6); //Следующие 3 цифры, например 302
  number5 = number2.slice(6,8); //Следующие 2 цифры, например 49
  number6 = number2.slice(8,10); //Следующие 2 цифры, например 09

  number = '+7('+number3+')'+number4+'-'+number5+'-'+number6
  return number
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
function rep_findElementsByText(tag, text) {
    const elements = document.getElementsByTagName(tag); // Получаем все элементы div
    var elem;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].textContent.includes(text)) { // Проверяем наличие текста
            elem = elements[i]; // Возвращаем найденный элемент
        }
    }
    elem.innerText = elem.innerText.replace("шт.", "шт")

    return elem
}