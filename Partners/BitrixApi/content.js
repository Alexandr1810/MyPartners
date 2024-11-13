var ItogPrice;
var Price = document.getElementsByClassName('ui-btn-primary');
var Head = document.querySelectorAll('head');
var names = null
var DelLids = 0
var NedozLids = 0
var TodayTime = null
var CurrentHour = null
var AllNumbers = []
var AllFirlds = []
var ApiNames = null
var hideSpam;
var hideNedozvons;
var ApiToken = '11010000 10100101 11010001 10000011 11010000 10111001' //2чный код
var AllDealsArr = null;
var AllDealsArrInLastMonth = null;
var AllDealsLenght = null;
var AllDealsLenghtInLastMonth = null;
var UserDealsLenght = null;
var UserDealsLenghtInLastMonth = null;
var MultiBrend = ["2gis","2gis_smartnet","speed-net","2gis-spec","2gis-geo","2gis-per","intelcom","axioma24","anlim","ecom-speednet"]
var IsMulti = false;
var PasswordToken = null;
var LoginKey = null;
var AllNewsCount = 0;
var AllNews = [];
var NedovonList = [];
var Calculation_All_Users = false;
var NewsMonobrendsHide = true;
var NewsMonobrends = ['R_B']
var NewsMonobrendsIsklychenia = ['R_B']
var WhiteList;
var RemoveDisable_FromBery = true;
var currentdate = new Date();
var HideWorkImg;
var StartEventIsOn = false
var StopEventIsOn = false

var UserIsAgent = true;

var cool_version = "25.1"

//Индикаторы
var SearchNedozvons_IsTrue = false;
var IsListen = false;
var BeryDealIsTrue = false;
var Hide_NewDeals = false;
var ReplacePagetitle = false;

var CurrentHour = currentdate.getHours();
var CurrentMinutes = currentdate.getMinutes();
var ApiHour;
var ApiMinutes;
var NewsCount = 0;

var Deal_id_FromCallCard;
var repeatedRequests = [];
var DublicateMatrix = [];
var DublicateMatrixFinal = [];
var DealId_To_Send = '';

var CallRemove_Button_isHide = false;
var CallRemove_Button_obj;

var currentUnix = Math.round(new Date().getTime()/1000.0)
var AgentInList = false;

//Матрицы для сбора инфы про новым, работе и недозвонам для удаления Дубликатов
var Deals_For_Check = [];
var repeatedRequests = [];
var New_Deals_For_Choice = [];

// Списки для выбора заявки из новых
  //Вспомогательные
var ButtonOn;
var ReservButtonOn;
var AllNews_ForBery = []
var NedovonList_For_Bery = []
var ExpensiveTrafik = ['domru-site', 'domrusob', 'seodomru', 'domru-site-nomer', 'domru.site2']
var AllNewDeals_InNew = [] // Все новые сделки, которые еще не были в недозвонах
var RandInex;

  //Основные
var AllNewCalls_InNew = [] // все новые звонки, которые еще не были в недозвонах
var NewDeals_InNew = [] // все новые заявки, которые еще не были в недозвонах

var ExpensiveCall_InNew = [] //  все новые звонки,  с дорогим трафиком
var NotExpensiveCall_InNew = [] //  все новые звонки,  с не дорогим трафиком

 //Недозвоны
var Today_NedozvonDeals_InNew = [] // звонки и заявки рандомно сегодняшнего дня из недозвонов
var Early_NedozvonDeals_InNew = [] // звонки и заявки рандомно предыдущих дней дней

let Script_For_Interviewing_New;

const phonePattern = /Звонок от (\+[\d\s-]+), поступил/;

function startInterval() {
    Script_For_Interviewing_New = setInterval(Interviewing_New, 15000); // Вызываем функцию каждые 15 секунд
}

function stopInterval() {
    clearInterval(Script_For_Interviewing_New); // Прерываем интервал
}


var BeryButtState = "R_B" 
/*Варианты BeryButtState:
  "R_B" - Нулевое положение при старте страницы
  "Bery" - Взять заявку
  "InQueue" - Выйти из очереди
  "OutQueue" - В очередь
*/
/* 
    Прости Господи за такой костыль. Мне не нужно было использовать столько запросов к API.
    Я искуплю вину чистым кодом. 
    Аминь. 
*/
//Оповевещение об обновлении!
if (localStorage.getItem("IsYved") == null || localStorage.getItem("IsYved") != cool_version) {
  localStorage.setItem("IsYved", false);
}
if (localStorage.getItem("IsYved") == 'false') {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
    body: '{"chat_id":"1395354115","text":"Расширение обновилось до версии '+cool_version+' у Агента '+document.getElementById("user-block").innerText+'"}'
  };

  fetch('https://api.telegram.org/bot7536226475:AAG5C4lJljhCzGdqS8nl5DIjK2NoLuHCgbg/sendMessage', options)
    .then(response => response.json())
    .then(response => {
      console.log("Увед отправил")
      localStorage.setItem("IsYved", cool_version);
    })
    .catch(err => console.error(err));
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var randomIndex1 = getRandomInt(40)
var randomIndex2 = getRandomInt(40)
var randomIndex3 = getRandomInt(40)
var randomIndex4 = getRandomInt(40)
var randomIndex5 = getRandomInt(40)
var randomIndex6 = getRandomInt(40)
var randomIndex7 = getRandomInt(40)
var randomIndex8 = getRandomInt(40)
var randomIndex9 = getRandomInt(40)
var randomIndex10 = getRandomInt(40)
var randomIndex11 = getRandomInt(40)
var randomInt1 = parseInt(Math.random() * (9999 - 1000) + 1000);
var randomInt2 = parseInt(Math.random() * (300 - 100) + 100);
var randomInt3 = parseInt(Math.random() * (867 - 567) + 567);
var SimvolsArr = ['f','d','rt','f','g','h','j','t','-','k','f','m','&','df','=','dy','?','п','3','а+','+','р','л','в','ц','а','ь','%','l','i',',','g',')','(','b','c','z','.','u','*']
var randomStr = SimvolsArr[randomIndex1] + SimvolsArr[randomIndex2] + SimvolsArr[randomIndex3] + randomInt1 + SimvolsArr[randomIndex4] + SimvolsArr[randomIndex5] + SimvolsArr[randomIndex6] + randomInt2 + SimvolsArr[randomIndex7] + SimvolsArr[randomIndex8] + randomInt3 + SimvolsArr[randomIndex9] + SimvolsArr[randomIndex10] + SimvolsArr[randomIndex11]
var Apidd = null;

UserCkeck()


function GetAllDeals1(){
  if (document.getElementsByClassName("main-kanban-column-title-text-inner")[0].innerText == 'Текущий месяц') {
    console.log("Начало шаманства c API1!")
    const options = {
      method: 'POST',
      headers: {
        cookie: 'qmb=0.',
        'Content-Type': 'application/json',
        'User-Agent': 'insomnia/8.5.1'
      },
      body: '{"filter":{"STAGE_ID":"C6:UC_Y6OU39",">OPPORTUNITY":"1"},"select":["ID","ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'

    };

    fetch('https://speedinet.bitrix24.ru/rest/26/zc1pnfpm13jqthsw/crm.deal.list', options)
      .then(response => response.json())
      .then(response => {
        AllDealsLenght = response.total
        console.log(AllDealsLenght)
        console.log(document.getElementById("user-block").innerText, "111")
        
        GetAllDeals2()
        
      })
      .catch(err => console.error(err));
  }
}
function GetAllDeals2(){

  console.log("Начало шаманства c API2!")
  const fetchPromises = [];
    for (var i = 0; i < AllDealsLenght; i+=50) {
      const options = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.5.1'
        },
        body: '{ "filter": { "STAGE_ID": "C6:UC_Y6OU39", ">OPPORTUNITY": "1" }, "select": [ "ASSIGNED_BY_ID", "OPPORTUNITY", "UTM_SOURCE"], "start": "'+i+'" }'
      };

      fetchPromises.push(
        fetch('https://speedinet.bitrix24.ru/rest/26/zc1pnfpm13jqthsw/crm.deal.list', options)
          .then(response => response.json())
          .catch(err => {
            console.error('Error fetching data:', err);
            return null;
          })
      );
    }

    Promise.all(fetchPromises)
      .then(AllOPPORTUNITY => {
        console.log("AllOPPORTUNITY in GetAllDeals2", AllOPPORTUNITY)
        AllDealsArr = AllOPPORTUNITY;
        console.log("AllDealsArr: ", AllDealsArr)
        setTimeout(GetAllDeals3, 2000)
      });
}
function GetAllDeals3(){
  console.log("Начало шаманства c API3!")
  const options = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.5.1'
    },
    body: '{"filter":{"STAGE_ID":"C6:UC_OE7FJH",">OPPORTUNITY":"1"},"select":["ID","ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'

  };

  fetch('https://speedinet.bitrix24.ru/rest/26/zc1pnfpm13jqthsw/crm.deal.list', options)
    .then(response => response.json())
    .then(response => {
      AllDealsLenghtInLastMonth  = response.total
      console.log(AllDealsLenghtInLastMonth)
      GetAllDeals4()
    })
    .catch(err => console.error(err));
}
function GetAllDeals4(){
  console.log("Начало шаманства c API4!")
  const fetchPromises = [];
    for (var i = 0; i < AllDealsLenghtInLastMonth; i+=50) {
      const options = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.5.1'
        },
        body: '{ "filter": { "STAGE_ID": "C6:UC_OE7FJH", ">OPPORTUNITY": "1" }, "select": [ "ASSIGNED_BY_ID", "OPPORTUNITY", "UTM_SOURCE"], "start": "'+i+'" }'
      };

      fetchPromises.push(
        fetch('https://speedinet.bitrix24.ru/rest/26/zc1pnfpm13jqthsw/crm.deal.list', options)
          .then(response => response.json())
          .catch(err => {
            console.error('Error fetching data:', err);
            return null;
          })
      );
    }

    Promise.all(fetchPromises)
      .then(AllOPPORTUNITY => {
        console.log("AllOPPORTUNITY in GetAllDeals4", AllOPPORTUNITY)
        AllDealsArrInLastMonth = AllOPPORTUNITY;
        console.log("AllDealsArrInLastMonth: ", AllDealsArrInLastMonth)
        console.log(document.getElementById("user-block").innerText)
        
      });
}
function GetAllNewsCount(){
  console.log("Начало шаманства c API5!")
  const options = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.5.1'
    },
    body: '{"filter":{"STAGE_ID":"NEW"},"start":"0","select":["ASSIGNED_BY_ID","TITLE"]}'
  };

  fetch('https://speedinet.bitrix24.ru/rest/26/bs0iid7hvmniht0z/crm.deal.list', options)
    .then(response => response.json())
    .then(response => {
      AllNewsCount  = response.total
      console.log("AllNewsCoun: ", AllNewsCount)
      GetAllNews()
    })
    .catch(err => console.error(err));
}
function GetAllNews(){
  console.log("Начало шаманства c API6!")
  const fetchPromises = [];
    for (var i = 0; i < AllNewsCount; i+=50) {
      const options = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.5.1'
        },
        body: '{"filter":{"STAGE_ID":"NEW"},"start":"'+i+'","select":["ASSIGNED_BY_ID","TITLE"]}'
      };

      fetchPromises.push(
        fetch('https://speedinet.bitrix24.ru/rest/26/bs0iid7hvmniht0z/crm.deal.list', options)
          .then(response => response.json())
          .catch(err => {
            console.error('Error fetching data:', err);
            return null;
          })
      );
    }

    Promise.all(fetchPromises) 
      .then(AllOPPORTUNITY => {
        console.log("AllOPPORTUNITY: ", AllOPPORTUNITY)
        for (var i = 0; i < AllOPPORTUNITY.length; i++) {
          for (var j = 0; j < AllOPPORTUNITY[i].result.length; j++) {
            AllNews.push(AllOPPORTUNITY[i].result[j])
          }
        }
        console.log("AllNews: ", AllNews)
        console.log("AllNews.length: ", AllNews.length)
        setTimeout(SearchNedozvons, 3000);
      });
}
function SearchNedozvons(){
  console.log("Начало шаманства c API7!")
  const fetchPromises = [];
    for (var i = 0; i < AllNews.length; i++) {
      const options = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.5.1'
        },
        body: '{"entityTypeId":2,"filter":{"OWNER_ID":"'+AllNews[i].ID+'","STAGE_ID":"UC_0SAOJL"},"select":["OWNER_ID","STAGE_ID","CREATED_TIME"]}'
      };

      fetchPromises.push(
        fetch('https://speedinet.bitrix24.ru/rest/26/bs0iid7hvmniht0z/crm.stagehistory.list', options)
          .then(response => response.json())
          .catch(err => {
            console.error('Error fetching data:', err);
            return null;
          })
      );
    }

    Promise.all(fetchPromises) 
      .then(AllOPPORTUNITY => {
        console.log("AllOPPORTUNITY 7: ", AllOPPORTUNITY)
        for (var i = 0; i < AllOPPORTUNITY.length; i++) {
          if(AllOPPORTUNITY[i].total > 0){

            NedovonList.push(AllOPPORTUNITY[i].result.items[0].OWNER_ID)
          }
        }
        console.log("AllNews: ", AllNews)
        console.log("NedovonList:", NedovonList)
        if (((AllNews.length-NedovonList.length) >= 5) || AllNews >= 19) {
            document.getElementById("MoreDealsAlert").style.display = "block";
        }
        
        console.log("NedovonList: ", NedovonList)
      });
}


var Anal_Phone_Reshifrator = {
  gis: "9039236742",
  Pakt: "9039248452",
  SpeedNet: "9039215718",
  SpeedNet1: "9039225718",
  DomRu1: "9039244751",
  PerSet: "9039248205",
  SibSet: "9039218114",
  DomRu2: "9039246531",
  DomRu3: "9039229204",
  DomRu4: "9039866171",
  IgraServise: "9039221839",
  DomRu5: "9039225814",
  DomRu6: "9039225026",
  DomRu7: "9039217263",
  EG1: "9039226723",
  EG2: "9039246596",
  Axioma: "9039229408",
  Orion1: "9039235604",
  Orion2: "9039235872",
  NorCom1: "9039244964",
  NorCom2: "9039245042",
  Telecoma1: "9039244822",
  Telecoma2: "9039244932",
  TwoCom: "9039248291",
  Izet: "9039246317",
  CheTel: "9039865632",
  NowgorodTel: "9039865679",
  YarKom: "9039865874",
  Centra: "9039224301",
  Etel1: "9039865920",
  Etel2: "9039215894",
  YfaNet: "9039218756",
  SkyNet: "9039247531"
}

var Anal_Reshifrator = {
  gis: "2gis",
  Pakt: "speedinet-pakt",
  SpeedNet: "speed-net",
  DomRu1: "tovarka_domru",
  PerSet: "2gis-per",
  SibSet: "sibseti-multi",
  DomRu2: "domru-site",
  DomRu3: "domru-site",
  DomRu4: "mk_domru",
  IgraServise: "igra-service",
  DomRu5: "domru-site-ecom-rsya",
  DomRu6: "domru-site-nomer",
  DomRu7: "domru-site-ecom",
  EG1: "",
  EG2: "",
  Axioma: "axioma-yandex",
  Orion1: "orion-yandex",
  Orion2: "orion-yandex",
  NorCom1: "norcom_yandex",
  NorCom2: "norcom_yandex",
  Telecoma1: "poisk-yandex",
  Telecoma2: "poisk-yandex",
  TwoCom: "yandex-2kom",
  Izet: "izet-chb-yandex",
  CheTel: "cher-telecom",
  NowgorodTel: "nov-telecom",
  YarKom: "yar-kom",
  Centra: "centra_yandex",
  Etel1: "etelecom",
  Etel2: "etelecom",
  YfaNet: "ufa-net"
}


var NumbersReshifrator = {
          SpeedInet: "9039236742",
          SpeedNet: "9039225718",
          SpeedNet1: "9039215718",
          PerSet: "9039248205",
          Pakt: "9039248452",
          DomRu: "9039246531",
          DomRu1: "9039229204",
          DomRu2: "9039225026",
          DomRu3: "9039217263",
          DomRu4: "9039244751",
          DomRu5: "9039217524",
          DomRu6: "9039221839",
          DomRu7: "9039866171",
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
          Etel1: "9039865920",
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
var DealsNum = [];

var ResponsibleIds = [];

function areAllElementsSame(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false; // Если найдено отличное значение, возвращаем false
    }
  }
  return true; // Если все значения одинаковые, возвращаем true
}

