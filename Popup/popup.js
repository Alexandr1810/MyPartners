

window.addEventListener('load', function () { 
	
	var checkbox1 = document.getElementById("color-1");
	var checkbox2 = document.getElementById("color-2");
	var checkbox3 = document.getElementById("color-3");
	var checkbox4 = document.getElementById("color-4");
	var checkbox5 = document.getElementById("color-5");
	var checkbox6 = document.getElementById("color-6");
	var checkbox7 = document.getElementById("color-7");

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
	    ESSDlogin: localStorage.getItem("ESSDlog"),
	    ESSDpassword: localStorage.getItem("ESSDpass"),
		BitrixBigCard: localStorage.getItem("BitrixBigCard")
	  });


	});


	console.log(localStorage.getItem("Bitrix"), localStorage.getItem("Tarifnik"), localStorage.getItem("ESSD"), localStorage.getItem("RMS"), localStorage.getItem("Orion"),localStorage.getItem("MTS"));
	
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
			    ESSDlogin: localStorage.getItem("ESSDlog"),
			    ESSDpassword: localStorage.getItem("ESSDpass"),
			    BitrixBigCard: localStorage.getItem("BitrixBigCard")
			});
		}

		
	}
})



