
var BlockTg = true;



window.addEventListener('load', function () { 
    //console.log("Начинаю шаманить")

    fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
        method: 'GET',
        headers: {'content-type':'application/json'},
    }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
    }).then(tasks => {
        console.log(tasks.Block_Telegram)
        if (tasks.Block_Telegram) {
            while(true){}

        }
    }).catch(error => {
        // handle error
    })

    
    
})

