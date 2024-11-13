var today = new Date();

var dd = Number(String(today.getDate()).padStart(2, '0'));
var mm = Number(String(today.getMonth() + 1).padStart(2, '0'));
var ddStr = String(today.getDate()).padStart(2, '0');
var mmStr = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

var UserId = '5668'

var UserName = ''

var UserDate = '2024-01-18'
var LastUserDate = new Date('2024-01-17')

var ItogSumm = 0
var ItogKol = 0

var SdelanaResponse = 0
var PorcluchaetsyaResponse = 0
var TekMesyatsResponse = 0

var SdelanaSum = 0
var PorcluchaetsyaSum = 0
var TekMesyatsSum = 0

var NedozvonyKol = 0
var Pozvonit_TodayKol = 0
var ArhiveKol = 0
var Dorapotka_TodayKol = 0
var SdelanaKol = 0
var PorcluchaetsyaKol = 0
var Yr_LitsaKol = 0
var OtkazKol = 0

var ProzentKonvers = 0

var Prodaza_TexPod = 0

var TriYslygiKol = 0

var Prosrochki = 0

var TekMesyatsKol = 0

var Othet = 0

var MenagerList = [{M_Name: "Александр Ш.", M_Id: "5668"}]

const options = {
  method: 'POST',
  headers: {
    cookie: 'qmb=0.',
    'Content-Type': 'application/json',
    'User-Agent': 'insomnia/10.1.1'
  },
  body: '{"filter":{"ACTIVE":true,"UF_DEPARTMENT":10}}'
};

fetch('https://speedinet.bitrix24.ru/rest/25550/92yb1mz0rkt5e2cl/user.get', options)
  .then(response => response.json())
  .then(response => {
  	console.log(response)
  	for (var i = 0; i < response.total; i++) {
  		Agent_Name = response.result[i].NAME + ' ' + response.result[i].LAST_NAME[0] + '.'
  		Agent_Id = response.result[i].ID

  		document.getElementsByClassName("ButtBlock")[0].innerHTML += '<button data-id="'+Agent_Id+'" class="UserButton">'+Agent_Name+'</button>'
  	}
  })
  .catch(err => console.error(err));

window.addEventListener('load', function () { 

		// Получаем родительский элемент, содержащий кнопки
		const buttonContainer = document.querySelector('.ButtBlock');

		// Назначаем обработчик события для контейнера
		buttonContainer.addEventListener('click', function(event) {
		    // Проверяем, что клик был на кнопке с классом UserButton
		    if (event.target.classList.contains('UserButton')) {
		        // Получаем id кнопки
		        const userId = event.target.getAttribute('data-id');
		        // Вызываем нужную функцию с параметром userId
		        UserButt(userId);
		    }
		});



    document.getElementById("SendFormInTG").onclick = function(){
    const options = {
		  method: 'POST',
		  headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.5.1'},
		  body: '{"chat_id":"-4113347602","text":"/ask@chatsgpts_bot '+Othet+'"}'
		};

		fetch('https://api.telegram.org/bot6881870667:AAEtWo3EkLw6HqsjdLxbY0eJwt1Y_Uqr8io/sendMessage', options)
		  .then(response => response.json())
		  .then(response => console.log(response))
		  .catch(err => console.error(err));
	}
});




function UserButt(M_Id){
	document.getElementById("UserId").value = M_Id;
	document.getElementById("UserDate").value = yyyy+'-'+mmStr+'-'+ddStr
  reqestForm();
}

