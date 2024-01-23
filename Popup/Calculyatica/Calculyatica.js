window.addEventListener('load', function () { 
	document.getElementById("standard-select").addEventListener('change', function(e) {  
	  SetProvider(e.target.value)
	});
	document.getElementById("RTK_Button").addEventListener("click", CalculateRTK);
	document.getElementById("RTK_Moskva_Button").addEventListener("click", CalculateRTK_Moskva);
	document.getElementById("DomRu_Button").addEventListener("click", CalculateDomRu);
	document.getElementById("EG_Button").addEventListener("click", CalculateEG);
})
function SetProvider(Provider){
	console.log(Provider)
	if (Provider == "RTK") {
		document.getElementById("RTK_Block").style.display = "block";
		document.getElementById("RTK_Moskva_Block").style.display = "none";
		document.getElementById("DomRu_Block").style.display = "none";
		document.getElementById("EG_Block").style.display = "none";
	}
	else if (Provider == "RTK_Moskva") {
		document.getElementById("RTK_Block").style.display = "none";
		document.getElementById("RTK_Moskva_Block").style.display = "block";
		document.getElementById("DomRu_Block").style.display = "none";
		document.getElementById("EG_Block").style.display = "none";
	}
	else if (Provider == "DomRu") {
		document.getElementById("RTK_Block").style.display = "none";
		document.getElementById("RTK_Moskva_Block").style.display = "none";
		document.getElementById("DomRu_Block").style.display = "block";
		document.getElementById("EG_Block").style.display = "none";
	}
	else if (Provider == "EG") {
		document.getElementById("RTK_Block").style.display = "none";
		document.getElementById("RTK_Moskva_Block").style.display = "none";
		document.getElementById("DomRu_Block").style.display = "none";
		document.getElementById("EG_Block").style.display = "block";
	}
	else{
		document.getElementById("RTK_Block").style.display = "none";
		document.getElementById("RTK_Moskva_Block").style.display = "none";
		document.getElementById("DomRu_Block").style.display = "none";
	}
}
function CalculateRTK(){
	var rtk_ap = document.getElementById("RTK_AP").value;
	console.log(rtk_ap)
	document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: " + Math.round(Number(rtk_ap)*2.24) + " руб.";
	if (document.getElementById('RTK_Internet_Checkbox').checked && document.getElementById('RTK_TV_Checkbox').checked) {
		document.getElementById("RTK_Internet_Preview_Text").innerText = Math.round((Number(rtk_ap)*2.24)/2) + " руб.";
		document.getElementById("RTK_BR").innerHTML = "";
		document.getElementById("RTK_TV_Preview_Text").innerText = Math.round((Number(rtk_ap)*2.24)/2) + " руб.";
	}
	if (document.getElementById('RTK_Internet_Checkbox').checked == true && document.getElementById('RTK_TV_Checkbox').checked == false) {
		document.getElementById("RTK_Internet_Preview_Text").innerText = Math.round(Number(rtk_ap)*2.24) + " руб.";
		document.getElementById("RTK_BR").innerHTML = "";
		document.getElementById("RTK_TV_Preview_Text").innerHTML = "";
	}
	if (document.getElementById('RTK_Internet_Checkbox').checked == false && document.getElementById('RTK_TV_Checkbox').checked == true) {
		document.getElementById("RTK_Internet_Preview_Text").innerHTML = "";
		document.getElementById("RTK_BR").innerHTML = "<br><br>";
		document.getElementById("RTK_TV_Preview_Text").innerText = Math.round(Number(rtk_ap)*2.24) + " руб.";
	}
	if (document.getElementById('RTK_Internet_Checkbox').checked == false && document.getElementById('RTK_TV_Checkbox').checked == false) {
		document.getElementById("RTK_Internet_Preview_Text").innerHTML = "";
		document.getElementById("RTK_BR").innerHTML = "";
		document.getElementById("RTK_TV_Preview_Text").innerText = "";
	}
} 

