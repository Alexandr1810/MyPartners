var ItogPrice;
var Price = document.getElementsByClassName('ui-btn-primary');
var Head = document.querySelectorAll('head');
var names = null
var DelLids = 0
var NedozLids = 0
var hideSpam = true
var hideNedozvons = false
var TodayTime = null
var CurrentHour = null
var AllNumbers = []
var AllFirlds = []
var ApiNames = null

fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/Kanban_Names', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
  ApiNames = tasks;
}).catch(error => {
  // handle error
})

var NumbersReshifrator = {
          SpeedInet: "9039236742",
          PerSet: "9039248205",
          DomRu: "9039246531",
          DomRu1: "9039229204",
          DomRu2: "9039225026",
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
    ItogPrice = parseInt(item.innerHTML.replace('&nbsp;','').replace('&nbsp;','').replace(' руб.',''))*0.145
    ItogPrice = Math.round(ItogPrice);
    ItogPrice = ItogPrice.toLocaleString();
    console.log(ItogPrice);

    Price1[i].innerHTML += '<span class="crm-kanban-total-price-total2">'+'≈'+ItogPrice+' руб.'+'</span>';

  }
  setInterval(SetPriceIntrval, 6000);
}

function SetPriceIntrval(){
  try{
    var Price = document.getElementsByClassName('crm-kanban-total-price-total');
    console.log(Price);

    var Price2 = document.getElementsByClassName('crm-kanban-total-price-total2');
    for (var i = 0; i < Price.length; ++i) {
          var item = Price[i];  
          ItogPrice = parseInt(item.innerHTML.replace('&nbsp;','').replace('&nbsp;','').replace(' руб.',''))*0.145
          ItogPrice = Math.round(ItogPrice);
          ItogPrice = ItogPrice.toLocaleString();
          console.log(ItogPrice);
          if (Price2[i] != undefined) {
            Price2[i].innerText = '≈'+ItogPrice+' руб.';
          }
          else{
            var Price1 = document.getElementsByClassName('crm-kanban-total-price');
            console.log(Price1)
            if (Price1[i].innerHTML.indexOf('crm-kanban-total-price-total2') < 0) {
              Price1[i].innerHTML += '<span class="crm-kanban-total-price-total2">'+'≈'+ItogPrice+' руб.'+'</span>';
            }
            
          }

    }
  }
  catch(e){
    console.log(e)
    console.log("Страница еще не загружена");
  }
}