function Calculation_Of_Payment_From_CurrentMonth(AllUsers, userID, StageId){
  if (AllUsers && Calculation_All_Users) {
    if (StageId == 'C6:UC_Y6OU39') {
      console.log("Считаю всех пользователей!")
      const fetchPromises = [];
      for (var i = 0; i < AllDealsLenght; i+=50) {
        const options = {
          method: 'POST',
          headers: {
            cookie: 'qmb=0.',
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/8.5.1'
          },
          body: '{ "filter": { "STAGE_ID": "'+StageId+'", ">OPPORTUNITY": "1" }, "select": [ "ASSIGNED_BY_ID", "OPPORTUNITY", "UTM_SOURCE"], "start": "'+i+'" }'
        };

        fetchPromises.push(
          fetch('https://speedinet.bitrix24.ru/rest/'+ApiToken+'/crm.deal.list', options)
            .then(response => response.json())
            .catch(err => {
              console.error('Error fetching data:', err);
              return null;
            })
        );
      }

      Promise.all(fetchPromises)
        .then(AllOPPORTUNITY => {
          console.log(AllOPPORTUNITY);
          var CurrentMounth = 0;
          for (var i = 0; i < AllOPPORTUNITY.length; i++) {
            for (var j = 0; j < AllOPPORTUNITY[i].result.length; j++) {
              for (var k = 0; k < MultiBrend.length; k++) {
                if (AllOPPORTUNITY[i].result[j].UTM_SOURCE == MultiBrend[k]) {
                  IsMulti = true
                }
              }
              if (IsMulti) {
                CurrentMounth += Number(AllOPPORTUNITY[i].result[j].OPPORTUNITY)*0.17
                IsMulti = false
              }
              else{
                CurrentMounth += Number(AllOPPORTUNITY[i].result[j].OPPORTUNITY)*0.12
              }
              //console.log(CurrentMounth)
            }
          }
          console.log("CurrentMounth: ",CurrentMounth)

          var Price1 = document.getElementsByClassName('crm-kanban-total-price');

          if (Price1[0].innerHTML.indexOf('crm-kanban-total-price-total2') < 0) {
            console.log("НЕ НАШЕЛ, СОЗДАЮ НОВУЮ!")
            Price1[0].innerHTML += '<span class="crm-kanban-total-price-total2">'+'≈'+Math.round(CurrentMounth).toLocaleString()+' руб.'+'</span>';
          }
          else{
            document.getElementsByClassName('crm-kanban-total-price2')[0].innerText = '≈'+Math.round(CurrentMounth).toLocaleString()+' руб.';;

          }
          
          
        });
      }
      if (StageId == 'C6:UC_OE7FJH') {
        console.log("Считаю всех пользователей!")
        const fetchPromises = [];
        for (var i = 0; i < AllDealsLenghtInLastMonth; i+=50) {
          const options = {
            method: 'POST',
            headers: {
              cookie: 'qmb=0.',
              'Content-Type': 'application/json',
              'User-Agent': 'insomnia/8.5.1'
            },
            body: '{ "filter": { "STAGE_ID": "'+StageId+'", ">OPPORTUNITY": "1" }, "select": [ "ASSIGNED_BY_ID", "OPPORTUNITY", "UTM_SOURCE"], "start": "'+i+'" }'
          };

          fetchPromises.push(
            fetch('https://speedinet.bitrix24.ru/rest/'+ApiToken+'/crm.deal.list', options)
              .then(response => response.json())
              .catch(err => {
                console.error('Error fetching data:', err);
                return null;
              })
          );
        }

        Promise.all(fetchPromises)
          .then(AllOPPORTUNITY => {
            console.log(AllOPPORTUNITY);
            var CurrentMounth = 0;
            for (var i = 0; i < AllOPPORTUNITY.length; i++) {
              for (var j = 0; j < AllOPPORTUNITY[i].result.length; j++) {
                for (var k = 0; k < MultiBrend.length; k++) {
                  if (AllOPPORTUNITY[i].result[j].UTM_SOURCE == MultiBrend[k]) {
                    IsMulti = true
                  }
                }
                if (IsMulti) {
                  CurrentMounth += Number(AllOPPORTUNITY[i].result[j].OPPORTUNITY)*0.17
                  IsMulti = false
                }
                else{
                  CurrentMounth += Number(AllOPPORTUNITY[i].result[j].OPPORTUNITY)*0.12
                }
                //console.log(CurrentMounth)
              }
            }
            console.log("CurrentMounth: ",CurrentMounth)

            var Price1 = document.getElementsByClassName('crm-kanban-total-price');

            if (Price1[1].innerHTML.indexOf('crm-kanban-total-price-total2') < 0) {
              console.log("НЕ НАШЕЛ, СОЗДАЮ НОВУЮ!")
              Price1[1].innerHTML += '<span class="crm-kanban-total-price-total2">'+'≈'+Math.round(CurrentMounth).toLocaleString()+' руб.'+'</span>';
            }
            else{
              document.getElementsByClassName('crm-kanban-total-price2')[1].innerText = '≈'+Math.round(CurrentMounth).toLocaleString()+' руб.';;
            }

          });
      }
  }//IF не юзается
  else{
    if (StageId == 'C6:UC_Y6OU39') {
      console.log("Считаю одного пользователя!")
      console.log("userID: ", userID)
      console.log("AllDealsArr: ", AllDealsArr)
      UserDealsLenght = 0;
      for (var i = 0; i < AllDealsArr.length; i++) {
        for (var j = 0; j < AllDealsArr[i].result.length; j++) {
          if (AllDealsArr[i].result[j].ASSIGNED_BY_ID == userID) {
            UserDealsLenght++;
          }
        }
      }

      const fetchPromises = [];
      console.log("UserDealsLenght:", UserDealsLenght)
      for (var i = 0; i < UserDealsLenght; i+=50) {
        const options = {
          method: 'POST',
          headers: {
            cookie: 'qmb=0.',
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/8.5.1'
          },
          body: '{ "filter": { "STAGE_ID": "'+StageId+'","ASSIGNED_BY_ID":"'+userID+'", ">OPPORTUNITY": "1" }, "select": [ "ASSIGNED_BY_ID", "OPPORTUNITY", "UTM_SOURCE"], "start": "'+i+'" }'
        };

        fetchPromises.push(
          fetch('https://speedinet.bitrix24.ru/rest/26/zc1pnfpm13jqthsw/crm.deal.list', options)
            .then(response => response.json())
            .catch(err => {
              console.error('Error fetching data:', err);
              return null;
            })
        );
      }

      Promise.all(fetchPromises)
        .then(AllOPPORTUNITY => {
          console.log(AllOPPORTUNITY);
          console.log(AllOPPORTUNITY.length);
          var CurrentMounth = 0;
          for (var i = 0; i < AllOPPORTUNITY.length; i++) {
            for (var j = 0; j < AllOPPORTUNITY[i].result.length; j++) {
              for (var k = 0; k < MultiBrend.length; k++) {
                if (AllOPPORTUNITY[i].result[j].UTM_SOURCE == MultiBrend[k]) {
                  IsMulti = true
                }
              }
              if (IsMulti) {
                CurrentMounth += Number(AllOPPORTUNITY[i].result[j].OPPORTUNITY)*0.17
                IsMulti = false
              }
              else{
                CurrentMounth += Number(AllOPPORTUNITY[i].result[j].OPPORTUNITY)*0.12
              }
              //console.log(CurrentMounth)
            }
          }
          console.log("CurrentMounth: ",CurrentMounth)

          var Price1 = document.getElementsByClassName('crm-kanban-total-price');

          if (Price1[0].innerHTML.indexOf('crm-kanban-total-price-total2') < 0) {
              console.log("НЕ НАШЕЛ, СОЗДАЮ НОВУЮ!")
            Price1[0].innerHTML += '<span class="crm-kanban-total-price-total2">'+'≈'+Math.round(CurrentMounth).toLocaleString()+' руб.'+'</span>';
          }
          else{

            document.getElementsByClassName('crm-kanban-total-price2')[0].innerText = '≈'+Math.round(CurrentMounth).toLocaleString()+' руб.';;

          }
          

        });
    }
    if (StageId == 'C6:UC_OE7FJH') {
      console.log("Считаю одного пользователя!")

      console.log("AllDealsArrInLastMonth : ", AllDealsArrInLastMonth)
      UserDealsLenghtInLastMonth = 0;
      for (var i = 0; i < AllDealsArrInLastMonth.length; i++) {
        for (var j = 0; j < AllDealsArrInLastMonth[i].result.length; j++) {
          if (AllDealsArrInLastMonth[i].result[j].ASSIGNED_BY_ID == userID) {
            UserDealsLenghtInLastMonth++;
          }
        }
      }

      const fetchPromises = [];
      for (var i = 0; i < UserDealsLenghtInLastMonth; i+=50) {
        const options = {
          method: 'POST',
          headers: {
            cookie: 'qmb=0.',
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/8.5.1'
          },
          body: '{ "filter": { "STAGE_ID": "'+StageId+'","ASSIGNED_BY_ID":"'+userID+'", ">OPPORTUNITY": "1" }, "select": [ "ASSIGNED_BY_ID", "OPPORTUNITY", "UTM_SOURCE"], "start": "'+i+'" }'
        };

        fetchPromises.push(
          fetch('https://speedinet.bitrix24.ru/rest/26/zc1pnfpm13jqthsw/crm.deal.list', options)
            .then(response => response.json())
            .catch(err => {
              console.error('Error fetching data:', err);
              return null;
            })
        );
      }

      Promise.all(fetchPromises)
        .then(AllOPPORTUNITY => {
          console.log(AllOPPORTUNITY);
          console.log(AllOPPORTUNITY.length);
          var CurrentMounth = 0;
          for (var i = 0; i < AllOPPORTUNITY.length; i++) {
            for (var j = 0; j < AllOPPORTUNITY[i].result.length; j++) {
              for (var k = 0; k < MultiBrend.length; k++) {
                if (AllOPPORTUNITY[i].result[j].UTM_SOURCE == MultiBrend[k]) {
                  IsMulti = true
                }
              }
              if (IsMulti) {
                CurrentMounth += Number(AllOPPORTUNITY[i].result[j].OPPORTUNITY)*0.17
                IsMulti = false
              }
              else{
                CurrentMounth += Number(AllOPPORTUNITY[i].result[j].OPPORTUNITY)*0.12
              }
              //console.log(CurrentMounth)
            }
          }
          console.log("CurrentMounth: ",CurrentMounth)

          var Price1 = document.getElementsByClassName('crm-kanban-total-price');

          if (Price1[1].innerHTML.indexOf('crm-kanban-total-price-total2') < 0) {
            console.log("НЕ НАШЕЛ, СОЗДАЮ НОВУЮ!")
            Price1[1].innerHTML += '<span class="crm-kanban-total-price-total2">'+'≈'+Math.round(CurrentMounth).toLocaleString()+' руб.'+'</span>';
          }
          else{

            document.getElementsByClassName('crm-kanban-total-price2')[1].innerText = '≈'+Math.round(CurrentMounth).toLocaleString()+' руб.';;

          }
          

        });
      }
  }
}

/*
function UpdatePasswordInApi(){
  fetch('https://'+PasswordToken+'.mockapi.io/MyPartners/EISSD_Pass/1', {
      method: 'PUT', // or PATCH
      headers: {'content-type':'application/json'},
      body: JSON.stringify({LoginCode: randomStr, LoginDate: String(dd)}) //Переводить в строку!!!!
  }).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
  }).then(task => {
      console.log(task)
  }).catch(error => {
    console.log(error)
  })
}
*/

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "Bitrix",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient, request.Message, request.BigCard);
            if (request.Recipient == 'Bitrix') {
                if (request.Message=='true') {
                    Head[0].innerHTML += "<style>.SpamIMG{background-size: 17px 16px;background: none !important;} .user-block{max-width: 500px;} .user-name {text-overflow: clip;} .crm-kanban-total-price-total2{width:100%;overflow:hidden;display:inline-block;font-size:26px;white-space:nowrap;-ms-text-overflow:ellipsis;text-overflow:ellipsis;padding:0 10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;color:white}.crm-kanban-total-price:hover .crm-kanban-total-price-total2{display:inline-block}.crm-kanban-total-price:hover .crm-kanban-total-price-total{display:none} #CopyButton{border-bottom: 1px dashed #2067b0 !important; margin-right: 10px !important;}</style>"
                    let CardCheck = setInterval(UpdateCard, 1000)
                    PasswordToken = request.PassToken;
                    LoginKey = request.LogToken

                    fetch('https://'+PasswordToken+'.mockapi.io/MyPartners/EISSD_Pass/1', {
                      method: 'GET',
                      headers: {'content-type':'application/json'},
                    }).then(res => {
                      if (res.ok) {
                          return res.json();
                      }
                      // handle error
                    }).then(tasks => {
                      if (LoginKey == tasks.LoginCode) {
                        console.log('Код подходит')
                        WhiteList = tasks.WhiteList;
                        ApiToken = request.Token;
                        Apidd = tasks.LoginDate
                        ButtonOn = tasks.ButtonOn;
                        ReservButtonOn = tasks.ReservButtonOn;
                        ButtonOn = true;
                        ApiHour = tasks.DublicateLastTime_H;
                        ApiMinutes = tasks.DublicateLastTime_M;
                        Hide_NewDeals = tasks.Hide_NewDeals;
                        HideWorkImg = tasks.HideWorkImg;

                        console.log("CurrentHour:", CurrentHour)
                        console.log("CurrentMinutes:", CurrentMinutes)
                        console.log("ApiHour:", ApiHour)
                        console.log("ApiMinutes:", ApiMinutes)
                        /*if ( (CurrentHour == ApiHour && CurrentMinutes - ApiMinutes >= 2) || CurrentHour != ApiHour ) {
                          console.log("Запускаю проверку дубликатов")
                          
                          fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
                            method: 'PUT', // or PATCH
                            headers: {'content-type':'application/json'},
                            body: JSON.stringify({DublicateLastTime_H: CurrentHour,DublicateLastTime_M: CurrentMinutes})
                          }).then(res => {
                            if (res.ok) {
                                return res.json();
                            }
                            // handle error
                          }).then(task => { 
                            setTimeout(Get_New_Deals, 6000);
                            //
                          }).catch(error => {
                            // handle error
                          })
                        }
                        else{ */
                          console.log("Не проверяю дубли, открываю кнопки")
                          RemoveDisable_FromBery = true
                        /*}*/

                        if (Number(Apidd) < dd || Number(Apidd) > dd) {
                          console.log('Код просрочен')
                          /*
                          const SendKeyToChat = {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
                            body: '{"chat_id":"-1002064816512","text":"Код на сегодня: '+randomStr+'"}'
                          };

                          fetch('https://api.telegram.org/bot'+request.BotToken+'/sendMessage', SendKeyToChat)
                            .then(response => response.json())
                            .then(response => {
                              console.log('Обновляю пароль в Api')
                              UpdatePasswordInApi()
                            })
                            .catch(err => console.error(err));*/
                        }
                        console.log("PasswordToken: ", PasswordToken)
                        if (document.getElementById("user-name").innerText == "Александр Шатохин") {
                            document.getElementById("user-name").innerText = "Александр Шатохин";
                            document.getElementById("user-name").setAttribute('style', 'font-size: 15px; font-weight: 700; background: linear-gradient(90deg, #ff4b4b 13%, #ff0000 43%, #f88e38 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
                        }

                        if (document.getElementById("user-name").innerText == "Павел Обухов") {
                            document.getElementById("user-name").innerText = "Павел Андреевич";
                            document.getElementById("user-name").setAttribute('style', 'font-size: 15px; font-weight: 600; color: white; -webkit-background-clip: text;');
                        }
                        Queue_Start_Script()
                        setTimeout(GetAllDeals1, 5000);
                        setTimeout(InStart, 6000);
                        setInterval(SetNames, 500);
                        setInterval(ReplaceAlerts, 100);
                        
                        for (var k = 0; k < tasks.Pidorasi.length; k++) {
                          if (document.getElementById("user-block").innerText == tasks.Pidorasi[k]) {
                            setInterval(CutPidorasov, 80); 
                          }
                        }
                         
                        
                      }
                      else{
                        console.log('Код не подходит')
                        document.getElementById("header-inner").innerHTML += `<h1 class="ExtenAlertText" style="
                          position: absolute;
                          top: 10px !important;
                          color: white !important;
                          background: #0056a399 !important;
                          right: 40%;
                          border-radius: 10px;
                          padding: 10px;
                      ">Вы не вошли в MyPartners!</h1>`
                        Apidd = tasks.LoginDate
                        console.log(Apidd)
                        console.log(dd)
                        if (Number(Apidd) < dd || Number(Apidd) > dd) {
                            console.log('Код просрочен')
                            /*
                            const SendKeyToChat = {
                              method: 'POST',
                              headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
                              body: '{"chat_id":"-1002064816512","text":"Код на сегодня: '+randomStr+'"}'
                            };

                            fetch('https://api.telegram.org/bot'+request.BotToken+'/sendMessage', SendKeyToChat)
                              .then(response => response.json())
                              .then(response => {
                                console.log('Обновляю пароль в Api')
                                UpdatePasswordInApi()
                              })
                              .catch(err => console.error(err));*/
                          }
                      }
                    }).catch(error => {
                      // handle error
                    })
                    /*

                    fetch('https://'+PasswordToken+'.mockapi.io/MyPartners/Kanban_Names', {
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
                    */
                    
                }
                if (request.Message=='false') {
                  console.log("НеХуй");
                  PasswordToken = request.PassToken;
                    LoginKey = request.LogToken

                    fetch('https://'+PasswordToken+'.mockapi.io/MyPartners/EISSD_Pass/1', {
                      method: 'GET',
                      headers: {'content-type':'application/json'},
                    }).then(res => {
                      if (res.ok) {
                          return res.json();
                      }
                      // handle error
                    }).then(tasks => {
                      if (LoginKey == tasks.LoginCode) {
                        console.log('Код подходит')
                        ApiToken = request.Token;
                        Apidd = tasks.LoginDate
                        if (Number(Apidd) < dd || Number(Apidd) > dd) {
                          console.log('Код просрочен')
                          /*
                          const SendKeyToChat = {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
                            body: '{"chat_id":"-1002064816512","text":"Код на сегодня: '+randomStr+'"}'
                          };

                          fetch('https://api.telegram.org/bot'+request.BotToken+'/sendMessage', SendKeyToChat)
                            .then(response => response.json())
                            .then(response => {
                              console.log('Обновляю пароль в Api')
                              UpdatePasswordInApi()
                            })
                            .catch(err => console.error(err));*/
                        }
                      }
                      else{
                        console.log('Код не подходит')
                      }
                    }).catch(error => {
                      // handle error
                    })
                }
            }
        }
    );

})


function GetAllDealsInCurrentMounth(){
  Columns = document.getElementsByClassName("main-kanban-column-title-text-inner")
  if(Columns[0].innerHTML == "Текущий месяц"){
    var DealsNumLenght = 0;
    FirstColumnCards = document.getElementsByClassName('main-kanban-column-items')[0].getElementsByClassName('main-kanban-item');
    for (var i = 0; i < FirstColumnCards.length; i++) { //Получаем карты которые можем найти в первой колонке битка
      DealsNum[i] = FirstColumnCards[i].getAttribute("data-id")
    }
    console.log(DealsNum)
    if (DealsNum.length < 10) {DealsNumLenght = DealsNum.length}
    else{DealsNumLenght = 10}

    const fetchPromises = [];
    for (var i = 0; i < DealsNumLenght; i++) {
      const options = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.5.1'
        },
        body: '{"id":"'+DealsNum[i]+'"}'
      };

      fetchPromises.push(
        fetch('https://speedinet.bitrix24.ru/rest/26/zc1pnfpm13jqthsw/crm.deal.get', options)
          .then(response => response.json())
          .then(response => Number(response.result.ASSIGNED_BY_ID))
          .catch(err => {
            console.error('Error fetching data:', err);
            return null;
          })
      );
    }

    Promise.all(fetchPromises)
      .then(responsibleIds => {
        console.log(responsibleIds);
        var AllDealsIs = areAllElementsSame(responsibleIds)
        if (document.getElementsByClassName('crm-kanban-total-price')[0].innerHTML.indexOf('crm-kanban-total-price-total2') < 0) {
          if (!AllDealsIs) {
            console.log("Смотрит все заявки")
            //Calculation_Of_Payment_From_CurrentMonth(!AllDealsIs, responsibleIds[0], 'C6:UC_Y6OU39')
          }
          else{
            console.log("Смотрит чьи то заявки")
            Calculation_Of_Payment_From_CurrentMonth(!AllDealsIs, responsibleIds[0], 'C6:UC_Y6OU39')
          }
        }
        if (document.getElementsByClassName('crm-kanban-total-price')[1].innerHTML.indexOf('crm-kanban-total-price-total2') < 0) {
          if (!AllDealsIs) {
            console.log("Смотрит все заявки")
            //Calculation_Of_Payment_From_CurrentMonth(!AllDealsIs, responsibleIds[0], 'C6:UC_OE7FJH')
          }
          else{
            console.log("Смотрит чьи то заявки")
            Calculation_Of_Payment_From_CurrentMonth(!AllDealsIs, responsibleIds[0], 'C6:UC_OE7FJH')
          }
        }
      });
  }
}



function GetPrice(){
  var Price = document.getElementsByClassName('crm-kanban-total-price-total');
  var Price1 = document.getElementsByClassName('crm-kanban-total-price');
    if(Columns[0].innerHTML == "Новая"){
      for (var i = 0; i < Price.length; i++) {
        var item = Price[i];  
        ItogPrice = parseInt(item.innerHTML.replace('&nbsp;','').replace('&nbsp;','').replace(' руб.',''))*0.145
        ItogPrice = Math.round(ItogPrice);
        ItogPrice = ItogPrice.toLocaleString();
        console.log(ItogPrice);
        if (Price1[i].innerHTML.indexOf('crm-kanban-total-price-total2') < 0) {
          console.log("НЕ НАШЕЛ, СОЗДАЮ НОВУЮ!")
          Price1[i].innerHTML += '<span class="crm-kanban-total-price-total2">'+'≈'+ItogPrice+' руб.'+'</span>';
        }
      }
    }
    else if(Columns[0].innerHTML == "Текущий месяц"){
      for (var i = 2; i < Price.length; i++) {
        var item = Price[i];  
        ItogPrice = parseInt(item.innerHTML.replace('&nbsp;','').replace('&nbsp;','').replace(' руб.',''))*0.145
        ItogPrice = Math.round(ItogPrice);
        ItogPrice = ItogPrice.toLocaleString();
        console.log(ItogPrice);
        if (Price1[i].innerHTML.indexOf('crm-kanban-total-price-total2') < 0) {
          console.log("НЕ НАШЕЛ, СОЗДАЮ НОВУЮ!")
          Price1[i].innerHTML += '<span class="crm-kanban-total-price-total2">'+'≈'+ItogPrice+' руб.'+'</span>';
        }
      }
    }

    setInterval(SetPriceIntrval, 6000);
  

}

