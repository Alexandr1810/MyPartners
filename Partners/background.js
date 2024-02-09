
chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("MainPage/index.html");
  let tab = await chrome.tabs.create({ url });
});


var TokenAndUser = '26/qzz79qlepr8oxwmk'
var Pssword_Token = '656de619bcc5618d3c242ec1'
var BotToken = '6772388598:AAGgg0BDIwVE7jAbzxi4WjL7dw_aL8kgnaU'

var ESSDlogin1, ESSDpassword1, BitrixBigCards1;
var Bitrix, Tarifnik, ESSD, RMS, Orion, novotelecom, MTS, SibSeti, TTK, RTKYr, RTKMos, Megafon, DomRyOld, Telecoma, Axioma, Almatel, SkyNet, Akado, Maryno, YfaNet, Izet, Etelekom, RMS_Login, MTS_Login, Beeline;
var LogToken;

function GetValues(SiteName){
	if (SiteName=="Bitrix") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});

		chrome.storage.local.get(["Bitrix"]).then((result) => {
		  Bitrix = result.Bitrix;
		  console.log(Bitrix);
		  Bitrix_On_Off();

		});
	}
	if (SiteName=="Tarifnik") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["Tarifnik"]).then((result) => {
		  Tarifnik = result.Tarifnik;
		  console.log(Tarifnik);
		  Tarifnik_On_Off();
		});
	}
	if (SiteName=="essd") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["ESSD"]).then((result) => {
		  ESSD = result.ESSD;
		  console.log(ESSD);
		  ESSD_On_Off();
		});
	}
	if (SiteName=="RMS") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["RMS"]).then((result) => {
		  RMS = result.RMS;
		  console.log(result.RMS);
		  RMS_On_Off();
		});
	}
	if (SiteName=="Orion") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["Orion"]).then((result) => {
		  Orion = result.Orion;
		  console.log(result.Orion);
		  Orion_On_Off();
		});
	}
	if (SiteName=="novotelecom") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["novotelecom"]).then((result) => {
		  novotelecom = result.novotelecom;
		  console.log(result.novotelecom);
		  Novotelecom_On_Off();
		});
	}
	if (SiteName=="MTS") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["MTS"]).then((result) => {
		  MTS = result.MTS;
		  console.log(result.MTS);
		  MTS_On_Off();
		});
	}
	if (SiteName=="SibSeti") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["SibSeti"]).then((result) => {
		  SibSeti = result.SibSeti;
		  console.log(result.SibSeti);
		  SibSeti_On_Off();
		});
	}
	if (SiteName=="TTK") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["TTK"]).then((result) => {
		  TTK = result.TTK;
		  console.log(result.TTK);
		  TTK_On_Off();
		});
	}
	if (SiteName=="RTKYr") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["RTKYr"]).then((result) => {
		  RTKYr = result.RTKYr;
		  console.log(result.RTKYr);
		  RTKYr_On_Off();
		});
	}
	if (SiteName=="RTKMos") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["RTKMos"]).then((result) => {
		  RTKMos = result.RTKMos;
		  console.log(result.RTKMos);
		  RTKMos_On_Off();
		});
	}
	if (SiteName=="Megafon") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["Megafon"]).then((result) => {
		  Megafon = result.Megafon;
		  console.log(result.Megafon);
		  Megafon_On_Off();
		});
	}
	if (SiteName=="Megafon") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["Megafon"]).then((result) => {
		  Megafon = result.Megafon;
		  console.log(result.Megafon);
		  Megafon_On_Off();
		});
	}
	if (SiteName=="DomRyOld") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["DomRyOld"]).then((result) => {
		  DomRyOld = result.DomRyOld;
		  console.log(result.DomRyOld);
		  DomRyOld_On_Off();
		});
	}if (SiteName=="Telecoma") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["Telecoma"]).then((result) => {
		  Telecoma = result.Telecoma;
		  console.log(result.Telecoma);
		  Telecoma_On_Off();
		});
	}
	if (SiteName=="Axioma") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["Axioma"]).then((result) => {
		  Axioma = result.Axioma;
		  console.log(result.Axioma);
		  Axioma_On_Off();
		});
	}
	if (SiteName=="Almatel") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["Almatel"]).then((result) => {
		  Almatel = result.Almatel;
		  console.log(result.Almatel);
		  Almatel_On_Off();
		});
	}
	if (SiteName=="SkyNet") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["SkyNet"]).then((result) => {
		  SkyNet = result.SkyNet;
		  console.log(result.SkyNet);
		  SkyNet_On_Off();
		});
	}
	if (SiteName=="Akado") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["Akado"]).then((result) => {
		  Akado = result.Akado;
		  console.log(result.Akado);
		  Akado_On_Off();
		});
	}
	if (SiteName=="Maryno") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["Maryno"]).then((result) => {
		  Maryno = result.Maryno;
		  console.log(result.Maryno);
		  Maryno_On_Off();
		});
	}
	if (SiteName=="YfaNet") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["YfaNet"]).then((result) => {
		  YfaNet = result.YfaNet;
		  console.log(result.YfaNet);
		  YfaNet_On_Off();
		});
	}
	if (SiteName=="Izet") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["Izet"]).then((result) => {
		  Izet = result.Izet;
		  console.log(result.Izet);
		  Izet_On_Off();
		});
	}
	if (SiteName=="Etelekom") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["Etelekom"]).then((result) => {
		  Etelekom = result.Etelekom;
		  console.log(result.Etelekom);
		  Etelekom_On_Off();
		});
	}
	if (SiteName=="RMS_Login") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["RMS_Login"]).then((result) => {
		  RMS_Login = result.RMS_Login;
		  console.log(result.RMS_Login);
		  RMS_Login_On_Off();
		});
	}
	if (SiteName=="MTS_Login") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["MTS_Login"]).then((result) => {
		  MTS_Login = result.MTS_Login;
		  console.log(result.MTS_Login);
		  MTS_Login_On_Off();
		});
	}
	if (SiteName=="Beeline") {

		chrome.storage.local.get(["LoginToket"]).then((result) => {
			LogToken = result.LoginToket;
			console.log(LogToken)
		});
		chrome.storage.local.get(["Beeline"]).then((result) => {
		  Beeline = result.Beeline;
		  console.log(result.Beeline);
		  Beeline_On_Off();
		});
	}
}



