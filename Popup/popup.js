

window.addEventListener('load', function () { 
	var checkbox1 = document.getElementById("color-1");
	var checkbox2 = document.getElementById("color-2");
	var checkbox3 = document.getElementById("color-3");
	var checkbox4 = document.getElementById("color-4");
	var checkbox5 = document.getElementById("color-5");
	var checkbox6 = document.getElementById("color-6");
	var checkbox7 = document.getElementById("color-7");
	var checkbox8 = document.getElementById("color-8");
	var checkbox9 = document.getElementById("color-9");
	var checkbox10 = document.getElementById("color-10");
	var checkbox11 = document.getElementById("color-11");
	var checkbox12 = document.getElementById("color-12");
	var checkbox13 = document.getElementById("color-13");
	var checkbox14 = document.getElementById("color-14");
	var checkbox15 = document.getElementById("color-15");
	var checkbox16 = document.getElementById("color-16");
	var checkbox17 = document.getElementById("color-17");
	var checkbox18 = document.getElementById("color-18");
	var checkbox19 = document.getElementById("color-19");
	var checkbox20 = document.getElementById("color-20");
	var checkbox21 = document.getElementById("color-21");
	var checkbox22 = document.getElementById("color-22");
	var checkbox23 = document.getElementById("color-23");
	var checkbox24 = document.getElementById("color-24");
	var checkbox25 = document.getElementById("color-25");


	if (localStorage.getItem("Bitrix")=="true"){
		checkbox1.checked = true;
	}
	if (localStorage.getItem("Bitrix")=="false"){
		checkbox1.checked = false;
	}
	if (localStorage.getItem("Tarifnik")=="true"){
		checkbox2.checked = true;
	}
	if (localStorage.getItem("Tarifnik")=="false"){
		checkbox2.checked = false;
	}
	if (localStorage.getItem("ESSD")=="true"){
		checkbox3.checked = true;
	}
	if (localStorage.getItem("ESSD")=="false"){
		checkbox3.checked = false;
	}
	if (localStorage.getItem("RMS")=="true"){
		checkbox4.checked = true;
	}
	if (localStorage.getItem("RMS")=="false"){
		checkbox4.checked = false;
	}
	if (localStorage.getItem("Orion")=="true"){
		checkbox5.checked = true;
	}
	if (localStorage.getItem("Orion")=="false"){
		checkbox5.checked = false;
	}
	if (localStorage.getItem("novotelecom")=="true"){
		checkbox6.checked = true;
	}
	if (localStorage.getItem("novotelecom")=="false"){
		checkbox6.checked = false;
	}
	if (localStorage.getItem("MTS")=="true"){
		checkbox7.checked = true;
	}
	if (localStorage.getItem("MTS")=="false"){
		checkbox7.checked = false;
	}
	if (localStorage.getItem("SibSeti")=="true"){
		checkbox8.checked = true;
	}
	if (localStorage.getItem("SibSeti")=="false"){
		checkbox8.checked = false;
	}
	if (localStorage.getItem("TTK")=="true"){
		checkbox9.checked = true;
	}
	if (localStorage.getItem("TTK")=="false"){
		checkbox9.checked = false;
	}
	if (localStorage.getItem("RTKYr")=="true"){
		checkbox10.checked = true;
	}
	if (localStorage.getItem("RTKYr")=="false"){
		checkbox10.checked = false;
	}
	if (localStorage.getItem("RTKMos")=="true"){
		checkbox11.checked = true;
	}
	if (localStorage.getItem("RTKMos")=="false"){
		checkbox11.checked = false;
	}
	if (localStorage.getItem("Megafon")=="true"){
		checkbox12.checked = true;
	}
	if (localStorage.getItem("Megafon")=="false"){
		checkbox12.checked = false;
	}
	if (localStorage.getItem("DomRyOld")=="true"){
		checkbox13.checked = true;
	}
	if (localStorage.getItem("DomRyOld")=="false"){
		checkbox13.checked = false;
	}
	if (localStorage.getItem("Telecoma")=="true"){
		checkbox14.checked = true;
	}
	if (localStorage.getItem("Telecoma")=="false"){
		checkbox14.checked = false;
	}
	if (localStorage.getItem("Axioma")=="true"){
		checkbox15.checked = true;
	}
	if (localStorage.getItem("Axioma")=="false"){
		checkbox15.checked = false;
	}
	if (localStorage.getItem("Almatel")=="true"){
		checkbox16.checked = true;
	}
	if (localStorage.getItem("Almatel")=="false"){
		checkbox16.checked = false;
	}
	if (localStorage.getItem("SkyNet")=="true"){
		checkbox17.checked = true;
	}
	if (localStorage.getItem("SkyNet")=="false"){
		checkbox17.checked = false;
	}
	if (localStorage.getItem("Akado")=="true"){
		checkbox18.checked = true;
	}
	if (localStorage.getItem("Akado")=="false"){
		checkbox18.checked = false;
	}
	if (localStorage.getItem("Maryno")=="true"){
		checkbox19.checked = true;
	}
	if (localStorage.getItem("Maryno")=="false"){
		checkbox19.checked = false;
	}
	if (localStorage.getItem("YfaNet")=="true"){
		checkbox20.checked = true;
	}
	if (localStorage.getItem("YfaNet")=="false"){
		checkbox20.checked = false;
	}
	if (localStorage.getItem("Izet")=="true"){
		checkbox21.checked = true;
	}
	if (localStorage.getItem("Izet")=="false"){
		checkbox21.checked = false;
	}
	if (localStorage.getItem("Etelekom")=="true"){
		checkbox22.checked = true;
	}
	if (localStorage.getItem("Etelekom")=="false"){
		checkbox22.checked = false;
	}
	if (localStorage.getItem("RMS_Login")=="true"){
		checkbox23.checked = true;
	}
	if (localStorage.getItem("RMS_Login")=="false"){
		checkbox23.checked = false;
	}
	if (localStorage.getItem("MTS_Login")=="true"){
		checkbox24.checked = true;
	}
	if (localStorage.getItem("MTS_Login")=="false"){
		checkbox24.checked = false;
	}
	if (localStorage.getItem("Beeline")=="true"){
		checkbox25.checked = true;
	}
	if (localStorage.getItem("Beeline")=="false"){
		checkbox25.checked = false;
	}

	if (localStorage.getItem("BitrixBigCard") == "false"){
		var BitText = document.getElementById('Bit');

		BitText.setAttribute('style', 'background: linear-gradient(90deg, #d000dd 17%, #005ae1 21%, #4bff00 28%, #efff00 32%, #ffc100 38%, #d11a1a 28%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
	}
	else{
		var BitText = document.getElementById('Bit');
		
		BitText.setAttribute('style', '');
	}

	checkbox1.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("Bitrix", true);
	  } else {
	    localStorage.setItem("Bitrix", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });

	});
	checkbox2.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("Tarifnik", true);
	  } else {
	    localStorage.setItem("Tarifnik", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });

	});
	checkbox3.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("ESSD", true);
	  } else {
	    localStorage.setItem("ESSD", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});

	checkbox4.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("RMS", true);
	  } else {
	    localStorage.setItem("RMS", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox5.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("Orion", true);
	  } else {
	    localStorage.setItem("Orion", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox6.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("novotelecom", true);
	  } else {
	    localStorage.setItem("novotelecom", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox7.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("MTS", true);
	  } else {
	    localStorage.setItem("MTS", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox8.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("SibSeti", true);
	  } else {
	    localStorage.setItem("SibSeti", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});

	checkbox9.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("TTK", true);
	  } else {
	    localStorage.setItem("TTK", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox10.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("RTKYr", true);
	  } else {
	    localStorage.setItem("RTKYr", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox11.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("RTKMos", true);
	  } else {
	    localStorage.setItem("RTKMos", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox12.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("Megafon", true);
	  } else {
	    localStorage.setItem("Megafon", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox13.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("DomRyOld", true);
	  } else {
	    localStorage.setItem("DomRyOld", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox14.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("Telecoma", true);
	  } else {
	    localStorage.setItem("Telecoma", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox15.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("Axioma", true);
	  } else {
	    localStorage.setItem("Axioma", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox16.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("Almatel", true);
	  } else {
	    localStorage.setItem("Almatel", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox17.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("SkyNet", true);
	  } else {
	    localStorage.setItem("SkyNet", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox18.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("Akado", true);
	  } else {
	    localStorage.setItem("Akado", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox19.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("Maryno", true);
	  } else {
	    localStorage.setItem("Maryno", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox20.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("YfaNet", true);
	  } else {
	    localStorage.setItem("YfaNet", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});

	checkbox21.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("Izet", true);
	  } else {
	    localStorage.setItem("Izet", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	checkbox22.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("Etelekom", true);
	  } else {
	    localStorage.setItem("Etelekom", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});

	checkbox23.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("RMS_Login", true);
	  } else {
	    localStorage.setItem("RMS_Login", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});

	checkbox24.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("MTS_Login", true);
	  } else {
	    localStorage.setItem("MTS_Login", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});

	checkbox25.addEventListener('change', function() {
	  if (this.checked) {
	    localStorage.setItem("Beeline", true);
	  } else {
	    localStorage.setItem("Beeline", false);
	  }

	  chrome.runtime.sendMessage({
	  	user: "popup",
	    Bitrix: localStorage.getItem("Bitrix"),
	    Tarifnik: localStorage.getItem("Tarifnik"),
	    ESSD: localStorage.getItem("ESSD"),
	    RMS: localStorage.getItem("RMS"),
	    Orion: localStorage.getItem("Orion"),
	    novotelecom: localStorage.getItem("novotelecom"),
	    MTS: localStorage.getItem("MTS"),
	    SibSeti: localStorage.getItem("SibSeti"),
	    TTK: localStorage.getItem("TTK"),
	    RTKYr: localStorage.getItem("RTKYr"),
	    RTKMos: localStorage.getItem("RTKMos"),
	    Megafon: localStorage.getItem("Megafon"),
	    DomRyOld: localStorage.getItem("DomRyOld"),
	    Telecoma: localStorage.getItem("Telecoma"),
	    Axioma: localStorage.getItem("Axioma"),
	    Almatel: localStorage.getItem("Almatel"),
	    SkyNet: localStorage.getItem("SkyNet"),
	    Akado: localStorage.getItem("Akado"),
	    Maryno: localStorage.getItem("Maryno"),
	    YfaNet: localStorage.getItem("YfaNet"),
	    Izet: localStorage.getItem("Izet"),
	    Etelekom: localStorage.getItem("Etelekom"),
	    RMS_Login: localStorage.getItem("RMS_Login"),
	    MTS_Login: localStorage.getItem("MTS_Login"),
	    Beeline: localStorage.getItem("Beeline"),
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});
	console.log(localStorage.getItem("Bitrix"), localStorage.getItem("Tarifnik"), localStorage.getItem("ESSD"), localStorage.getItem("RMS"), localStorage.getItem("Orion"),localStorage.getItem("MTS"),localStorage.getItem("TTK"), localStorage.getItem("RTKYr"), localStorage.getItem("RTKMos"), localStorage.getItem("Megafon"), localStorage.getItem("DomRyOld"),localStorage.getItem("Telecoma"),localStorage.getItem("Axioma"), localStorage.getItem("Almatel"), localStorage.getItem("SkyNet"), localStorage.getItem("Akado"), localStorage.getItem("Maryno"),localStorage.getItem("YfaNet"),localStorage.getItem("Izet"),localStorage.getItem("Etelekom"));
	if (localStorage.getItem("Bitrix") == null || localStorage.getItem("Tarifnik") == null ||  localStorage.getItem("ESSD") == null ||  localStorage.getItem("RMS") == null ||  localStorage.getItem("Orion") == null || localStorage.getItem("MTS") == null || localStorage.getItem("TTK") == null ||  localStorage.getItem("RTKYr") == null ||  localStorage.getItem("RTKMos") == null ||  localStorage.getItem("Megafon") == null ||  localStorage.getItem("DomRyOld") == null || localStorage.getItem("Telecoma") == null || localStorage.getItem("Axioma") == null ||  localStorage.getItem("Almatel") == null ||  localStorage.getItem("SkyNet") == null ||  localStorage.getItem("Akado") == null ||  localStorage.getItem("Maryno") == null || localStorage.getItem("YfaNet") == null || localStorage.getItem("Izet") == null || localStorage.getItem("Etelekom") == null) {
		checkbox1.checked = true;
		checkbox2.checked = true;
		checkbox3.checked = true;
		checkbox4.checked = true;
		checkbox5.checked = true;
		checkbox6.checked = true;
		checkbox7.checked = true;
		checkbox8.checked = true;
		checkbox9.checked = true;
		checkbox10.checked = true;
		checkbox11.checked = true;
		checkbox12.checked = true;
		checkbox13.checked = true;
		checkbox14.checked = true;
		checkbox15.checked = true;
		checkbox16.checked = true;
		checkbox17.checked = true;
		checkbox18.checked = true;
		checkbox19.checked = true;
		checkbox20.checked = true;
		checkbox21.checked = true;
		checkbox22.checked = true;
		checkbox23.checked = true;
		checkbox24.checked = true;
		checkbox25.checked = true;
		localStorage.setItem("Bitrix", true);
		localStorage.setItem("Tarifnik", true);
		localStorage.setItem("ESSD", true);
		localStorage.setItem("RMS", true);
		localStorage.setItem("Orion", true);
		localStorage.setItem("novotelecom", true);
		localStorage.setItem("MTS", true);
		localStorage.setItem("SibSeti", true);
		localStorage.setItem("TTK", true);
		localStorage.setItem("RTKYr", true);
		localStorage.setItem("RTKMos", true);
		localStorage.setItem("Megafon", true);
		localStorage.setItem("DomRyOld", true);
		localStorage.setItem("Telecoma", true);
		localStorage.setItem("Axioma", true);
		localStorage.setItem("Almatel", true);
		localStorage.setItem("SkyNet", true);
		localStorage.setItem("Akado", true);
		localStorage.setItem("Maryno", true);
		localStorage.setItem("YfaNet", true);
		localStorage.setItem("Izet", true);
		localStorage.setItem("Etelekom", true);
		localStorage.setItem("RMS_Login", true);
		localStorage.setItem("MTS_Login", true);
		localStorage.setItem("Beeline", true);


		chrome.runtime.sendMessage({
		  	user: "popup",
		    Bitrix: localStorage.getItem("Bitrix"),
		    Tarifnik: localStorage.getItem("Tarifnik"),
		    ESSD: localStorage.getItem("ESSD"),
		    RMS: localStorage.getItem("RMS"),
		    Orion: localStorage.getItem("Orion"),
		    novotelecom: localStorage.getItem("novotelecom"),
		    MTS: localStorage.getItem("MTS"),
		    SibSeti: localStorage.getItem("SibSeti"),
		    TTK: localStorage.getItem("TTK"),
		    RTKYr: localStorage.getItem("RTKYr"),
		    RTKMos: localStorage.getItem("RTKMos"),
		    Megafon: localStorage.getItem("Megafon"),
		    DomRyOld: localStorage.getItem("DomRyOld"),
		    Telecoma: localStorage.getItem("Telecoma"),
		    Axioma: localStorage.getItem("Axioma"),
		    Almatel: localStorage.getItem("Almatel"),
		    SkyNet: localStorage.getItem("SkyNet"),
		    Akado: localStorage.getItem("Akado"),
		    Maryno: localStorage.getItem("Maryno"),
		    YfaNet: localStorage.getItem("YfaNet"),
		    Izet: localStorage.getItem("Izet"),
		    Etelekom: localStorage.getItem("Etelekom"),
		    RMS_Login: localStorage.getItem("RMS_Login"),
		    MTS_Login: localStorage.getItem("MTS_Login"),
		    Beeline: localStorage.getItem("Beeline"),
		    ESSDlogin: localStorage.getItem("ESSDlog"),
		    ESSDpassword: localStorage.getItem("ESSDpass"),
			BitrixBigCard: localStorage.getItem("BitrixBigCard")
		  });
	}
	document.getElementById('ESSDychetki').onclick = function() {
		var login = prompt('Укажите Логин для учетки "Другой МРФ"');
		var password = prompt('Укажите Пароль для учетки "Другой МРФ"');

		if (login != null || password != null) {
			localStorage.setItem("ESSDlog", login);
			localStorage.setItem("ESSDpass", password);

			chrome.runtime.sendMessage({
			  	user: "popup",
			    Bitrix: localStorage.getItem("Bitrix"),
			    Tarifnik: localStorage.getItem("Tarifnik"),
			    ESSD: localStorage.getItem("ESSD"),
			    RMS: localStorage.getItem("RMS"),
			    Orion: localStorage.getItem("Orion"),
			    novotelecom: localStorage.getItem("novotelecom"),
			    MTS: localStorage.getItem("MTS"),
			    SibSeti: localStorage.getItem("SibSeti"),
			    TTK: localStorage.getItem("TTK"),
			    RTKYr: localStorage.getItem("RTKYr"),
			    RTKMos: localStorage.getItem("RTKMos"),
			    Megafon: localStorage.getItem("Megafon"),
			    DomRyOld: localStorage.getItem("DomRyOld"),
			    Telecoma: localStorage.getItem("Telecoma"),
			    Axioma: localStorage.getItem("Axioma"),
			    Almatel: localStorage.getItem("Almatel"),
			    SkyNet: localStorage.getItem("SkyNet"),
			    Akado: localStorage.getItem("Akado"),
			    Maryno: localStorage.getItem("Maryno"),
			    YfaNet: localStorage.getItem("YfaNet"),
			    Izet: localStorage.getItem("Izet"),
			    Etelekom: localStorage.getItem("Etelekom"),
			    RMS_Login: localStorage.getItem("RMS_Login"),
			    MTS_Login: localStorage.getItem("MTS_Login"),
			    Beeline: localStorage.getItem("Beeline"),
			    ESSDlogin: localStorage.getItem("ESSDlog"),
			    ESSDpassword: localStorage.getItem("ESSDpass"),
				BitrixBigCard: localStorage.getItem("BitrixBigCard")
			});
		}

		
	}
	document.getElementById('BitrixCheckBox').onclick = function() {
		var BigCard = prompt('Включить большие карточки в Битрикс24? (Да/Нет)');
		var BitText = document.getElementById('Bit');
		if (BigCard != null) {
			if (BigCard.toLowerCase() == 'да') {
				BitText.setAttribute('style', '');
				localStorage.setItem("BitrixBigCard", true);

			}
			if (BigCard.toLowerCase() == 'нет') {
				localStorage.setItem("BitrixBigCard", false);
				BitText.setAttribute('style', 'background: linear-gradient(90deg, #d000dd 17%, #005ae1 21%, #4bff00 28%, #efff00 32%, #ffc100 38%, #d11a1a 28%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
			}


			chrome.runtime.sendMessage({
			  	user: "popup",
			    Bitrix: localStorage.getItem("Bitrix"),
			    Tarifnik: localStorage.getItem("Tarifnik"),
			    ESSD: localStorage.getItem("ESSD"),
			    RMS: localStorage.getItem("RMS"),
			    Orion: localStorage.getItem("Orion"),
			    novotelecom: localStorage.getItem("novotelecom"),
			    MTS: localStorage.getItem("MTS"),
			    SibSeti: localStorage.getItem("SibSeti"),
			    TTK: localStorage.getItem("TTK"),
			    RTKYr: localStorage.getItem("RTKYr"),
			    RTKMos: localStorage.getItem("RTKMos"),
			    Megafon: localStorage.getItem("Megafon"),
			    DomRyOld: localStorage.getItem("DomRyOld"),
			    Telecoma: localStorage.getItem("Telecoma"),
			    Axioma: localStorage.getItem("Axioma"),
			    Almatel: localStorage.getItem("Almatel"),
			    SkyNet: localStorage.getItem("SkyNet"),
			    Akado: localStorage.getItem("Akado"),
			    Maryno: localStorage.getItem("Maryno"),
			    YfaNet: localStorage.getItem("YfaNet"),
			    Izet: localStorage.getItem("Izet"),
			    Etelekom: localStorage.getItem("Etelekom"),
			    RMS_Login: localStorage.getItem("RMS_Login"),
			    MTS_Login: localStorage.getItem("MTS_Login"),
			    Beeline: localStorage.getItem("Beeline"),
			    ESSDlogin: localStorage.getItem("ESSDlog"),
			    ESSDpassword: localStorage.getItem("ESSDpass"),
				BitrixBigCard: localStorage.getItem("BitrixBigCard")
			});
		}

		
	}
})