function SetPriceIntrval(){
  console.log("ResponsibleIds: ", ResponsibleIds) //.result.ASSIGNED_BY_ID
  try{
    var Price = document.getElementsByClassName('crm-kanban-total-price-total');
    console.log(Price);

    var Price2 = document.getElementsByClassName('crm-kanban-total-price-total2');
    if (Columns[0].innerHTML == "Новая") {
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
            console.log("НЕ НАШЕЛ, СОЗДАЮ НОВУЮ!")
            Price1[i].innerHTML += '<span class="crm-kanban-total-price-total2">'+'≈'+ItogPrice+' руб.'+'</span>';
          }
              
        }
      }
    }
    else if(Columns[0].innerHTML == "Текущий месяц"){
      for (var i = 2; i < Price.length; ++i) {
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
            console.log("НЕ НАШЕЛ, СОЗДАЮ НОВУЮ!")
            Price1[i].innerHTML += '<span class="crm-kanban-total-price-total2">'+'≈'+ItogPrice+' руб.'+'</span>';
          }
              
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
    if (!IsListen) {
      AddListener_In_Head()
    }
  }
  catch(e){
    console.log(e)
  }
  
  try{

    GetAllDealsInCurrentMounth();
    var Tester = document.getElementsByClassName('crm-kanban-total-price-total');
    GetPrice();
    
    if (Columns[0].innerHTML == "Новая" && document.getElementsByClassName("main-kanban-column-title-info")[1].innerHTML.indexOf("spamText") < 0 && Agent_In_WhiteList) {
      if (Agent_In_WhiteList) {
        document.getElementsByClassName("main-kanban-column-title-info")[1].innerHTML += '<div class="main-kanban-column-title-spam-inner" id="spamText" style="position: relative;left: -114%;">Спам</div><div style="margin-left: 3%;position: relative;left: -112%;" class="main-kanban-column-title-spam-inner" id="NedovonText">Недозвоны (' + NedovonList.length + ')</div><div id="RestartNedozvonsDiv" style="height: 12px; margin-left: 1%; position: relative; top: 8px; left: -111%; border-bottom: none;"><img style="height: 12px;" id="RestartNedozvons" src="https://www.pngarts.com/files/2/Restart-Transparent-Image.png"></div>';
      }
      
    }
    /*
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
    */
    try{
      console.log("HideSpam: ", localStorage.getItem("HideSpam"))
      console.log("HideNedozvons: ", localStorage.getItem("HideNedozvons"))
      if (localStorage.getItem("HideSpam") == 'true') {
        hideSpam = true;
      } 
      else if (localStorage.getItem("HideSpam") == 'false') {
        hideSpam = false;
      } 
      if (localStorage.getItem("HideNedozvons") == 'true') {
        hideNedozvons = true;
      } 
      else if (localStorage.getItem("HideNedozvons") == 'false') {
        hideNedozvons = false;
      } 
      
    }
    catch(e){
      console.log(e)
      hideSpam = true
      hideNedozvons = false
    }
    console.log("hideSpam1: ", hideSpam)
    console.log("hideNedozvons1: ", hideNedozvons)

    if (hideSpam) {
      document.getElementById('spamText').style.borderBottom = "none";
    }
    else{
      document.getElementById('spamText').style.borderBottom = "2px solid #737373";
    }
    if (hideNedozvons) {
      document.getElementById('NedovonText').style.borderBottom = "none";
    }
    else{
      document.getElementById('NedovonText').style.borderBottom = "2px solid #737373";
    }
      /*
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
      */
  }


  catch{
    console.log("Не могу найти новые!");
    setTimeout(InStart, 6000);
  }
}



