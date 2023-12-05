
chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("MainPage/index.html");
  let tab = await chrome.tabs.create({ url });
});


var ESSDlogin1, ESSDpassword1, BitrixBigCards1;
var Bitrix, Tarifnik, ESSD, RMS, Orion, novotelecom, MTS;


function GetValues(SiteName){
	if (SiteName=="Bitrix") {
		chrome.storage.local.get(["Bitrix"]).then((result) => {
		  Bitrix = result.Bitrix;
		  console.log(Bitrix);
		  Bitrix_On_Off();

		});
	}
	if (SiteName=="Tarifnik") {
		chrome.storage.local.get(["Tarifnik"]).then((result) => {
		  Tarifnik = result.Tarifnik;
		  console.log(Tarifnik);
		  Tarifnik_On_Off();
		});
	}
	if (SiteName=="essd") {
		chrome.storage.local.get(["ESSD"]).then((result) => {
		  ESSD = result.ESSD;
		  console.log(ESSD);
		  ESSD_On_Off();
		});
	}
	if (SiteName=="RMS") {
		chrome.storage.local.get(["RMS"]).then((result) => {
		  RMS = result.RMS;
		  console.log(result.RMS);
		  RMS_On_Off();
		});
	}
	if (SiteName=="Orion") {
		chrome.storage.local.get(["Orion"]).then((result) => {
		  Orion = result.Orion;
		  console.log(result.Orion);
		  Orion_On_Off();
		});
	}
	if (SiteName=="novotelecom") {
		chrome.storage.local.get(["novotelecom"]).then((result) => {
		  novotelecom = result.novotelecom;
		  console.log(result.novotelecom);
		  Novotelecom_On_Off();
		});
	}
	if (SiteName=="MTS") {
		chrome.storage.local.get(["MTS"]).then((result) => {
		  MTS = result.MTS;
		  console.log(result.MTS);
		  MTS_On_Off();
		});
	}
}



//console.log(Bitrix, Tarifnik, ESSD);


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
		//console.log(request, sender, sendResponse);
		if (request.user == "popup") {
			SetValues(request.Bitrix, request.Tarifnik, request.ESSD, request.RMS, request.Orion, request.novotelecom, request.MTS);
			console.log(request.ESSDlogin);
			console.log(request.ESSDpassword);
			chrome.storage.local.set({ ESSDlog: request.ESSDlogin })
			chrome.storage.local.set({ ESSDpass: request.ESSDpassword })
			chrome.storage.local.set({ BitrixBigCards: request.BitrixBigCard })

            chrome.storage.local.get(["ESSDlog"]).then((result) => {
				ESSDlogin1 = result.ESSDlog;
			});
			chrome.storage.local.get(["ESSDpass"]).then((result) => {
				ESSDpassword1 = result.ESSDpass;
			});
			chrome.storage.local.get(["BitrixBigCards"]).then((result) => {
				BitrixBigCards1 = result.BitrixBigCards;
			});

    	}
    	else if(request.user == "essd"){
    		GetValues("essd");
    		console.log(ESSD);
    		
    	}
    	else if(request.user == "Bitrix"){
    		GetValues("Bitrix");
    		console.log(Bitrix);
    		
    	}
    	else if(request.user == "Tarifnik"){
    		GetValues("Tarifnik");
    		console.log(Tarifnik);
    		
    	}
    	else if(request.user == "RMS"){
    		GetValues("RMS");
    		console.log(RMS);
    		
    	}
    	else if(request.user == "Orion"){
    		GetValues("Orion");
    		console.log(Orion);
    		
    	}
    	else if(request.user == "novotelecom"){
    		GetValues("novotelecom");
    		console.log(novotelecom);
    		
    	}
    	else if(request.user == "MTS"){
    		GetValues("MTS");
    		console.log(novotelecom);
    		
    	}
    	else{
    		//console.log(sender.toString());
    		//console.log("Моя твоя не понимать");
    	}
    }
);


