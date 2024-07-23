var number;
var nameval;
var PassToken = null;
var EG_Login = null;
var EG_Password = null;
var LoginKey = null;

window.addEventListener('load', function () { 
    console.log("Начинаю шаманить")
    chrome.runtime.sendMessage({
        user: "novotelecom",
        Message: "Обновись!"
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            //console.log(request, sender, sendResponse);
            //console.log(request.Recipient, request.Recipient, request.Message);
            PassToken = request.Token;
            if (request.Recipient == 'novotelecom') {
                if (request.Message=='true') {
                    setTimeout(InStart(), 5000);
                    setInterval(FindPaste, 1000)
                    LoginKey = request.LogToken
                    

                    fetch('https://'+PassToken+'.mockapi.io/MyPartners/EISSD_Pass/1', {
                      method: 'GET',
                      headers: {'content-type':'application/json'},
                    }).then(res => {
                      if (res.ok) {
                          return res.json();
                      }
                      // handle error
                    }).then(tasks => {
                      if (LoginKey == tasks.LoginCode) {
                        EG_Login = tasks.EG_Log
                        EG_Password  = tasks.EG_Pass
                        setInterval(SetPass, 200); 
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
                                font-size: 34px;
                                z-index: 1000;
                            ">Вы не вошли в MyPartners!</h1>`
                        }
                    }).catch(error => {
                      // handle error
                    })
                }
                if (request.Message=='false') {
                  console.log(request.Message);
                }
            }
        }
    );

    
})
function SetPass(){
    console.log("Получил, Делаю!")

    const event = new Event('input', { bubbles: true });


    if (document.querySelectorAll('[name="username"]')[0] != undefined) {
        document.querySelectorAll('[name="username"]')[0].setAttribute('type', 'password')
    }
    if (document.querySelectorAll('[name="password"]')[0] != undefined) {
        document.querySelectorAll('[name="password"]')[0].setAttribute('type', 'password')
    }

    if (window.location.href.indexOf("login.php") >= 0) {
        if (document.getElementsByClassName("c1_Annotation")[0].innerHTML.indexOf("MyPartnersLog") < 0) {
            document.getElementsByClassName("c1_Annotation")[0].innerHTML += '<a id="MyPartnersLog"><span id="MyPartnersText">Вход</span><img id="MyPartnersImg" src="https://cdn.icon-icons.com/icons2/1520/PNG/512/chevronflat_106005.png"></a>'
        }
    }

    try{
      MyPartnersLog.onclick = function() {
          console.log(document.getElementsByClassName("ButtonText")[3])
          if (document.getElementsByClassName("ButtonText")[3] != undefined) {
              document.querySelectorAll('[name="username"]')[0].value = EG_Login;
              document.querySelectorAll('[name="password"]')[0].value = EG_Password;

              document.querySelectorAll('[name="username"]')[0].dispatchEvent(event);
              document.querySelectorAll('[name="password"]')[0].dispatchEvent(event);


              document.getElementsByClassName("ButtonText")[3].click();

          }

      };
    }
    catch(e){

    }
    try{
      if (document.getElementsByClassName("col-12")[1].innerHTML.indexOf("tooltiptext1") < 0 && document.getElementsByClassName("card-header")[0].innerText == 'Заявка на подключение') {
          document.getElementsByClassName("col-12")[1].innerHTML += '<span class="tooltiptext1" style="">ФИО вписываем без лишних пробелов и без ошибок.<br>Пример:  Шатохин Иван Павлович.</span>'
          document.getElementsByClassName("col-12")[2].innerHTML += '<span class="tooltiptext1" style="top: -69%;">Вписываем со второй цифра без пробелов и тире.<br>Пример: 9332660125.</span>'
          document.getElementsByClassName("col-12")[3].innerHTML += '<span class="tooltiptext1" style="top: -66%;">Название населенного пункта вписываем вручную и выбираем из выпадающего списка.</span>'
          document.getElementsByClassName("col-12")[4].innerHTML += '<span class="tooltiptext1" style="top: -122%;">Название улицы указываем в том же формате, что и указано в файле с территорией покрытия.<br>Пример: Физкультурная ул. Красный пр-кт. Цветочная (снт Бытовик) ул.</span>'
          document.getElementsByClassName("col-12")[5].innerHTML += '<span class="tooltiptext1" style="width: 121%; left: -126%; top: -110%;">Указываем только целочисленные значения. <br>Если номер дома с корпусом, дробью или буквой - номер корпуса указываем в поле «Корпус».</span>'
          document.getElementsByClassName("col-12")[8].innerHTML += '<span class="tooltiptext1" style="width: 55%;left: -58%;top: -49%;">Прописываем конфигурацию ТП, обязательно название ТП, АП, оборудование, модель, стоимость его аренды/рассрочки (срок рассрочки)/выкупа и дополнительную информацию.</span>'
          
      }
    }
    catch(e){
      console.log(e)
    }
}
function getClipboardData(data) {
    var myVariable = data;
    console.log(myVariable); // вывод в консоль или другие дальнейшие операции с данными
    // Дальнейший код здесь...
}