function UpdateCard(){

  try {
      const iframe = document.getElementsByClassName("side-panel-iframe")[0];
      const iWindow = iframe.contentWindow;
      const iDocument = iWindow.document;
      var NamesInApiCol = 0
      var PhoneIstochnic = null;
      var AnaliticIstochnic = null;

      try{
        if (window.location.href.indexOf("?BeryDeal") >= 0) {
          console.log("Сделка по кнопке беру")
          console.log("Сохраненный ID: ", localStorage.getItem("BeryDeal"))
          console.log("Текущий ID: ", window.location.href.split('/', 10)[6])
          if (localStorage.getItem("BeryDeal") != null) {
            if (localStorage.getItem("BeryDeal") != window.location.href.split('/', 10)[6]) {
              console.log("toolbar_deal_details_"+window.location.href.split('/', 10)[6]+"_call")
              console.log(iDocument.getElementById("toolbar_deal_details_"+window.location.href.split('/', 10)[6]+"_call"))
              iDocument.getElementById("toolbar_deal_details_"+window.location.href.split('/', 10)[6]+"_call").click()
              console.log("Звоню по сделке")
              localStorage.setItem("BeryDeal", window.location.href.split('/', 10)[6]);
            }
            else{
              console.log("Не звоню по сделке")

            }
          }
          else{
            iDocument.getElementById("toolbar_deal_details_5262814_call").click()
            console.log("Звоню по сделке")
            localStorage.setItem("BeryDeal", window.location.href.split('/', 10)[6]);
          }
        }
        
      }
      catch(e){
        console.error(e)
      }
      
      //console.log(iframe);
      
      var ButtonCollage = iDocument.getElementsByClassName("ui-entity-editor-header-title")[0];
      var EventCollage = iDocument.getElementsByClassName("crm-entity-stream-planned-label")[0];
      const iframeHead = iDocument.querySelectorAll("head")[0];
      //console.log(ButtonCollage);
      if (Agent_In_WhiteList && iDocument.querySelectorAll('input[name="SOURCE_ID"').length > 0) {
        iDocument.querySelectorAll('input[name="SOURCE_ID"')[0].type = ''
      }
      for (let index = 0; index < iDocument.getElementsByClassName("crm-timeline__text-block").length; index++) {
        if (iDocument.getElementsByClassName("crm-timeline__text-block")[index].innerText.indexOf('Приложение: Облачная АТС билайн бизнес:') >= 0) {
            console.log(iDocument.getElementsByClassName("crm-timeline__text-block")[index].innerText)
            if (iDocument.getElementsByClassName("crm-timeline__text-block")[index].innerText != undefined) {
              PhoneIstochnic = iDocument.getElementsByClassName("crm-timeline__text-block")[index].innerText.split(" ")[7];
            }
        }
      }
      if (iDocument.getElementsByClassName('crm-tracking-entity-path-item')[0].innerText == 'Прочий трафик') {
        console.log(iDocument.getElementsByClassName('crm-tracking-entity-path-item')[0].innerText)
        AnaliticIstochnic = iDocument.getElementsByClassName('crm-tracking-entity-path-item')[0].innerText;
      }
      console.log("PhoneIstochnic", PhoneIstochnic)
      console.log("AnaliticIstochnic", AnaliticIstochnic)
      


      iDocumentName = iDocument.getElementsByClassName('crm-widget-employee-name')[0];


      

      NamesInApiCol = 0;

          if (iDocumentName.innerHTML == "Александр Шатохин") {
            iDocumentName.setAttribute('style', 'background: linear-gradient(90deg, #1e1d1d 3%, #e10000 10%, #b38500 26%); font-weight:700; -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Никита Карабицин") {
            iDocumentName.setAttribute('style', 'background: linear-gradient(90deg, #d28c00 9%, #d24754 64%, #e55715 81%); font-weight:700; -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Татьяна Платонова") {
            iDocumentName.setAttribute('style', 'background: linear-gradient(90deg, #d28c00 9%, #d24754 64%, #e55715 81%); font-weight:700; -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Дмитрий Рязанов") {
            iDocumentName.setAttribute('style', 'background: linear-gradient(90deg, #2d2de3 3%, #0065e1 13%, #0033b3 8%); font-weight:700; -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Данил Плотников") {
            iDocumentName.setAttribute('style', 'background: linear-gradient(90deg, #2d2de3 3%, #0065e1 13%, #0033b3 8%); font-weight:700; -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Антон Чепиков") {
            iDocumentName.setAttribute('style', 'font-weight: 700; background: #b200c8; -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Никита Соседов") {
            iDocumentName.setAttribute('style', 'font-weight: 700;background: linear-gradient(90deg, #c700ff -8%, #4300ff 16%, #7c00ff -14%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Никита Верещагин") {
            iDocumentName.setAttribute('style', 'font-weight: 700;background: linear-gradient(90deg, #ff0000 0%, #ff9200 5%, #d1db17 11%, #62e300 14%, #0095ff 18%, #0008ff 26%, #7300ff 33%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Никита Колганов") {
            iDocumentName.setAttribute('style', 'font-weight: 700;background: linear-gradient(90deg, #dea909 84px, #b4b4b3 39px, #e9bd36 121px); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Вячеслав Шаляев") {
            iDocumentName.setAttribute('style', 'font-weight: 700;background: linear-gradient(90deg, #00c2d4 13%, #FF69B4 11%, #00c2d4 31%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          else if (iDocumentName.innerHTML == "Владислав Супрун") {
            iDocumentName.setAttribute('style', 'font-weight: 700;background: linear-gradient(90deg, #fb3c9b 13%, #f1489d 11%, #FF69B4 31%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
        
      
    if (EventCollage.innerHTML.indexOf("Закрыть Дела") < 0) {
      EventCollage.innerHTML += '<a id="CloseRevision">Закрыть Дела</a>';
      CloseRevisionText = iDocument.getElementById("CloseRevision");
      iDocument.querySelector("#CloseRevision").addEventListener("click", e => {
          var DealLink = window.location.href;
          var DealId = DealLink.split('/')[6];

          const Activitys = {
            method: 'POST',
            headers: {
              cookie: 'qmb=0.',
              'Content-Type': 'application/json',
              'User-Agent': 'insomnia/8.5.1'
            },
            body: '{ "filter": { "OWNER_TYPE_ID": "2", "OWNER_ID": "'+DealId+'", "STATUS": "1" } }'
          };

          fetch('https://speedinet.bitrix24.ru/rest/26/48qmdec3obtu7b6w/crm.activity.list', Activitys)
            .then(response => response.json())
            .then(response => {
            console.log(response)
            for (var i = 0; i < response.result.length; i++) {
              console.log(DealId, response.result[i].ID)
              const options1 = {
                method: 'POST',
                headers: {
                  cookie: 'qmb=0.',
                  'Content-Type': 'application/json',
                  'User-Agent': 'insomnia/8.5.1'
                },
                body: '{"id":"'+response.result[i].ID+'"}'
              };

              fetch('https://speedinet.bitrix24.ru/rest/26/48qmdec3obtu7b6w/crm.activity.delete', options1)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
              }
            })
            .catch(err => console.error(err));
            });

    }
    /*
    if (ButtonCollage.innerHTML.indexOf("Скопировать") < 0) {
      iframeHead.innerHTML += "<style>#CopyButton{border-bottom:1px dashed #2067b0;margin-left:10px}#CopyButton:hover{border-bottom:1px dashed #eef2f4; cursor: pointer;}#CloseRevision{color: white !important; font-weight: 600 !important; border-bottom: 1px dashed #ffffff; margin-left: 10px;}#CloseRevision:hover{border-bottom:1px dashed #9dcf00; cursor: pointer;}.crm-widget-employee-name{font-weight: 500;}</style>"
      ButtonCollage.innerHTML += '<a id="CopyButton">Скопировать</a><a style="margin-left: 10px;color: white;background-color: rgb(63, 205, 74);padding: 3px;border-radius: 9px;font-weight: 600;display: none;" id="newAlert">Успешно скопированно!</a><a style="margin-left: 10px;color: white;background-color: rgb(205 63 63);padding: 3px;border-radius: 9px;font-weight: 600;display: none;" id="newAlertError">Ошибка при Копировании!</a><a style="float: right; vertical-align: middle; border: 1px solid #eaeaea; border-radius: 10px; cursor: pointer;" id="CodyIcon"><img src="https://www.kody.su/favicon.ico" style="vertical-align: middle; height: 17px; border: medium none; padding: 4px;"></a><div class="Cody"></div>';
      CopyButtonText = iDocument.getElementById("CopyButton");
      newAlert = iDocument.getElementById("newAlert");
      newAlertError = iDocument.getElementById("newAlertError");
      iDocument.getElementsByClassName('ui-entity-editor-block-title-text')[8].innerHTML = "Комментарий (Для Партнерки)";
      

      


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
              var city_block = iDocument.getElementsByClassName("ui-entity-editor-content-block")[4];
              console.log("cityblock: ", city_block);

              var cityPredText = city_block.childNodes[2].childNodes[1].childNodes[1].innerText;
              console.log("cityPredText: ", cityPredText);
            }
            catch {
              var cityPredText = "Не заполнено";
            }
            try {
              var adress_block = iDocument.getElementsByClassName("ui-entity-editor-content-block")[6];
              console.log("adressblock: ", adress_block);

              var adressPredText = adress_block.childNodes[2].childNodes[1].childNodes[1].innerText;
              console.log("adressPredText: ", adressPredText);
            }
            catch {
              var adressPredText = "Не заполнено";
            }
            try {
              var PhoneNumber_block = iDocument.getElementsByClassName("ui-entity-editor-content-block")[8];
              console.log("PhoneNumberblock: ", PhoneNumber_block);

              var PhoneNumberPredText = PhoneNumber_block.childNodes[2].childNodes[1].childNodes[1].innerText;
              console.log("PhoneNumberPredText: ", PhoneNumberPredText);
            }
            catch {
              var PhoneNumberPredText = "Не заполнено";
            }

            try {
              var tarif_block = iDocument.getElementsByClassName("ui-entity-editor-content-block")[12];
              console.log("tarifblock: ", tarif_block);

              var tarifPredText = tarif_block.childNodes[2].childNodes[1].childNodes[1].innerText;
              console.log("tarifPredText: ", tarifPredText);
            }
            catch {
              var tarifPredText = "Не заполнено";
            }

            try {
              var koment_block = iDocument.getElementsByClassName("ui-entity-editor-content-block")[17]; 
              var komentPredText = koment_block.innerText;
              console.log("komentPredText: ", komentPredText);
            }
            catch(e) {
              console.log(e)
              var komentPredText = " ";
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
    */
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

function SetNames(){ //основное тело программы
  SetStartEvents()
  //Подготовка невидимой ссылки для беру и резервной кнопки
  if (document.getElementById("pagetitle").innerText == 'Сделки' && !ReplacePagetitle){
    console.log("Подготовка невидимой ссылки для беру")
    ReplacePagetitle = true;
    document.getElementById("pagetitle").innerHTML = '<a id="BeryHref" href="#" style="color:white; cursor: pointer;">Cделки</a>'
    console.log("Подготовка невидимой ссылки для беру завершена")

    
  }
  

  try{
    if (document.getElementsByClassName("im-phone-call-btn-tube").length > 0 && !Agent_In_WhiteList) {
      console.log("Нашел кнопку")
      if (CallRemove_Button_obj != document.getElementsByClassName("im-phone-call-btn-tube")[0]) {
        CallRemove_Button_isHide = false;
      }


      if (!CallRemove_Button_isHide) {
        document.getElementsByClassName("im-phone-call-btn-tube")[0].style.display = 'none'
        CallRemove_Button_isHide = true;
        CallRemove_Button_obj = document.getElementsByClassName("im-phone-call-btn-tube")[0];

        setTimeout(function(){
          console.log("Показываю кнопку")
          document.getElementsByClassName("im-phone-call-btn-tube")[0].style.display = "block";
        }, 15000);
      }
    }
    else{
      //console.log("Не нашел кнопку или агент в белом списке")
    }
  }
  catch(e){
    console.log(e)
  }
  
  try{
    getCallCard()
  }
  catch(e){
    console.log(e)
  }
  try{
    document.getElementsByClassName('popup-window-overlay')[0].style.display = 'none'
    console.log("Удалил: ", document.getElementsByClassName('popup-window-overlay')[0])
  }
  catch(e){
    //console.log(e)
  }
  try{
    NewCards = document.getElementsByClassName('main-kanban-column-items')[0].getElementsByClassName('main-kanban-item');
  }
  catch(e){
    console.log()
  }
  try{
    NewCardsForMonobrends = document.getElementsByClassName('main-kanban-column-items')[0].getElementsByClassName('main-kanban-item');
  }
  catch(e){
  }
  AllCards = document.getElementsByClassName('main-kanban-item');
  names = document.getElementsByClassName("crm-kanban-item-fields-item-value-name")
  Columns = document.getElementsByClassName("main-kanban-column-title-text-inner")

  Agent_In_WhiteList = false; 
  for (var i = 0; i < WhiteList.length; i++) {
    if (document.getElementById("user-block").innerText == WhiteList[i]) {
      Agent_In_WhiteList = true;
    }
  }
  if (Agent_In_WhiteList && ButtonOn) {
    //console.log("Агент в белом списке")
  }
  else if(!Agent_In_WhiteList && document.getElementsByClassName("main-kanban-column-title-info")[0].innerText.indexOf('Новая') >= 0 && ButtonOn && Hide_NewDeals){
    try{
      document.getElementsByClassName("main-kanban-column")[0].style.display = 'none'
    }
    catch(e){
      console.log(e)
    }
  }
  
  if (document.getElementsByClassName("ui-toolbar-title-item-box")[0].innerHTML.indexOf("Взять заявку") < 0 && document.getElementsByClassName("ui-btn-text")[1].innerText == 'ЗАЯВКИ' && ButtonOn) {
    document.getElementsByClassName("ui-toolbar-title-item-box")[0].innerHTML += '<div id="MoreDealsAlert" style="display: none;">Слишком много новых обращений, срочно возьми заявку!</div><button id="BeryButt" disabled class="ui-btn ui-btn-light-border ui-btn-themes" style="margin-left: 10px;width: auto;"><h1 style="" class="BeryButtText" >Взять заявку</h1></button>'
    document.getElementsByClassName("ui-toolbar-title-item-box")[0].innerHTML += '<button id="BeryButt_InQueue" disabled class="ui-btn ui-btn-light-border ui-btn-themes" style="margin-left: 10px;width: auto;"><h1 style="" class="BeryButtText" >Выйти из очереди</h1></button>'
    document.getElementsByClassName("ui-toolbar-title-item-box")[0].innerHTML += '<button id="BeryButt_OutQueue" disabled class="ui-btn ui-btn-light-border ui-btn-themes" style="margin-left: 10px;width: auto;"><h1 style="" class="BeryButtText" >В очередь</h1></button>'
    if (ReservButtonOn) {
      document.getElementsByClassName("ui-toolbar-title-item-box")[0].innerHTML += '<button id="BeryButt_Reserv" class="ui-btn ui-btn-light-border ui-btn-themes" style="margin-left: 10px;width: auto;"><h1 class="BeryButtText" >БЕРУ!</h1></button>'
      document.getElementById("BeryButt_Reserv").addEventListener("click", e => {
        ReservBery()
      });
    }
    
    
    document.getElementById("BeryButt").addEventListener("click", e => {
      Bery_OnClick()
    });
    document.getElementById("BeryButt_InQueue").addEventListener("click", e => {
      Bery_InQueue_OnClick()
    });
    document.getElementById("BeryButt_OutQueue").addEventListener("click", e => {
      Bery_OutQueue_OnClick()
    });
    GetAllNewsCount()


  }
  try{
    if (BeryButtState == "Bery") {
      document.getElementById("BeryButt").style.display = 'inline-block'
      document.getElementById("BeryButt_InQueue").style.display = 'none'
      document.getElementById("BeryButt_OutQueue").style.display = 'none'
    }
    if (BeryButtState == "InQueue") {
      document.getElementById("BeryButt").style.display = 'none'
      document.getElementById("BeryButt_InQueue").style.display = 'inline-block'
      document.getElementById("BeryButt_OutQueue").style.display = 'none'
    }
    if (BeryButtState == "OutQueue") {
      document.getElementById("BeryButt").style.display = 'none'
      document.getElementById("BeryButt_InQueue").style.display = 'none'
      document.getElementById("BeryButt_OutQueue").style.display = 'inline-block'
    }
    if (RemoveDisable_FromBery) {
      try{
        document.getElementById("BeryButt").removeAttribute('disabled');
      }
      catch(e){
        console.log("Кнопки Взять Заявку нет!")
      }
      try{
        document.getElementById("BeryButt_InQueue").removeAttribute('disabled');
      }
      catch(e){
        console.log("Кнопки Выйти из очереди нет!")
      }
      try{
        document.getElementById("BeryButt_OutQueue").removeAttribute('disabled');
      }
      catch(e){
        console.log("Кнопки В очередь нет!")
      }
    }
  }
  catch(e){

  }


  if(randomIndex1 > 0 && randomIndex1 <= 10){
    if (document.getElementById("user-block").innerText == "Александр Шатохин" || document.getElementById("user-block").innerText == "Павел Обухов" || document.getElementById("user-block").innerText == "Павел Андреевич"|| document.getElementById("user-block").innerText == "Павел Андреевич" || document.getElementById("user-block").innerText =="Александр Шатохин" || document.getElementById("user-block").innerText =="Марк Плющ") {
      document.getElementsByClassName("logo-text")[0].innerText='Прокладка'
    }
  }
  if (document.getElementById("user-block").innerText == "Александр Шатохин" || document.getElementById("user-block").innerText == "Юлия Рыжова" || document.getElementById("user-block").innerText =="Александр Шатохин" ) {
    document.getElementsByClassName("logo-text")[0].innerText='ShpeetInet'
  }

  
  try{
    for (var i = 0; i <= Columns.length; i++) {
      if (Columns[i].innerHTML == "Недозвоны" && document.getElementById("user-block").innerText == "Александр Шатохин") {
        Columns[i].innerHTML = "Мусорка"
      }
      if (Columns[i].innerHTML == "Недозвоны" && document.getElementById("user-block").innerText == "Павел Андреевич") {
        Columns[i].innerHTML = "Мусорка"
      }

      if (Columns[i].innerHTML == "Недозвоны" && document.getElementById("user-block").innerText == "Марк Плющ") {
        Columns[i].innerHTML = "Мусорка"
      }
    }
  }
  catch {
  }
  //console.log("Работаю", NewCards.length)


  
  console.log(NewCards)
  for (var i = 0; i <= (NewCards.length-1); i++) { // Проверка карточек на спам, дубли и перенесенных из недозвонов, плюс кнопка для перенса сделок
    if (Columns[0].innerHTML == "Новая" && (NewCards[i].innerHTML.indexOf("Номер") < 0 || NewCards[i].innerHTML.indexOf("INSIDE") >= 0 || NewCards[i].innerHTML.indexOf("74953747869") >= 0 || NewCards[i].innerHTML.indexOf("MUQUARI") >= 0 || NewCards[i].innerHTML.indexOf("MUQARI") >= 0 || NewCards[i].innerHTML.indexOf("jenay") >= 0 || NewCards[i].innerHTML.indexOf("Заявка на расчет для частного дома") >= 0 || NewCards[i].innerHTML.indexOf("TIGLACK") >= 0 || NewCards[i].innerHTML.indexOf("Здравствуйте, есть базы") >= 0 || NewCards[i].innerHTML.indexOf("Здравствуйте, если Вы используете базы для поиска новых Клиентов") >= 0 )) {
        console.log("Найдена пустая завка ", i)

        if (Agent_In_WhiteList) {
          if(NewCards[i].getElementsByClassName('crm-kanban-item-aside')[0].innerHTML.indexOf('SpamIMG') < 0){
            NewCards[i].getElementsByClassName('crm-kanban-item-aside')[0].innerHTML += '<span id="'+NewCards[i].getElementsByClassName("crm-kanban-item-title")[0].href.split('/', 10)[6]+'" data-type="im" class="crm-kanban-item-contact-im crm-kanban-item-contact-im-disabled SpamIMG" style="background-size: 17px 16px;font-weight: 600;color: red;font-size: 12px;border: 2px solid red;padding-right: 4px;padding-left: 4px;padding-top: 0px;height: 18px;width: 28px;">spam</span>'
          
            Dealid = NewCards[i].getElementsByClassName("crm-kanban-item-title")[0].href.split('/', 10)[6]
            NewCards[i].getElementsByClassName('crm-kanban-item-aside')[0].getElementsByClassName('SpamIMG')[0].addEventListener('click', function (e) {
              console.log("Удаляю: ", this.id)
              this.style.display = 'none'
              //this.parentNode.parentNode.parentNode.parentNode.style.display = 'none'
              const GetAgentList = {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.3.2'}
              };

              fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', GetAgentList)
                .then(response => response.json())
                .then(response => {
                  console.log("NoWork_Agents: ", response)
                  for (var i = 0; i < response.length; i++) {
                    if (document.getElementById("user-name").innerText == "Александр Шатохин") {
                      document.getElementById("user-name").innerText = "Александр Шатохин"
                    }
                    if (document.getElementById("user-name").innerText == "Павел Андреевич") {
                      document.getElementById("user-name").innerText = "Павел Обухов"
                    }
                    console.log("Сверяю: ", response[i].user, "и", document.getElementById("user-block").innerText)
                    if (response[i].user == document.getElementById("user-block").innerText) {
                      console.log("Совпалость")
                      AgentInList = true;
                      //Если агент есть в списке
                      fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents/'+response[i].id, {
                        method: 'PUT', // or PATCH
                        headers: {'content-type':'application/json'},
                        body: '{"LastBeryClick":'+currentUnix+', "Online":true}'
                      }).then(res => {
                        if (res.ok) {
                            return res.json();
                        }
                        // handle error
                      }).then(task => {
                        console.log("Изменил Unix: ", task)
                      }).catch(error => {
                        // handle error
                      })
                    }
                  }
                  if(!AgentInList){
                    console.log("Агент не найден в списке, добавляю нового")
                    const newTask = {
                      "user": document.getElementById("user-block").innerText,
                      "LastBeryClick": currentUnix,
                      "Online": true,
                      "BT_Id": document.getElementById("user-block").getAttribute("data-user-id")
                    };
                    fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', {
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
                })
                .catch(err => console.error(err));
              const options = {
                method: 'POST',
                headers: {
                cookie: 'qmb=0.',
                  'Content-Type': 'application/json',
                  'User-Agent': 'insomnia/8.6.0'
                },
                body: '{"id":"'+this.id+'","fields":{"UF_CRM_1694601072": "5702", "STAGE_ID":"UC_93XIL7"}}'
                };

                fetch('https://speedinet.bitrix24.ru/rest/26/48qmdec3obtu7b6w/crm.deal.update', options)
                  .then(response => response.json())
                  .then(response => {
                    console.log(response);
                    
                  })
                  .catch(err => console.error(err));
            });
          }

        }
        
        
    }
    else if (Columns[0].innerHTML == "Новая" && HideWorkImg == false){
        //console.log("Найдена завка ", i)

        if (document.getElementById("user-block").innerText == "Павел Андреевич" || document.getElementById("user-block").innerText == "Марк Плющ" || document.getElementById("user-block").innerText == "Александр Шатохин" || document.getElementById("user-block").innerText == "Владислав Супрун") {
          //console.log(NewCards[i].getElementsByClassName('crm-kanban-item-aside'))
          if(NewCards[i].getElementsByClassName('crm-kanban-item-aside')[0].innerHTML.indexOf('WorkIMG') < 0){
            NewCards[i].getElementsByClassName('crm-kanban-item-aside')[0].innerHTML += '<span id="'+NewCards[i].getElementsByClassName("crm-kanban-item-title")[0].href.split('/', 10)[6]+'" data-type="im" class="WorkIMG" style="border-radius: 5px; background-size: 17px 16px; cursor:pointer; font-weight: 600;color: white;font-size: 12px;border: 2px solid white;padding-right: 4px;padding-left: 4px;padding-top: 0px;height: 18px;width: 11px;">W</span>'
          
            Dealid = NewCards[i].getElementsByClassName("crm-kanban-item-title")[0].href.split('/', 10)[6]
            NewCards[i].getElementsByClassName('crm-kanban-item-aside')[0].getElementsByClassName('WorkIMG')[0].addEventListener('click', function (e) {
              console.log("Удаляю: ", this.id)
              this.style.display = 'none'
              //this.parentNode.parentNode.parentNode.parentNode.style.display = 'none'
              const GetAgentList = {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.3.2'}
              };

              fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', GetAgentList)
                .then(response => response.json())
                .then(response => {
                  console.log("NoWork_Agents: ", response)
                  for (var i = 0; i < response.length; i++) {
                    if (document.getElementById("user-name").innerText == "Александр Шатохин") {
                      document.getElementById("user-name").innerText = "Александр Шатохин"
                    }
                    if (document.getElementById("user-name").innerText == "Павел Андреевич") {
                      document.getElementById("user-name").innerText = "Павел Обухов"
                    }
                    console.log("Сверяю: ", response[i].user, "и", document.getElementById("user-block").innerText)
                    if (response[i].user == document.getElementById("user-block").innerText) {
                      console.log("Совпалость")
                      AgentInList = true;
                      //Если агент есть в списке
                      fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents/'+response[i].id, {
                        method: 'PUT', // or PATCH
                        headers: {'content-type':'application/json'},
                        body: '{"LastBeryClick":'+currentUnix+', "Online":true}'
                      }).then(res => {
                        if (res.ok) {
                            return res.json();
                        }
                        // handle error
                      }).then(task => {
                        console.log("Изменил Unix: ", task)
                      }).catch(error => {
                        // handle error
                      })
                    }
                  }
                  if(!AgentInList){
                    console.log("Агент не найден в списке, добавляю нового")
                    const newTask = {
                      "user": document.getElementById("user-block").innerText,
                      "LastBeryClick": currentUnix,
                      "Online": true,
                      "BT_Id": document.getElementById("user-block").getAttribute("data-user-id")
                    };
                    fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', {
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
                })
                .catch(err => console.error(err));
              const SendToWork_For_WorkImg = {
                method: 'POST',
                headers: {
                cookie: 'qmb=0.',
                  'Content-Type': 'application/json',
                  'User-Agent': 'insomnia/8.6.0'
                },
                body: '{"id":"'+this.id+'","fields":{"STAGE_ID":"PREPARATION"}}'
                };

                const SendInfo_To_Bot = {
                  method: 'POST',
                  headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
                  body: '{"chat_id":"-4248241774","text":"Я перевел сделку: '+this.id+' в работу Агенту: '+document.getElementById("user-block").innerText+' через Кнопку Беру"}'
                };

                fetch('https://api.telegram.org/bot7536226475:AAG5C4lJljhCzGdqS8nl5DIjK2NoLuHCgbg/sendMessage', SendInfo_To_Bot)
                  .then(response => response.json())
                  .then(response => {

                  fetch('https://speedinet.bitrix24.ru/rest/26/48qmdec3obtu7b6w/crm.deal.update', SendToWork_For_WorkImg)
                    .then(response => response.json())
                    .then(response => {
                      console.log(response);
                          const SetOtvetstnenniy1 = {
                            method: 'POST',
                            headers: {
                              cookie: 'qmb=0.',
                              'Content-Type': 'application/json',
                              'User-Agent': 'insomnia/8.6.1'
                            },
                            body: '{"id":"'+this.id+'","fields":{"ASSIGNED_BY_ID":"'+document.getElementById("user-block").getAttribute("data-user-id")+'"}}'
                          };

                          fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', SetOtvetstnenniy1)
                            .then(response => response.json())
                            .then(response => {
                              console.log(response)
                              //window.location.href = "/crm/deal/details/"+this.id+"/";
                              document.getElementById("BeryHref").href = "/crm/deal/details/"+this.id+"/";
                              document.getElementById("BeryHref").click()
                            })
                            .catch(err => console.error(err));
                    })
                    .catch(err => console.error(err));
                  })
                  .catch(err => console.error(err));
            });
          }
        }
        
    }

    try{
      if (NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сегодня") >= 0){
        TodayTime = NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.replace("сегодня, ", "")
        TodayTime = TodayTime.split(':')[0]
        TodayTime = Number(TodayTime)
        var date = new Date();
        CurrentHour = date.getHours()
        //console.log("TodayTime: ", TodayTime, "\n", "CurrentHour: ", CurrentHour)
      }
    

      if (Agent_In_WhiteList) {
        /*if (NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сегодня") >= 0 && CurrentHour-TodayTime >= 3 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("вчера") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("ноябр") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("декабр") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("январ") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("феврал") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("март") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("апрел") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("мая") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("июня") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("июля") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("август") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сентяб") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("октяб") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf(".") >= 0 && NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf(":") >= 0 && Columns[0].innerHTML == "Новая" ) {
            if (hideNedozvons) { //Трахать сюда
              NewCards[i].style.display = "none";
            }
            else{
              NewCards[i].style.display = "block";
              NewCards[i].getElementsByClassName("crm-kanban-item")[0].setAttribute('style', '--crm-kanban-item-color: rgb(164 0 240 / 70%);');
            }
            
            NedozLids++;
        }*/
        for (var k = 0; k < NedovonList.length; k++) {
          if (NewCards[i].innerHTML.indexOf(NedovonList[k]) >= 0 && Columns[0].innerHTML == "Новая") {
     
              NewCards[i].style.display = "block";
              NewCards[i].getElementsByClassName("crm-kanban-item")[0].setAttribute('style', '--crm-kanban-item-color: rgb(164 0 240 / 70%);');
          }
        }
      }

      if (NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сегодня") >= 0 && CurrentHour-TodayTime >= 1 && CurrentHour-TodayTime <= 2) {
          NewCards[i].getElementsByClassName("crm-kanban-item")[0].setAttribute('style', '--crm-kanban-item-color: rgb(240 0 0 / 70%);');
      }
    }
    catch(e){
      console.log(e);
    }
    try{
      if (i == (NewCards.length-1)) {
        document.getElementsByClassName("main-kanban-column-title-spam-inner")[0].innerText = 'Спам (' + DelLids + ')';

        DelLids = 0;
      }
      if (Agent_In_WhiteList) {
        if (i == (NewCards.length-1)) {
          document.getElementsByClassName("main-kanban-column-title-spam-inner")[1].innerText = 'Недозвоны (' + NedovonList.length + ')';
          //console.log('NedozLids: ', NedozLids)
          //NedozLids = 0;
        }
      }
    }
    catch(e){
      console.log(e)
    }


  }
  try{
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.gis, 'SpeedInet');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.Pakt, 'Пакт');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.SpeedNet, 'Speed-Net');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.SpeedNet1, 'Speed-Net');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.DomRu1, 'ДомРу');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.PerSet, 'Певые Сети');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.SibSet, 'СибСети');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.DomRu2, 'ДомРу');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.DomRu3, 'ДомРу');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.DomRu4, 'ДомРу');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.IgraServise, 'Игра Сервис');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.DomRu5, 'ДомРу');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.DomRu6, 'ДомРу');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.DomRu7, 'ДомРу');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.EG1, 'ЭГ');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.EG2, 'ЭГ');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.Axioma, 'Axioma');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.Orion1, 'Орион');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.Orion2, 'Орион');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.NorCom1, 'НорКом');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.NorCom2, 'НорКом');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.Telecoma1, 'Телекома');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.Telecoma2, 'Телекома');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.TwoCom, '2КОМ');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.Izet, 'АйЗет');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.CheTel, 'Череповец Телеком');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.NowgorodTel, 'Новгород Телеком');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.YarKom, 'ЯрКом');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.Centra, 'Центра');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.Etel1, 'E-Телеком');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.Etel2, 'E-Телеком');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.YfaNet, 'Уфа-Нет');
      document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML = document.getElementsByClassName('im-phone-call-title-text')[0].innerHTML.replace(Anal_Phone_Reshifrator.SkyNet, 'SkyNet');
  }
  catch(e){
    //console.log('e', e)
  }
  
  for (var i = 0; i <= (AllCards.length-1); i++){
    getNumberFromCard(AllCards[i])
  }
  
  //console.log("Отправляю в функцию: ", AllNumbers)
  FoundDublicate(AllFields, AllNumbers)
  
  AllNumbers.length=0
  AllFirlds.length=0
  

  if (document.getElementById("user-block").innerText != "Михаил Ерисов" || document.getElementById("user-block").innerText != "Дмитрий Полховский") {
    for (var i = 0; i <= (names.length-1); i++) { //Смена имени
      //Новый Код
      

          /*var div = document.createElement('div');
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
          names[i].parentNode.appendChild(div);*/
          if (names[i].innerHTML == "Александр Шатохин") {
            names[i].setAttribute('style', 'animation: background 4s infinite alternate; font-weight:700; background: linear-gradient(90deg, #1e1d1d 13%, #e10000 67%, #b38500 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          if (names[i].innerHTML == "Татьяна Платонова") {
            names[i].setAttribute('style', 'font-weight:700; background: linear-gradient(90deg, #d28c00 9%, #d24754 64%, #e55715 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          if (names[i].innerHTML == "Никита Карабицин") {
            names[i].setAttribute('style', 'font-weight:700; background: linear-gradient(90deg, #d28c00 9%, #d24754 64%, #e55715 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          if (names[i].innerHTML == "Дмитрий Рязанов") {
            names[i].setAttribute('style', 'font-weight:700; background: linear-gradient(90deg, #2d2de3 13%, #0065e1 67%, #0033b3 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          if (names[i].innerHTML == "Даниил Плотников") {
            names[i].setAttribute('style', 'font-weight:700; background: linear-gradient(90deg, #2d2de3 13%, #0065e1 67%, #0033b3 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          if (names[i].innerHTML == "Антон Чепиков") {
            names[i].setAttribute('style', 'font-weight: 700; background: #b200c8; -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          if (names[i].innerHTML == "Владислав Супрун") {
            names[i].setAttribute('style', 'font-weight:700; background: linear-gradient(90deg, #c700ff 13%, #4300ff 67%, #7c00ff 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          if (names[i].innerHTML == "Никита Верещагин") {
            names[i].setAttribute('style', 'font-weight: 700; background: linear-gradient(90deg, #ff0000 -8%, #ff9200 20%, #d1db17 35%, #62e300 62%, #0095ff 80%, #0008ff 90%, #7300ff 101%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          if (names[i].innerHTML == "Вячеслав Шаляев") {
            names[i].setAttribute('style', 'animation: background 4s infinite alternate; font-weight: 700; background: linear-gradient(90deg, #00c2d4 22%, #FF69B4 62%, #00c2d4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          /*if (names[i].innerHTML == "Владислав Супрун") {
            names[i].setAttribute('style', 'animation: background 4s infinite alternate; font-weight: 700; background: linear-gradient(90deg, #fb3c9b 31%, #f1489d 38%, #FF69B4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          } */
          if (names[i].innerHTML == "Павел Обухов") {
            names[i].setAttribute('style', 'animation: background 4s infinite alternate; font-weight: 700; background: linear-gradient(90deg, #3374b7 13%, #004893 67%, #3374b7 81%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
          }
          if (names[i].innerHTML == "Вячеслав Нечай") {
            names[i].setAttribute('style', 'font-family: sans-serif; font-size: 10px; margin-left: 2px; font-weight: 300; background: linear-gradient(90deg, #00c2d4 22%, #FF69B4 62%, #00c2d4 100%); -webkit-background-clip: text; -webkit-text-stroke: 3px transparent; color: #fff; letter-spacing: 4px; animation: background 4s infinite alternate;');
          }
          //names[i].parentNode.innerHTML += '<div style="background: #ebebeb;height: 46px;border-radius: 4px;color: #343b43;"><span>Это имя видят только пользователь расширения MyPartners, если вы хотите кастомизировать свое имя, обратитесь к Разработчику @Rothaarige_Bestia</span></div>';

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
      //console.log(e)
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
      
    }
    
  }


}
function AddListener_In_Head(){
  try{
    document.getElementById('RestartNedozvonsDiv').addEventListener('click', function (e) {
      console.log("Делается 0")
      AllNewsCount = 0;
      AllNews = [];
      NedovonList = [];
      GetAllNewsCount()
    });
    IsListen = true
  }
  catch(e){
    console.log(e)
  }
    if (Agent_In_WhiteList) {
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
          localStorage.setItem("HideSpam", hideSpam);

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
          localStorage.setItem("HideNedozvons", hideNedozvons);
      });
    }
    else{
      hideSpam = true
      localStorage.setItem("HideSpam", hideSpam);
    }
}

function CutPidorasov(){ //Обрезание пидорасов
  try{
    IsMonobrendInSpisok = false;
    IsMonobrendInIsklychenia = false;
    for (var i = 0; i <= (NewCards.length-1); i++) { //Каждые 200мс проверяет карточки в Новых
      console.log("NewCardsForMonobrends[i].innerText: ", NewCardsForMonobrends[i].innerText)
      console.log("NewCardsForMonobrends[i].innerText speedinet.ru: ", NewCardsForMonobrends[i].innerText.indexOf("speedinet.ru") < 0)
      console.log("NewCardsForMonobrends[i].innerText - Входящий: ", NewCardsForMonobrends[i].innerText.indexOf("- Входящий") < 0)
      console.log("NewCardsForMonobrends[i].innerText per-set.ru: ", NewCardsForMonobrends[i].innerText.indexOf("per-set.ru") < 0)
      console.log("NewCardsForMonobrends[i].innerText входящий вызов: ", NewCardsForMonobrends[i].innerText.indexOf("входящий вызов") < 0)
      // Проверка карточек на Монобренд
      if (Columns[0].innerHTML == "Новая" && (NewCardsForMonobrends[i].innerText.indexOf("speedinet.ru") < 0 && NewCardsForMonobrends[i].innerText.indexOf("- Входящий") < 0 && NewCardsForMonobrends[i].innerText.indexOf("per-set.ru") < 0)){
        console.log("Нашел Монобренд!")
        for (var j = 0; j < NewsMonobrends.length; j++) { //Проверяем спрятана ли уже карточка
          console.log("Проверяю монобренд "+NewCardsForMonobrends[i].getElementsByClassName("crm-kanban-item-title")[0].href.split('/', 10)[6]+" в списке")
          console.log("NewsMonobrends: ", NewsMonobrends)
          console.log("Сравниваю: ", NewsMonobrends[j], " и ", NewCardsForMonobrends[i].getElementsByClassName("crm-kanban-item-title")[0].href.split('/', 10)[6])
          if (NewsMonobrends[j] == NewCardsForMonobrends[i].getElementsByClassName("crm-kanban-item-title")[0].href.split('/', 10)[6]){
            IsMonobrendInSpisok = true;
            console.log("Монобренд есть в массиве")
          }
        }
        for (var j = 0; j < NewsMonobrendsIsklychenia.length; j++) { //Проверяем показана ли уже карточка
          console.log("Проверяю монобренд в исключениях"+NewCardsForMonobrends[i].getElementsByClassName("crm-kanban-item-title")[0].href.split('/', 10)[6]+" в списке")
          console.log("NewsMonobrendsIsklychenia: ", NewsMonobrendsIsklychenia)
          console.log("Сравниваю исключения: ", NewsMonobrendsIsklychenia[j], " и ", NewCardsForMonobrends[i].getElementsByClassName("crm-kanban-item-title")[0].href.split('/', 10)[6])
          if (NewsMonobrendsIsklychenia[j] == NewCardsForMonobrends[i].getElementsByClassName("crm-kanban-item-title")[0].href.split('/', 10)[6]){
            IsMonobrendInIsklychenia = true;
            console.log("Монобренд есть в массиве исключений")
          }
        }
        if (!IsMonobrendInSpisok && !IsMonobrendInIsklychenia){ //Прячем карту если она еще девочка
            console.log("Монобренда нет в списке!")

            NewCardsForMonobrends[i].style.display = 'none';
            NewsMonobrends.push(NewCardsForMonobrends[i].getElementsByClassName("crm-kanban-item-title")[0].href.split('/', 10)[6]);
            console.log("Добавил номер в массив")
            IsMonobrendInSpisok = false;
            setTimeout(CutPidorasovTime, 3000)
        }
        if (IsMonobrendInIsklychenia) { //Показываем карту если прошло 3сек
          NewCardsForMonobrends[i].style.display = 'block';
          IsMonobrendInSpisok = false
        }
      }
      else{
        console.log("Не трогаю заявку") //Не трогаем карту если это Мультибренд
        NewCardsForMonobrends[i].style.display = 'block';
      }

    }
  }
  catch(e){
    console.log("При обрезании пидорасов произошло ошибка: ", e)
  }
}

function CutPidorasovTime(){
  console.log("Время вышло, добавляю в исключения")
  
  for (var j = 0; j < NewsMonobrends.length; j++) {
    NewsMonobrendsIsklychenia.push(NewsMonobrends[j])
  }
  NewsMonobrends = ['R_B']

}

function ReplaceAlerts(){
  DealAlerts = document.getElementsByClassName("ui-notification-manager-browser-balloon");
  
    for (var i = 0; i < DealAlerts.length; i++) {
      //console.log(DealAlerts[i].innerText) 
      //console.log(DealAlerts[i].innerText.indexOf("У вас новая заявка Заявка") >= 0)
      //console.log(DealAlerts[i].innerHTML.indexOf("Тест Сайтов") >= 0)
      //console.log(DealAlerts[i].innerHTML.indexOf("Дмитрий Полховский") >= 0)
      //console.log(DealAlerts[i].innerHTML.indexOf("Неотвеченый Звонок") >= 0)
      //console.log(DealAlerts[i].innerHTML.indexOf("Тест Сайтов") >= 0 && DealAlerts[i].innerHTML.indexOf("Дмитрий Полховский") >= 0 && DealAlerts[i].innerHTML.indexOf("Неотвеченый Звонок") >= 0)
      //console.log(DealAlerts[i].innerText.indexOf("У вас новая заявка Заявка") >= 0 && (DealAlerts[i].innerHTML.indexOf("Тест Сайтов") >= 0 && DealAlerts[i].innerHTML.indexOf("Дмитрий Полховский") >= 0 && DealAlerts[i].innerHTML.indexOf("Неотвеченый Звонок") >= 0))

      DealAlerts[i].style.display = "none";
      
    }
  
  

}

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.code === "Space")
    {  
      console.log("Делается 1")
      AllNewsCount = 0;
      AllNews = [];
      NedovonList = [];
      GetAllNewsCount()
    }
});

function SetOtvetstnenniy(Dealid, Otvid){
  const SetOtv = {
  method: 'POST',
  headers: {
  cookie: 'qmb=0.',
    'Content-Type': 'application/json',
    'User-Agent': 'insomnia/8.6.1'
  },
  body: '{"id":"'+Dealid+'","fields":{"ASSIGNED_BY_ID":"'+Otvid+'"}}'
  };

  fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', SetOtv)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
}
function extractAfter9(str) {
  const index = str.indexOf("9");
  if (index !== -1) {
    return str.slice(index + 1);
  } else {
    return "";
  }
}

function Interviewing_New(){
  const options = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.5.1'
    },
    body: '{"filter":{"STAGE_ID":"NEW"},"start":"0"}'
  };

  fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      console.log("----------------------------------------")
      console.log("-------------Проверка Очереди-----------")
      console.log("-------------Проверка Очереди-----------")
      console.log("-------------Проверка Очереди-----------")
      console.log("-------------Проверка Очереди-----------")
      console.log("-------------Проверка Очереди-----------")
      console.log("-------------Проверка Очереди-----------")
      console.log("-------------Проверка Очереди-----------")
      console.log("----------------------------------------")
      if (response.total == 0) {
        console.log("-------Новых нет, молчу в тряпочку------")
      }
      else{
        fetch('https://656de619bcc5618d3c242ec1.mockapi.io/Bitrix_Queue', {
          method: 'GET',
          headers: {'content-type':'application/json'},
        }).then(res => {
          if (res.ok) {
            return res.json();
          }
              // handle error
        }).then(Queue => {
          console.log(Queue)
          if (Queue[0].AgentId == document.getElementById("user-block").innerText) {
            console.log("Прерываем интервал")
            
            console.log("Переводим ему в работу заявку")
            for (var i = 0; i < Queue.length; i++) {
              if (Queue[i].AgentId == document.getElementById("user-block").innerText) {
                fetch('https://656de619bcc5618d3c242ec1.mockapi.io/Bitrix_Queue/'+Queue[i].id, {
                  method: 'DELETE',
                }).then(res => {
                  if (res.ok) {
                    return res.json();
                  }
                  // handle error
                }).then(task => {
                  
                  Bery_OnClick()
                  if (BeryDealIsTrue) {
                    console.log("BeryDealIsTrue сделка взята: ", BeryDealIsTrue)
                    BeryButtState = "OutQueue"
                    BeryDealIsTrue = false
                    stopInterval()
                  }
                  else{
                    console.log(console.log("BeryDealIsTrue сделка не взята: ", BeryDealIsTrue))
                  }
                }).catch(error => {
                    
                })
              }
            }
            
          }
          else{
            console.log("Ничего не делаем, ждем дальше.")
          }
                
        }).catch(error => {
              // handle error
        })
      }
    })
    .catch(err => console.error(err));
}





function Bery_InQueue_OnClick(){
  console.log("Жмак 1!")
  fetch('https://656de619bcc5618d3c242ec1.mockapi.io/Bitrix_Queue', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
        // handle error
  }).then(Queue => {
    console.log(Queue)
    for (var i = 0; i < Queue.length; i++) {
      if (Queue[i].AgentId == document.getElementById("user-block").innerText) {
        fetch('https://656de619bcc5618d3c242ec1.mockapi.io/Bitrix_Queue/'+Queue[i].id, {
          method: 'DELETE',
        }).then(res => {
          if (res.ok) {
            return res.json();
          }
          // handle error
        }).then(task => {
          BeryButtState = "OutQueue"
          stopInterval()
        }).catch(error => {
            // handle error
        })
      }
    }
          
  }).catch(error => {
        // handle error
  })
  
}
function Bery_OutQueue_OnClick(){
  console.log("Жмак 2!")


  const newAgentToQueue = {
    AgentId: document.getElementById("user-block").innerText
  };

  fetch('https://656de619bcc5618d3c242ec1.mockapi.io/Bitrix_Queue/', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(newAgentToQueue)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    BeryButtState = "InQueue"
    startInterval()
  }).catch(error => {
    // handle error
  })
  
}

