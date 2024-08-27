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
        PerToken = tasks.Pers_Token;
        
    }).catch(error => {
      // handle error
    })


/*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    /*$('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });*/
$('.dropdown1').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active1');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown2').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active2');
        $(this).find('.dropdown-menu').slideToggle(300);
    });

$('.dropdown3').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active3');
        $(this).find('.dropdown-menu').slideToggle(300);
    });

$('.dropdown4').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active5');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown5').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active6');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown6').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active7');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown7').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active8');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown8').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active9');
        $(this).find('.dropdown-menu').slideToggle(300);
    });

$('.dropdown9').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active10');
        $(this).find('.dropdown-menu').slideToggle(300);
    });

$('.dropdown10').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active11');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown11').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active12');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown12').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active13');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown13').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active14');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown14').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active15');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown15').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active16');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown16').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active17');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown17').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active18');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown18').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active19');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown19').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active20');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown20').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active21');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown21').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active22');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown22').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active23');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown23').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active24');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown24').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active25');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown25').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active26');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown26').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active27');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown27').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active28');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown28').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active29');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
window.addEventListener('load', function () { 
    document.getElementById("DevPanel").onclick = function(){
        if (prompt('Ваш код доступа: ', '') == PerToken) {
            
            window.location.href = '../MainPage/DevPanel/index.html';
        }
        
    }
});

window.addEventListener('load', function () { 
    document.getElementById("DevPanel").onclick = function(){
        if (prompt('Ваш код доступа: ', '') == PerToken) {
            
            window.location.href = '../MainPage/DevPanel/index.html';
        }
        
    }
});
