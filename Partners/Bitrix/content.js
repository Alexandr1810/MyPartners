var ItogPrice;
var Price = document.getElementsByClassName('ui-btn-primary');
var Head = document.querySelectorAll('head');
var names = null
var DelLids = 0
var isDel = true
var TodayTime = null
var CurrentHour = null
var AllNumber = []

var NumbersReshifrator = {
          SpeedInet: "9039236742",
          PerSet: "9039248205",
          DomRu: "9039246531",
          DomRu1: "9039229204",
          SibSet: "9039225814",
          SibSet1: "9607578786",
          SibSet2: "9039218114",
          Eg: "9039226723",
          Eg1: "9039246596",
          Axioma: "9039229408",
          Axioma1: "9039232482",
          Orion: "9039235604",
          Orion1: "9039235872",
          NorCom: "9039244964",
          NorCom1: "9039245042",
          Telecoma: "9039244932",
          Telecoma1: "9039244822",
          TwoCom: "9039248291",
          AiZet: "9039246317",
          CheTel: "9039865632",
          NowTel: "9039865679",
          YarKom: "9039865874",
          YfaNet: "9039218756",
          Centra: "9039224301",
          Etel: "9039224301",
          SmartNet: "9039247531"
      }


console.log(Head[0]);

var ItemsArr = {
          fio: "null",
          City: "null",
          Adress: "null",
          PhoneNumber: "null",
          Tarif: "null",
          OtherInfo: "null"
      }



window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "Bitrix",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            console.log(request, sender, sendResponse);
            console.log(request.Recipient, request.Recipient, request.Message, request.BigCard);
            if (request.Recipient == 'Bitrix') {
                if (request.Message=='true') {
                    
                    Head[0].innerHTML += "<style>.crm-kanban-total-price-total2{width:100%;overflow:hidden;display:inline-block;font-size:26px;white-space:nowrap;-ms-text-overflow:ellipsis;text-overflow:ellipsis;padding:0 10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;color:white}.crm-kanban-total-price:hover .crm-kanban-total-price-total2{display:inline-block}.crm-kanban-total-price:hover .crm-kanban-total-price-total{display:none} #CopyButton{border-bottom: 1px dashed #2067b0 !important; margin-right: 10px !important;}</style>"
     
                    setTimeout(InStart, 6000);
                    setInterval(SetNames, 500);
                    let CardCheck = setInterval(UpdateCard, 1000)
                    
                }
                if (request.Message=='false') {

                }
            }
        }
    );

    
})


function GetPrice(){
  var Price = document.getElementsByClassName('crm-kanban-total-price-total');
  var Price1 = document.getElementsByClassName('crm-kanban-total-price');
  for (var i = 0; i < Price.length; ++i) {
    var item = Price[i];  
    ItogPrice = parseInt(item.innerHTML.replace('&nbsp;','').replace('&nbsp;','').replace(' руб.',''))*0.154
    ItogPrice = Math.round(ItogPrice);
    ItogPrice = ItogPrice.toLocaleString();
    console.log(ItogPrice);

    Price1[i].innerHTML += '<span class="crm-kanban-total-price-total2">'+'≈'+ItogPrice+' руб.'+'</span>';

  }
  setInterval(SetPriceIntrval, 16000);
}

function SetPriceIntrval(){
  try{
    var Price = document.getElementsByClassName('crm-kanban-total-price-total');
    var Price2 = document.getElementsByClassName('crm-kanban-total-price-total2');
    for (var i = 0; i < Price.length; ++i) {
          var item = Price[i];  
          ItogPrice = parseInt(item.innerHTML.replace('&nbsp;','').replace('&nbsp;','').replace(' руб.',''))*0.154
          ItogPrice = Math.round(ItogPrice);
          ItogPrice = ItogPrice.toLocaleString();
          console.log(ItogPrice);
            
          Price2[i].innerText = '≈'+ItogPrice+' руб.';

    }
  }
  catch{
    console.log("Страница еще не загружена");
  }
}


function InStart(){
  try{
    var Tester = document.getElementsByClassName('crm-kanban-total-price-total');
    GetPrice();
    if (document.getElementsByClassName("main-kanban-column-title-info")[0].innerHTML.indexOf("Спам") < 0) {
      document.getElementsByClassName("main-kanban-column-title-info")[0].innerHTML += '<div class="main-kanban-column-title-spam-inner">Спам</div>';
    }
  }
  catch{
    console.log("Страница еще не загружена");
    setTimeout(InStart, 6000);
  }
}



