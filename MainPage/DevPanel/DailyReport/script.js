window.addEventListener('load', function () { 
    document.getElementById("SendForm").onclick = function(){
        reqestForm();
    }
});



	var UserId = '5668'

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

		var Othet = 0


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
			  .then(response => {console.log(response); Prodaza_TexPod = response.total; setTimeout(ConsoleResponse, 1000)})
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
			Отчет за `+ UserDate +`
			1) Сдал `+ ItogKol +` заявок: на `+ ItogSumm.toLocaleString() +` Руб.
			Сделана: `+ SdelanaKol +`
			Подключается: `+ PorcluchaetsyaKol +`
			Заведена: `+ ZavedenaKol +`
			Отказ: `+ OtkazKol +`
			2) Процент отказа: `+ ProzentOtkaza +`%
			3) Продажа с тех пода: `+ Prodaza_TexPod +`
			Продажа 3 услуг и более: `+ TriYslygiKol +`
			Просрочки: 0
			4) Впечатление от дня: `

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

				Othet = 0
			}