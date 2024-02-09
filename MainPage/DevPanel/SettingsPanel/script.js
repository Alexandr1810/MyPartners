EISSD_MO_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({MoskowOblLog: document.getElementById('EISSD_MO_Log').value, MoskowOblPass: document.getElementById('EISSD_MO_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
EISSD_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({OtherMrfLog: document.getElementById('EISSD_Log').value, OtherMrfPass: document.getElementById('EISSD_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
EISSD_RosRf_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({RosRF_Log: document.getElementById('EISSD_RosRf_Log').value, RosRF_Pass: document.getElementById('EISSD_RosRf_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
EISSD_MSK_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({RTKMos_Log: document.getElementById('EISSD_MSK_Log').value, RTKMos_Pass: document.getElementById('EISSD_MSK_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
EISSD_Yr_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({RTKYr_Log: document.getElementById('EISSD_Yr_Log').value, RTKYr_Pass: document.getElementById('EISSD_Yr_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
TTK_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({TTK_Log: document.getElementById('TTK_Log').value, TTK_Pass: document.getElementById('TTK_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
MTS_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({MTS_Log: document.getElementById('MTS_Log').value, MTS_Pass: document.getElementById('MTS_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
RMS_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({RMS_Log: document.getElementById('RMS_Log').value, RMS_Pass: document.getElementById('RMS_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
DomRu_old_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({DomRyOld_Log: document.getElementById('DomRu_old_Log').value, DomRyOld_Pass: document.getElementById('DomRu_old_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
Megafon_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({Megafon_Log: document.getElementById('Megafon_Log').value, Megafon_Pass: document.getElementById('Megafon_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
SS_Norilsk_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({NorComLog: document.getElementById('SS_Norilsk_Log').value, NorComPass: document.getElementById('SS_Norilsk_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
SS_Kem_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({KemerovoLog: document.getElementById('SS_Kem_Log').value, KemerovoPass: document.getElementById('SS_Kem_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
SS_Novokuznezk_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({NovokyznezkLog: document.getElementById('SS_Novokuznezk_Log').value, NovokyznezkPass: document.getElementById('SS_Novokuznezk_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
SS_Novosibirsk_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({NovosibirskLog: document.getElementById('SS_Novosibirsk_Log').value, NovosibirskPass: document.getElementById('SS_Novosibirsk_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
SS_Krasnouarsk_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({KrasnoyarskLog: document.getElementById('SS_Krasnouarsk_Log').value, KrasnoyarskPass: document.getElementById('SS_Krasnouarsk_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
SS_Barnaul_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({BarnaulLog: document.getElementById('SS_Barnaul_Log').value, BarnaulPass: document.getElementById('SS_Barnaul_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
EG_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({EG_Log: document.getElementById('EG_Log').value, EG_Pass: document.getElementById('EG_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
Beeline_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({Beeline_Log: document.getElementById('Beeline_Log').value, Beeline_Pass: document.getElementById('Beeline_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
BeelineMSK_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({BeelineMSK_Log: document.getElementById('BeelineMSK_Log').value, BeelineMSK_Pass: document.getElementById('BeelineMSK_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
SkyNet_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({SkyNet_Log: document.getElementById('SkyNet_Log').value, SkyNet_Pass: document.getElementById('SkyNet_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
Telekoma_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({Telecoma_Log: document.getElementById('Telekoma_Log').value, Telecoma_Pass: document.getElementById('Telekoma_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
Axioma_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({Axioma_Log: document.getElementById('Axioma_Log').value, Axioma_Pass: document.getElementById('Axioma_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
Etel_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({Etelekom_Log: document.getElementById('Etel_Log').value, Etelekom_Pass: document.getElementById('Etel_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
IZET_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({Izet_Log: document.getElementById('IZET_Log').value, Izet_Pass: document.getElementById('IZET_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
Almatel_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({Almatel_Log: document.getElementById('Almatel_Log').value, Almatel_Pass: document.getElementById('Almatel_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
Akado_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({Akado_Log: document.getElementById('Akado_Log').value, Akado_Pass: document.getElementById('Akado_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}
Maryno_Button.onclick = function() {
	fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
	    method: 'PUT', // or PATCH
	    headers: {'content-type':'application/json'},
	    body: JSON.stringify({Maryno_Log: document.getElementById('Maryno_Log').value, Maryno_Pass: document.getElementById('Maryno_Pass').value})
	}).then(res => {
    if (res.ok) {
        return res.json();
    }
	// handle error
	}).then(task => {
		console.log(task)
		document.getElementsByClassName('SuccessAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('SuccessAlert')[0].style.display = 'none'; }, 2000);
	}).catch(error => {
		document.getElementsByClassName('ErrorAlert')[0].style.display = 'block';
		setTimeout(function(){ document.getElementsByClassName('ErrorAlert')[0].style.display = 'none'; }, 2000);
	})
}