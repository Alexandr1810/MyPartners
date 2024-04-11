
var today = new Date();
var dd = Number(String(today.getDate()).padStart(2, '0'));
var mm = Number(String(today.getMonth() + 1).padStart(2, '0'));
var ddStr = String(today.getDate()).padStart(2, '0');
var mmStr = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

var UserId = '5668'

var UserName = ''

var UserDate = '2024-01-18'

var ItogSumm = 0
var ItogKol = 0

var SdelanaResponse = 0
var PorcluchaetsyaResponse = 0
var ZavedenaResponse = 0

var SdelanaSum = 0
var PorcluchaetsyaSum = 0
var ZavedenaSum = 0

var SdelanaKol = 0
var PorcluchaetsyaKol = 0
var ZavedenaKol = 0
var OtkazKol = 0

var ProzentOtkaza = 0

var Prodaza_TexPod = 0

var TriYslygiKol = 0

var Prosrochki = 0

var Othet = 0

window.addEventListener('load', function () { 
    document.getElementById("SendForm").onclick = function(){
        reqestForm();
    }
    document.getElementById("UserBut1").onclick = function(){
        document.getElementById("UserId").value = '5668';
        document.getElementById("UserDate").value = ddStr+'-'+mmStr+'-'+yyyy
        reqestForm();
    }
    document.getElementById("UserBut2").onclick = function(){
        document.getElementById("UserId").value = '7020';
        document.getElementById("UserDate").value = ddStr+'-'+mmStr+'-'+yyyy
        reqestForm();
    }
    document.getElementById("UserBut3").onclick = function(){
        document.getElementById("UserId").value = '7520';
        document.getElementById("UserDate").value = ddStr+'-'+mmStr+'-'+yyyy 
        reqestForm();
    }
    document.getElementById("UserBut4").onclick = function(){
        document.getElementById("UserId").value = '29666';
        document.getElementById("UserDate").value = ddStr+'-'+mmStr+'-'+yyyy 
        reqestForm();
    }
    document.getElementById("UserBut5").onclick = function(){
        document.getElementById("UserId").value = '23656';
        document.getElementById("UserDate").value = ddStr+'-'+mmStr+'-'+yyyy 
        reqestForm();
    }
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


function reqestForm(){
	UserId = document.getElementById('UserId').value
	UserDate = document.getElementById('UserDate').value
		

		const Sdelana = {
			method: 'POST',
				headers: {
				cookie: 'qmb=0.',
				'Content-Type': 'application/json',
				'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"PREPAYMENT_INVOICE","ASSIGNED_BY_ID":"'+UserId+'",">OPPORTUNITY":"1",">DATE_CREATE":"'+UserDate+'T00:00:00","<DATE_CREATE":"'+UserDate+'T23:59:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const Zavedena = {
			method: 'POST',
			headers: {
			cookie: 'qmb=0.',
				'Content-Type': 'application/json',
				'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"EXECUTING","ASSIGNED_BY_ID":"'+UserId+'",">OPPORTUNITY":"1",">DATE_CREATE":"'+UserDate+'T00:00:00","<DATE_CREATE":"'+UserDate+'T23:59:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const Porcluchaetsya = {
			method: 'POST',
			headers: {
			   cookie: 'qmb=0.',
			   'Content-Type': 'application/json',
			   'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"1","ASSIGNED_BY_ID":"'+UserId+'",">OPPORTUNITY":"1",">DATE_CREATE":"'+UserDate+'T00:00:00","<DATE_CREATE":"'+UserDate+'T23:59:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const Otkaz = {
			method: 'POST',
			headers: {
			  cookie: 'qmb=0.',
			  'Content-Type': 'application/json',
			  'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"STAGE_ID":"LOSE","ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+UserDate+'T00:00:00","<DATE_CREATE":"'+UserDate+'T23:59:00"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const TriYslygi = {
			method: 'POST',
			headers: {
				cookie: 'qmb=0.',
				'Content-Type': 'application/json',
				'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"=STAGE_ID":["EXECUTING","1"],"ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+UserDate+'T00:00:00","<DATE_CREATE":"'+UserDate+'T23:59:00","UF_CRM_1669956599":[5562]},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};

		const TriYslygi1 = {
			method: 'POST',
			headers: {
				cookie: 'qmb=0.',
				'Content-Type': 'application/json',
				'User-Agent': 'insomnia/8.5.1'
				},
				body: '{"filter":{"=STAGE_ID":["EXECUTING","1"],"ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+UserDate+'T00:00:00","<DATE_CREATE":"'+UserDate+'T23:59:00","UF_CRM_1669956599":[5564]},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
		};


		const TehPod = {
			method: 'POST',
			headers: {
			   cookie: 'qmb=0.',
			   'Content-Type': 'application/json',
			   'User-Agent': 'insomnia/8.5.1'
			},
			body: '{"filter":{"=STAGE_ID":["EXECUTING","1"],"ASSIGNED_BY_ID":"'+UserId+'",">DATE_CREATE":"'+UserDate+'T00:00:00","<DATE_CREATE":"'+UserDate+'T23:59:00","UF_CRM_1694601072":"5584"},"select":["ASSIGNED_BY_ID","OPPORTUNITY"],"start":"0"}'
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

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Sdelana)
			.then(response => response.json())
			.then(response => {console.log(response); SdelanaKol = response.total; SdelanaResponse = response.result})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Zavedena)
			.then(response => response.json())
			.then(response => {console.log(response); ZavedenaKol = response.total; ZavedenaResponse = response.result})
			.catch(err => console.error(err));

		fetch('https://speedinet.bitrix24.ru/rest/26/qzz79qlepr8oxwmk/crm.deal.list', Porcluchaetsya)
			.then(response => response.json())
			.then(response => {console.log(response); PorcluchaetsyaKol = response.total; PorcluchaetsyaResponse = response.result})
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
				//Prosrochki += response.total; 
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
			if (ZavedenaKol != 0) {
				for (var i = 0; i < ZavedenaResponse.length; i++) {
					ZavedenaSum += Number(ZavedenaResponse[i].OPPORTUNITY)
				}
			}
			if (PorcluchaetsyaKol != 0) {
				for (var i = 0; i < PorcluchaetsyaResponse.length; i++) {
					PorcluchaetsyaSum += Number(PorcluchaetsyaResponse[i].OPPORTUNITY)
				}
			}

			ItogSumm = SdelanaSum + ZavedenaSum + PorcluchaetsyaSum

			ItogKol = SdelanaKol + ZavedenaKol + PorcluchaetsyaKol

			ProzentOtkaza = parseInt(100/(SdelanaKol + ZavedenaKol + PorcluchaetsyaKol + OtkazKol) * OtkazKol)
			Othet = `
				Отчет `+ UserName +` за `+ UserDate +`
				1) Сдал `+ ItogKol +` заявок: на `+ ItogSumm.toLocaleString() +` Руб.
				Сделана: `+ SdelanaKol +`
				Подключается: `+ PorcluchaetsyaKol +`
				Заведена: `+ ZavedenaKol +`
				Отказ: `+ OtkazKol +`
				2) Процент отказа: `+ ProzentOtkaza +`%
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
			console.log("ZavedenaResponse: ", ZavedenaResponse)

			console.log('')

			console.log("SdelanaSum: ", SdelanaSum)
			console.log("ZavedenaSum: ", ZavedenaSum)
			console.log("PorcluchaetsyaSum: ", PorcluchaetsyaSum)

			console.log('')

			console.log("SdelanaKol: ", SdelanaKol)
			console.log("ZavedenaKol: ", ZavedenaKol)
			console.log("PorcluchaetsyaKol: ", PorcluchaetsyaKol)
			console.log("OtkazKol: ", OtkazKol)

			console.log('')

			console.log("ProzentOtkaza: ", ProzentOtkaza)

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
			ZavedenaResponse = 0

			SdelanaSum = 0
			PorcluchaetsyaSum = 0
			ZavedenaSum = 0

			SdelanaKol = 0
			PorcluchaetsyaKol = 0
			ZavedenaKol = 0
			OtkazKol = 0

			ProzentOtkaza = 0

			Prodaza_TexPod = 0

			TriYslygiKol = 0

			Prosrochki = 0

		}