//console.log(Bitrix, Tarifnik, ESSD);


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
		//console.log(request, sender, sendResponse);
		if (request.user == "popup") {
			SetValues(request.Bitrix, request.Tarifnik, request.ESSD, request.RMS, request.Orion, request.novotelecom, request.MTS, request.SibSeti, request.TTK, request.RTKYr, request.RTKMos, request.Megafon, request.DomRyOld, request.Telecoma, request.Axioma, request.Almatel, request.SkyNet, request.Akado, request.Maryno, request.YfaNet, request.Izet, request.Etelekom, request.RMS_Login, request.MTS_Login, request.Beeline);
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
    	else if(request.user == "LogIn"){
    		console.log(request.LoginToket);
    		chrome.storage.local.set({ LoginToket: request.LoginToket })
    		LogToken = request.LoginToket; 
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
    		console.log(MTS);
    		
    	}
    	else if(request.user == "SibSeti"){
    		GetValues("SibSeti");
    		console.log(SibSeti);
    		
    	}
    	else if(request.user == "TTK"){
    		GetValues("TTK");
    		console.log(TTK);
    		
    	}
    	else if(request.user == "RTKYr"){
    		GetValues("RTKYr");
    		console.log(RTKYr);
    		
    	}
    	else if(request.user == "RTKMos"){
    		GetValues("RTKMos");
    		console.log(RTKMos);
    		
    	}
    	else if(request.user == "Megafon"){
    		GetValues("Megafon");
    		console.log(Megafon);
    		
    	}
    	else if(request.user == "DomRyOld"){
    		GetValues("DomRyOld");
    		console.log(DomRyOld);
    		
    	}
    	else if(request.user == "Telecoma"){
    		GetValues("Telecoma");
    		console.log(Telecoma);
    		
    	}
    	else if(request.user == "Axioma"){
    		GetValues("Axioma");
    		console.log(Axioma);
    		
    	}
    	else if(request.user == "Almatel"){
    		GetValues("Almatel");
    		console.log(Almatel);
    		
    	}
    	else if(request.user == "SkyNet"){
    		GetValues("SkyNet");
    		console.log(Akado);
    		
    	}
    	else if(request.user == "Maryno"){
    		GetValues("Maryno");
    		console.log(Maryno);
    		
    	}
    	else if(request.user == "Akado"){
    		GetValues("Akado");
    		console.log(Akado);
    		
    	}
    	else if(request.user == "YfaNet"){
    		GetValues("YfaNet");
    		console.log(YfaNet);
    		
    	}
    	else if(request.user == "Izet"){
    		GetValues("Izet");
    		console.log(Izet);
    		
    	}
    	else if(request.user == "Etelekom"){
    		GetValues("Etelekom");
    		console.log(Etelekom);
    	}
    	else if(request.user == "RMS_Login"){
    		GetValues("RMS_Login");
    		console.log(RMS_Login);
    	}
    	else if(request.user == "MTS_Login"){
    		GetValues("MTS_Login");
    		console.log(MTS_Login);
    	}
    	else if(request.user == "Beeline"){
    		GetValues("Beeline");
    		console.log(Beeline);
    	}
    	else{
    		//console.log(sender.toString());
    		//console.log("Моя твоя не понимать");
    	}
    }
);