function Queue_Start_Script(){


  const options = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.5.1'
    },
    body: '{"filter":{"STAGE_ID":"NEW"},"start":"0"}'
  };

  fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      console.log("Начало работы с очередью")

      fetch('https://656de619bcc5618d3c242ec1.mockapi.io/Bitrix_Queue', {
        method: 'GET',
        headers: {'content-type':'application/json'},
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(Queue => {
          console.log(Queue)
          if (response.total == 0 && Queue.length > 0) {
            for (var i = 0; i < Queue.length; i++) {
              if (Queue[i].AgentId == document.getElementById("user-block").innerText) {
                BeryButtState = "InQueue"
                const GetAgentList = {
                  method: 'GET',
                  headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.3.2'}
                };

                OpenWorkFunc();

                fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', GetAgentList)
                  .then(response => response.json())
                  .then(response => {
                    console.log("NoWork_Agents: ", response)
                    for (var i = 0; i < response.length; i++) {
                      if (document.getElementById("user-name").innerText == "Александр Шатохин") {
                        document.getElementById("user-name").innerText = "Александр Шатохин"
                      }
                      if (document.getElementById("user-name").innerText == "Павел Андреевич") {
                        document.getElementById("user-name").innerText = "Павел Обухов"
                      }
                      console.log("Сверяю: ", response[i].user, "и", document.getElementById("user-name").innerText)
                      if (response[i].user == document.getElementById("user-name").innerText) {
                        console.log("Совпалость")
                        AgentInList = true;
                        //Если агент есть в списке
                        fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents/'+response[i].id, {
                          method: 'PUT', // or PATCH
                          headers: {'content-type':'application/json'},
                          body: '{"LastBeryClick":'+currentUnix+', "Online":true}'
                        }).then(res => {
                          if (res.ok) {
                              return res.json();
                          }
                          // handle error
                        }).then(task => {
                          console.log("Изменил Unix: ", task)

                        }).catch(error => {
                          // handle error
                        })
                        break;
                      }
                    }
                    if(!AgentInList){
                      console.log("Агент не найден в списке, добавляю нового")
                      const newTask = {
                        "user": document.getElementById("user-block").innerText,
                        "LastBeryClick": currentUnix,
                        "Online": true,
                        "BT_Id": document.getElementById("user-block").getAttribute("data-user-id")
                      };
                      fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', {
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

                    console.log("Меняем кнопку на  «Выйти из очереди»")
                    //  Запускаем в интервале 15сек Скрипт опроса новых
                    console.log("Запускаем в интервале 15сек Скрипт опроса новых")
                    startInterval()

                  })
                  .catch(err => console.error(err));

              }
            }
            if(BeryButtState != "InQueue"){
              BeryButtState = "OutQueue"
              console.log("Меняем кнопку на  «В очередь»")
            }

          }
          else if (response.total > Queue.length) {
            BeryButtState = "Bery"
            console.log("Нахуй очищаем очередь и меняем кнопку на «Взять заявку»")
            for (var i = 0; i <= Queue.length; i++) {
              fetch('https://656de619bcc5618d3c242ec1.mockapi.io/Bitrix_Queue/'+Queue[i].id, {
                method: 'DELETE',
              }).then(res => {
                if (res.ok) {
                    return res.json();
                }
                // handle error
              }).then(task => {
                // Do something with deleted task
              }).catch(error => {
                // handle error
              })
            }
          }
          else if (response.total <= Queue.length) {
            for (var i = 0; i < Queue.length; i++) {
              if (Queue[i].AgentId == document.getElementById("user-block").innerText) {
                BeryButtState = "InQueue"

                const GetAgentList = {
                  method: 'GET',
                  headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.3.2'}
                };

                OpenWorkFunc();

                fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', GetAgentList)
                  .then(response => response.json())
                  .then(response => {
                    console.log("NoWork_Agents: ", response)
                    for (var i = 0; i < response.length; i++) {
                      if (document.getElementById("user-name").innerText == "Александр Шатохин") {
                        document.getElementById("user-name").innerText = "Александр Шатохин"
                      }
                      if (document.getElementById("user-name").innerText == "Павел Андреевич") {
                        document.getElementById("user-name").innerText = "Павел Обухов"
                      }
                      console.log("Сверяю: ", response[i].user, "и", document.getElementById("user-name").innerText)
                      if (response[i].user == document.getElementById("user-name").innerText) {
                        console.log("Совпалость")
                        AgentInList = true;
                        //Если агент есть в списке
                        fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents/'+response[i].id, {
                          method: 'PUT', // or PATCH
                          headers: {'content-type':'application/json'},
                          body: '{"LastBeryClick":'+currentUnix+', "Online":true}'
                        }).then(res => {
                          if (res.ok) {
                              return res.json();
                          }
                          // handle error
                        }).then(task => {
                          console.log("Изменил Unix: ", task)

                        }).catch(error => {
                          // handle error
                        })
                        break;
                      }
                    }
                    if(!AgentInList){
                      console.log("Агент не найден в списке, добавляю нового")
                      const newTask = {
                        "user": document.getElementById("user-block").innerText,
                        "LastBeryClick": currentUnix,
                        "Online": true,
                        "BT_Id": document.getElementById("user-block").getAttribute("data-user-id")
                      };
                      fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', {
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

                    console.log("Меняем кнопку на  «Выйти из очереди»")
                    //  Запускаем в интервале 15сек Скрипт опроса новых
                    console.log("Запускаем в интервале 15сек Скрипт опроса новых")
                    startInterval()

                  })
                  .catch(err => console.error(err));

              }
            }
            if(BeryButtState != "InQueue"){
              BeryButtState = "OutQueue"
              console.log("Меняем кнопку на  «В очередь»")
            }
          }
      }).catch(error => {
        // handle error
      })
    })
    .catch(err => console.error(err));
}
// Функция сортировки по DATE_CREATE
function sortByDate(a, b) {
  return new Date(a[0].DATE_CREATE) - new Date(b[0].DATE_CREATE);
}

