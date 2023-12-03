var number = null;
var nameval = null;

var AbSername = null;
var AbName = null;
var AbPatronymic = null;





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
  var aTags = document.getElementsByTagName("h4");
  var searchText = "Время визита монтажника";


  var aTags1 = document.getElementsByTagName("div");
  var searchText1 = "Заметки";
  

  try{
    for (var i = 0; i < aTags.length; i++) {
      if (aTags[i].textContent == searchText) {
        found = aTags[i];
        break;
      }
    }

  }
  catch(e){
    console.log(e);
  }
  try{
    for (var i = 0; i < aTags1.length; i++) {
      if (aTags1[i].innerText == searchText1) {
        found1 = aTags1[i];
        console.log("found1: До брейка", found1);
        break;
      }
    }
  }
  catch(e){
    console.log(e);
  }


  console.log("found: ", found);
  console.log("found1: ", found1);
  console.log("found.innerHTML: ", found.innerHTML);
  console.log("found1.innerHTML: ", found1.innerHTML);
  var elementClasses = found1.classList;
  console.log(elementClasses)

  if (found.innerHTML == 'Время визита монтажника' && found1.innerHTML.indexOf("Вставить") < 0 && elementClasses[0].indexOf("otes_Notes__Button") < 0 && elementClasses[0].indexOf("notes-open-modal") < 0) {
    
    found1.innerHTML += '<a id="PasteButton1">Вставить</a>';
    
    console.log("-----------------------------------Вставил--------------------------------------")
  }
 


  document.getElementById("PasteButton1").addEventListener("click", e => {
    navigator.clipboard.readText()
    .then(text => {
      console.log(text);
      var json = JSON.parse(text);
      console.log(json);

      const event = new Event('input', { bubbles: true });

      replaseName(json.fio)
      replaseNumber(json.PhoneNumber)

      


      document.querySelector('[placeholder="Фамилия"]').value = AbSername;
      document.querySelector('[placeholder="Имя"]').value = AbName;
      document.querySelector('[placeholder="Отчество"]').value = AbPatronymic;
      document.querySelector('[placeholder="+7 (Основной номер)"]').value = number;
      document.querySelector('[placeholder="Комментарий"]').value = json.OtherInfo;
      
      document.querySelector('[placeholder="Имя"]').dispatchEvent(event);
      document.querySelector('[placeholder="+7 (Основной номер)"]').dispatchEvent(event);
      document.querySelector('[placeholder="Комментарий"]').dispatchEvent(event);

      


      



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
  link.href = 'https://sun9-75.userapi.com/s/v1/if2/4-_9vy2biZB1OE9KZlKihxrwvPY0NIrwRD7covbamWIaYUFRkrc8FmR69SpVIywoDI3Xie2BrCEYuvswhoZq_-9q.jpg?size=1280x1280&quality=96&type=album';
}

function replaseNumber(num){
  //console.log(number);
  //console.log(num);

  number1 = num.replace(/[-+()\s]/g, ''); //Удаляет все непонятные символы
  number2 = number1.slice(1) // Удаляем первый символ (7 или 8)
  number3 = number2.slice(0,-7); // Первые 3 символа, например 923
  number4 = number2.slice(3,6); //Следующие 3 цифры, например 302
  number5 = number2.slice(6,8); //Следующие 2 цифры, например 49
  number6 = number2.slice(8,10); //Следующие 2 цифры, например 09



  number = '+7('+number3+')'+number4+'-'+number5+'-'+number6
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