function SetValues(Value_Bitrix, Value_Tarifnik, Value_Essd, Value_RMS, Value_Orion, Value_novotelecom, Value_MTS, Value_SibSeti,Value_TTK, Value_RTKYr, Value_RTKMos, Value_Megafon, Value_DomRyOld, Value_Telecoma, Value_Axioma, Value_Almatel,Value_SkyNet, Value_Akado, Value_Maryno, Value_YfaNet, Value_Izet, Value_Etelekom, Value_RMS_Login, Value_MTS_Login, Value_Beeline){
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
	if (Value_SibSeti=="true"){
		chrome.storage.local.set({ SibSeti: "true" })
	}
	if (Value_SibSeti=="false"){
		chrome.storage.local.set({ SibSeti: "false" })
	}
	if (Value_TTK=="true"){
		chrome.storage.local.set({ TTK: "true" })
	}
	if (Value_TTK=="false"){
		chrome.storage.local.set({ TTK: "false" })
	}
	if (Value_RTKYr=="true"){
		chrome.storage.local.set({ RTKYr: "true" })
	}
	if (Value_RTKYr=="false"){
		chrome.storage.local.set({ RTKYr: "false" })
	}
	if (Value_RTKMos=="true"){
		chrome.storage.local.set({ RTKMos: "true" })
	}
	if (Value_RTKMos=="false"){
		chrome.storage.local.set({ RTKMos: "false" })
	}
	if (Value_Megafon=="true"){
		chrome.storage.local.set({ Megafon: "true" })
	}
	if (Value_Megafon=="false"){
		chrome.storage.local.set({ Megafon: "false" })
	}
	if (Value_DomRyOld=="true"){
		chrome.storage.local.set({ DomRyOld: "true" })
	}
	if (Value_DomRyOld=="false"){
		chrome.storage.local.set({ DomRyOld: "false" })
	}
	if (Value_Telecoma=="true"){
		chrome.storage.local.set({ Telecoma: "true" })
	}
	if (Value_Telecoma=="false"){
		chrome.storage.local.set({ Telecoma: "false" })
	}
	if (Value_Axioma=="true"){
		chrome.storage.local.set({ Axioma: "true" })
	}
	if (Value_Axioma=="false"){
		chrome.storage.local.set({ Axioma: "false" })
	}
	if (Value_Almatel=="true"){
		chrome.storage.local.set({ Almatel: "true" })
	}
	if (Value_Almatel=="false"){
		chrome.storage.local.set({ Almatel: "false" })
	}
	if (Value_SkyNet=="true"){
		chrome.storage.local.set({ SkyNet: "true" })
	}
	if (Value_SkyNet=="false"){
		chrome.storage.local.set({ SkyNet: "false" })
	}
	if (Value_Akado=="true"){
		chrome.storage.local.set({ Akado: "true" })
	}
	if (Value_Akado=="false"){
		chrome.storage.local.set({ Akado: "false" })
	}
	if (Value_Maryno=="true"){
		chrome.storage.local.set({ Maryno: "true" })
	}
	if (Value_Maryno=="false"){
		chrome.storage.local.set({ Maryno: "false" })
	}
	if (Value_YfaNet=="true"){
		chrome.storage.local.set({ YfaNet: "true" })
	}
	if (Value_YfaNet=="false"){
		chrome.storage.local.set({ YfaNet: "false" })
	}
	if (Value_Izet=="true"){
		chrome.storage.local.set({ Izet: "true" })
	}
	if (Value_Izet=="false"){
		chrome.storage.local.set({ Izet: "false" })
	}
	if (Value_Etelekom=="true"){
		chrome.storage.local.set({ Etelekom: "true" })
	}
	if (Value_Etelekom=="false"){
		chrome.storage.local.set({ Etelekom: "false" })
	}
	if (Value_RMS_Login=="true"){
		chrome.storage.local.set({ RMS_Login: "true" })
	}
	if (Value_RMS_Login=="false"){
		chrome.storage.local.set({ RMS_Login: "false" })
	}
	if (Value_MTS_Login=="true"){
		chrome.storage.local.set({ MTS_Login: "true" })
	}
	if (Value_MTS_Login=="false"){
		chrome.storage.local.set({ MTS_Login: "false" })
	}
	if (Value_Beeline=="true"){
		chrome.storage.local.set({ Beeline: "true" })
	}
	if (Value_Beeline=="false"){
		chrome.storage.local.set({ Beeline: "false" })
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
	chrome.storage.local.get(["SibSeti"]).then((result) => {
	  SibSeti = result.SibSeti;
	  console.log(SibSeti);
	});
	chrome.storage.local.get(["TTK"]).then((result) => {
	  TTK = result.TTK;
	 	console.log(TTK);
	});
	chrome.storage.local.get(["RTKYr"]).then((result) => {
	  RTKYr = result.RTKYr;
	  console.log(RTKYr);
	});
	chrome.storage.local.get(["RTKMos"]).then((result) => {
	  RTKMos = result.RTKMos;
	  console.log(RTKMos);
	});
	chrome.storage.local.get(["Megafon"]).then((result) => {
	  Megafon = result.Megafon;
	  console.log(Megafon);
	});
	chrome.storage.local.get(["DomRyOld"]).then((result) => {
	  DomRyOld = result.DomRyOld;
	  console.log(DomRyOld);
	});
	chrome.storage.local.get(["Telecoma"]).then((result) => {
	  Telecoma = result.Telecoma;
	  console.log(Telecoma);
	});
	chrome.storage.local.get(["Axioma"]).then((result) => {
	  Axioma = result.Axioma;
	  console.log(Axioma);
	});
	chrome.storage.local.get(["Almatel"]).then((result) => {
	  Almatel = result.Almatel;
	  console.log(Almatel);
	});
	chrome.storage.local.get(["SkyNet"]).then((result) => {
	  SkyNet = result.SkyNet;
	  console.log(SkyNet);
	});
	chrome.storage.local.get(["Akado"]).then((result) => {
	  Akado = result.Akado;
	  console.log(Akado);
	});
	chrome.storage.local.get(["Maryno"]).then((result) => {
	  Maryno = result.Maryno;
	  console.log(Maryno);
	});
	chrome.storage.local.get(["YfaNet"]).then((result) => {
	  YfaNet = result.YfaNet;
	  console.log(YfaNet);
	});
	chrome.storage.local.get(["Izet"]).then((result) => {
	  Izet = result.Izet;
	  console.log(Izet);
	});
	chrome.storage.local.get(["Etelekom"]).then((result) => {
	  Etelekom = result.Etelekom;
	  console.log(Etelekom);
	});
	chrome.storage.local.get(["RMS_Login"]).then((result) => {
	  RMS_Login = result.RMS_Login;
	  console.log(RMS_Login);
	});
	chrome.storage.local.get(["MTS_Login"]).then((result) => {
	  MTS_Login = result.MTS_Login;
	  console.log(MTS_Login);
	});
	chrome.storage.local.get(["Beeline"]).then((result) => {
	  Beeline = result.Beeline;
	  console.log(Beeline);
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
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Bitrix', Message: 'true', BigCard: BitrixBigCards1, Token: TokenAndUser, PassToken: Pssword_Token, LogToken: LogToken, BotToken: BotToken});
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
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Bitrix', Message: 'false', BigCard: BitrixBigCards1, Token: TokenAndUser, PassToken: Pssword_Token, LogToken: LogToken, BotToken: BotToken});
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
		    		
		    		console.log(LogToken)
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Tarifnik', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
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

		    		console.log(LogToken)
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Tarifnik', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
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
		    chrome.tabs.sendMessage(tabs[NewUrlId].id, {user: 'background', Recipient: 'essd', Message: 'true', login: ESSDlogin1, password: ESSDpassword1, Token: Pssword_Token, LogToken: LogToken});
		    
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
		    chrome.tabs.sendMessage(tabs[NewUrlId].id, {user: 'background', Recipient: 'essd', Message: 'false', login: ESSDlogin1, password: ESSDpassword1, Token: Pssword_Token, LogToken: LogToken});
		    
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
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'RMS', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
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
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'RMS', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
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
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Orion', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
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
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Orion', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
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
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'novotelecom', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
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
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'novotelecom', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
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
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'MTS', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (MTS == "false"){
		console.log("не Отправляю запрос на MTS");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("mts") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'MTS', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function SibSeti_On_Off(){
	console.log("SibSeti:", SibSeti);
	if (SibSeti == "true") {
		console.log("Отправляю запрос на SibSeti");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("sibseti") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'SibSeti', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (SibSeti == "false"){
		console.log("не Отправляю запрос на SibSeti");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("sibseti") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'SibSeti', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function TTK_On_Off(){
	console.log("TTK:", TTK);
	if (TTK == "true") {
		console.log("Отправляю запрос на TTK");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("ttk") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'TTK', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (TTK == "false"){
		console.log("не Отправляю запрос на TTK");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("ttk") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'TTK', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}

function RTKYr_On_Off(){
	console.log("RTKYr:", RTKYr);
	if (RTKYr == "true") {
		console.log("Отправляю запрос на RTKYr");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("client") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'RTKYr', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (RTKYr == "false"){
		console.log("не Отправляю запрос на RTKYr");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("client") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'RTKYr', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function RTKMos_On_Off(){
	console.log("RTKMos:", RTKMos);
	if (RTKMos == "true") {
		console.log("Отправляю запрос на RTKMos");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("onlime") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'RTKMos', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (RTKMos == "false"){
		console.log("не Отправляю запрос на RTKMos");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("onlime") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'RTKMos', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function Megafon_On_Off(){
	console.log("Megafon:", Megafon);
	if (Megafon == "true") {
		console.log("Отправляю запрос на Megafon");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("wifire") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Megafon', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (Megafon == "false"){
		console.log("не Отправляю запрос на Megafon");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("wifire") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Megafon', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function DomRyOld_On_Off(){
	console.log("DomRyOld:", DomRyOld);
	if (DomRyOld == "true") {
		console.log("Отправляю запрос на DomRyOld");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("ertelecom") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'DomRyOld', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (DomRyOld == "false"){
		console.log("не Отправляю запрос на DomRyOld");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("ertelecom") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'DomRyOld', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function Telecoma_On_Off(){
	console.log("Telecoma:", Telecoma);
	if (Telecoma == "true") {
		console.log("Отправляю запрос на Telecoma");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("telecoma") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Telecoma', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (Telecoma == "false"){
		console.log("не Отправляю запрос на Telecoma");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("telecoma") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Telecoma', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function Axioma_On_Off(){
	console.log("Axioma:", Axioma);
	if (Axioma == "true") {
		console.log("Отправляю запрос на Axioma");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("multi-net") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Axioma', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (Axioma == "false"){
		console.log("не Отправляю запрос на Axioma");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("multi-net") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Axioma', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function Almatel_On_Off(){
	console.log("Almatel:", Almatel);
	if (Almatel == "true") {
		console.log("Отправляю запрос на Almatel");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("almatel") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Almatel', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (Almatel == "false"){
		console.log("не Отправляю запрос на Almatel");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("almatel") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Almatel', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function SkyNet_On_Off(){
	console.log("SkyNet:", SkyNet);
	if (SkyNet == "true") {
		console.log("Отправляю запрос на SkyNet");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("skynet") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'SkyNet', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (SkyNet == "false"){
		console.log("не Отправляю запрос на SkyNet");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("skynet") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'SkyNet', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function Akado_On_Off(){
	console.log("Akado:", Akado);
	if (Akado == "true") {
		console.log("Отправляю запрос на Akado");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("akado") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Akado', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (Akado == "false"){
		console.log("не Отправляю запрос на Akado");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("akado") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Akado', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function Maryno_On_Off(){
	console.log("Maryno:", Maryno);
	if (Maryno == "true") {
		console.log("Отправляю запрос на Maryno");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("maryno") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Maryno', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (Maryno == "false"){
		console.log("не Отправляю запрос на Maryno");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("maryno") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Maryno', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function YfaNet_On_Off(){
	console.log("YfaNet:", YfaNet);
	if (YfaNet == "true") {
		console.log("Отправляю запрос на YfaNet");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("ufanet") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'YfaNet', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (YfaNet == "false"){
		console.log("не Отправляю запрос на YfaNet");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("ufanet") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'YfaNet', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function Izet_On_Off(){
	console.log("Izet:", Izet);
	if (Izet == "true") {
		console.log("Отправляю запрос на Izet");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("l3s") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Izet', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (Izet == "false"){
		console.log("не Отправляю запрос на Izet");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("l3s") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Izet', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function Etelekom_On_Off(){
	console.log("Etelekom:", Etelekom);
	if (Etelekom == "true") {
		console.log("Отправляю запрос на Etelekom");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("etelecom") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Etelekom', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (Etelekom == "false"){
		console.log("не Отправляю запрос на Etelekom");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("etelecom") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Etelekom', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function RMS_Login_On_Off(){
	console.log("RMS_Login:", RMS_Login);
	if (RMS_Login == "true") {
		console.log("Отправляю запрос на RMS_Login");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("dom") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'RMS_Login', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (RMS_Login == "false"){
		console.log("не Отправляю запрос на Etelekom");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("dom") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'RMS_Login', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function MTS_Login_On_Off(){
	console.log("MTS_Login:", MTS_Login);
	if (MTS_Login == "true") {
		console.log("Отправляю запрос на MTS_Login");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("mts") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'MTS_Login', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (MTS_Login == "false"){
		console.log("не Отправляю запрос на MTS_Login");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("mts") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'MTS_Login', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
}
function Beeline_On_Off(){
	console.log("Beeline:", Beeline);
	if (Beeline == "true") {
		console.log("Отправляю запрос на Beeline");

		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("beeline") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Beeline', Message: 'true', Token: Pssword_Token, LogToken: LogToken});
		    	}
		    }
		    
		})
	}
	else if (Beeline == "false"){
		console.log("не Отправляю запрос на Beeline");
 		chrome.tabs.query({}, function (tabs) {
		    var CurrTab = tabs[0];
		    console.log(tabs.length)
		    for (var i = 0; i < tabs.length; i++) {
		    	console.log(tabs[i].url)
		    	if (tabs[i].url.indexOf("beeline") >= 0) {
		    		console.log("НАШЕЛ!")
		    		chrome.tabs.sendMessage(tabs[i].id, {user: 'background', Recipient: 'Beeline', Message: 'false', Token: Pssword_Token, LogToken: LogToken});
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