function CalculateRTK_Moskva(){
	var rtk_moskva_ap = document.getElementById("RTK_Moskva_AP").value;
	console.log(rtk_moskva_ap)
	//Моно
	if (document.getElementById('RTK_Moskva_Internet_Checkbox').checked && document.getElementById('RTK_Moskva_TV_Checkbox').checked == false && document.getElementById('RTK_Moskva_Sim_Checkbox').checked == false && document.getElementById('RTK_Moskva_Game_Checkbox').checked == false) {
		document.getElementById("RTK_Moskva_Internet_Preview_Text").innerText = Math.round(Number(rtk_moskva_ap)*3.2*0.87) + " руб.";
		document.getElementById("RTK_Moskva_TV_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_Sim_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_Game_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_BR").innerHTML = "";
		document.getElementById("RTK_Moskva_BR2").innerHTML = "";
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: " + Math.round(Number(rtk_moskva_ap)*3.2*0.87) + " руб.";
	}
	//Пакет
	else if (document.getElementById('RTK_Moskva_Internet_Checkbox').checked && document.getElementById('RTK_Moskva_TV_Checkbox').checked && document.getElementById('RTK_Moskva_Sim_Checkbox').checked == false && document.getElementById('RTK_Moskva_Game_Checkbox').checked == false) {
		document.getElementById("RTK_Moskva_Internet_Preview_Text").innerText = Math.round((Number(rtk_moskva_ap)*4.6*0.87)/2) + " руб.";
		document.getElementById("RTK_Moskva_TV_Preview_Text").innerText = Math.round((Number(rtk_moskva_ap)*4.6*0.87)/2) + " руб.";
		document.getElementById("RTK_Moskva_Sim_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_Game_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_BR").innerHTML = "";
		document.getElementById("RTK_Moskva_BR2").innerHTML = "";
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: " + Math.round(Number(rtk_moskva_ap)*4.6*0.87) + " руб.";
	}
	//КВГ(Пакет+Сим)
	else if (document.getElementById('RTK_Moskva_Internet_Checkbox').checked && document.getElementById('RTK_Moskva_TV_Checkbox').checked && document.getElementById('RTK_Moskva_Sim_Checkbox').checked && document.getElementById('RTK_Moskva_Game_Checkbox').checked == false) {
		document.getElementById("RTK_Moskva_Internet_Preview_Text").innerText = Math.round((Number(rtk_moskva_ap)*5.1*0.87)/3) + " руб.";
		document.getElementById("RTK_Moskva_TV_Preview_Text").innerText = Math.round((Number(rtk_moskva_ap)*5.1*0.87)/3) + " руб.";
		document.getElementById("RTK_Moskva_Sim_Preview_Text").innerText = Math.round((Number(rtk_moskva_ap)*5.1*0.87)/3) + " руб.";
		document.getElementById("RTK_Moskva_Game_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_BR").innerHTML = "";
		document.getElementById("RTK_Moskva_BR2").innerHTML = "";
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: " + Math.round(Number(rtk_moskva_ap)*5.1*0.87) + " руб.";
	}
	//КВГ(Моно + Сим)
	else if ( document.getElementById('RTK_Moskva_Internet_Checkbox').checked && document.getElementById('RTK_Moskva_TV_Checkbox').checked == false && document.getElementById('RTK_Moskva_Sim_Checkbox').checked && document.getElementById('RTK_Moskva_Game_Checkbox').checked == false) {
		document.getElementById("RTK_Moskva_Internet_Preview_Text").innerText = Math.round((Number(rtk_moskva_ap)*5.1*0.87)/2) + " руб.";
		document.getElementById("RTK_Moskva_TV_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_Sim_Preview_Text").innerText = Math.round((Number(rtk_moskva_ap)*5.1*0.87)/2) + " руб.";
		document.getElementById("RTK_Moskva_Game_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_BR").innerHTML = "";
		document.getElementById("RTK_Moskva_BR2").innerHTML = "<br>";
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: " + Math.round(Number(rtk_moskva_ap)*5.1*0.87) + " руб.";
	}
	//Игровой
	else if (document.getElementById('RTK_Moskva_Game_Checkbox').checked) {
		document.getElementById("RTK_Moskva_Internet_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_TV_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_Sim_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_Game_Preview_Text").innerText = Math.round(Number(rtk_moskva_ap)*3.5*0.87) + " руб.";
		document.getElementById("RTK_Moskva_BR").innerHTML = "<br><br>";
		document.getElementById("RTK_Moskva_BR2").innerHTML = "<br><br><br>";
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: " + Math.round(Number(rtk_moskva_ap)*3.5*0.87) + " руб.";
	}
	else{
		document.getElementById("RTK_Moskva_Internet_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_TV_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_Sim_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_Game_Preview_Text").innerText = "";
		document.getElementById("RTK_Moskva_BR").innerHTML = "";
		document.getElementById("RTK_Moskva_BR2").innerHTML = "";
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: ";
	}
	


	
} 
function CalculateDomRu(){
	var domRu_ap = document.getElementById("DomRu_AP").value;
	console.log(domRu_ap)
	var DomRu_Royter_ap = 0;
	var DomRu_Pristavka_ap = 0;
	//Пакет с ЦТВ (ГОТОВО ПРОВЕРИТЬ)
	if (document.getElementById('DomRu_Internet_Checkbox').checked && document.getElementById('DomRu_ITV_Checkbox').checked) {
		console.log("Пакет с ЦТВ")
		document.getElementById("DomRu_Internet_Preview_Text").innerText = Math.round((Number(domRu_ap)*2.55)/2) + " руб.";
		document.getElementById("DomRu_KTV_Preview_Text").innerText = "";
		document.getElementById("DomRu_ITV_Preview_Text").innerText = Math.round((Number(domRu_ap)*2.55)/2) + " руб.";
		document.getElementById("DomRu_Royter_Preview_Text").innerText = "";
		document.getElementById("DomRu_Pristavka_Preview_Text").innerText = "";

		if (document.getElementById("DomRu_Royter_Count_Input").value != "0"){
			DomRu_Royter_ap = Number(document.getElementById("DomRu_Royter_Count_Input").value) * 325;
			document.getElementById("DomRu_Royter_Preview_Text").innerText = DomRu_Royter_ap + " руб.";
		}
		if (document.getElementById("DomRu_Pristavka_Count_Input").value != "0"){
			DomRu_Pristavka_ap = Number(document.getElementById("DomRu_Pristavka_Count_Input").value) * 465;
			document.getElementById("DomRu_Pristavka_Preview_Text").innerText = DomRu_Pristavka_ap + " руб.";
		}
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: " + (Math.round(Number(domRu_ap)*2.55) + DomRu_Royter_ap + DomRu_Pristavka_ap) + " руб.";
	}
	//Пакет с КТВ (ГОТОВО ПРОВЕРИТЬ)
	else if (document.getElementById('DomRu_Internet_Checkbox').checked && document.getElementById('DomRu_KTV_Checkbox').checked) {
		console.log("Пакет с КТВ")
		document.getElementById("DomRu_Internet_Preview_Text").innerText = Math.round((Number(domRu_ap)*2.2)/2) + " руб.";
		document.getElementById("DomRu_KTV_Preview_Text").innerText = Math.round((Number(domRu_ap)*2.2)/2) + " руб.";
		document.getElementById("DomRu_ITV_Preview_Text").innerText = "";
		document.getElementById("DomRu_Royter_Preview_Text").innerText = "";
		document.getElementById("DomRu_Pristavka_Preview_Text").innerText = "";

		if (document.getElementById("DomRu_Royter_Count_Input").value != "0"){
			DomRu_Royter_ap = Number(document.getElementById("DomRu_Royter_Count_Input").value) * 325;
			document.getElementById("DomRu_Royter_Preview_Text").innerText = DomRu_Royter_ap + " руб.";
		}
		if (document.getElementById("DomRu_Pristavka_Count_Input").value != "0"){
			DomRu_Pristavka_ap = Number(document.getElementById("DomRu_Pristavka_Count_Input").value) * 465;
			document.getElementById("DomRu_Pristavka_Preview_Text").innerText = DomRu_Pristavka_ap + " руб.";
		}

		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: " + (Math.round(Number(domRu_ap)*2.2) + DomRu_Royter_ap + DomRu_Pristavka_ap) + " руб.";
	}
	//Моно Инет
	else if (document.getElementById('DomRu_Internet_Checkbox').checked && document.getElementById('DomRu_ITV_Checkbox').checked == false && document.getElementById('DomRu_KTV_Checkbox').checked == false) {
		console.log("Моно Инет")
		document.getElementById("DomRu_Internet_Preview_Text").innerText = Math.round(Number(domRu_ap)*1.35) + " руб.";
		document.getElementById("DomRu_KTV_Preview_Text").innerText = "";
		document.getElementById("DomRu_ITV_Preview_Text").innerText = "";
		document.getElementById("DomRu_Royter_Preview_Text").innerText = "";
		document.getElementById("DomRu_Pristavka_Preview_Text").innerText = "";

		if (document.getElementById("DomRu_Royter_Count_Input").value != "0"){
			DomRu_Royter_ap = Number(document.getElementById("DomRu_Royter_Count_Input").value) * 325;
			document.getElementById("DomRu_Royter_Preview_Text").innerText = DomRu_Royter_ap + " руб.";
		}
		if (document.getElementById("DomRu_Pristavka_Count_Input").value != "0"){
			DomRu_Pristavka_ap = Number(document.getElementById("DomRu_Pristavka_Count_Input").value) * 465;
			document.getElementById("DomRu_Pristavka_Preview_Text").innerText = DomRu_Pristavka_ap + " руб.";
		}
		
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: " + (Math.round(Number(domRu_ap)*1.35) + DomRu_Royter_ap + DomRu_Pristavka_ap) + " руб.";
	}

	//Моно КТВ
	else if (document.getElementById('DomRu_Internet_Checkbox').checked == false && document.getElementById('DomRu_KTV_Checkbox').checked == true && document.getElementById('DomRu_ITV_Checkbox').checked == false) {
		document.getElementById("DomRu_Internet_Preview_Text").innerText = "";
		document.getElementById("DomRu_KTV_Preview_Text").innerText = "372 руб.";
		document.getElementById("DomRu_ITV_Preview_Text").innerText = "";
		document.getElementById("DomRu_Royter_Preview_Text").innerText = "";
		document.getElementById("DomRu_Pristavka_Preview_Text").innerText = "";
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: 372" + " руб.";
	}
	else{
		document.getElementById("DomRu_Internet_Preview_Text").innerText = "";;
		document.getElementById("DomRu_KTV_Preview_Text").innerText = "";
		document.getElementById("DomRu_ITV_Preview_Text").innerText = "";
		document.getElementById("DomRu_Royter_Preview_Text").innerText = "";
		document.getElementById("DomRu_Pristavka_Preview_Text").innerText = "";
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: ";
	}
	
} 
function CalculateEG(){
	var EG_AP = document.getElementById("EG_AP").value;
	var EG_AP_Royter = document.getElementById("EG_Royter_Price_Input").value;
	var EG_AP_Royter_Mounth = document.getElementById("EG_Royter_Mounth_Input").value;
	var EG_AP_Royter_Count = document.getElementById("EG_Royter_Count_Input").value;

	var EG_AP_Pristavka = document.getElementById("EG_Pristavka_Price_Input").value;
	var EG_AP_Pristavka_Mounth = document.getElementById("EG_Pristavka_Mounth_Input").value;
	var EG_AP_Pristavka_Count = document.getElementById("EG_Pristavka_Count_Input").value;
	console.log(EG_AP)
	
	if (document.getElementById('EG_Internet_Checkbox').checked && document.getElementById('EG_TV_Checkbox').checked) {
		document.getElementById("EG_Internet_Preview_Text").innerText = Math.round((Number(EG_AP)*2.2*0.93)/2) + " руб.";
		document.getElementById("EG_TV_Preview_Text").innerText = Math.round((Number(EG_AP)*2.2*0.93)/2) + " руб.";
		document.getElementById("EG_Royter_Preview_Text").innerText = Math.round((Number(EG_AP_Royter)*Number(EG_AP_Royter_Mounth)*0.08*0.93)*Number(EG_AP_Royter_Count)) + " руб.";
		document.getElementById("EG_Pristavka_Preview_Text").innerText = Math.round((Number(EG_AP_Pristavka)*Number(EG_AP_Pristavka_Mounth)*0.08*0.93)*Number(EG_AP_Pristavka_Count)) + " руб.";
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: " + Math.round(Number(EG_AP)*2.2*0.93) + Math.round((Number(EG_AP_Royter)*Number(EG_AP_Royter_Mounth)*0.08*0.93)*Number(EG_AP_Royter_Count)) + Math.round((Number(EG_AP_Pristavka)*Number(EG_AP_Pristavka_Mounth)*0.08*0.93)*Number(EG_AP_Pristavka_Count)) + " руб.";
	}
	if (document.getElementById('EG_Internet_Checkbox').checked == true && document.getElementById('EG_TV_Checkbox').checked == false) {
		document.getElementById("EG_Internet_Preview_Text").innerText = Math.round(Number(EG_AP)*2.2*0.93) + " руб.";
		document.getElementById("EG_TV_Preview_Text").innerHTML = "";
		document.getElementById("EG_Royter_Preview_Text").innerText = Math.round((Number(EG_AP_Royter)*Number(EG_AP_Royter_Mounth)*0.08*0.93)*Number(EG_AP_Pristavka_Count)) + " руб.";
		document.getElementById("EG_Pristavka_Preview_Text").innerText = "";
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: " + Math.round(Number(EG_AP)*2.2*0.93) + Math.round((Number(EG_AP_Royter)*Number(EG_AP_Royter_Mounth)*0.08*0.93)*Number(EG_AP_Royter_Count)) + " руб.";
	}
	if (document.getElementById('EG_Internet_Checkbox').checked == false && document.getElementById('EG_TV_Checkbox').checked == true) {
		document.getElementById("EG_Internet_Preview_Text").innerHTML = "";
		document.getElementById("EG_TV_Preview_Text").innerText = "372 руб.";
		document.getElementById("EG_Royter_Preview_Text").innerText = "";
		document.getElementById("EG_Pristavka_Preview_Text").innerText = Math.round((Number(EG_AP_Pristavka)*Number(EG_AP_Pristavka_Mounth)*0.08*0.93)*Number(EG_AP_Pristavka_Count)) + " руб.";
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: " + Math.round(Number(EG_AP)*2.2*0.93) + Math.round((Number(EG_AP_Pristavka)*Number(EG_AP_Pristavka_Mounth)*0.08*0.93)*Number(EG_AP_Pristavka_Count)) + " руб.";
	}
	if (document.getElementById('EG_Internet_Checkbox').checked == false && document.getElementById('EG_TV_Checkbox').checked == false) {
		document.getElementById("EG_Internet_Preview_Text").innerHTML = "";
		document.getElementById("EG_TV_Preview_Text").innerText = "";
		document.getElementById("EG_Royter_Preview_Text").innerText = "";	
		document.getElementById("EG_Pristavka_Preview_Text").innerText = "";
		document.getElementById("All_ItogPrice").innerText = "Оплата за заявку: ";
	}


	
} 
