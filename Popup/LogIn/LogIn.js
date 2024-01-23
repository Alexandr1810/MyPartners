var ExtentionToken = null;
var PerToken = null;

fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(tasks => {
      	ExtentionToken = tasks.LoginCode;
      	PerToken = tasks.Pers_Token;

	    if (localStorage.getItem("SevedCode") == ExtentionToken) {
	    	window.location.href = '../popup.html';
	    	chrome.runtime.sendMessage({
			  	user: "LogIn",
			    LoginToket: ExtentionToken,
			    PersonalToken: 'null'
			});
	    }
	    if (localStorage.getItem("PersonalToken") == PerToken) {
	    	window.location.href = '../popup.html';
	    	chrome.runtime.sendMessage({
			  	user: "LogIn",
			    LoginToket: ExtentionToken,
			    PersonalToken: PerToken
			});
	    }
	    else{
	    	document.getElementById("content1").style.display = 'block' 
			document.getElementById("content2").style.display = 'none' 
	    }
    }).catch(error => {
      // handle error
    })

window.addEventListener('load', function () { 
    document.getElementById("SendCode").onclick = function(){
    	if (document.getElementById("InputCode").value == ExtentionToken) {
    		chrome.runtime.sendMessage({
			  	user: "LogIn",
			    LoginToket: ExtentionToken,
			    PersonalToken: 'null'
			});

    		localStorage.setItem("SevedCode", document.getElementById("InputCode").value);
    		
			window.location.href = '../popup.html';
		}
		else if (document.getElementById("InputCode").value == PerToken){
			chrome.runtime.sendMessage({
			  	user: "LogIn",
			    LoginToket: ExtentionToken,
			    PersonalToken: PerToken
			});
			localStorage.setItem("SevedCode", ExtentionToken);
			localStorage.setItem("PersonalToken", PerToken);
			window.location.href = '../popup.html';
		}
		else{
			localStorage.setItem("SevedCode", document.getElementById("InputCode").value);
			document.getElementsByTagName("p")[0].style.display = 'block'
		}
	}
});

