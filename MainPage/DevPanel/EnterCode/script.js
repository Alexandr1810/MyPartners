function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
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

function UpdatePasswordInApi(){
  fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
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
    	document.getElementById('TimeText').innerText = 'Код сгенерирован '+dd+'-'+mm+'-'+yyyy;
    	document.getElementById('KeyText').innerText = 'Текущий код: '+ randomStr
  }).catch(error => {
    console.log(error)
  })
}
function SetCodeInteval() {
	console.log('Новый цикл')
	
}

window.addEventListener('load', function () {
	console.log('Старт!')
	//setInterval(SetCodeInteval, 120000); 
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
        method: 'GET',
        headers: {'content-type':'application/json'},
    })
    .then(res => {
	    if (res.ok) {
	        return res.json();
	    }
    })
    .then(tasks => {
    	Apidd = tasks.LoginDate

    	document.getElementById('TimeText').innerText = 'Код сгенерирован '+Apidd+'-'+mm+'-'+yyyy;
    	document.getElementById('KeyText').innerText = 'Текущий код: '+tasks.LoginCode
    })
    .catch(error => {
    	console.error(error)
    })
});

SendCode_a.onclick = function() {
	console.log('Кнопка!')
    today = new Date();
    dd = String(today.getDate()).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = today.getFullYear();
    randomIndex1 = getRandomInt(40)
    randomIndex2 = getRandomInt(40)
    randomIndex3 = getRandomInt(40)
    randomIndex4 = getRandomInt(40)
    randomIndex5 = getRandomInt(40)
    randomIndex6 = getRandomInt(40)
    randomIndex7 = getRandomInt(40)
    randomIndex8 = getRandomInt(40)
    randomIndex9 = getRandomInt(40)
    randomIndex10 = getRandomInt(40)
    randomIndex11 = getRandomInt(40)
    randomInt1 = parseInt(Math.random() * (9999 - 1000) + 1000);
    randomInt2 = parseInt(Math.random() * (300 - 100) + 100);
    randomInt3 = parseInt(Math.random() * (867 - 567) + 567);
    randomStr = SimvolsArr[randomIndex1] + SimvolsArr[randomIndex2] + SimvolsArr[randomIndex3] + randomInt1 + SimvolsArr[randomIndex4] + SimvolsArr[randomIndex5] + SimvolsArr[randomIndex6] + randomInt2 + SimvolsArr[randomIndex7] + SimvolsArr[randomIndex8] + randomInt3 + SimvolsArr[randomIndex9] + SimvolsArr[randomIndex10] + SimvolsArr[randomIndex11]
    
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
        method: 'GET',
        headers: {'content-type':'application/json'},
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(tasks => {

                          
        const SendKeyToChat = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
            body: '{"chat_id":"-1002064816512","text":"Код на сегодня: `'+randomStr+'`","parse_mode": "MARKDOWN"}'
        };

        fetch('https://api.telegram.org/bot6772388598:AAGgg0BDIwVE7jAbzxi4WjL7dw_aL8kgnaU/sendMessage', SendKeyToChat)
            .then(response => response.json())
            .then(response => {
                console.log('Обновляю пароль в Api')
                UpdatePasswordInApi()
            })
            .catch(err => console.error(err));
            
        })
    .catch(error => {
        console.error(error)
    })
}