function UpdateCard(){
  
  try {
    const iframe = document.getElementsByClassName("side-panel-iframe")[0];
    const iWindow = iframe.contentWindow;
    const iDocument = iWindow.document;
    
    //console.log(iframe);
    
    var ButtonCollage = iDocument.getElementsByClassName("ui-entity-editor-header-title")[0];
    const iframeHead = iDocument.querySelectorAll("head")[0];
    //console.log(ButtonCollage);

    if (ButtonCollage.innerHTML.indexOf("Скопировать") < 0) {
      iframeHead.innerHTML += "<style>#CopyButton{border-bottom:1px dashed #2067b0;margin-left:10px}#CopyButton:hover{border-bottom:1px dashed #eef2f4; cursor: pointer;}</style>"
      ButtonCollage.innerHTML += '<a id="CopyButton">Скопировать</a><a style="margin-left: 10px;color: white;background-color: rgb(63, 205, 74);padding: 3px;border-radius: 9px;font-weight: 600;display: none;" id="newAlert">Успешно скопированно!</a><a style="margin-left: 10px;color: white;background-color: rgb(205 63 63);padding: 3px;border-radius: 9px;font-weight: 600;display: none;" id="newAlertError">Ошибка при Копировании!</a><a style="float: right; vertical-align: middle; border: 1px solid #eaeaea; border-radius: 10px; cursor: pointer;" id="CodyIcon"><img src="https://www.kody.su/favicon.ico" style="vertical-align: middle; height: 17px; border: medium none; padding: 4px;"></a><div class="Cody"></div>';
      CopyButtonText = iDocument.getElementById("CopyButton");
      newAlert = iDocument.getElementById("newAlert");
      newAlertError = iDocument.getElementById("newAlertError");
      iDocument.getElementsByClassName('ui-entity-editor-block-title-text')[9].innerHTML = "Комментарий (Для Партнерки)";




      iDocument.querySelector("#CopyButton").addEventListener("click", e => {
            //alert("Clicked!");
            var SaveButton = iDocument.getElementsByClassName('ui-btn-success')[1];
            console.log(SaveButton);
            SaveButton.click();
            setTimeout(function(){
            try {
              var fio_block = iDocument.getElementsByClassName("ui-entity-editor-content-block")[2];
              console.log("fioblock: ", fio_block);

              var fioPredText = fio_block.childNodes[2].childNodes[1].childNodes[1].innerText;
              console.log("fioPredText: ", fioPredText);
            }
            catch {
              var fioPredText = "Не заполнено";
            }

            try {
              var city_block = iDocument.getElementsByClassName("ui-entity-editor-content-block")[6];
              console.log("cityblock: ", city_block);

              var cityPredText = city_block.childNodes[2].childNodes[1].childNodes[1].innerText;
              console.log("cityPredText: ", cityPredText);
            }
            catch {
              var cityPredText = "Не заполнено";
            }
            try {
              var adress_block = iDocument.getElementsByClassName("ui-entity-editor-content-block")[8];
              console.log("adressblock: ", adress_block);

              var adressPredText = adress_block.childNodes[2].childNodes[1].childNodes[1].innerText;
              console.log("adressPredText: ", adressPredText);
            }
            catch {
              var adressPredText = "Не заполнено";
            }
            try {
              var PhoneNumber_block = iDocument.getElementsByClassName("ui-entity-editor-content-block")[10];
              console.log("PhoneNumberblock: ", PhoneNumber_block);

              var PhoneNumberPredText = PhoneNumber_block.childNodes[2].childNodes[1].childNodes[1].innerText;
              console.log("PhoneNumberPredText: ", PhoneNumberPredText);
            }
            catch {
              var PhoneNumberPredText = "Не заполнено";
            }

            try {
              var tarif_block = iDocument.getElementsByClassName("ui-entity-editor-content-block")[14];
              console.log("tarifblock: ", tarif_block);

              var tarifPredText = tarif_block.childNodes[2].childNodes[1].childNodes[1].innerText;
              console.log("tarifPredText: ", tarifPredText);
            }
            catch {
              var tarifPredText = "Не заполнено";
            }

            try {
              var koment_block = iDocument.getElementsByClassName("ui-entity-editor-content-block")[18];
              console.log("komentblock: ", koment_block);
              console.log("komentPredPredblock: ", koment_block.childNodes[2].childNodes[1]);
              var komentPredText = koment_block.childNodes[2].childNodes[0].childNodes[0].innerText;
              console.log("komentPredText: ", komentPredText);
            }
            catch {
              var komentPredText = "Не заполнено";
            }

            ItemsArr.fio = fioPredText;
            ItemsArr.City = cityPredText;
            ItemsArr.Adress = adressPredText;
            ItemsArr.PhoneNumber = PhoneNumberPredText;
            ItemsArr.Tarif = tarifPredText;
            ItemsArr.OtherInfo = komentPredText;

            console.log(ItemsArr);

            navigator.clipboard.writeText(JSON.stringify(ItemsArr))
            .then(() => {
              console.log('Получилось');
              
              if (ItemsArr.fio == "Не заполнено") {
                newAlertError.style.display = 'inline-block';
                setTimeout(AddAlertError, 3000);
              }
              else{
                newAlert.style.display = 'inline-block';
                setTimeout(AddAlert, 3000);
              }

              
            }) 
            .catch(err => {
              console.log('Something went wrong', err);
              newAlertError.style.display = 'inline-block';
              setTimeout(newAlertError, 3000);
            });
          }, 2000);
            //const editButton = iDocument.getElementsByClassName("ui-entity-editor-header-edit-lnk")[0];
            //editButton.click();
        });
    }
    
    
  } catch (e) {
    //console.log("Нет открытой карты");
    //console.log(e);
  }
}