function InStart(){
  try{
    var Tester = document.getElementsByClassName('crm-kanban-total-price-total');
    GetPrice();
    if (document.getElementsByClassName("main-kanban-column-title-info")[0].innerHTML.indexOf("Спам") < 0) {
      document.getElementsByClassName("main-kanban-column-title-info")[0].innerHTML += '<div class="main-kanban-column-title-spam-inner" id="spamText">Спам</div><div style="margin-left: 3%;" class="main-kanban-column-title-spam-inner" id="NedovonText">Недозвоны</div>';
      AddListener_In_Head();
    }
    if (document.getElementsByClassName("ui-toolbar-right-buttons")[0].innerHTML.indexOf("Изменение имени в Битрикс24") < 0) {
      document.getElementsByClassName("ui-toolbar-right-buttons")[0].innerHTML += `<div id="EditName_Block"><a style="font-size: 25px;" href="#openModal">🖋</a></div>  
      <div id="openModal" class="modal"> 
        <div class="modal-dialog"> 
          <div class="modal-content"> 
          <div class="modal-body">
            <div class="EditBlock">
            <a href="#close" title="Close" class="close">×</a> 
            <div class="EditBlockHeader">
              <h1 class="EditBlockkHeaderText">Изменение имени в Битрикс24</h1>
            </div>
            <div class="EditBlockContent">
              <h1 class="EditBlockContentText" style="margin-top: 5%;">Оригинальное Имя</h1>
              <input class="EditBlockContentInput" placeholder="Никита Колганов" id="OriginalName" type="text">
              <h1 class="EditBlockContentText">Новое Имя</h1>
              <input class="EditBlockContentInput" placeholder="Отец" id="NewName" type="text">
              <button class="EditBlockContentButton">Добавить</button>
              <div id="CreateAlert">Имя Добавленно</div>
              <div id="ResetAlert">Имя Измененно</div>
              <div id="NullAlert">Данные не внесены</div>
              <div id="ErrorAlert">Неизвестная ошибка</div>
            </div>
          </div>
        </div> 
      </div> 
      </div> </div>`;
    }
   document.addEventListener("DOMContentLoaded", function () {
      var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
      console.log(scrollbar);
      document.querySelector('[href="#openModal"]').addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
      });
      document.querySelector('[href="#close"]').addEventListener('click', function () {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
      });
    });
    document.getElementsByClassName("EditBlockContentButton")[0].onclick = SetName;
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
    var NamesInApiCol = 0
    
    //console.log(iframe);
    
    var ButtonCollage = iDocument.getElementsByClassName("ui-entity-editor-header-title")[0];
    const iframeHead = iDocument.querySelectorAll("head")[0];
    //console.log(ButtonCollage);

    iDocumentName = iDocument.getElementsByClassName('crm-widget-employee-name')[0];
      NamesInApiCol = 0;
      for (var j = 0; j < ApiNames.length; j++) {
        if (iDocumentName.innerHTML == ApiNames[j].OldName) {
          iDocumentName.innerHTML = ApiNames[j].NewName;


          if (iDocumentName.innerHTML == "Чертова Рыжая Бестия") {
            iDocumentName.setAttribute('style', 'background: linear-gradient(90deg, #1e1d1d 3%, #e10000 10%, #b38500 26%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Татьяна Бабич!") {
            iDocumentName.setAttribute('style', 'background: linear-gradient(90deg, #902aff 0%, #5d29d2 7%, #2932ad 25%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "MAXIMU$") {
            iDocumentName.setAttribute('style', 'background: linear-gradient(90deg, #d3881e 13%, #c89321 43%, #d27d27 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Татьяна Платонова") {
            iDocumentName.setAttribute('style', 'background: linear-gradient(90deg, #d28c00 9%, #d24754 64%, #e55715 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Рыжая Сука") {
            iDocumentName.setAttribute('style', 'background: linear-gradient(90deg, #2d2de3 3%, #0065e1 13%, #0033b3 8%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }

        }

      }


    if (ButtonCollage.innerHTML.indexOf("Скопировать") < 0) {
      iframeHead.innerHTML += "<style>#CopyButton{border-bottom:1px dashed #2067b0;margin-left:10px}#CopyButton:hover{border-bottom:1px dashed #eef2f4; cursor: pointer;}.crm-widget-employee-name{font-weight: 500;}</style>"
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

      if (Columns[i].innerHTML == "Недозвоны" && document.getElementById("user-name").innerText == "Марк Плющ") {
        Columns[i].innerHTML = "Мусорка"
      }
    }
  }
  catch {
  }
  //console.log("Работаю", NewCards.length)
  for (var i = 0; i <= (NewCards.length-1); i++) { // Проверка карточек на спам, дубли и перенесенных из недозвонов
    //console.log("Новый Цикл")
     
    if (NewCards[i].innerHTML.indexOf("Номер") < 0 && Columns[0].innerHTML == "Новая" || NewCards[i].innerHTML.indexOf("INSIDE") >= 0 || NewCards[i].innerHTML.indexOf("MUQUARI") >= 0 || NewCards[i].innerHTML.indexOf("MUQARI") >= 0 || NewCards[i].innerHTML.indexOf("jenay") >= 0 || NewCards[i].innerHTML.indexOf("Заявка на расчет для частного дома") >= 0 || NewCards[i].innerHTML.indexOf("TIGLACK") >= 0) {
        console.log("Найдена пустая завка ", i)
        if (hideSpam) {
          NewCards[i].style.display = "none";
        }
        else{
          NewCards[i].style.display = "block";
        }
        DelLids++;
    }
    if (NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сегодня") >= 0){
      TodayTime = NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.replace("сегодня, ", "")
      TodayTime = TodayTime.split(':')[0]
      TodayTime = Number(TodayTime)
      var date = new Date();
      CurrentHour = date.getHours()
      //console.log("TodayTime: ", TodayTime, "\n", "CurrentHour: ", CurrentHour)
    }

    if (NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сегодня") >= 0 && CurrentHour-TodayTime >= 3 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("вчера") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("ноябр") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("декабр") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("январ") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("феврал") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("март") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("апрел") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("мая") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("июня") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("июля") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("август") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сентяб") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("октяб") >= 0 && Columns[0].innerHTML == "Новая") {
        if (hideNedozvons) {
          NewCards[i].style.display = "none";
        }
        else{
          NewCards[i].style.display = "block";
          NewCards[i].getElementsByClassName("crm-kanban-item")[0].setAttribute('style', '--crm-kanban-item-color: rgb(164 0 240 / 70%);');
        }
        
        NedozLids++;
    }

    if (NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сегодня") >= 0 && CurrentHour-TodayTime >= 1 && CurrentHour-TodayTime <= 2) {
        NewCards[i].getElementsByClassName("crm-kanban-item")[0].setAttribute('style', '--crm-kanban-item-color: rgb(240 0 0 / 70%);');
    }
    if (i == (NewCards.length-1)) {
      document.getElementsByClassName("main-kanban-column-title-spam-inner")[0].innerText = 'Спам (' + DelLids + ')';

      DelLids = 0;
    }
    try{
      if (i == (NewCards.length-1)) {
        document.getElementsByClassName("main-kanban-column-title-spam-inner")[1].innerText = 'Недозвоны (' + NedozLids + ')';
        console.log('NedozLids: ', NedozLids)
        NedozLids = 0;
      }
    }
    catch{
      
    }


  }

  for (var i = 0; i <= (AllCards.length-1); i++){
    getNumberFromCard(AllCards[i])
    //console.log("Промежуточний срез по массиву: ");

    if (AllCards[i].innerHTML.indexOf("Билайн АТС") >= 0){
      for (var j = 0; j < AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value').length; j++){
        if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.indexOf("Билайн АТС") >= 0) {
          //AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '')
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.SpeedInet) {
            console.log("Входящий SpeedInet");
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
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.DomRu2) {

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
  //console.log("Отправляю в функцию: ", AllNumbers)
  FoundDublicate(AllFields, AllNumbers)
  
  AllNumbers.length=0
  AllFirlds.length=0



  for (var i = 0; i <= (names.length-1); i++) { //Смена имени
    //Новый Код
    for (var j = 0; j < ApiNames.length; j++) {
      if (names[i].innerHTML == ApiNames[j].OldName && names[i].parentNode.innerHTML.indexOf("Это имя видят только пользователи") < 0) {
        names[i].innerHTML = ApiNames[j].NewName;

        var div = document.createElement('div');
        div.style.background = '#ebebeb';
        div.style.height = '104px';
        div.style.padding = '5px';
        div.style.borderRadius = '4px';
        div.style.color = '#3e444a';
        div.id = 'CustomDiv';

        var span = document.createElement('span');
        span.style.whiteSpace = 'normal';

        span.textContent = 'Это имя видят только пользователи расширения MyPartners. Что бы кастомизировать свое имя нажмите на кисточку справа от строки поиска.';
        div.appendChild(span);
        names[i].parentNode.appendChild(div);
        if (names[i].innerHTML == "Чертова Рыжая Бестия") {
          names[i].setAttribute('style', 'background: linear-gradient(90deg, #1e1d1d 13%, #e10000 67%, #b38500 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
        }
        if (names[i].innerHTML == "Татьяна Бабич!") {
          names[i].setAttribute('style', 'background: linear-gradient(90deg, #902aff 9%, #5d29d2 64%, #2932ad 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
        }
        if (names[i].innerHTML == "MAXIMU$") {
          names[i].setAttribute('style', 'background: linear-gradient(90deg, #d3881e 13%, #c89321 43%, #d27d27 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
        }
        if (names[i].innerHTML == "Татьяна Платонова") {
          names[i].setAttribute('style', 'background: linear-gradient(90deg, #d28c00 9%, #d24754 64%, #e55715 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
        }
        if (names[i].innerHTML == "Рыжая Сука") {
          names[i].setAttribute('style', 'background: linear-gradient(90deg, #2d2de3 13%, #0065e1 67%, #0033b3 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
        }

        //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';
      }

    }

  }
  
}

function getNumberFromCard(card){
  //console.log(card);
 
  AllFields = card.getElementsByClassName("crm-kanban-item-fields-item")

  for (var i = 0; i < AllFields.length; i++) {
    try{
      if (AllFields[i].getElementsByClassName("crm-kanban-item-fields-item-title")[0].innerHTML.indexOf("Номер") >= 0) {

        numberText = AllFields[i].getElementsByClassName("field-item")
        //console.log(numberText[0].innerText)
        AllFirlds.push(numberText[0])
        AllNumbers.push(numberText[0].innerText)
      }
    }
    catch(e){
      console.log(e)
    }
  }
  
}

function FoundDublicate(elements, numbers){ 
  //console.log("Пришло в функцию: ", numbers)
  for (var i = 0; i < numbers.length; i++) {

    //numbers[i] = numbers[i].replace(/[-+()\s]/g, ''); //Приводим все номера к одному виду
    numbers[i] = numbers[i].replace(' dublicate', '');
  }
  const findDuplicates = numbers => numbers.filter((item, index) => numbers.indexOf(item) !== index)
  const duplicates = findDuplicates(numbers);
  

  //console.log("Дубли: ", duplicates); 

  for (var i = 0; i < AllFirlds.length; i++) {// Чет не пашет(( 
    //console.log("Хуй1")
    for (var j = 0; j < duplicates.length; j++) {
      //console.log("Хуй2")
      if (AllFirlds[i] != undefined) {
        if (AllFirlds[i].innerText == duplicates[j] && document.body.innerHTML.indexOf('main-kanban-item-disabled') < 0) {
          //console.log("Выявлен дубль!! ", AllFirlds[i]);
          if (AllFirlds[i].innerHTML.indexOf('dublicate')<0) {
            AllFirlds[i].innerHTML += '<span style="color: #f23e53"> dublicate</span>'
          }
        }
      }
      /*else{
        
        if (AllFirlds[i].innerHTML.indexOf('dublicate')>=0) {
          console.log("Фейковый Дубль", AllFirlds[i])
          AllFirlds[i].innerHTML = AllFirlds[i].innerHTML.replace('dublicate','')
        }
      }*/
    }
    
  }


}

function SetName(){
      var IsReset = false;
      var ResetId = null
      var OldName = document.getElementById("OriginalName").value;
      var NewName = document.getElementById("NewName").value;
      if (OldName != '' && NewName != '') {
        fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/Kanban_Names', {
          method: 'GET',
          headers: {'content-type':'application/json'},
        }).then(res => {
          if (res.ok) {
              return res.json();
          }
          // handle error
        }).then(tasks => {
          console.log("OldName: ", OldName)
          console.log("NewName: ", NewName)
          console.log("tasks: ", tasks)
          for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].OldName == OldName) {
              IsReset = true
              ResetId = tasks[i].id
            }

          }
          if (IsReset) {
            console.log("Изменить текущее")

            ResetName(ResetId, OldName, NewName)
            document.getElementById("ResetAlert").style.display = "block";
            setTimeout(function(){
              document.getElementById("ResetAlert").style.display = "none";
            }, 2000);
          }
          else {
            console.log("Дабавить новое")
            CreateName(OldName, NewName)
            document.getElementById("CreateAlert").style.display = "block";
            setTimeout(function(){
              document.getElementById("CreateAlert").style.display = "none";
            }, 2000);
          }
        }).catch(error => {
          document.getElementById("ErrorAlert").style.display = "block";
          setTimeout(function(){
            document.getElementById("ErrorAlert").style.display = "none";
          }, 2000);
        })
      }
      else{
        document.getElementById("NullAlert").style.display = "block";
          setTimeout(function(){
            document.getElementById("NullAlert").style.display = "none";
          }, 2000);
      }
    }
    function ResetName(id, old, newN){
      fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/Kanban_Names/'+id, {
        method: 'PUT', // or PATCH
        headers: {'content-type':'application/json'},
        body: JSON.stringify({OldName: old, NewName: newN})
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        console.log(task)
      }).catch(error => {
        // handle error
      })
    }
    function CreateName(old, newN){
      const newTask = {
        OldName: old,
        NewName: newN,
      };

      fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/Kanban_Names/', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(newTask)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        // do something with the new task
      }).catch(error => {
        // handle error
      })
    }
function AddListener_In_Head(){
    document.getElementById('spamText').addEventListener('click', function (event) {
        console.log("Spam");
        if (hideSpam) {
          hideSpam = false;
          document.getElementById('spamText').style.borderBottom = "2px solid #737373";
        }
        else{
          hideSpam = true;
          document.getElementById('spamText').style.borderBottom = "none";
        }
    });
    document.getElementById('NedovonText').addEventListener('click', function (event) {
        console.log("Nedovon");
        if (hideNedozvons) {
          hideNedozvons = false;
          document.getElementById('NedovonText').style.borderBottom = "2px solid #737373";
        }
        else{
          hideNedozvons = true;
          document.getElementById('NedovonText').style.borderBottom = "none";
        }
    });
}