function ReservBery(){
  const GetNewDeals_For_ReservBery = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.5.1'
    },
    body: '{"filter":{"STAGE_ID":"NEW"},"start":"0"}'
  };
  fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', GetNewDeals_For_ReservBery)
    .then(response => response.json())
    .then(response => {
      res = response.result.reverse();
      DealId_To_Send_reserv = res[0].ID
      const Deal_ToWork_ReservBery = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/8.6.0'
        },
        body: '{"id":"'+DealId_To_Send_reserv+'","fields":{"STAGE_ID":"PREPARATION"}}'
      };
      const SetOtvetstnenniy_To_ReservBery = {
            method: 'POST',
            headers: {
              cookie: 'qmb=0.',
              'Content-Type': 'application/json',
              'User-Agent': 'insomnia/8.6.1'
            },
            body: '{"id":"'+DealId_To_Send_reserv+'","fields":{"ASSIGNED_BY_ID":"'+document.getElementById("user-block").getAttribute("data-user-id")+'"}}'
      };
      const SendInfo_To_ReservBery = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
        body: '{"chat_id":"-4248241774","text":"Я перевел сделку: '+DealId_To_Send_reserv+' в работу Агенту: '+document.getElementById("user-block").innerText+' через Резервную Беру"}'
      };
      fetch('https://api.telegram.org/bot7536226475:AAG5C4lJljhCzGdqS8nl5DIjK2NoLuHCgbg/sendMessage', SendInfo_To_ReservBery)
        .then(response1 => response1.json())
        .then(response1 => {
          console.log("response1", response1)
          fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', SetOtvetstnenniy_To_ReservBery)
            .then(response2 => response2.json())
            .then(response2 => {
              console.log("response2", response2)
              fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', Deal_ToWork_ReservBery)
                .then(response3 => response3.json())
                .then(response3 => {
                  console.log("response3", response3)
                  document.getElementById("BeryHref").href = "/crm/deal/details/"+DealId_To_Send_reserv+"/?BeryDeal";
                  document.getElementById("BeryHref").click()
                })
                .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
}

function Bery_OnClick(){
  console.log("Жмак 0!")
  currentUnix = Math.round(new Date().getTime()/1000.0)
  console.log(currentUnix)

  
    const GetAgentList = {
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.3.2'}
    };

    OpenWorkFunc();

    fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', GetAgentList)
      .then(response => response.json())
      .then(response => {
        console.log("NoWork_Agents: ", response)
        for (var i = 0; i < response.length; i++) {
          if (document.getElementById("user-name").innerText == "Александр Шатохин") {
            document.getElementById("user-name").innerText = "Александр Шатохин"
          }
          if (document.getElementById("user-name").innerText == "Павел Андреевич") {
            document.getElementById("user-name").innerText = "Павел Обухов"
          }
          console.log("Сверяю: ", response[i].user, "и", document.getElementById("user-name").innerText)
          if (response[i].user == document.getElementById("user-name").innerText) {
            console.log("Совпалость")
            AgentInList = true;
            //Если агент есть в списке
            fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents/'+response[i].id, {
              method: 'PUT', // or PATCH
              headers: {'content-type':'application/json'},
              body: '{"LastBeryClick":'+currentUnix+', "Online":true}'
            }).then(res => {
              if (res.ok) {
                  return res.json();
              }
              // handle error
            }).then(task => {
              console.log("Изменил Unix: ", task)

            }).catch(error => {
              // handle error
            })
            break;
          }
        }
        if(!AgentInList){
          console.log("Агент не найден в списке, добавляю нового")
          const newTask = {
            "user": document.getElementById("user-block").innerText,
            "LastBeryClick": currentUnix,
            "Online": true,
            "BT_Id": document.getElementById("user-block").getAttribute("data-user-id")
          };
          fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', {
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

    const options = {
      method: 'POST',
      headers: {
        cookie: 'qmb=0.',
        'Content-Type': 'application/json',
        'User-Agent': 'insomnia/8.5.1'
      },
      body: '{"filter":{"STAGE_ID":"PREPARATION","ASSIGNED_BY_ID":"'+document.getElementById("user-block").getAttribute("data-user-id")+'"},"start":"0"}'
    };

    fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', options)
      .then(response => response.json())
      .then(response => { 
        console.log(response)
        if (response.total == 0) {
          Bery_GetNews()
        }
        else{
          alert("У тебя уже есть заявка в работе, разберись с ней!")
        }

      })
      .catch(err => console.error(err));

  })
    .catch(err => console.error(err));


}
function Bery_GetNews(){
  
  document.getElementById("BeryButt").setAttribute('disabled', 'disabled');

  const Get_News = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.5.1'
    },
    body: '{"filter":{"STAGE_ID":"NEW"},"start":"0"}'
  };

  fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Get_News)
    .then(response => response.json())
    .then(response => {
      console.log("response1", response)
      NewsCount = response.total;

      if (response.total == 0) {
        alert("В новых нет заявок")
      }
      for (let index = 0; index < response.result.length; index++) {
          AllNews_ForBery.push([response.result[index]])

          console.log("Новая заявка для списка:", AllNews_ForBery[index][0])
      }
      if (response.total > 49) {
        const Get_News2 = {
          method: 'POST',
          headers: {
            cookie: 'qmb=0.',
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/8.5.1'
          },
          body: '{"filter":{"STAGE_ID":"NEW"},"start":"51"}'
        };

        fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Get_News2)
          .then(response1 => response1.json())
          .then(response1 => {
            for (let index = 0; index < response.result.length; index++) {
              AllNews_ForBery.push([response.result[index]])

              console.log("Новая заявка для списка:", AllNews_ForBery[index])
            }
            // Применяем сортировку
            AllNews_ForBery.reverse()
            console.log("Список новых для кнопки беру:", AllNews_ForBery)
            SearchNedozvons_In_BeryList();
          })
          .catch(err => console.log("err2: ", err));
      }
      else{
        // Применяем сортировку
        AllNews_ForBery.reverse()
        console.log("Список новых для кнопки беру:", AllNews_ForBery)
        SearchNedozvons_In_BeryList();
      }
    })
    .catch(err => console.log("err1: ", err));

}

function SearchNedozvons_In_BeryList(){
  console.log("Вошел в проверку недозвонов")
    const fetchPromises = [];
    for (var i = 0; i < AllNews_ForBery.length; i++) {
      const options = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.5.1'
        },
        body: '{"entityTypeId":2,"filter":{"OWNER_ID":"'+AllNews_ForBery[i][0].ID+'","STAGE_ID":"UC_0SAOJL"},"select":["OWNER_ID","STAGE_ID","CREATED_TIME"]}'
      };

      fetchPromises.push(
        fetch('https://speedinet.bitrix24.ru/rest/26/bs0iid7hvmniht0z/crm.stagehistory.list', options)
          .then(response => response.json())
          .catch(err => {
            console.error('Error fetching data:', err);
            return null;
          })
      );
    }

    Promise.all(fetchPromises) 
      .then(AllOPPORTUNITY => {
        
        for (var i = 0; i < AllOPPORTUNITY.length; i++) {
          console.log(AllOPPORTUNITY)
          if(AllOPPORTUNITY[i].total > 0){
            NedovonList_For_Bery.push(AllOPPORTUNITY[i].result.items[0].OWNER_ID)
          }
        }
        console.log("NedovonList_For_Bery: ", NedovonList_For_Bery)


        for (var i = 0; i < AllNews_ForBery.length; i++) {
          for (var j = 0; j < NedovonList_For_Bery.length; j++) {
            if (AllNews_ForBery[i][0].ID == NedovonList_For_Bery[j]) {
              NedovonList_For_Bery[j] = AllNews_ForBery[i][0];
            }
          }
        }

        console.log("NedovonList_For_Bery после обновления: ", NedovonList_For_Bery)
        Sort_NedozvonsAndNews_Of_DateCraete()
        

      });
      
    
}

function Sort_NedozvonsAndNews_Of_DateCraete(){
  let currentDate_For_Bery = new Date(); // текущая дата

  NedovonList_For_Bery.forEach(NedovonList_For_Bery => {
    let dealDate = new Date(NedovonList_For_Bery.DATE_CREATE);
    if (dealDate.getDate() === currentDate_For_Bery.getDate() && dealDate.getMonth() === currentDate_For_Bery.getMonth() && dealDate.getFullYear() === currentDate_For_Bery.getFullYear()) {
      Today_NedozvonDeals_InNew.push(NedovonList_For_Bery);
    } else if (dealDate < currentDate_For_Bery) {
      Early_NedozvonDeals_InNew.push(NedovonList_For_Bery);
    }
  });

  console.log("Звонки и заявки сегодняшнего дня из недозвонов: ", Today_NedozvonDeals_InNew);
  console.log("Звонки и заявки предыдущих дней из недозвонов: ", Early_NedozvonDeals_InNew);

  var IsNedozvon_Indicator = false
  for (var i = 0; i < AllNews_ForBery.length; i++) {
    for (var j = 0; j < NedovonList_For_Bery.length; j++) {
      console.log("Проверяю сделку " + AllNews_ForBery[i][0].ID + " на недозвон")
      if (AllNews_ForBery[i][0].ID == NedovonList_For_Bery[j].ID) {
        IsNedozvon_Indicator = true
      }
    }
    if (IsNedozvon_Indicator == false) {
      console.log("Сделка " + AllNews_ForBery[i][0].ID + " Не была в недозвонах")

      AllNewDeals_InNew.push(AllNews_ForBery[i][0]);
    }
    else{
      console.log("Сделка " + AllNews_ForBery[i][0].ID + " Была в недозвонах") 

      IsNedozvon_Indicator = false
    }
  }

  console.log("Все новые сделки, которые не были в недозвонах: ", AllNewDeals_InNew)

  for (var i = 0; i < AllNewDeals_InNew.length; i++) {
    if (AllNewDeals_InNew[i].TITLE.indexOf("вызов") >= 0 || AllNewDeals_InNew[i].TITLE.indexOf("звонок") >= 0) {
      AllNewCalls_InNew.push(AllNewDeals_InNew[i])
    }
    else{
      NewDeals_InNew.push(AllNewDeals_InNew[i])
    }
  }
  console.log("Все новые звонки, которые не были в недозвонах: ", AllNewCalls_InNew)
  console.log("Все новые заявки, которые не были в недозвонах: ", NewDeals_InNew)

  SearchDeals_With_ExpensiveTrafic_And_NotExpensiveTrafic()


}

function SearchDeals_With_ExpensiveTrafic_And_NotExpensiveTrafic(){
  for (var i = 0; i < AllNewCalls_InNew.length; i++) {
    for (var j = 0; j < ExpensiveTrafik.length; j++) {
      console.log("-----------------------------------------------------------")
      console.log("AllNewCalls_InNew[i].UTM_SOURCE : " + AllNewCalls_InNew[i].UTM_SOURCE)
      console.log("ExpensiveTrafik[j] : ", ExpensiveTrafik[j])
      console.log("-----------------------------------------------------------")

      if (AllNewCalls_InNew[i].UTM_SOURCE == ExpensiveTrafik[j]) {
        ExpensiveCall_InNew.push(AllNewCalls_InNew[i])
        console.log("Добавляю в дорогие")
      }
      else{
        NotExpensiveCall_InNew_Indicator = false;
        for (var k = 0; k < NotExpensiveCall_InNew.length; k++) {
          if (NotExpensiveCall_InNew[k].ID == AllNewCalls_InNew[i].ID) {
            NotExpensiveCall_InNew_Indicator = true
          }
        }
        if (NotExpensiveCall_InNew_Indicator == false) {
          NotExpensiveCall_InNew.push(AllNewCalls_InNew[i])
          console.log("Добавляю в Дешевые")
        }
        else{
          NotExpensiveCall_InNew_Indicator = false;
        }
      }
    }
  }

  console.log("Все новые звонки с дорогим трафиком до сортировки: ", ExpensiveCall_InNew)
  console.log("Все новые звонки с недорогим трафиком до сортировки: ", NotExpensiveCall_InNew)

  ExpensiveCall_InNew_TEMP = ExpensiveCall_InNew;
  NotExpensiveCall_InNew_TEMP = NotExpensiveCall_InNew;
  ExpensiveCall_InNew = [];
  NotExpensiveCall_InNew = [];

  console.log("Все новые звонки с дорогим трафиком TEMP: ", ExpensiveCall_InNew_TEMP)
  console.log("Все новые звонки с недорогим трафиком TEMP: ", NotExpensiveCall_InNew_TEMP)

  const fetchPromises = [];
  for (var i = 0; i < ExpensiveCall_InNew_TEMP.length; i++) {
    console.log("Получаю дела по сделке: ", ExpensiveCall_InNew_TEMP[i]);
      const options = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.5.1'
        },
        body: '{"filter":{"OWNER_TYPE_ID":"2","OWNER_ID":"'+ExpensiveCall_InNew_TEMP[i].ID+'"}}'
      };

      fetchPromises.push(
        fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.activity.list', options)
          .then(response => response.json())
          .catch(err => {
            console.error('Error fetching data:', err);
            return null;
          })
      );
      console.log("Получаю дела по сделке: ", ExpensiveCall_InNew_TEMP[i]);
  }

  Promise.all(fetchPromises) 
    .then(AllOPPORTUNITY => {
        console.log("AllOPPORTUNITY1: ", AllOPPORTUNITY)
        for (var j = 0; j < AllOPPORTUNITY.length; j++) {
          if (AllOPPORTUNITY[j].total > 0) {
            for (var k = 0; k < ExpensiveCall_InNew_TEMP.length; k++) {
              if (AllOPPORTUNITY[j].result[0].OWNER_ID == ExpensiveCall_InNew_TEMP[k].ID) {
                ExpensiveCall_InNew.push(ExpensiveCall_InNew_TEMP[k])
              }
            }
          }
        }
        const fetchPromises1 = [];

        for (var i = 0; i < NotExpensiveCall_InNew_TEMP.length; i++) {
          console.log("Получаю дела по сделке: ", NotExpensiveCall_InNew_TEMP[i]);
            const options = {
              method: 'POST',
              headers: {
                cookie: 'qmb=0.',
                'Content-Type': 'application/json',
                'User-Agent': 'insomnia/8.5.1'
              },
              body: '{"filter":{"OWNER_TYPE_ID":"2","OWNER_ID":"'+NotExpensiveCall_InNew_TEMP[i].ID+'"}}'
            };

            fetchPromises1.push(
              fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.activity.list', options)
                .then(response => response.json())
                .catch(err => {
                  console.error('Error fetching data:', err);
                  return null;
                })
            );
        }

        Promise.all(fetchPromises1) 
          .then(AllOPPORTUNITY2 => {
              console.log("AllOPPORTUNITY2: ", AllOPPORTUNITY2)
              for (var j = 0; j < AllOPPORTUNITY2.length; j++) {
                if (AllOPPORTUNITY2[j].total > 0 ) {
                  for (var k = 0; k < NotExpensiveCall_InNew_TEMP.length; k++) {
                    if (AllOPPORTUNITY2[j].result[0].OWNER_ID == NotExpensiveCall_InNew_TEMP[k].ID) {
                      NotExpensiveCall_InNew.push(NotExpensiveCall_InNew_TEMP[k])
                    }
                  }
                }
              }
              console.log("Все новые звонки с дорогим трафиком после сортировки: ", ExpensiveCall_InNew)
              console.log("Все новые звонки с недорогим трафиком после сортировки: ", NotExpensiveCall_InNew)
              GetDeal_ToWork_AfterBery()
          });
    });

  

  
}

function GetDeal_ToWork_AfterBery(){
  console.log("")
  console.log("-------------------------- У меня все готово! --------------------------")
  console.log("")


  setTimeout(function(){
    console.log("Все Сделки в новых: ", AllNews_ForBery)
    console.log("Все Сделки в новых из недозвонов: ", NedovonList_For_Bery)
    console.log("Все Сделки в новых, которые не были в недозвонах: ", AllNewDeals_InNew)
    console.log("Все новые звонки, которые не были в недозвонах: ", AllNewCalls_InNew)


    console.log("")

    console.log("Все новые звонки с дорогим трафиком: ", ExpensiveCall_InNew)
    console.log("Все новые звонки с недорогим трафиком: ", NotExpensiveCall_InNew)

    console.log("")

      console.log("Все новые заявки, которые не были в недозвонах: ", NewDeals_InNew)

    console.log("")

    console.log("Звонки и заявки сегодняшнего дня из недозвонов: ", Today_NedozvonDeals_InNew);
    console.log("Звонки и заявки предыдущих дней из недозвонов: ", Early_NedozvonDeals_InNew);

    if (ExpensiveCall_InNew.length > 0) {
      console.log("Выбрал заявку из категории новые звонки с дорогим трафиком")
      console.log("Перевожу заявку: ", ExpensiveCall_InNew[0])
      if(NewsCount > 40) SendDeal_ToWork(ExpensiveCall_InNew[0].ID); //Верхняя
      else SendDeal_ToWork(ExpensiveCall_InNew[getRandomInt(ExpensiveCall_InNew.length)].ID); //Рандом
    }
    else if (NotExpensiveCall_InNew.length > 0) {
      console.log("Выбрал заявку из категории новые звонки с недорогим трафиком")
      console.log("Перевожу заявку: ", NotExpensiveCall_InNew[0])
      if(NewsCount > 40) SendDeal_ToWork(NotExpensiveCall_InNew[0].ID); //Верхняя
      else SendDeal_ToWork(NotExpensiveCall_InNew[getRandomInt(NotExpensiveCall_InNew.length)].ID); //Рандом
    }
    else if (NewDeals_InNew.length > 0) {
      console.log("Выбрал заявку из категории новые заявки, которые не были в недозвонах")
      console.log("Перевожу заявку: ", NewDeals_InNew[0])
      if(NewsCount > 40) SendDeal_ToWork(NewDeals_InNew[0].ID); //Верхняя
      else SendDeal_ToWork(NewDeals_InNew[getRandomInt(NewDeals_InNew.length)].ID); //Рандом
    }
    else if (Today_NedozvonDeals_InNew.length > 0) {
      console.log("Выбрал заявку из категории заявки сегодняшнего дня из недозвонов")
      console.log("Перевожу заявку: ", Today_NedozvonDeals_InNew[0])
      if(NewsCount > 40) SendDeal_ToWork(Today_NedozvonDeals_InNew[0].ID); //Верхняя
      else SendDeal_ToWork(Today_NedozvonDeals_InNew[getRandomInt(Today_NedozvonDeals_InNew.length)].ID); //Рандом
    }
    else if (Early_NedozvonDeals_InNew.length > 0) {
      console.log("Выбрал заявку из категории заявки предыдущих дней из недозвонов")
      console.log("Перевожу заявку: ", Early_NedozvonDeals_InNew[0])
      if(NewsCount > 40) SendDeal_ToWork(Early_NedozvonDeals_InNew[0].ID); //Верхняя
      else SendDeal_ToWork(Early_NedozvonDeals_InNew[getRandomInt(Early_NedozvonDeals_InNew.length)].ID); //Рандом
    }
    else{
      console.log("В новых ничего нет -_-")
      alert("В новых ничего нет -_-")
    }
  

    //Очищаем все списки
    NewsCount = 0
    AllNews_ForBery = []
    NedovonList_For_Bery = []
    AllNewDeals_InNew = [] 
    AllNewCalls_InNew = [] 
    NewDeals_InNew = [] 
    ExpensiveCall_InNew = [] 
    NotExpensiveCall_InNew = [] 
    Today_NedozvonDeals_InNew = []
    Early_NedozvonDeals_InNew = [] 
  }, 1000)
}
function SendDeal_ToWork(deal_id_toBery){
  BeryDealIsTrue = true
  const Deal_ToWork = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
        'Content-Type': 'application/json',
        'User-Agent': 'insomnia/8.6.0'
    },
    body: '{"id":"'+deal_id_toBery+'","fields":{"STAGE_ID":"PREPARATION"}}'
  };
  const SetOtvetstnenniy_ToBery = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.6.1'
        },
        body: '{"id":"'+deal_id_toBery+'","fields":{"ASSIGNED_BY_ID":"'+document.getElementById("user-block").getAttribute("data-user-id")+'"}}'
      };

  const SendInfo_To_Bot = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
    body: '{"chat_id":"-4248241774","text":"Я перевел сделку: '+deal_id_toBery+' в работу Агенту: '+document.getElementById("user-block").innerText+' через Беру"}'
  };

  fetch('https://api.telegram.org/bot7536226475:AAG5C4lJljhCzGdqS8nl5DIjK2NoLuHCgbg/sendMessage', SendInfo_To_Bot)
    .then(response1 => response1.json())
    .then(response1 => {
      console.log("response1", response1)
      fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', SetOtvetstnenniy_ToBery)
        .then(response2 => response2.json())
        .then(response2 => {
          console.log("response2", response2)

          fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', Deal_ToWork)
            .then(response3 => response3.json())
            .then(response3 => {
              console.log("response3", response3)
              console.log("----------------- 1. Сделка " + deal_id_toBery + " переведена в работу Агенту " + document.getElementById("user-block").getAttribute("data-user-id") + " -----------------")
              //window.location.href = "/crm/deal/details/"+deal_id_toBery+"/?BeryDeal";
              document.getElementById("BeryHref").href = "/crm/deal/details/"+deal_id_toBery+"/?BeryDeal";
              document.getElementById("BeryHref").click()
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));

    })
    .catch(err => console.error(err));
}





// Это незаконная магия, нужная для перевода входяшки In Work,
// другого работающего вариант не нашел
// через какое время оно ебнется я не знаю, но ебнется оно точно
// TODO: переделать


function Get_New_Deals(){
  //1. Получаем все Новые, номера, метрику, id и стадию сделки
  if (document.getElementsByClassName("ui-btn-text")[1].innerText == 'ЗАЯВКИ') {
    const Get_News = {
      method: 'POST',
      headers: {
        cookie: 'qmb=0.',
        'Content-Type': 'application/json',
        'User-Agent': 'insomnia/8.5.1'
      },
      body: '{"filter":{"STAGE_ID":"NEW"},"start":"0","select":["ID"]}'
    };

    fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Get_News)
      .then(response => response.json())
      .then(response => {
        console.log("response1", response)
        for (let index = 0; index < response.result.length; index++) {
          Deals_For_Check.push([response.result[index].ID])

          console.log("Deals_For_Check [index]", Deals_For_Check[index][0])
        }
        if (response.total > 49) {
          const Get_News2 = {
            method: 'POST',
            headers: {
              cookie: 'qmb=0.',
              'Content-Type': 'application/json',
              'User-Agent': 'insomnia/8.5.1'
            },
            body: '{"filter":{"STAGE_ID":"NEW"},"start":"51","select":["ID"]}'
          };

          fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Get_News2)
            .then(response1 => response1.json())
            .then(response1 => {
              console.log("response2", response1)
              for (let index = 51; index < response1.result.length; index++) {
                Deals_For_Check.push([response1.result[index].ID])   //[index][0] = response1.result[index].ID

              }
              Get_InWork_Deals();
            })
            .catch(err => console.log("err2: ", err));
        }
        else{
          Get_InWork_Deals();
        }
      })
      .catch(err => console.log("err1: ", err));
  }
}
function Get_InWork_Deals(){
  //2. Получаем все В работе, номера, метрику и id
  console.log('Deals_For_Check1: ', Deals_For_Check)

  const Get_InWork = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.5.1'
    },
    body: '{"filter":{"STAGE_ID":"PREPARATION"},"start":"0","select":["ID"]}'
  };

  fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Get_InWork)
    .then(response => response.json())
    .then(response => {
      console.log("response1", response)
      for (let index = 0; index < response.result.length; index++) {
        Deals_For_Check.push([response.result[index].ID])

        console.log("Deals_For_Check [index]", Deals_For_Check[index][0])
      }
      Get_Nedozvon_Deals()
      
    })
    .catch(err => console.log("err1: ", err));
}
function Get_Nedozvon_Deals(){
  //3. Получаем все Недозвоны, номера, метрику и id

  console.log('Deals_For_Check2: ', Deals_For_Check)
  const Get_Nedozvon = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.5.1'
    },
    body: '{"filter":{"STAGE_ID":"UC_0SAOJL"},"start":"0","select":["ID"]}'
  };

  fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Get_Nedozvon)
    .then(response => response.json())
    .then(response => {
      console.log("response1", response)
      for (let index = 0; index < response.result.length; index++) {
        Deals_For_Check.push([response.result[index].ID])

        console.log("Deals_For_Check [index]", Deals_For_Check[index][0])
      }
      if (response.total > 49) {
        const Get_Nedozvon2 = {
          method: 'POST',
          headers: {
            cookie: 'qmb=0.',
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/8.5.1'
          },
          body: '{"filter":{"STAGE_ID":"UC_0SAOJL"},"start":"51","select":["ID"]}'
        };

        fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Get_Nedozvon2)
          .then(response1 => response1.json())
          .then(response1 => {
            console.log("response2", response1)
            for (let index = 51; index < response1.result.length; index++) {
              Deals_For_Check.push([response1.result[index].ID])   //[index][0] = response1.result[index].ID
            }
            setTimeout(Get_Deals_Data, 3000);
            //Get_Deals_Data();
          })
          .catch(err => console.log("err2: ", err));
      }
      else{
        setTimeout(Get_Deals_Data, 3000);
        //Get_Deals_Data();
      }
    })
    .catch(err => console.log("err1: ", err));
}