function SetValues(Value_Bitrix, Value_Tarifnik, Value_Essd, Value_RMS, Value_Orion, Value_novotelecom, Value_MTS){
	if (Value_Bitrix=="true"){
		chrome.storage.local.set({ Bitrix: "true" })
	}
	if (Value_Bitrix=="false"){
		chrome.storage.local.set({ Bitrix: "false" })
	}
	if (Value_Tarifnik=="true"){
		chrome.storage.local.set({ Tarifnik: "true" })
	}
	if (Value_Tarifnik=="false"){
		chrome.storage.local.set({ Tarifnik: "false" })
	}
	if (Value_Essd=="true"){
		chrome.storage.local.set({ ESSD: "true" })
	}
	if (Value_Essd=="false"){
		chrome.storage.local.set({ ESSD: "false" })
	}
	if (Value_RMS=="true"){
		chrome.storage.local.set({ RMS: "true" })
	}
	if (Value_RMS=="false"){
		chrome.storage.local.set({ RMS: "false" })
	}
	if (Value_Orion=="true"){
		chrome.storage.local.set({ Orion: "true" })
	}
	if (Value_Orion=="false"){
		chrome.storage.local.set({ Orion: "false" })
	}
	if (Value_novotelecom=="true"){
		chrome.storage.local.set({ novotelecom: "true" })
	}
	if (Value_novotelecom=="false"){
		chrome.storage.local.set({ novotelecom: "false" })
	}
	if (Value_MTS=="true"){
		chrome.storage.local.set({ MTS: "true" })
	}
	if (Value_MTS=="false"){
		chrome.storage.local.set({ MTS: "false" })
	}

	chrome.storage.local.get(["Bitrix"]).then((result) => {
	  Bitrix = result.Bitrix;
	 	console.log(Bitrix);
	});
	chrome.storage.local.get(["Tarifnik"]).then((result) => {
	  Tarifnik = result.Tarifnik;
	  console.log(Tarifnik);
	});
	chrome.storage.local.get(["ESSD"]).then((result) => {
	  ESSD = result.ESSD;
	  console.log(ESSD);
	});
	chrome.storage.local.get(["RMS"]).then((result) => {
	  RMS = result.RMS;
	  console.log(RMS);
	});
	chrome.storage.local.get(["Orion"]).then((result) => {
	  Orion = result.Orion;
	  console.log(Orion);
	});
	chrome.storage.local.get(["novotelecom"]).then((result) => {
	  novotelecom = result.novotelecom;
	  console.log(novotelecom);
	});
	chrome.storage.local.get(["MTS"]).then((result) => {
	  MTS = result.MTS;
	  console.log(MTS);
	});
	//console.log(Bitrix, Tarifnik, ESSD);
}