function AddAlert(){
  newAlert.style.display = 'none';
}
function AddAlertError(){
  newAlertError.style.display = 'none';
}

function SetNames(){
  NewCards = document.getElementsByClassName('main-kanban-column-items')[0].getElementsByClassName('main-kanban-item');
  AllCards = document.getElementsByClassName('main-kanban-item');
  names = document.getElementsByClassName("crm-kanban-item-fields-item-value-name")
  Columns = document.getElementsByClassName("main-kanban-column-title-text-inner")

  if (document.getElementById("user-name").innerText == "Александр Шатохин") {
      document.getElementById("user-name").innerText = "Рыжая Бестия";
      document.getElementById("user-name").setAttribute('style', 'font-size: 15px; font-weight: 700; background: linear-gradient(90deg, #ff4b4b 13%, #ff0000 43%, #f88e38 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
  }
  if (document.getElementById("user-name").innerText == "Илья Пчельников") {
      document.getElementById("user-name").innerText = "Этиловый Бес";
      document.getElementById("user-name").setAttribute('style', 'font-size: 15px; font-weight: 700; background: linear-gradient(90deg, #d3881e 13%, #c89321 43%, #d27d27 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
  }
  if (document.getElementById("user-name").innerText == "Павел Обухов") {
      document.getElementById("user-name").innerText = "Павел Андреевич";
      //document.getElementById("user-name").setAttribute('style', 'background: linear-gradient(90deg, #ff4b4b 13%, #ff0000 43%, #f88e38 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
  }
  try{
    for (var i = 0; i <= Columns.length; i++) {
      if (Columns[i].innerHTML == "Недозвоны" && document.getElementById("user-name").innerText == "Рыжая Бестия") {
        Columns[i].innerHTML = "Мусорка"
      }
      if (Columns[i].innerHTML == "Недозвоны" && document.getElementById("user-name").innerText == "Павел Андреевич") {
        Columns[i].innerHTML = "Мусорка"
      }
      if (Columns[i].innerHTML == "Недозвоны" && document.getElementById("user-name").innerText == "Этиловый Бес") {
        Columns[i].innerHTML = "Мусорка"
      }
      if (Columns[i].innerHTML == "Недозвоны" && document.getElementById("user-name").innerText == "Марк Плющ") {
        Columns[i].innerHTML = "Мусорка"
      }
    }
  }
  catch {
  }
  //console.log("Работаю", NewCards.length)
  for (var i = 0; i <= (NewCards.length-1); i++) { // Проверка карточек на спам и перенесенных из недозвонов
     
    if (NewCards[i].innerHTML.indexOf("Номер") < 0 && Columns[0].innerHTML == "Новая" || NewCards[i].innerHTML.indexOf("INSIDE") >= 0 || NewCards[i].innerHTML.indexOf("MUQUARI") >= 0 || NewCards[i].innerHTML.indexOf("MUQARI") >= 0) {
        console.log("Найдена пустая завка ", i)
        NewCards[i].parentNode.removeChild(NewCards[i]);
        DelLids++;
    }
    if (i == (NewCards.length-1) && isDel) {
      
      document.getElementsByClassName("main-kanban-column-title-spam-inner")[0].innerText = 'Спам (' + DelLids + ')';
      console.log('DelLids: ', DelLids)
      DelLids = 0;
      isDel = false;
      console.log('DelLids: ', DelLids)
    }

    if (NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сегодня") >= 0){
      TodayTime = NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.replace("сегодня, ", "")
      TodayTime = TodayTime.split(':')[0]
      TodayTime = Number(TodayTime)
      var date = new Date();
      CurrentHour = date.getHours()
      console.log("TodayTime: ", TodayTime, "\n", "CurrentHour: ", CurrentHour)
    }

    if (NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сегодня") >= 0 && CurrentHour-TodayTime >= 3 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("вчера") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("ноябр") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("декабр") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("январ") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("феврал") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("март") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("апрел") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("мая") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("июня") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("июля") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("август") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сентяб") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("октяб") >= 0 && Columns[0].innerHTML == "Новая") {
        //console.log("Найдена заявка из недозвонов ", i)
        //console.log(NewCards[i].getElementsByClassName('main-kanban-item')[0].getElementsByClassName("crm-kanban-item-date")[0])
        NewCards[i].getElementsByClassName("crm-kanban-item")[0].setAttribute('style', '--crm-kanban-item-color: rgb(242 28 75 / 70%);');

    }
  }

  for (var i = 0; i <= (AllCards.length-1); i++){
    //getNumberFromCard(AllCards[i])

    if (AllCards[i].innerHTML.indexOf("Билайн АТС") >= 0){
      for (var j = 0; j < AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value').length; j++){
        if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.indexOf("Билайн АТС") >= 0) {
          //AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '')
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.SpeedInet) {
            //console.log("Входящий SpeedInet", AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j]);
            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий SpeedInet";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.PerSet) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Первые Сети";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.DomRu) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий ДомРу";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.DomRu1) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий ДомРу";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.SibSet) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий СибСети";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.SibSet1) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий СибСети";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.SibSet2) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий СибСети";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.Eg) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Электронный Город";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.Eg1) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Электронный Город";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.Axioma) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Аксиома";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.Axioma1) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Аксиома";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.Orion) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Орион";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.Orion1) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Орион";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.NorCom) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий НорКом";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.NorCom1) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий НорКом";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.Telecoma) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Телекома";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.Telecoma1) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Телекома";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.TwoCom) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий 2КОМ";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.AiZet) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий АйЗет";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.CheTel) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Череповец Телеком";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.NowTel) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Новгород Телеком";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.YarKom) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий ЯрКом";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.YfaNet) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий УфаНет";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.Centra) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Центра";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.Etel) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Е-Телеком";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.SmartNet) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий SmartNet";
          }

        }
      }
      //NewCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[0]
    }
  }

  for (var i = 0; i <= (names.length-1); i++) {
    if (names[i].innerHTML == "Павел Обухов") {
      names[i].innerHTML = "Павел мать его Андреевич!";

      var div = document.createElement('div');
      div.style.background = '#ebebeb';
      div.style.height = '104px';
      div.style.padding = '5px';
      div.style.borderRadius = '4px';
      div.style.color = '#3e444a';
      div.id = 'CustomDiv';

      var span = document.createElement('span');
      span.style.whiteSpace = 'normal';
      span.textContent = 'Это имя видят только пользователи расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику';
      span.innerHTML +='<br><a href="https://t.me/Rothaarige_Bestia" target="_blank">@Rothaarige_Bestia</a>'
      div.appendChild(span);
      names[i].parentNode.appendChild(div);

      //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';
    }
    if (names[i].innerHTML == "Александр Шатохин") {
      names[i].innerHTML = "Чертова Рыжая Бестия";
      names[i].setAttribute('style', 'background: linear-gradient(90deg, #1e1d1d 13%, #e10000 67%, #b38500 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');

      var div = document.createElement('div');
      div.style.background = '#ebebeb';
      div.style.height = '104px';
      div.style.padding = '5px';
      div.style.borderRadius = '4px';
      div.style.color = '#3e444a';
      div.id = 'CustomDiv';

      var span = document.createElement('span');
      span.style.whiteSpace = 'normal';
      span.textContent = 'Это имя видят только пользователи расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику';
      span.innerHTML +='<br><a href="https://t.me/Rothaarige_Bestia" target="_blank">@Rothaarige_Bestia</a>'
      div.appendChild(span);
      names[i].parentNode.appendChild(div);

      //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';
    }
    if (names[i].innerHTML == "Татьяна Бабич") {
      names[i].innerHTML = "Татьяна Бабич!";
      names[i].setAttribute('style', 'background: linear-gradient(90deg, #902aff 9%, #5d29d2 64%, #2932ad 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');

      var div = document.createElement('div');
      div.style.background = '#ebebeb';
      div.style.height = '104px';
      div.style.padding = '5px';
      div.style.borderRadius = '4px';
      div.style.color = '#3e444a';
      div.id = 'CustomDiv';

      var span = document.createElement('span');
      span.style.whiteSpace = 'normal';
      span.textContent = 'Это имя видят только пользователи расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику';
      span.innerHTML +='<br><a href="https://t.me/Rothaarige_Bestia" target="_blank">@Rothaarige_Bestia</a>'
      div.appendChild(span);
      names[i].parentNode.appendChild(div);

      //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';
    }
    if (names[i].innerHTML == "Дмитрий Полховский") {
      names[i].innerHTML = "Новое обращение";

      var div = document.createElement('div');
      div.style.background = '#ebebeb';
      div.style.height = '104px';
      div.style.padding = '5px';
      div.style.borderRadius = '4px';
      div.style.color = '#3e444a';
      div.id = 'CustomDiv';

      var span = document.createElement('span');
      span.style.whiteSpace = 'normal';
      span.textContent = 'Это имя видят только пользователи расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику';
      span.innerHTML +='<br><a href="https://t.me/Rothaarige_Bestia" target="_blank">@Rothaarige_Bestia</a>'
      div.appendChild(span);
      names[i].parentNode.appendChild(div);

      //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';
    }
    if (names[i].innerHTML == "Тест Сайтов") {
      names[i].innerHTML = "Новое обращение";

      var div = document.createElement('div');
      div.style.background = '#ebebeb';
      div.style.height = '104px';
      div.style.padding = '5px';
      div.style.borderRadius = '4px';
      div.style.color = '#3e444a';
      div.id = 'CustomDiv';

      var span = document.createElement('span');
      span.style.whiteSpace = 'normal';
      span.textContent = 'Это имя видят только пользователи расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику';
      span.innerHTML +='<br><a href="https://t.me/Rothaarige_Bestia" target="_blank">@Rothaarige_Bestia</a>'
      div.appendChild(span);
      names[i].parentNode.appendChild(div);

      //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';
    }
    if (names[i].innerHTML == "Никита Колганов") {
      names[i].innerHTML = "Отец";
      //names[i].setAttribute('style', 'background: linear-gradient(90deg, #d000dd 31%, #005ae1 30%, #32a800 76%, #d11a1a 34%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');

      var div = document.createElement('div');
      div.style.background = '#ebebeb';
      div.style.height = '104px';
      div.style.padding = '5px';
      div.style.borderRadius = '4px';
      div.style.color = '#3e444a';
      div.id = 'CustomDiv';

      var span = document.createElement('span');
      span.style.whiteSpace = 'normal';
      span.textContent = 'Это имя видят только пользователи расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику';
      span.innerHTML +='<br><a href="https://t.me/Rothaarige_Bestia" target="_blank">@Rothaarige_Bestia</a>'
      div.appendChild(span);
      names[i].parentNode.appendChild(div);

      //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';
    }
    if (names[i].innerHTML == "Марк Плющ") {
      names[i].innerHTML = "Марковка🥕";

      var div = document.createElement('div');
      div.style.background = '#ebebeb';
      div.style.height = '104px';
      div.style.padding = '5px';
      div.style.borderRadius = '4px';
      div.style.color = '#3e444a';
      div.id = 'CustomDiv';

      var span = document.createElement('span');
      span.style.whiteSpace = 'normal';
      span.textContent = 'Это имя видят только пользователи расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику';
      span.innerHTML +='<br><a href="https://t.me/Rothaarige_Bestia" target="_blank">@Rothaarige_Bestia</a>'
      div.appendChild(span);
      names[i].parentNode.appendChild(div);

      //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';
    }
    if (names[i].innerHTML == "Максим Шатных") {
      names[i].innerHTML = "MAXIMU$";

      var div = document.createElement('div');
      div.style.background = '#ebebeb';
      div.style.height = '104px';
      div.style.padding = '5px';
      div.style.borderRadius = '4px';
      div.style.color = '#3e444a';
      div.id = 'CustomDiv';

      var span = document.createElement('span');
      span.style.whiteSpace = 'normal';
      span.textContent = 'Это имя видят только пользователи расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику';
      span.innerHTML +='<br><a href="https://t.me/Rothaarige_Bestia" target="_blank">@Rothaarige_Bestia</a>'
      div.appendChild(span);
      names[i].parentNode.appendChild(div);

      //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';
    }
    if (names[i].innerHTML == "Даниил Плотников") {
      names[i].innerHTML = "Даня оператор Жесткий";

      var div = document.createElement('div');
      div.style.background = '#ebebeb';
      div.style.height = '104px';
      div.style.padding = '5px';
      div.style.borderRadius = '4px';
      div.style.color = '#3e444a';
      div.id = 'CustomDiv';

      var span = document.createElement('span');
      span.style.whiteSpace = 'normal';
      span.textContent = 'Это имя видят только пользователи расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику';
      span.innerHTML +='<br><a href="https://t.me/Rothaarige_Bestia" target="_blank">@Rothaarige_Bestia</a>'
      div.appendChild(span);
      names[i].parentNode.appendChild(div);

      //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';
    }
    if (names[i].innerHTML == "Илья Пчельников") {
      names[i].innerHTML = "Этиловый Бес";
      names[i].setAttribute('style', 'background: linear-gradient(90deg, #d3881e 13%, #c89321 43%, #d27d27 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');


      var div = document.createElement('div');
      div.style.background = '#ebebeb';
      div.style.height = '104px';
      div.style.padding = '5px';
      div.style.borderRadius = '4px';
      div.style.color = '#3e444a';
      div.id = 'CustomDiv';

      var span = document.createElement('span');
      span.style.whiteSpace = 'normal';
      span.textContent = 'Это имя видят только пользователи расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику';
      span.innerHTML +='<br><a href="https://t.me/Rothaarige_Bestia" target="_blank">@Rothaarige_Bestia</a>'
      div.appendChild(span);
      names[i].parentNode.appendChild(div);

      //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';
    }
    if (names[i].innerHTML == "Елена Зайцева") {
      names[i].innerHTML = "Елена Зайцева.net";

      var div = document.createElement('div');
      div.style.background = '#ebebeb';
      div.style.height = '104px';
      div.style.padding = '5px';
      div.style.borderRadius = '4px';
      div.style.color = '#3e444a';
      div.id = 'CustomDiv';

      var span = document.createElement('span');
      span.style.whiteSpace = 'normal';
      span.textContent = 'Это имя видят только пользователи расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику';
      span.innerHTML +='<br><a href="https://t.me/Rothaarige_Bestia" target="_blank">@Rothaarige_Bestia</a>'
      div.appendChild(span);
      names[i].parentNode.appendChild(div);

      //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';
    }

  }
  
}

function getNumberFromCard(card){
  console.log(card);
  var AllFirlds = card.getElementsByClassName("crm-kanban-item-fields-item")
  for (var i = 0; i <= AllFirlds.length; i++) {
    if (AllFirlds[i].getElementsByClassName("crm-kanban-item-fields-item-title").innerHTML.indexOf("Номер") >= 0) {
      numberText = AllFirlds[i].getElementsByClassName("field-item")
      console.log(numberText)
    }
  }
}

