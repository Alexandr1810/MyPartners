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
var hideSpam = true,hideNedozvons
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




function GetAllDeals1(){

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

  fetch('https://speedinet.bitrix24.ru/rest/'+ApiToken+'/crm.deal.list', options)
    .then(response => response.json())
    .then(response => {
      AllDealsLenght = response.total
      console.log(AllDealsLenght)
      GetAllDeals2()
    })
    .catch(err => console.error(err));


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
        console.log("AllOPPORTUNITY in GetAllDeals2", AllOPPORTUNITY)
        AllDealsArr = AllOPPORTUNITY;
        console.log("AllDealsArr: ", AllDealsArr)
        GetAllDeals3()
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

  fetch('https://speedinet.bitrix24.ru/rest/'+ApiToken+'/crm.deal.list', options)
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
        console.log("AllOPPORTUNITY in GetAllDeals4", AllOPPORTUNITY)
        AllDealsArrInLastMonth = AllOPPORTUNITY;
        console.log("AllDealsArrInLastMonth: ", AllDealsArrInLastMonth)
      });
}





var NumbersReshifrator = {
          SpeedInet: "9039236742",
          SpeedNet: "9039225718",
          PerSet: "9039248205",
          DomRu: "9039246531",
          DomRu1: "9039229204",
          DomRu2: "9039225026",
          DomRu3: "9039217263",
          DomRu4: "9039244751",
          DomRu5: "9039217524",
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
  if (AllUsers) {
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
  }
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
                    Head[0].innerHTML += "<style>.crm-kanban-total-price-total2{width:100%;overflow:hidden;display:inline-block;font-size:26px;white-space:nowrap;-ms-text-overflow:ellipsis;text-overflow:ellipsis;padding:0 10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;color:white}.crm-kanban-total-price:hover .crm-kanban-total-price-total2{display:inline-block}.crm-kanban-total-price:hover .crm-kanban-total-price-total{display:none} #CopyButton{border-bottom: 1px dashed #2067b0 !important; margin-right: 10px !important;}</style>"
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
                        ApiToken = request.Token;
                        Apidd = tasks.LoginDate
                        if (Number(Apidd) < dd || Number(Apidd) > dd) {
                          console.log('Код просрочен')
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
                            .catch(err => console.error(err));
                        }
                        console.log("PasswordToken: ", PasswordToken)
                        GetAllDeals1();
                        setTimeout(InStart, 6000);
                        setInterval(SetNames, 500);
                      }
                      else{
                        console.log('Код не подходит')
                        document.body.innerHTML += `<h1 class="ExtenAlertText" style="
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
                              .catch(err => console.error(err));
                          }
                      }
                    }).catch(error => {
                      // handle error
                    })
                    

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
                            .catch(err => console.error(err));
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
        fetch('https://speedinet.bitrix24.ru/rest/'+ApiToken+'/crm.deal.get', options)
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
            Calculation_Of_Payment_From_CurrentMonth(!AllDealsIs, responsibleIds[0], 'C6:UC_Y6OU39')
          }
          else{
            console.log("Смотрит чьи то заявки")
            Calculation_Of_Payment_From_CurrentMonth(!AllDealsIs, responsibleIds[0], 'C6:UC_Y6OU39')
          }
        }
        if (document.getElementsByClassName('crm-kanban-total-price')[1].innerHTML.indexOf('crm-kanban-total-price-total2') < 0) {
          if (!AllDealsIs) {
            console.log("Смотрит все заявки")
            Calculation_Of_Payment_From_CurrentMonth(!AllDealsIs, responsibleIds[0], 'C6:UC_OE7FJH')
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
      for (var i = 0; i < Price.length; ++i) {
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
      for (var i = 2; i < Price.length; ++i) {
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
    GetAllDealsInCurrentMounth();
    var Tester = document.getElementsByClassName('crm-kanban-total-price-total');
    GetPrice();
    
    if (document.getElementsByClassName("main-kanban-column-title-info")[0].innerHTML.indexOf("Спам") < 0 && Columns[0].innerHTML == "Новая") {
      if (document.getElementById("user-name").innerText == "Александр Шатохин" || document.getElementById("user-name").innerText == "Павел Обухов" || document.getElementById("user-name").innerText == "Марк Плющ" || document.getElementById("user-name").innerText == "Павел Андреевич" ||document.getElementById("user-name").innerText =="Рыжая Бестия") {
        document.getElementsByClassName("main-kanban-column-title-info")[0].innerHTML += '<div class="main-kanban-column-title-spam-inner" id="spamText">Спам</div><div style="margin-left: 3%;" class="main-kanban-column-title-spam-inner" id="NedovonText">Недозвоны</div>';
      }
      else{
        document.getElementsByClassName("main-kanban-column-title-info")[0].innerHTML += '<div class="main-kanban-column-title-spam-inner" id="spamText">Спам</div>';
      }
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

  if (document.getElementsByClassName("main-kanban-column-title-info")[0].innerHTML.indexOf("Спам") < 0 && Columns[0].innerHTML == "Новая") {
      if (document.getElementById("user-name").innerText == "Александр Шатохин" || document.getElementById("user-name").innerText == "Павел Обухов" || document.getElementById("user-name").innerText == "Марк Плющ" || document.getElementById("user-name").innerText == "Павел Андреевич" ||document.getElementById("user-name").innerText =="Рыжая Бестия") {
          document.getElementsByClassName("main-kanban-column-title-info")[0].innerHTML += '<div class="main-kanban-column-title-spam-inner" id="spamText">Спам</div><div style="margin-left: 3%;" class="main-kanban-column-title-spam-inner" id="NedovonText">Недозвоны</div>';
          AddListener_In_Head();
      }
      else{
          document.getElementsByClassName("main-kanban-column-title-info")[0].innerHTML += '<div class="main-kanban-column-title-spam-inner" id="spamText">Спам</div>';
      }
  }
  

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
     
    if (NewCards[i].innerHTML.indexOf("Номер") < 0 && Columns[0].innerHTML == "Новая" || NewCards[i].innerHTML.indexOf("INSIDE") >= 0 || NewCards[i].innerHTML.indexOf("MUQUARI") >= 0 || NewCards[i].innerHTML.indexOf("MUQARI") >= 0 || NewCards[i].innerHTML.indexOf("jenay") >= 0 || NewCards[i].innerHTML.indexOf("Заявка на расчет для частного дома") >= 0 || NewCards[i].innerHTML.indexOf("TIGLACK") >= 0 || NewCards[i].innerHTML.indexOf("Здравствуйте, есть базы") >= 0 ) {
        console.log("Найдена пустая завка ", i)
        if (hideSpam) {
          NewCards[i].style.display = "none";
        }
        else{
          NewCards[i].style.display = "block";
        }
        console.log(NewCards[i])
        DelLids++;
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
    

      if (document.getElementById("user-name").innerText == "Александр Шатохин" || document.getElementById("user-name").innerText == "Павел Обухов" || document.getElementById("user-name").innerText == "Марк Плющ" || document.getElementById("user-name").innerText == "Павел Андреевич" ||document.getElementById("user-name").innerText =="Рыжая Бестия") {
        if (NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сегодня") >= 0 && CurrentHour-TodayTime >= 3 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("вчера") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("ноябр") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("декабр") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("январ") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("феврал") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("март") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("апрел") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("мая") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("июня") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("июля") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("август") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("сентяб") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf("октяб") >= 0 && Columns[0].innerHTML == "Новая" || NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf(".") >= 0 && NewCards[i].getElementsByClassName('crm-kanban-item-date')[0].innerHTML.indexOf(":") >= 0 && Columns[0].innerHTML == "Новая" ) {
            if (hideNedozvons) {
              NewCards[i].style.display = "none";
            }
            else{
              NewCards[i].style.display = "block";
              NewCards[i].getElementsByClassName("crm-kanban-item")[0].setAttribute('style', '--crm-kanban-item-color: rgb(164 0 240 / 70%);');
            }
            
            NedozLids++;
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
      if (document.getElementById("user-name").innerText == "Александр Шатохин" || document.getElementById("user-name").innerText == "Павел Обухов" || document.getElementById("user-name").innerText == "Марк Плющ" || document.getElementById("user-name").innerText == "Павел Андреевич" ||document.getElementById("user-name").innerText =="Рыжая Бестия") {
        if (i == (NewCards.length-1)) {
          document.getElementsByClassName("main-kanban-column-title-spam-inner")[1].innerText = 'Недозвоны (' + NedozLids + ')';
          console.log('NedozLids: ', NedozLids)
          NedozLids = 0;
        }
      }
    }
    catch(e){
      console.log(e)
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
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.SpeedNet) {
            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий Speed-net";
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
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.DomRu3) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий ДомРу";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.DomRu4) {

            AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML = "Входящий ДомРу";
          }
          if (AllCards[i].getElementsByClassName('crm-kanban-item-fields-item-value')[j].innerHTML.replace('Билайн АТС ', '') == NumbersReshifrator.DomRu5) {

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
        fetch('https://'+PasswordToken+'.mockapi.io/MyPartners/Kanban_Names', {
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
      fetch('https://'+ PasswordToken +'.mockapi.io/MyPartners/Kanban_Names/'+id, {
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

      fetch('https://'+ PasswordToken +'.mockapi.io/MyPartners/Kanban_Names/', {
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
  if (document.getElementById("user-name").innerText == "Александр Шатохин" || document.getElementById("user-name").innerText == "Павел Обухов" || document.getElementById("user-name").innerText == "Марк Плющ" || document.getElementById("user-name").innerText == "Павел Андреевич" ||document.getElementById("user-name").innerText =="Рыжая Бестия") {
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