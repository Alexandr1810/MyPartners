console.log("Новый скрипт работает!")

var CardTypeIsIframe;
var dealId;
var CardFounder_IsWork = false
var CardFounder_On = true
var TimeInCard = 0
var UserIsAgent = true

var CheckCounterInterval = setInterval(CheckCounter, 2000)




function Start_CardFounderInterval(){
  console.log("стартую фаундрер")
  CardFounderInterval = setInterval(CardFounder, 2000)
}
function Stop_CardFounderInterval(){
  console.log("офнул фаундрер")
  clearInterval(CardFounderInterval);
}



function CheckCounter(){
  //console.log("Запустил проверку сделки")

  //Если не открыта карточка сохраненной заявки и время не равно нулю - Значит каточка закрыта и переходим к сохранению данных
  if (window.location.href.indexOf(localStorage.getItem("SavedDealId")) < 0 && localStorage.getItem("SavedTimeInCard") != 0) {
    console.log("Есть сохраненные данные")
    StopTimer(localStorage.getItem("SavedDealId"), localStorage.getItem("SavedTimeInCard"))
  }
  else{
    //console.log("Нет сохраненных данных")
    if (!CardFounder_IsWork) {
      CardFounder_IsWork = true
      CardFounder_On = true
      Start_CardFounderInterval()
    }
  }
}

//фаундер - функция для поиска заявок
function CardFounder(){
  //Если фаундер не на предохранителе
  if (CardFounder_On) {
    console.log("Ищу открытую карту")
    //Если открыта карта клиента
    if (window.location.href.indexOf("crm/deal/details") >= 0) {
      console.log("Нашел открытую карту")
      //Прекращаем поиск карты
      Stop_CardFounderInterval()
      CardFounder_On = false

      //Проверяем является ли ката iframe'мом
      if (document.getElementsByClassName("main-kanban-column-title").length > 0) {
        console.log("Открыт Iframe со сделкой")
        CardTypeIsIframe = true
      }
      else{
        console.log("Открыт Site со сделкой");
        CardTypeIsIframe = false
      }

      //Получаем id сделки и сохраняем в память
      dealId = window.location.href.split('/').slice(-2)[0];
      localStorage.setItem("SavedDealId", dealId);

      StartTimer()
      
    }
    else{
      console.log("Карта не найдена")
    }
  }
}

function StartTimer(){
  console.log("Таймер запущен")
  TimeInCard = Number(localStorage.getItem("SavedTimeInCard"));
  TimerOn()
}

function TimerOn(){
  TimeInCard_Counter = setInterval(function(){ 
    TimeInCard+=1;
    localStorage.setItem("SavedTimeInCard", TimeInCard);
  }, 1000)
}

function TimerOff(){
  clearInterval(TimeInCard_Counter);
}

function StopTimer(d_Id, t_InCard){

  //Очищаем данные:
  localStorage.setItem("SavedTimeInCard", "0");
  localStorage.setItem("SavedDealId", "Nothing");
  //Закидываем значение через хук 

  const GetData_FromDeal = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/10.0.0'
    },
    body: '{"ID":"'+d_Id+'"}'
  };

  fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.get', GetData_FromDeal)
    .then(response => response.json())
    .then(response => {
      console.log(`Данные по сделке ${d_Id}: ${response.result}`)

      DateCreate = response.result.DATE_CREATE
      All_TimeInCard = response.result.UF_CRM_1729759510208
      FirstDay_TimeInCard = response.result.UF_CRM_1729775051707
      DateIsToday = isSameDayAndMonth(DateCreate);

      console.log(`Дата создания: ${DateCreate}`)
      console.log(`Время проведенное в карте: ${All_TimeInCard}`)
      console.log(`Время проведенное в карте за 1й день: ${FirstDay_TimeInCard}`)
      console.log(`Дата создания соответствует текущей: ${DateIsToday}`)
      if (UserIsAgent) {
        const SetTimeInCard_toDeal = {
          method: 'POST',
          headers: {
            cookie: 'qmb=0.',
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/10.0.0'
          },
          body: '{"id":"'+d_Id+'","fields":{"UF_CRM_1729759510208":"'+(Number(All_TimeInCard)+Number(t_InCard))+'"}}'
        };

        fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', SetTimeInCard_toDeal)
          .then(response => response.json())
          .then(response => {
            console.log(`Прибавил время ${t_InCard} в общее время в сделке ${d_Id}, новое время: ${Number(All_TimeInCard)+Number(t_InCard)}`)

            if (DateIsToday) {
              const SetFirstDay_TimeInCard = {
                method: 'POST',
                headers: {
                  cookie: 'qmb=0.',
                  'Content-Type': 'application/json',
                  'User-Agent': 'insomnia/10.0.0'
                },
                body: '{"id":"'+d_Id+'","fields":{"UF_CRM_1729775051707":"'+(Number(FirstDay_TimeInCard)+Number(t_InCard))+'"}}'
              };

              fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', SetFirstDay_TimeInCard)
                .then(response => response.json())
                .then(response => {
                  console.log(`Прибавил время ${t_InCard} в поле текущий день в сделке ${d_Id}, новое время: ${Number(FirstDay_TimeInCard)+Number(t_InCard)}`)
                  //Убираем фаундер с предохранителя:
                  CardFounder_On = true
                  CardFounder_IsWork = true
                })
                .catch(err => console.error(err));
            }
            else{
              //Очищаем данные:
              CardFounder_On = true
              CardFounder_IsWork = true
            }
          })
          .catch(err => console.error(err));
        }
        else{
          CardFounder_On = true
          CardFounder_IsWork = true
        }
    })
    .catch(err => console.error(err));

  try{
    TimerOff()
  }
  catch(e){
    console.log(e)
  }
  Start_CardFounderInterval()
}

function ShowExitPanel_IframeCard(){
  //Получаем все Iframe'ы
  //var Iframes = document.getElementsByTagName("iframe")

}
function ShowExitPanel_SiteCard(){
  
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