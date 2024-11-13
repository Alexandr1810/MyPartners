console.log("Новый скрипт работает!")

var EmptySiteListOn = false
var NewDeal_SiteListOn = false
var FounderOn = false
var TimerOn = false
var DealId = 0
var TimeInCard = 0
var UserIsAgent = false
var DealList = []

var currentUnix = Math.round(new Date().getTime()/1000.0)

var FounderInterval = setInterval(Founder, 1000)
var TimerInterval = setInterval(Timer, 1000)

window.addEventListener('load', function () { 
  if(localStorage.getItem("DealList") == null || localStorage.getItem("DealList") == 'null'){
    console.log("Новый пользователь")
    localStorage.setItem("DealList", JSON.stringify([]));
  }
  //Проверка того, является ли пользователь менежджером
  UserCkeck()
})

function LinkCheck(){
  //Если зашел на страницу со делкой
  if (window.location.href.indexOf("deal/details/") >= 0) {
    if (!TimerOn) {
      NewDeal_SiteList()
    }
  }
  //Если не открыта сделка
  else{
    if (!FounderOn) {
      EmptySiteList()
    }
  }
}
//Сценарий открытия главной страницы
async function EmptySiteList(){
  console.log("Открыта главная")
  
  FounderOn = true
  TimerOn = false

  DealList = JSON.parse(localStorage.getItem("DealList"));

  console.log(`Новый список: ${DealList}`)

  for (var i = 0; i < DealList.length; i++) {
    if (DealList[i][0] != 0) {
      await SaveData_InCard(DealList[i][0], DealList[i][1])
    }
  }
  DealList = []

  localStorage.setItem("DealList", JSON.stringify(DealList))

  

}
//Сценарий открытия страницы заявки
function NewDeal_SiteList(){
  console.log("Открыта сделка")

  DealId = window.location.href.split('/').slice(-2)[0]
  DealList = JSON.parse(localStorage.getItem("DealList"))

  DealList = EditDealList(DealId, DealList)

  console.log(`Новый список: ${DealList}`)

  localStorage.setItem("DealList", JSON.stringify(DealList))

  TimerOn = true
}
//Скрипт поиска открытой сделки
function Founder(){
  if (FounderOn) {
    //Если нашел сделку
    if (window.location.href.indexOf("deal/details/") >= 0){
      FounderOn = false

      NewDeal_SiteList()
    }
  }
}
//Скрипт счетчика времени в карте
function Timer(){
  if (TimerOn) {
    DealList = JSON.parse(localStorage.getItem("DealList"))
    if (DealList[0][0] == DealId) {
      currentUnix = Math.round(new Date().getTime()/1000.0)
      DealList[0][1] += 1
      DealList[0][2] = currentUnix

      localStorage.setItem("DealList", JSON.stringify(DealList))
    }
  }
}
async function SaveData_InCard(DealId_fSave, timeInCard_fSave){
  const GetData_FromDeal = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/10.0.0'
    },
    body: '{"ID":"'+DealId_fSave+'"}'
  };

  await fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.get', GetData_FromDeal)
    .then(response => response.json())
    .then(response => {
      console.log(`Данные по сделке ${DealId_fSave}: ${response.result}`)

      DateCreate = response.result.DATE_CREATE
      All_TimeInCard = response.result.UF_CRM_1729759510208
      FirstDay_TimeInCard = response.result.UF_CRM_1729775051707
      DateIsToday = isSameDayAndMonth(DateCreate);

      console.log(`Дата создания: ${DateCreate}`)
      console.log(`Время проведенное в карте: ${All_TimeInCard}`)
      console.log(`Время проведенное в карте за 1й день: ${FirstDay_TimeInCard}`)
      console.log(`Дата создания соответствует текущей: ${DateIsToday}`)
    })
    .catch(err => console.error(err));

  const SetTimeInCard_toDeal = {
    method: 'POST',
    headers: {
    cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/10.0.0'
    },
    body: '{"id":"'+DealId_fSave+'","fields":{"UF_CRM_1729759510208":"'+(Number(All_TimeInCard)+Number(timeInCard_fSave))+'"}}'
  };

  await fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', SetTimeInCard_toDeal)
    .then(response => response.json())
    .then(response => {
      console.log(`Прибавил время ${timeInCard_fSave} в общее время в сделке ${DealId_fSave}, новое время: ${Number(All_TimeInCard)+Number(timeInCard_fSave)}`)
    })
    .catch(err => console.error(err));

  if (DateIsToday) {
    const SetFirstDay_TimeInCard = {
      method: 'POST',
      headers: {
      cookie: 'qmb=0.',
        'Content-Type': 'application/json',
        'User-Agent': 'insomnia/10.0.0'
      },
      body: '{"id":"'+DealId_fSave+'","fields":{"UF_CRM_1729775051707":"'+(Number(FirstDay_TimeInCard)+Number(timeInCard_fSave))+'"}}'
      };

      await fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', SetFirstDay_TimeInCard)
        .then(response => response.json())
        .then(response => {
          console.log(`Прибавил время ${timeInCard_fSave} в поле текущий день в сделке ${DealId_fSave}, новое время: ${Number(FirstDay_TimeInCard)+Number(timeInCard_fSave)}`)
        })
        .catch(err => console.error(err));
  }
  else{
  }

}