function FindPaste(){
  //console.log("Есть контакт");
  try{
    const IcoGroup = document.getElementsByClassName("logo")[0];
    //const FormGroup = document.getElementsByClassName("g-recaptcha")[0];
    const FormGroup = document.querySelector('[style="width: 304px; height: 78px;"]');

    

    console.log(IcoGroup)
    if (IcoGroup.innerHTML.indexOf("Коммисии") < 0) {
      IcoGroup.innerHTML += '<a href="http://pap.novotelecom.ru/affiliates/panel.php#Transactions-List" style="z-index: 10000; font-weight: 600; padding: 7px; background-color: #2ecc71; border-color: #2ecc71; color: #fff; border-radius: 6px; position: relative; top: 50px; left: 49%;">Коммисии</a>';
    }
    if (FormGroup.innerHTML.indexOf("Вставить") < 0) {
      //FormGroup.innerHTML += '<a id="PasteButton" style="font-weight: 600;padding: 9px;background-color: #2ecc71;border-color: #2ecc71;color: #fff;border-radius: 6px;position: relative;top: 35px;left: 55%;cursor: pointer;">Вставить</a>';
    }


    document.getElementById("PasteButton").addEventListener("click", e => {
      // Получение данных из буфера обмена

      var textArea = document.createElement("textarea");
      textArea.style.position = "fixed";
      textArea.style.top = 0;
      textArea.style.left = 0;
      textArea.style.width = "2em";
      textArea.style.height = "2em";
      textArea.style.padding = 0;
      textArea.style.border = "none";
      textArea.style.outline = "none";
      textArea.style.boxShadow = "none";
      textArea.style.background = "transparent";
      document.body.appendChild(textArea);
      textArea.focus();
      document.execCommand('paste');
      var clipboardData = textArea.value;
      console.log(clipboardData);
      getClipboardData(clipboardData);
      document.body.removeChild(textArea);
      
      

      
      /*navigator.clipboard.readText()
      .then(text => {
        console.log(text);
        var json = JSON.parse(text);
        console.log(json);

        const FIO = document.querySelector('[placeholder="ФИО абонента"]');
        const PhNumber = document.querySelector('[placeholder="9991112233"]');
        const Street = document.querySelector('[placeholder="Улица"]');
        const House = document.querySelector('[placeholder="Дом"]');
        const Korpus = document.querySelector('[placeholder="Корпус"]');
        const Kvartira = document.querySelector('[placeholder="Квартира"]');
        const Comment = document.querySelector('[placeholder="Комментарий"]');

        

        replaseNumber(json.PhoneNumber);
        replaseName(json.fio);

        FIO.value = json.fio;
        Comment.value = json.OtherInfo;
        PhNumber.value = number.slice(1);
      })
      .catch(err => {
        // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
        console.log('Something went wrong', err);
      });
      */
    });
    
  }
  
  catch(e){
    console.log(e)
  }
}

function InStart(){
  var link = document.querySelector("link[rel='icon']");
  if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
      
  }
  link.href = 'https://e-gorod54.ru/favicon/favicon.ico';
}

function replaseNumber(num){
  number = num.replace(/[-+()\s]/g, '');
}