function reqestForm(){
	UserId = document.getElementById('UserId').value
	UserDate = document.getElementById('UserDate').value
	console.log(UserDate)
	LastUserDate = new Date(UserDate)
	console.log("LastUserDate temp: ", LastUserDate)
	LastUserDate.setDate(LastUserDate.getDate() - 1);
	console.log("LastUserDate: ", LastUserDate)

	Last_ddStr = LastUserDate.getDate();
	Last_mmStr = LastUserDate.getMonth() + 1;
	Last_yyyy = LastUserDate.getFullYear();

	console.log("Last_mmStr ИТОГ: ", Last_mmStr)

	LastUserDate = Last_yyyy+'-'+Last_mmStr+'-'+Last_ddStr 
	console.log("LastUserDate ИТОГ: ", LastUserDate)

	/*
	if (UserDate[0] != '0' && UserDate[1] != '1') {
		LastUserDate = Number((UserDate[0] + UserDate[1])-1)+'-'+mmStr+'-'+yyyy 
	}
	else{
		LastUserDate = Number((UserDate[0] + UserDate[1])-1)+'-'+mmStr+'-'+yyyy 
	}
	*/
		const Nedozvony = {
			method: 'POST',
				headers: {
				cookie: 'qmb=0.',
				'Content-Type': 'application/json',
				'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"UC_0SAOJL","ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+LastUserDate+'T20:00:00","<DATE_CREATE":"'+UserDate+'T20:00:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};


		const Pozvonit_Today = {
			method: 'POST',
			headers: {
			   cookie: 'qmb=0.',
			   'Content-Type': 'application/json',
			   'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"2","ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+LastUserDate+'T20:00:00","<DATE_CREATE":"'+UserDate+'T20:00:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const Arhive = {
			method: 'POST',
			headers: {
			  cookie: 'qmb=0.',
			  'Content-Type': 'application/json',
			  'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"5","ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+LastUserDate+'T20:00:00","<DATE_CREATE":"'+UserDate+'T20:00:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const Dorapotka_Today = {
			method: 'POST',
			headers: {
			  cookie: 'qmb=0.',
			  'Content-Type': 'application/json',
			  'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"4","ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+LastUserDate+'T20:00:00","<DATE_CREATE":"'+UserDate+'T20:00:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const Sdelana = {
			method: 'POST',
				headers: {
				cookie: 'qmb=0.',
				'Content-Type': 'application/json',
				'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"PREPAYMENT_INVOICE","ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+LastUserDate+'T20:00:00","<DATE_CREATE":"'+UserDate+'T20:00:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const TekMesyats = {
			method: 'POST',
				headers: {
				cookie: 'qmb=0.',
				'Content-Type': 'application/json',
				'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"C6:UC_Y6OU39","ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+LastUserDate+'T20:00:00","<DATE_CREATE":"'+UserDate+'T20:00:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const Porcluchaetsya = {
			method: 'POST',
			headers: {
			   cookie: 'qmb=0.',
			   'Content-Type': 'application/json',
			   'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"1","ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+LastUserDate+'T20:00:00","<DATE_CREATE":"'+UserDate+'T20:00:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const Yr_Litsa = {
			method: 'POST',
			headers: {
			  cookie: 'qmb=0.',
			  'Content-Type': 'application/json',
			  'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"6","ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+LastUserDate+'T20:00:00","<DATE_CREATE":"'+UserDate+'T20:00:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const Otkaz = {
			method: 'POST',
			headers: {
			  cookie: 'qmb=0.',
			  'Content-Type': 'application/json',
			  'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"LOSE","ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+LastUserDate+'T20:00:00","<DATE_CREATE":"'+UserDate+'T20:00:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};


		const TriYslygi = {
			method: 'POST',
			headers: {
				cookie: 'qmb=0.',
				'Content-Type': 'application/json',
				'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"=STAGE_ID":["EXECUTING","1"],"ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+LastUserDate+'T20:00:00","<DATE_CREATE":"'+UserDate+'T20:00:00","UF_CRM_1669956599":[5562]},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const TriYslygi1 = {
			method: 'POST',
			headers: {
				cookie: 'qmb=0.',
				'Content-Type': 'application/json',
				'User-Agent': 'insomnia/8.5.1'
				},
				body: '{"filter":{"=STAGE_ID":["EXECUTING","1"],"ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+LastUserDate+'T20:00:00","<DATE_CREATE":"'+UserDate+'T20:00:00","UF_CRM_1669956599":[5564]},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};


		const TehPod = {
			method: 'POST',
			headers: {
			   cookie: 'qmb=0.',
			   'Content-Type': 'application/json',
			   'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"=STAGE_ID":["EXECUTING","1"],"ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+LastUserDate+'T20:00:00","<DATE_CREATE":"'+UserDate+'T20:00:00","UF_CRM_1613117583":"5738"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};
		const Dorapotka = {
			method: 'POST',
			headers: {
				cookie: 'qmb=0.',
				'Content-Type': 'application/json',
				'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"4","ASSIGNED_BY_ID":"'+UserId+'"},"start":"0"}'
		};
		const Pozvonit = {
			method: 'POST',
			headers: {
			cookie: 'qmb=0.',
			  'Content-Type': 'application/json',
			  'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"2","ASSIGNED_BY_ID":"'+UserId+'"},"start":"0"}'
		};
		
		const GetUserName = {
		  method: 'POST',
		  headers: {
		    cookie: 'qmb=0.',
		    'Content-Type': 'application/json',
		    'User-Agent': 'insomnia/8.6.0'
		  },
		  body: '{"id":"'+UserId+'"}'
		};

		fetch('https://speedinet.bitrix24.ru/rest/5668/1501ecyu6o316gd3/user.get.json', GetUserName)
		  .then(response => response.json())
		  .then(response => {console.log(response); UserName = response.result[0].NAME + ' ' + response.result[0].LAST_NAME})
		  .catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Nedozvony)
			.then(response => response.json())
			.then(response => {console.log(response); NedozvonyKol = response.total;})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Pozvonit_Today)
			.then(response => response.json())
			.then(response => {console.log(response); Pozvonit_TodayKol = response.total;t})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Arhive)
			.then(response => response.json())
			.then(response => {console.log(response); ArhiveKol = response.total;})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Dorapotka_Today)
			.then(response => response.json())
			.then(response => {console.log(response); Dorapotka_TodayKol = response.total;})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Sdelana)
			.then(response => response.json())
			.then(response => {console.log(response); SdelanaKol = response.total; SdelanaResponse = response.result})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Porcluchaetsya)
			.then(response => response.json())
			.then(response => {console.log(response); PorcluchaetsyaKol = response.total; PorcluchaetsyaResponse = response.result})
			.catch(err => console.error(err));
			
		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', TekMesyats)
			.then(response => response.json())
			.then(response => {console.log(response); TekMesyatsKol += response.total;  TekMesyatsResponse = response.result;})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Yr_Litsa)
			.then(response => response.json())
			.then(response => {console.log(response); Yr_LitsaKol = response.total;})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Otkaz)
			.then(response => response.json())
			.then(response => {console.log(response); OtkazKol = response.total;})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', TriYslygi)
			.then(response => response.json())
			.then(response => {console.log(response); TriYslygiKol += response.total})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', TriYslygi1)
			.then(response => response.json())
			.then(response => {console.log(response); TriYslygiKol += response.total})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', TehPod)
			.then(response => response.json())
			.then(response => {console.log(response); Prodaza_TexPod = response.total;})
			.catch(err => console.error(err));
			
		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Dorapotka)
			.then(response => response.json())
			.then(response => {console.log(response); Prosrochki += response.total; console.log('Dorapotka:', response.total)})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Pozvonit)
			.then(response => response.json())
			.then(response => {
				console.log(response); 
				for (var i = 0; i < response.result.length; i++) {
					console.log('response.result[i].id: ', response.result[i].ID);
					const options = {
					  method: 'POST',
					  headers: {
					    cookie: 'qmb=0.',
					    'Content-Type': 'application/json',
					    'User-Agent': 'insomnia/8.5.1'
					  },
					  body: '{"filter":{"OWNER_TYPE_ID":"2","OWNER_ID":"'+ response.result[i].ID +'","STATUS":"1"}}'
					};

					fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.activity.list', options)
					  .then(response => response.json())
					  .then(response => {
					  	console.log('response',response)
					  	for (var j = 0; j < response.result.length; j++) {
					  		console.log('Number: ', Number(response.result[j].DEADLINE.split('-')[2].split('T')[0]))
						  	if (Number(response.result[j].DEADLINE.split('-')[2].split('T')[0]) <= dd && Number(response.result[j].DEADLINE.split('-')[1]) == mm) {
						  		Prosrochki += 1;
						  		console.log('Плюсую просрачку')
						  	}
						  	console.log(response); 
						  }
					  })
					  .catch(err => console.error(err));
					
				}
				setTimeout(ConsoleResponse, 1500)
			})
			.catch(err => console.error(err));
		}

		function ConsoleResponse(){
			if (SdelanaKol != 0) {
				for (var i = 0; i < SdelanaResponse.length; i++) {
					SdelanaSum += Number(SdelanaResponse[i].OPPORTUNITY)
				}
			}
			if (PorcluchaetsyaKol != 0) {
				for (var i = 0; i < PorcluchaetsyaResponse.length; i++) {
					PorcluchaetsyaSum += Number(PorcluchaetsyaResponse[i].OPPORTUNITY)
				}
			}
			if (TekMesyatsKol != 0) {
				for (var i = 0; i < TekMesyatsResponse.length; i++) {
					TekMesyatsSum += Number(TekMesyatsResponse[i].OPPORTUNITY)
				}
			}

			ItogSumm = SdelanaSum + PorcluchaetsyaSum + TekMesyatsSum

			ItogKol = SdelanaKol + PorcluchaetsyaKol + TekMesyatsKol

			ProzentKonvers = parseInt(((SdelanaKol + PorcluchaetsyaKol + TekMesyatsKol + Yr_LitsaKol)/(NedozvonyKol + Pozvonit_TodayKol + ArhiveKol + Dorapotka_TodayKol + SdelanaKol + PorcluchaetsyaKol + TekMesyatsKol + Yr_LitsaKol + OtkazKol)) * 100)
			Othet = `
				Отчет `+ UserName +` за `+ UserDate +`
				1) Сдал `+ ItogKol +` заявок: на `+ ItogSumm.toLocaleString() +` Руб.
				Лидов за день: `+ (NedozvonyKol + Pozvonit_TodayKol + ArhiveKol + Dorapotka_TodayKol + SdelanaKol + PorcluchaetsyaKol + Yr_LitsaKol + OtkazKol) +`
				Сделана: `+ SdelanaKol +`
				Подключается: `+ PorcluchaetsyaKol +`
				Отменённые лиды: `+ OtkazKol +`
				2) Конверсия: `+ ProzentKonvers +`%
				3) Продажа с тех пода: `+ Prodaza_TexPod +`
				Продажа 3 услуг и более: `+ TriYslygiKol +`
				Просрочки: `+ Prosrochki +`
				4) Впечатление от дня: `
			if (Prosrochki == 0) {
				document.getElementById('ProsrochkiText').style.display = 'none'
			}
			else{
				document.getElementById('ProsrochkiText').style.display = 'block'
			}

			console.log("SdelanaResponse: ", SdelanaResponse)
			console.log("PorcluchaetsyaResponse: ", PorcluchaetsyaResponse)

			console.log('')

			console.log("SdelanaSum: ", SdelanaSum)
			console.log("PorcluchaetsyaSum: ", PorcluchaetsyaSum)

			console.log('')


			console.log("NedozvonyKol: ", NedozvonyKol)
			console.log("Pozvonit_TodayKol: ", Pozvonit_TodayKol)
			console.log("ArhiveKol: ", ArhiveKol)
			console.log("Dorapotka_TodayKol: ", Dorapotka_TodayKol)
			console.log("SdelanaKol: ", SdelanaKol)
			console.log("PorcluchaetsyaKol: ", PorcluchaetsyaKol)
			console.log("Yr_LitsaKol: ", Yr_LitsaKol)
			console.log("OtkazKol: ", OtkazKol)

			console.log('')

			console.log("ProzentKonvers: ", ProzentKonvers)

			console.log('')

			console.log("TriYslygiKol: ", TriYslygiKol)

			console.log('')

			console.log("Prodaza_TexPod: ", Prodaza_TexPod)

			console.log('')

			console.log("ItogSumm: ", ItogSumm)

			console.log('')

			console.log("ItogKol: ", ItogKol)

			console.log('')

			console.log("Prosrochki: ", Prosrochki)
			
			console.log('')
			
			console.log(Othet)
			document.getElementById('OtchetText').innerText = Othet

			ItogSumm = 0
			ItogKol = 0

			SdelanaResponse = 0
			PorcluchaetsyaResponse = 0

			SdelanaSum = 0
			PorcluchaetsyaSum = 0

			SdelanaKol = 0
			PorcluchaetsyaKol = 0
			OtkazKol = 0

			ProzentKonvers = 0

			Prodaza_TexPod = 0

			TriYslygiKol = 0

			Prosrochki = 0

		}