function Bitrix_On_Off(){
	console.log("Bitrix:", Bitrix);
	if (Bitrix == "true") {
		console.log("Отправляю запрос на Bitrix");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("bitrix") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.storage.local.get(["BitrixBigCards"]).then((result) => {
						BitrixBigCards1 = result.BitrixBigCards;
					 	console.log('BitrixBigCards1 - ',BitrixBigCards1);
					});
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Bitrix', Message: 'true', BigCard: BitrixBigCards1});
		    	}
		    }
		    
		})
		
		/*chrome.runtime.sendMessage({
		    user: "background",
		    Message: "true"
		}); */
	}
	else if (Bitrix == "false") {
		console.log("не Отправляю запрос на Bitrix");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("bitrix") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.storage.local.get(["BitrixBigCards"]).then((result) => {
						BitrixBigCards1 = result.BitrixBigCards;
					 	console.log('BitrixBigCards1 - ',BitrixBigCards1);
					});
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Bitrix', Message: 'false', BigCard: BitrixBigCards1});
		    	}
		    }
		    
		})
	}
}
function Tarifnik_On_Off(){
	console.log("Tarifnik:", Tarifnik);
	if (Tarifnik == "true") {
		console.log("Отправляю запрос на Tarifnik");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("tarifnik") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Tarifnik', Message: 'true'});
		    	}
		    }
		    
		})
	}
	else if (Tarifnik == "false"){
		console.log("не Отправляю запрос на Tarifnik");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("tarifnik") >= 0) {
		    		console.log("НАШЕЛ!")

		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Tarifnik', Message: 'false'});
		    	}
		    }
		    
		})
	}
}
function ESSD_On_Off(){
	console.log("ESSD:", ESSD);
	if (ESSD == "true") {
		console.log("Отправляю запрос на ЕССД");
		chrome.tabs.query({}, function (tabs) {
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("eissd") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.storage.local.get(["ESSDlog"]).then((result) => {
						ESSDlogin1 = result.ESSDlog;
					 	console.log('ESSDlogin1 - ',ESSDlogin1);
					});
					chrome.storage.local.get(["ESSDpass"]).then((result) => {
						ESSDpassword1 = result.ESSDpass;
					 	console.log('ESSDpassword1 - ',ESSDpassword1);
					});
					var NewUrlId = i;
		    		//chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'essd', Message: 'true', login: ESSDlogin1, password: ESSDpassword1});
		    	}
		    }
		    console.log('ESSDlogin1 : ',ESSDlogin1);
			console.log('ESSDpassword1 : ',ESSDpassword1);
		    chrome.tabs.sendMessage(tabs[NewUrlId].id, {user: 'background', Recipient: 'essd', Message: 'true', login: ESSDlogin1, password: ESSDpassword1});
		    
		})
		

	}
	else if (ESSD == "false"){
		console.log("не Отправляю запрос на ЕССД");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("eissd") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.storage.local.get(["ESSDlog"]).then((result) => {
						ESSDlogin1 = result.ESSDlog;
					 	console.log('ESSDlogin1 - ',ESSDlogin1);
					});
					chrome.storage.local.get(["ESSDpass"]).then((result) => {
						ESSDpassword1 = result.ESSDpass;
					 	console.log('ESSDpassword1 - ',ESSDpassword1);
					});
					
					var NewUrlId = i;
		    		//chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'essd', Message: 'false', login: ESSDlogin1, password: ESSDpassword1});
		    	}
		    }
		    console.log('ESSDlogin1 : ',ESSDlogin1);
			console.log('ESSDpassword1 : ',ESSDpassword1);
		    chrome.tabs.sendMessage(tabs[NewUrlId].id, {user: 'background', Recipient: 'essd', Message: 'false', login: ESSDlogin1, password: ESSDpassword1});
		    
		})
	}
}

function RMS_On_Off(){
	console.log("RMS:", RMS);
	if (RMS == "true") {
		console.log("Отправляю запрос на RMS");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("rms") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'RMS', Message: 'true'});
		    	}
		    }
		    
		})
	}
	else if (RMS == "false"){
		console.log("не Отправляю запрос на RMS");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("rms") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'RMS', Message: 'false'});
		    	}
		    }
		    
		})
	}
}

function Orion_On_Off(){
	console.log("Orion:", Orion);
	if (Orion == "true") {
		console.log("Отправляю запрос на Orion");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("orionnet") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Orion', Message: 'true'});
		    	}
		    }
		    
		})
	}
	else if (Orion == "false"){
		console.log("не Отправляю запрос на Orion");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("orionnet") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Orion', Message: 'false'});
		    	}
		    }
		    
		})
	}
}

function Novotelecom_On_Off(){
	console.log("novotelecom:", novotelecom);
	if (novotelecom == "true") {
		console.log("Отправляю запрос на novotelecom");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("novotelecom") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'novotelecom', Message: 'true'});
		    	}
		    }
		    
		})
	}
	else if (novotelecom == "false"){
		console.log("не Отправляю запрос на Orion");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("novotelecom") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'novotelecom', Message: 'false'});
		    	}
		    }
		    
		})
	}
}

function MTS_On_Off(){
	console.log("MTS:", MTS);
	if (MTS == "true") {
		console.log("Отправляю запрос на MTS");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("mts") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'MTS', Message: 'true'});
		    	}
		    }
		    
		})
	}
	else if (MTS == "false"){
		console.log("не Отправляю запрос на Orion");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("MTS") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'MTS', Message: 'false'});
		    	}
		    }
		    
		})
	}
}
/*
chrome.storage.local.set({ key: value }).then(() => {
  //console.log("Value is set");
});

chrome.storage.local.get(["key"]).then((result) => {
  //console.log("Value currently is " + result.key);
});
*/