function UserCkeck(){
  var M_Name_List = []

  const GetAgentsList = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/10.1.1'
    },
    body: '{"filter":{"ACTIVE":true,"UF_DEPARTMENT":10}}'
  };

  const GetStAgentsList = {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.3.2'},
  };
  

  fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', GetStAgentsList)
    .then(response1 => response1.json())
    .then(response1 => {
      console.log(response1)
      fetch('https://speedinet.bitrix24.ru/rest/25550/92yb1mz0rkt5e2cl/user.get', GetAgentsList)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          var M_Name = document.getElementById("user-block").innerText

          if (response1.St_Agents.includes(M_Name)) {
            console.log(`Пользовватель является Агнентом.`);
            UserIsAgent = true;
            var LinkCheckInterval = setInterval(LinkCheck, 2000)
          }

          else{
            for (var i = 0; i < response.result.length; i++) {
              A_Name = response.result[i].NAME + ' ' + response.result[i].LAST_NAME
              M_Name_List.push(A_Name)
            }
            console.log(M_Name_List)
            if (M_Name_List.includes(M_Name)) {
              console.log(`Пользовватель является Агнентом.`);
              UserIsAgent = true;
              var LinkCheckInterval = setInterval(LinkCheck, 2000)

            } else {
              console.log(`Пользовватель не является Агнентом.`);
              UserIsAgent = false;
            }
          }
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
}

function EditDealList(DealId_tEdit, DealList_tEdit){
  currentUnix = Math.round(new Date().getTime()/1000.0)

  // Находим индекс элемента с нужным dealid
  const index = DealList_tEdit.findIndex(item => item[0] === DealId_tEdit);

  if (index !== -1) {
      // Если элемент найден, переносим его в начало массива
      const element = DealList_tEdit.splice(index, 1)[0];
      DealList_tEdit.unshift(element);
  } else {
      // Если элемент не найден, создаем новый
      const newElement = [DealId_tEdit, 0, currentUnix];
      DealList_tEdit.unshift(newElement);
  }

  return DealList_tEdit

}


function isSameDayAndMonth(dateString) {
    // Создаем объект Date из строки
    const inputDate = new Date(dateString);
    
    // Устанавливаем часовой пояс на UTC+3
    inputDate.setHours(inputDate.getUTCHours() + 3);
    
    // Получаем текущий момент времени
    const currentDate = new Date();
    
    // Устанавливаем часовой пояс текущего момента на UTC+3
    currentDate.setHours(currentDate.getUTCHours() + 3);
    
    // Достаем день и месяц из исходной даты
    const inputDay = inputDate.getUTCDate(); // День месяца
    const inputMonth = inputDate.getUTCMonth() + 1; // Месяц (нумерация месяцев начинается с 0)
    
    // Достаем день и месяц из текущей даты
    const currentDay = currentDate.getUTCDate();
    const currentMonth = currentDate.getUTCMonth() + 1;
    
    return inputDay === currentDay && inputMonth === currentMonth;
}