// Переходим на новый токен: https://speedinet.bitrix24.ru/rest/26/48qmdec3obtu7b6w/
async function Get_Deals_Data(){
  //4. Получаем необходимые данные по сделке (Номер и Местрику)
  console.log('Deals_For_Check3: ', Deals_For_Check)

  const requests = [];
  for (let i = 0; i < Deals_For_Check.length; i++) {
    const options = {
      method: 'POST',
      headers: {
        cookie: 'qmb=0.',
        'Content-Type': 'application/json',
        'User-Agent': 'insomnia/8.5.1'
      },
      body: '{"id":"'+Deals_For_Check[i][0]+'"}'
    };

    requests.push(fetch('https://speedinet.bitrix24.ru/rest/26/48qmdec3obtu7b6w/crm.deal.get', options)
      .then(response => response.json())
      .then(response => {
        Deals_For_Check[i][1] = response.result.UF_CRM_1604651268;
        Deals_For_Check[i][2] = response.result.UTM_SOURCE;
        Deals_For_Check[i][3] = response.result.STAGE_ID;
      })
      .catch(err => console.error(err))
    );
  }

  // Ждем завершения всех запросов
  await Promise.all(requests);

  console.log('Все запросы завершены: ', requests);

  console.log('Deals_For_Check5: ', Deals_For_Check)
  //Sort_Matrix()
  Replace_Numbers_To_Pattern()
  
}
function Replace_Numbers_To_Pattern(){
  //5. Приводим все номера к одному формату 79233024909

  for (var i = 0; i < Deals_For_Check.length; i++) {
    console.log("Deals_For_Check in Replace_Numbers_To_Pattern", Deals_For_Check)
    try{
      if(Deals_For_Check[i][1] != false && (Deals_For_Check[i][1][0] == 9 || Deals_For_Check[i][1][1] == 9 || Deals_For_Check[i][1][2] == 9 || Deals_For_Check[i][1][3] == 9) ){
        Deals_For_Check[i][1] = Deals_For_Check[i][1].replace(/[^0-9]/g, '')
        Deals_For_Check[i][1] = '9'+extractAfter9(Deals_For_Check[i][1])
      }
    }
    catch(e){
      console.error(e)
    }
  }
  console.log('Deals_For_Check6: ', Deals_For_Check)
  Sort_Matrix()
}
function Sort_Matrix(){

  repeatedRequests = [];
  DublicateMatrix = [];
  InArrayIndicator = false;

  for (var i = 0; i < Deals_For_Check.length; i++) {
    for (var j = 0; j < Deals_For_Check.length; j++) {

      

      if (Deals_For_Check[i][2] == Deals_For_Check[j][2] && Deals_For_Check[i][1] == Deals_For_Check[j][1] && Deals_For_Check[i][0] != Deals_For_Check[j][0]) {
        console.log("Сделки совпали")
        for (var k = 0; k < repeatedRequests.length; k++) {
          console.log("Сравниваю", repeatedRequests[i], "и", Deals_For_Check[i])
          if (repeatedRequests[k][0] == Deals_For_Check[i][0]) {
            console.log("совпалость")
            InArrayIndicator = true
          }
        }
        if (InArrayIndicator == false) {

          repeatedRequests.push(Deals_For_Check[i])
        }
        else{
          InArrayIndicator = false;
        }
      }

    }
  }

  var InMatrix_Indicator = false  
  for (var i = 0; i < repeatedRequests.length; i++) {
    for (var j = 0; j < repeatedRequests.length; j++) {
      console.log("Сравниваю", repeatedRequests[i]," и ", repeatedRequests[j])

      if (repeatedRequests[i][2] == repeatedRequests[j][2] && repeatedRequests[i][0] != repeatedRequests[j][0]) {
        console.log(" ----- Совпало -----", repeatedRequests[i]," и ", repeatedRequests[j])
        for (var k = 0; k < DublicateMatrix.length; k++) { 
          console.log("Сравниваю 1", DublicateMatrix[k][0][2]," и ", repeatedRequests[i][2])
          if (DublicateMatrix[k][0][2] == repeatedRequests[i][2]) {
            console.log(" ----- Совпало 1 -----", DublicateMatrix[k][0][2]," и ", repeatedRequests[i][2])
            DublicateMatrix[k].push(repeatedRequests[i])
            InMatrix_Indicator = true;
          }
        }
        console.log(InMatrix_Indicator)
        if (InMatrix_Indicator == false) {
          console.log(" Не совпало, всуну НОВУЮ")
          DublicateMatrix.push([repeatedRequests[i]])
        }
        InMatrix_Indicator = false
      }

    }
  }

  console.log("Дубликаты с одной метрикой: ", repeatedRequests);
  console.log("Дубликаты с одной метрикой после сортировки: ", DublicateMatrix);

  /*for (var i = 0; i < DublicateMatrix.length; i++) {
    for (var j = 0; j < DublicateMatrix[i].length; j++) {
      for (var k = 0; k < DublicateMatrix[i].length; k++) {
        [i]
      }
      DublicateMatrix[i][j]
    }
    DublicateMatrix[i]
  }*/

  try{
    document.getElementById("BeryButt").removeAttribute('disabled');
  }
  catch(e){
    console.log("Кнопки Взять Заявку нет!")
  }
  try{
    document.getElementById("BeryButt_InQueue").removeAttribute('disabled');
  }
  catch(e){
    console.log("Кнопки Выйти из очереди нет!")
  }
  try{
    document.getElementById("BeryButt_OutQueue").removeAttribute('disabled');
  }
  catch(e){
    console.log("Кнопки В очередь нет!")
  }
  if (DublicateMatrix.length > 0 && DublicateMatrix.length < 7) {
    Delete_Dublicates()
  }
}
function Delete_Dublicates(){
  // Через API кидаем все заявки из второй матрицы на удаление с признаком "Дубликат"
  //for (var i = 0; i < repeatedRequests.length; i++) {
    //document.querySelectorAll('[data-id="'+repeatedRequests[i][2]+'"]')[0].style.display = 'none'

    //document.querySelectorAll('[data-id="'+repeatedRequests[i][2]+'"]')[0].style.background = "red"
    //console.log("Удалил сделку ", repeatedRequests[i][2], " как дубликат!")

    
    
  //}
  for (var i = 0; i < DublicateMatrix.length; i++) {
    if (DublicateMatrix[i][0][3] == "NEW" && DublicateMatrix[i][1][3] == "NEW") {
      console.log("удаляю ", DublicateMatrix[i][0][0])
      DealId_To_Send += DublicateMatrix[i][0][0]+', с номером: '+DublicateMatrix[i][0][1]+' удалена из стадии '+DublicateMatrix[i][0][3];
      const DelDublicate = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.6.0'
        },
        body: '{"id":"'+DublicateMatrix[i][0][0]+'","fields":{"UF_CRM_1694601072":"5586","STAGE_ID":"UC_93XIL7"}}'
      };

      fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', DelDublicate)
        .then(response => response.json())
        .then(response => {
          console.log("REST: ",response)
          console.log("Отправляю ", DublicateMatrix[i])
          
          const SendDublicate = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
            body: '{"chat_id":"1395354115","text":"Заявка '+DealId_To_Send+' как Дубликат Агентом '+document.getElementById("user-block").getAttribute("data-user-id")+'"}'
          };

          fetch('https://api.telegram.org/bot6881870667:AAEtWo3EkLw6HqsjdLxbY0eJwt1Y_Uqr8io/sendMessage', SendDublicate)
            .then(response => response.json())
            .then(response => {
              console.log("TG: ",response);
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
    if (DublicateMatrix[i][0][3] == "PREPARATION" && DublicateMatrix[i][1][3] == "PREPARATION") {
      console.log("удаляю ", DublicateMatrix[i][0][0])
      DealId_To_Send += DublicateMatrix[i][0][0]+', с номером: '+DublicateMatrix[i][0][1]+' удалена из стадии '+DublicateMatrix[i][0][3];
      const DelDublicate = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.6.0'
        },
        body: '{"id":"'+DublicateMatrix[i][0][0]+'","fields":{"UF_CRM_1694601072":"5586","STAGE_ID":"UC_93XIL7"}}'
      };

      fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', DelDublicate)
        .then(response => response.json())
        .then(response => {
          console.log("REST: ",response)
          console.log("Отправляю ", DublicateMatrix[i])
          
          const SendDublicate = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
            body: '{"chat_id":"1395354115","text":"Заявка '+DealId_To_Send+' удалена как Дубликат Агентом '+document.getElementById("user-block").getAttribute("data-user-id")+'"}'
          };

          fetch('https://api.telegram.org/bot6881870667:AAEtWo3EkLw6HqsjdLxbY0eJwt1Y_Uqr8io/sendMessage', SendDublicate)
            .then(response => response.json())
            .then(response => {
              console.log("TG: ",response);
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
    if (DublicateMatrix[i][0][3] == "UC_0SAOJL" && DublicateMatrix[i][1][3] == "UC_0SAOJL") {
      console.log("удаляю ", DublicateMatrix[i][0][0])
      DealId_To_Send += DublicateMatrix[i][0][0]+', с номером: '+DublicateMatrix[i][0][1]+' удалена из стадии '+DublicateMatrix[i][0][3];
      const DelDublicate = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.6.0'
        },
        body: '{"id":"'+DublicateMatrix[i][0][0]+'","fields":{"UF_CRM_1694601072":"5586","STAGE_ID":"UC_93XIL7"}}'
      };

      fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', DelDublicate)
        .then(response => response.json())
        .then(response => {
          console.log("REST: ",response)
          console.log("Отправляю ", DublicateMatrix[i])
          
          const SendDublicate = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
            body: '{"chat_id":"1395354115","text":"Заявка '+DealId_To_Send+' удалена как Дубликат Агентом '+document.getElementById("user-block").getAttribute("data-user-id")+'"}'
          };

          fetch('https://api.telegram.org/bot6881870667:AAEtWo3EkLw6HqsjdLxbY0eJwt1Y_Uqr8io/sendMessage', SendDublicate)
            .then(response => response.json())
            .then(response => {
              console.log("TG: ",response);
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
    if (DublicateMatrix[i][0][3] == "NEW" && DublicateMatrix[i][1][3] == "PREPARATION") {
      console.log("удаляю ", DublicateMatrix[i][0][0])
      DealId_To_Send += DublicateMatrix[i][0][0]+', с номером: '+DublicateMatrix[i][0][1]+' удалена из стадии '+DublicateMatrix[i][0][3];
      const DelDublicate = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.6.0'
        },
        body: '{"id":"'+DublicateMatrix[i][0][0]+'","fields":{"UF_CRM_1694601072":"5586","STAGE_ID":"UC_93XIL7"}}'
      };

      fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', DelDublicate)
        .then(response => response.json())
        .then(response => {
          console.log("REST: ",response)
          console.log("Отправляю ", DublicateMatrix[i])
          
          const SendDublicate = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
            body: '{"chat_id":"1395354115","text":"Заявка '+DealId_To_Send+' удалена как Дубликат Агентом '+document.getElementById("user-block").getAttribute("data-user-id")+'"}'
          };

          fetch('https://api.telegram.org/bot6881870667:AAEtWo3EkLw6HqsjdLxbY0eJwt1Y_Uqr8io/sendMessage', SendDublicate)
            .then(response => response.json())
            .then(response => {
              console.log("TG: ",response);
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
    if (DublicateMatrix[i][0][3] == "PREPARATION" && DublicateMatrix[i][1][3] == "UC_0SAOJL") {
      console.log("удаляю ", DublicateMatrix[i][1][0])
      DealId_To_Send += DublicateMatrix[i][1][0]+', с номером: '+DublicateMatrix[i][1][1]+' удалена из стадии ' +DublicateMatrix[i][1][3];
      const DelDublicate = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.6.0'
        },
        body: '{"id":"'+DublicateMatrix[i][1][0]+'","fields":{"UF_CRM_1694601072":"5586","STAGE_ID":"UC_93XIL7"}}'
      };

      fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', DelDublicate)
        .then(response => response.json())
        .then(response => {
          console.log("REST: ",response)
          console.log("Отправляю ", DublicateMatrix[i])
          
          const SendDublicate = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
            body: '{"chat_id":"1395354115","text":"Заявка '+DealId_To_Send+' удалена как Дубликат Агентом '+document.getElementById("user-block").getAttribute("data-user-id")+'"}'
          };

          fetch('https://api.telegram.org/bot6881870667:AAEtWo3EkLw6HqsjdLxbY0eJwt1Y_Uqr8io/sendMessage', SendDublicate)
            .then(response => response.json())
            .then(response => {
              console.log("TG: ",response);
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
    if (DublicateMatrix[i][0][3] == "NEW" && DublicateMatrix[i][1][3] == "UC_0SAOJL") {
      console.log("удаляю ", DublicateMatrix[i][1][0])
      DealId_To_Send += DublicateMatrix[i][1][0]+', с номером: '+DublicateMatrix[i][1][1]+' удалена из стадии ' +DublicateMatrix[i][1][3];
      const DelDublicate = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.6.0'
        },
        body: '{"id":"'+DublicateMatrix[i][1][0]+'","fields":{"UF_CRM_1694601072":"5586","STAGE_ID":"UC_93XIL7"}}'
      };

      fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', DelDublicate)
        .then(response => response.json())
        .then(response => {
          console.log("REST: ",response)
          console.log("Отправляю ", DublicateMatrix[i])
          
          const SendDublicate = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
            body: '{"chat_id":"1395354115","text":"Заявка '+DealId_To_Send+' удалена как Дубликат Агентом '+document.getElementById("user-block").getAttribute("data-user-id")+'"}'
          };

          fetch('https://api.telegram.org/bot6881870667:AAEtWo3EkLw6HqsjdLxbY0eJwt1Y_Uqr8io/sendMessage', SendDublicate)
            .then(response => response.json())
            .then(response => {
              console.log("TG: ",response);
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
    if (DublicateMatrix[i][0][3] == "PREPARATION" && DublicateMatrix[i][1][3] == "NEW") {
      console.log("удаляю ", DublicateMatrix[i][1][0])
      DealId_To_Send += DublicateMatrix[i][1][0]+', с номером: '+DublicateMatrix[i][1][1]+' удалена из стадии ' +DublicateMatrix[i][1][3];
      const DelDublicate = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.6.0'
        },
        body: '{"id":"'+DublicateMatrix[i][1][0]+'","fields":{"UF_CRM_1694601072":"5586","STAGE_ID":"UC_93XIL7"}}'
      };

      fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', DelDublicate)
        .then(response => response.json())
        .then(response => {
          console.log("REST: ",response)
          console.log("Отправляю ", DublicateMatrix[i])
          
          const SendDublicate = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
            body: '{"chat_id":"1395354115","text":"Заявка '+DealId_To_Send+' удалена как Дубликат Агентом '+document.getElementById("user-block").getAttribute("data-user-id")+'"}'
          };

          fetch('https://api.telegram.org/bot6881870667:AAEtWo3EkLw6HqsjdLxbY0eJwt1Y_Uqr8io/sendMessage', SendDublicate)
            .then(response => response.json())
            .then(response => {
              console.log("TG: ",response);
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
    if (DublicateMatrix[i][0][3] == "UC_0SAOJL" && DublicateMatrix[i][1][3] == "PREPARATION") {
      console.log("удаляю ", DublicateMatrix[i][0][0])
      DealId_To_Send += DublicateMatrix[i][0][0]+', с номером: '+DublicateMatrix[i][0][1]+' удалена из стадии '+DublicateMatrix[i][0][3];
      const DelDublicate = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.6.0'
        },
        body: '{"id":"'+DublicateMatrix[i][0][0]+'","fields":{"UF_CRM_1694601072":"5586","STAGE_ID":"UC_93XIL7"}}'
      };

      fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', DelDublicate)
        .then(response => response.json())
        .then(response => {
          console.log("REST: ",response)
          console.log("Отправляю ", DublicateMatrix[i])
          
          const SendDublicate = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
            body: '{"chat_id":"1395354115","text":"Заявка '+DealId_To_Send+' удалена как Дубликат Агентом '+document.getElementById("user-block").getAttribute("data-user-id")+'"}'
          };

          fetch('https://api.telegram.org/bot6881870667:AAEtWo3EkLw6HqsjdLxbY0eJwt1Y_Uqr8io/sendMessage', SendDublicate)
            .then(response => response.json())
            .then(response => {
              console.log("TG: ",response);
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
    if (DublicateMatrix[i][0][3] == "UC_0SAOJL" && DublicateMatrix[i][1][3] == "NEW") {
      console.log("удаляю ", DublicateMatrix[i][0][0])
      DealId_To_Send += DublicateMatrix[i][0][0]+', с номером: '+DublicateMatrix[i][0][1]+' удалена из стадии '+DublicateMatrix[i][0][3];
      const DelDublicate = {
        method: 'POST',
        headers: {
          cookie: 'qmb=0.',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/8.6.0'
        },
        body: '{"id":"'+DublicateMatrix[i][0][0]+'","fields":{"UF_CRM_1694601072":"5586","STAGE_ID":"UC_93XIL7"}}'
      };

      fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', DelDublicate)
        .then(response => response.json())
        .then(response => {
          console.log("REST: ",response)
          console.log("Отправляю ", DublicateMatrix[i])
          
          const SendDublicate = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
            body: '{"chat_id":"1395354115","text":"Заявка '+DealId_To_Send+' удалена как Дубликат Агентом '+document.getElementById("user-block").getAttribute("data-user-id")+'"}'
          };

          fetch('https://api.telegram.org/bot6881870667:AAEtWo3EkLw6HqsjdLxbY0eJwt1Y_Uqr8io/sendMessage', SendDublicate)
            .then(response => response.json())
            .then(response => {
              console.log("TG: ",response);
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }

  }
  

}

function getCallCard(){
  
  try{
    if (Agent_In_WhiteList) {
      document.getElementsByClassName("im-phone-call-title-text")[0].style.display = "block"
    }
    if (document.getElementsByClassName("im-phone-call-btn-mute").length > 0) {
      document.getElementsByClassName("im-phone-call-title-text")[0].style.display = "block"
      
      
      if (document.getElementsByClassName("crm-list-stage-bar-title").length > 0) {
        if (document.getElementsByClassName("crm-list-stage-bar-title")[0].innerText == 'Новая' && document.getElementsByClassName("im-phone-call-title-text")[0].innerText.indexOf("Звонок на") < 0) {
          console.log("Идет звонок")

          Deal_id_FromCallCard = document.getElementsByClassName("crm-card-show-detail-info-name-item")[document.getElementsByClassName("crm-card-show-detail-info-name-item").length-1].getElementsByTagName("a")[0].getAttribute("href").split("/", 5)[4];
          document.getElementsByClassName("crm-list-stage-bar-title")[0].innerText = 'В работе'
          document.getElementsByClassName("crm-card-show-detail-info-name-item")[document.getElementsByClassName("crm-card-show-detail-info-name-item").length-1].getElementsByTagName("a")[0].click()
          const options = {
            method: 'POST',
            headers: {
              cookie: 'qmb=0.',
              'Content-Type': 'application/json',
              'User-Agent': 'insomnia/8.6.0'
            },
            body: '{"id":"'+Deal_id_FromCallCard+'","fields":{"STAGE_ID":"PREPARATION"}}'
          };
          const SetOtvetstnenniy_ToCall1 = {
                method: 'POST',
                headers: {
                  cookie: 'qmb=0.',
                  'Content-Type': 'application/json',
                  'User-Agent': 'insomnia/8.6.1'
                },
                body: '{"id":"'+Deal_id_FromCallCard+'","fields":{"ASSIGNED_BY_ID":"'+document.getElementById("user-block").getAttribute("data-user-id")+'"}}'
              };
          const SendInfo_To_Bot = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
            body: '{"chat_id":"-4248241774","text":"Я перевел сделку: '+Deal_id_FromCallCard+' в работу Агенту: '+document.getElementById("user-block").innerText+' через звонок 1"}'
          };
          const GetAgentList = {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.3.2'}
              };

          OpenWorkFunc();



          fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', GetAgentList)
            .then(response => response.json())
            .then(response => {
              console.log("NoWork_Agents: ", response)
              for (var i = 0; i < response.length; i++) {
                if (document.getElementById("user-name").innerText == "Александр Шатохин") {
                  document.getElementById("user-name").innerText = "Александр Шатохин"
                }
                if (document.getElementById("user-name").innerText == "Павел Андреевич") {
                  document.getElementById("user-name").innerText = "Павел Обухов"
                }
                console.log("Сверяю: ", response[i].user, "и", document.getElementById("user-block").innerText)
                if (response[i].user == document.getElementById("user-block").innerText) {
                  console.log("Совпалость")
                  AgentInList = true;
                  //Если агент есть в списке
                  fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents/'+response[i].id, {
                    method: 'PUT', // or PATCH
                    headers: {'content-type':'application/json'},
                    body: '{"LastBeryClick":'+currentUnix+', "Online":true}'
                  }).then(res => {
                    if (res.ok) {
                      return res.json();
                    }
                    // handle error
                  }).then(task => {
                    console.log("Изменил Unix: ", task)
                  }).catch(error => {
                        // handle error
                  })
                }
              }
              if(!AgentInList){
                console.log("Агент не найден в списке, добавляю нового")
                const newTask = {
                  "user": document.getElementById("user-block").innerText,
                  "LastBeryClick": currentUnix,
                  "Online": true,
                  "BT_Id": document.getElementById("user-block").getAttribute("data-user-id")
                };
                fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', {
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
            })
            .catch(err => console.error(err));

          fetch('https://api.telegram.org/bot7536226475:AAG5C4lJljhCzGdqS8nl5DIjK2NoLuHCgbg/sendMessage', SendInfo_To_Bot)
            .then(response1 => response1.json())
            .then(response1 => {
              fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', SetOtvetstnenniy_ToCall1)
                .then(response2 => response2.json())
                .then(response2 => {
                  console.log(response2)
                  fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', options)
                    .then(response3 => response3.json())
                    .then(response3 => {
                      console.log(response3)
                      
                    })
                    .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
          })
          .catch(err => console.error(err));

        }
      }
      else{
        console.log("Идет звонок 2")
        // /crm/deal/details/5265756/
          // 
        DealPhoneNumber_FromCard = document.getElementsByClassName("im-phone-call-header")[0].innerText.match(phonePattern)[1]
        
    
        console.log(DealPhoneNumber_FromCard)
        if(document.getElementsByClassName("im-phone-call-status-description")[0].innerHTML.indexOf("Перейти в сделку") < 0){
          const GetContactId = {
            method: 'POST',
            headers: {
              cookie: 'qmb=0.',
              'Content-Type': 'application/json',
              'User-Agent': 'insomnia/9.3.3'
            },
            body: '{"PHONE_NUMBER":"'+DealPhoneNumber_FromCard+'"}'
          };

          OpenWorkFunc();



          const GetAgentList = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.3.2'}
          };
          fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', GetAgentList)
            .then(response => response.json())
            .then(response => {
              console.log("NoWork_Agents: ", response)
              for (var i = 0; i < response.length; i++) {
                if (document.getElementById("user-name").innerText == "Александр Шатохин") {
                  document.getElementById("user-name").innerText = "Александр Шатохин"
                }
                if (document.getElementById("user-name").innerText == "Павел Андреевич") {
                  document.getElementById("user-name").innerText = "Павел Обухов"
                }
                console.log("Сверяю: ", response[i].user, "и", document.getElementById("user-block").innerText)
                if (response[i].user == document.getElementById("user-block").innerText) {
                  console.log("Совпалость")
                  AgentInList = true;
                  //Если агент есть в списке
                  fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents/'+response[i].id, {
                    method: 'PUT', // or PATCH
                    headers: {'content-type':'application/json'},
                    body: '{"LastBeryClick":'+currentUnix+', "Online":true}'
                  }).then(res => {
                    if (res.ok) {
                      return res.json();
                    }
                    // handle error
                  }).then(task => {
                    console.log("Изменил Unix: ", task)
                  }).catch(error => {
                        // handle error
                  })
                }
              }
              if(!AgentInList){
                console.log("Агент не найден в списке, добавляю нового")
                const newTask = {
                  "user": document.getElementById("user-block").innerText,
                  "LastBeryClick": currentUnix,
                  "Online": true,
                  "BT_Id": document.getElementById("user-block").getAttribute("data-user-id")
                };
                fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', {
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
            })
            .catch(err => console.error(err));
          fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/telephony.externalCall.searchCrmEntities', GetContactId)
            .then(response => response.json())
            .then(response => {
              console.log("GetContactId: ", response)
              const GetDealId = {
                method: 'POST',
                headers: {
                  cookie: 'qmb=0.',
                  'Content-Type': 'application/json',
                  'User-Agent': 'insomnia/9.3.3'
                },
                body: '{"filter":{"CONTACT_ID":"'+response.result[0].CRM_ENTITY_ID+'"}}'
              };
              fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', GetDealId)
                .then(response => response.json())
                .then(response => {
                  console.log("GetDealId: ", response)
                  DealId_From_DealPhoneNumber = response.result[0].ID;
                  if (response.result[0].CLOSED != "Y" || response.result[0].STAGE_ID == "LOSE") {
                    const Send_ToWork = {
                      method: 'POST',
                      headers: {
                        cookie: 'qmb=0.',
                        'Content-Type': 'application/json',
                        'User-Agent': 'insomnia/8.6.0'
                      },
                      body: '{"id":"'+DealId_From_DealPhoneNumber+'","fields":{"STAGE_ID":"PREPARATION"}}'
                    };
                    const SetOtvetstnenniy_ToCall = {
                      method: 'POST',
                      headers: {
                      cookie: 'qmb=0.',
                        'Content-Type': 'application/json',
                        'User-Agent': 'insomnia/8.6.1'
                      },
                        body: '{"id":"'+DealId_From_DealPhoneNumber+'","fields":{"ASSIGNED_BY_ID":"'+document.getElementById("user-block").getAttribute("data-user-id")+'"}}'
                    };
                    const SendInfo_To_Bot = {
                      method: 'POST',
                      headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
                      body: '{"chat_id":"-4248241774","text":"Я перевел сделку: '+DealId_From_DealPhoneNumber+' в работу Агенту: '+document.getElementById("user-block").innerText+' через звонок 2"}'
                    };
                    fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', Send_ToWork)
                      .then(response1 => response1.json())
                      .then(response1 => {
                      fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.update', SetOtvetstnenniy_ToCall)
                        .then(response2 => response2.json())
                        .then(response2 => {
                          fetch('https://api.telegram.org/bot7536226475:AAG5C4lJljhCzGdqS8nl5DIjK2NoLuHCgbg/sendMessage', SendInfo_To_Bot)
                            .then(response3 => response3.json())
                            .then(response3 => {
                              if (document.getElementsByClassName("im-phone-call-status-description")[0].innerHTML.indexOf("Перейти в сделку") < 0) {
                                document.getElementsByClassName("im-phone-call-status-description")[0].innerHTML += '<div class="im-phone-call-status-description-item" style="margin-top: 10px;"><a class="m-phone-call-status-description-item-link" style="color: white;text-decoration: underline;" href="'+"/crm/deal/details/"+DealId_From_DealPhoneNumber+'/">Перейти в сделку</a></div>'
                              }
                              document.getElementsByClassName("m-phone-call-status-description-item-link")[0].click()
                            })
                            .catch(err => console.error(err));
                        })
                        .catch(err => console.error(err));
                      })
                      .catch(err => console.error(err));
                  }
                  else{
                    console.log("Не перевожу сделку в работу, она уже закрыта!")
                  }
                })
                .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
        }
      }
    }
  }
  catch(e){
    //console.log(e)
    //console.log("Жду звонок")
  }
}

function OpenWorkFunc(){
  var M_Name = document.getElementById("user-block").innerText
  var M_Name_List = []
  const GetWorkDay = {
    method: 'POST',
    headers: {
      cookie: 'qmb=0.',
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/10.1.1'
    },
    body: '{"user_id":"'+document.getElementById("user-block").getAttribute("data-user-id")+'"}'
  };

  fetch('https://speedinet.bitrix24.ru/rest/25550/92yb1mz0rkt5e2cl/timeman.status', GetWorkDay)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      if (UserIsAgent && response.result.STATUS != "OPENED") {
      
        const OpenWork = {
          method: 'POST',
          headers: {
            cookie: 'qmb=0.',
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/10.1.1'
          },
          body: '{"user_id":"'+document.getElementById("user-block").getAttribute("data-user-id")+'"}'
        };

        fetch('https://speedinet.bitrix24.ru/rest/25550/92yb1mz0rkt5e2cl/timeman.open', OpenWork)
          .then(response => response.json())
          .then(response => {
            const Send_OpenWork_ToLog = {
              method: 'POST',
              headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
              body: '{"chat_id":"-4548879553","text":"Автоматически начал смену у Агента '+M_Name+', Причина: Принял входящий/Нажал на кнопку"}'
            };

            fetch('https://api.telegram.org/bot7377332361:AAFr8FnibII4GPnfcsHrUjss5amE91GrzYs/sendMessage', Send_OpenWork_ToLog)
              .then(response => response.json())
              .then(response => console.log(response))
              .catch(err => console.error(err));
          })
          .catch(err => console.error(err));

      } else {
          console.log(`Агента нет в массиве.`);
      }
    })
    .catch(err => console.error(err));
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

function SetStartEvents(){
  var M_Name = document.getElementById("user-block").innerText

  if (document.getElementsByClassName("ui-btn-icon-start").length > 0) {
    if (document.getElementsByClassName("ui-btn-icon-start")[0] != StartEventIsOn) {
      StartEventIsOn = document.getElementsByClassName("ui-btn-icon-start")[0]
      console.log("добавил связь на старт:", StartEventIsOn != document.getElementsByClassName("ui-btn-icon-start")[0]) 
      console.log("StartEventIsOn: ", StartEventIsOn)
      console.log("document: ", document.getElementsByClassName("ui-btn-icon-start")[0])

      document.getElementsByClassName("ui-btn-icon-start")[0].addEventListener('click', function (event) {
        fetch('https://api.telegram.org/bot7377332361:AAFr8FnibII4GPnfcsHrUjss5amE91GrzYs/sendMessage', {
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
          body: '{"chat_id":"-4548879553","text":"Автоматически начал смену у Агента '+M_Name+', Причина: Агент сам начал смену"}'
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

        const GetAgentList = {
          method: 'GET',
          headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.3.2'}
        };
        fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', GetAgentList)
          .then(response => response.json())
          .then(response => {
            console.log("NoWork_Agents: ", response)
            for (var i = 0; i < response.length; i++) {
              
              if (document.getElementById("user-name").innerText == "Павел Андреевич") {
                document.getElementById("user-name").innerText = "Павел Обухов"
              }
              console.log("Сверяю: ", response[i].user, "и", document.getElementById("user-block").innerText)
              if (response[i].user == document.getElementById("user-block").innerText) {
                console.log("Совпалость")
                AgentInList = true;
                //Если агент есть в списке
                fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents/'+response[i].id, {
                  method: 'PUT', // or PATCH
                  headers: {'content-type':'application/json'},
                  body: '{"LastBeryClick":'+currentUnix+', "Online":true}'
                }).then(res => {
                  if (res.ok) {
                    return res.json();
                  }
                  // handle error
                }).then(task => {
                  console.log("Изменил Unix: ", task)
                  
                  
                }).catch(error => {
                  // handle error
                })
              }
            }
            if(!AgentInList){
              console.log("Агент не найден в списке, добавляю нового")
              const newTask = {
                "user": document.getElementById("user-block").innerText,
                "LastBeryClick": currentUnix,
                "Online": true,
                "BT_Id": document.getElementById("user-block").getAttribute("data-user-id")
              };
              fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', {
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
          })
          .catch(err => console.error(err));
      });
    }
  }
  if (document.getElementsByClassName("ui-btn-icon-stop").length > 0) {
    if (document.getElementsByClassName("ui-btn-icon-stop")[0] != StopEventIsOn) {
      StopEventIsOn = document.getElementsByClassName("ui-btn-icon-stop")[0]

      document.getElementsByClassName("ui-btn-icon-stop")[0].addEventListener('click', function (event) {
        fetch('https://api.telegram.org/bot7377332361:AAFr8FnibII4GPnfcsHrUjss5amE91GrzYs/sendMessage', {
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
          body: '{"chat_id":"-4548879553","text":"Автоматически закрыл смену у Агента '+M_Name+', Причина: Агент сам закрыл смену"}'
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

        const GetAgentList = {
          method: 'GET',
          headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.3.2'}
        };
        fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', GetAgentList)
          .then(response => response.json())
          .then(response => {
            console.log("NoWork_Agents: ", response)
            for (var i = 0; i < response.length; i++) {
              
              if (document.getElementById("user-name").innerText == "Павел Андреевич") {
                document.getElementById("user-name").innerText = "Павел Обухов"
              }
              console.log("Сверяю: ", response[i].user, "и", document.getElementById("user-block").innerText)
              if (response[i].user == document.getElementById("user-block").innerText) {
                console.log("Совпалость")
                AgentInList = true;
                //Если агент есть в списке
                fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents/'+response[i].id, {
                  method: 'PUT', // or PATCH
                  headers: {'content-type':'application/json'},
                  body: '{"LastBeryClick":'+currentUnix+', "Online":false}'
                }).then(res => {
                  if (res.ok) {
                    return res.json();
                  }
                  // handle error
                }).then(task => {
                  console.log("Изменил Unix: ", task)

                }).catch(error => {
                  // handle error
                })
              }
            }
            if(!AgentInList){
              console.log("Агент не найден в списке, добавляю нового")
              const newTask = {
                "user": document.getElementById("user-block").innerText,
                "LastBeryClick": currentUnix,
                "Online": false,
                "BT_Id": document.getElementById("user-block").getAttribute("data-user-id")
              };
              fetch('https://668253b204acc3545a090ff2.mockapi.io/SpeedInetBase/NoWork_Agents', {
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
          })
          .catch(err => console.error(err));
      });
    }
  }

}