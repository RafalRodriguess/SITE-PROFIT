

const btn = document.querySelector('.anim');
const elemento = document.querySelectorAll('.anima');
const btnOpenItemFaq = document.querySelectorAll('#item_faq h5');
const btn_mobile_menu =  document.getElementById('menu-toggle');
const header_menu = document.querySelector('.header_menu');
const menu_mobile_over = document.querySelector('.menu_mobile_over');
const close_menu = document.querySelector('.close_menu');

const title_hero = document.querySelector('.caption_hero .anima');
if(isOnScreen(title_hero))title_hero.classList.add('anima_slide');

const videos_tuto = document.querySelectorAll('.board_video');//videos do primeiro tutorial
 

//function to verify if element is on screen
function isOnScreen(el){
    let rect = el.getBoundingClientRect();
    return rect.top > 0 && rect.bottom < window.innerHeight;
}

addEventListener('scroll', (e) => {


    elemento.forEach((item) => {
        if(isOnScreen(item)) item.classList.add('anima_slide');
    });

    const cs1 = document.querySelector('.cs-1');
    const cs2 = document.querySelector('.cs-2');
    const cs3 = document.querySelector('.cs-3');
    const cs4 = document.querySelector('.cs-4');

    if(isOnScreen(cs1)){
        cs1.classList.add( 'animate__animated', 'animate__fadeInDown');
        cs1.style.setProperty('--animate-duration', '.7s');
    }

    if(isOnScreen(cs2)){
        cs2.classList.add( 'animate__animated', 'animate__fadeInDown');
        cs2.style.setProperty('--animate-duration', '1s');
    }

    if(isOnScreen(cs3)){
        cs3.classList.add( 'animate__animated', 'animate__fadeInDown');
        cs3.style.setProperty('--animate-duration', '1.5s');
    }

    if(isOnScreen(cs4)){
        cs4.classList.add( 'animate__animated', 'animate__fadeInDown');
        cs4.style.setProperty('--animate-duration', '2s');
    }

    const cardoffer1 = document.querySelector('.cardoffer1');
    const cardoffer2 = document.querySelector('.cardoffer2');
    const cardoffer3 = document.querySelector('.cardoffer3');
    const cardoffer4 = document.querySelector('.cardoffer4');
    const cardoffer5 = document.querySelector('.cardoffer5');
    const cardoffer6 = document.querySelector('.cardoffer6');

    if(isOnScreen(cardoffer1)){
        cardoffer1.classList.add( 'animate__animated', 'animate__fadeInDown');
        cardoffer1.style.setProperty('--animate-duration', '.7s');
    }

    if(isOnScreen(cardoffer2)){
        cardoffer2.classList.add( 'animate__animated', 'animate__fadeInDown');
        cardoffer2.style.setProperty('--animate-duration', '1s');
    }

    if(isOnScreen(cardoffer3)){
        cardoffer3.classList.add( 'animate__animated', 'animate__fadeInDown');
        cardoffer3.style.setProperty('--animate-duration', '1.5s');
    }

    if(isOnScreen(cardoffer4)){
        cardoffer4.classList.add( 'animate__animated', 'animate__fadeInDown');
        cardoffer4.style.setProperty('--animate-duration', '2s');
    }

    if(isOnScreen(cardoffer5)){
        cardoffer5.classList.add( 'animate__animated', 'animate__fadeInDown');
        cardoffer5.style.setProperty('--animate-duration', '2.5s');
    }

    if(isOnScreen(cardoffer6)){
        cardoffer6.classList.add( 'animate__animated', 'animate__fadeInDown');
        cardoffer6.style.setProperty('--animate-duration', '3s');
    }


    const th2 = document.querySelector('.third_section h2');
    const tp = document.querySelectorAll('.third_section p');
    if(isOnScreen(th2)){
        th2.classList.add('animate__animated', 'animate__fadeInLeft');
    }

    tp.forEach((item, index) => {
        if(isOnScreen(item)){
            item.classList.add('animate__animated', 'animate__fadeInLeft');
            if(index == 0){
                item.style.setProperty('--animate-duration', '1s')
            }else{
                item.style.setProperty('--animate-duration', '1.5s')
            }
        }
        
    });

    const cdf = document.querySelectorAll('.cdf');
    let milseconds_cdf = 1000;
    cdf.forEach((item, index) => {
        
        if(isOnScreen(item)){

            item.classList.add('animate__animated', 'animate__fadeInDown');
            item.style.setProperty('--animate-duration', milseconds_cdf+'ms');

        }
        milseconds_cdf += 500;

    });

    const cdt = document.querySelectorAll('.cdt');
    let milseconds_cdt = 1000;
    cdt.forEach((item, index) => {
        
        if(isOnScreen(item)){

            item.classList.add('animate__animated', 'animate__fadeInDown');
            item.style.setProperty('--animate-duration', milseconds_cdt+'ms');

            item.querySelector('h4').classList.add('animate_animated', 'animate__fadeInRight');
            item.querySelector('h4').style.setProperty('--animate-duration', '1500ms');

            item.querySelector('h3').classList.add('animate_animated', 'animate__fadeInRight');
            item.querySelector('h3').style.setProperty('--animate-duration', '2000ms');

            item.querySelector('p').classList.add('animate_animated', 'animate__fadeInRight');
            item.querySelector('p').style.setProperty('--animate-duration', '2500ms');

        }
        milseconds_cdt += 500;

    });

    


   
});


btnOpenItemFaq.forEach((item, index) => {

    let itens_p = document.querySelectorAll('#item_faq p');
    let item_p = itens_p[index];

    let arrows_itens = document.querySelectorAll('#item_faq h5 i');
    let arrow_item = arrows_itens[index];

    item.addEventListener('click', function(e){

        if((item_p.classList.contains('open_item_list'))){
            item_p.classList.remove('open_item_list');
            arrow_item.classList.remove('rotate_arrow');
        }else{
            itens_p.forEach((item) => {
                item.classList.remove('open_item_list');
            });
            arrows_itens.forEach((item) => {
                item.classList.remove('rotate_arrow');
            });
    
            item_p.classList.toggle('open_item_list');
            arrow_item.classList.toggle('rotate_arrow');
        }

        


    });

});

btn_mobile_menu.addEventListener('click', () => {

    header_menu.classList.add('open_header_menu');
    menu_mobile_over.classList.add('open_over_mobile');

});

menu_mobile_over.addEventListener('click', () => {

    header_menu.classList.remove('open_header_menu');
    menu_mobile_over.classList.remove('open_over_mobile');

    videos_tuto.forEach((item) => {

        item.classList.remove('open_board_video');
        
    });

});

close_menu.addEventListener('click', () => {

    header_menu.classList.remove('open_header_menu');
    menu_mobile_over.classList.remove('open_over_mobile');

});




const cs3 = document.querySelector('.cs-3');
cs3.style.setProperty('--animate-duration', '1.5s');
const cs4 = document.querySelector('.cs-4');
cs4.style.setProperty('--animate-duration', '2s');




function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
  
function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cookieName) {
  let user = getCookie(cookieName);
  if (user != "") {
    return true
  } else {
    return false
  }
}

// controll popup cookie
const popup_cookie = document.querySelector('.popup_cookie');
const btn_cookie = document.getElementById('btn_cookie');

function showPopup(){

    setTimeout(function(){

        popup_cookie.classList.add('open_popup_cookie');

    }, 1500);

}

//clica no botao de aceita cookies
btn_cookie.addEventListener('click', function(){

    popup_cookie.classList.remove('open_popup_cookie');
    setCookie('c_profit', 'pro', 1);

});

if(!checkCookie('c_profit')){
    showPopup();
}


$('.menu_list li a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    header_menu.classList.remove('open_header_menu');
    menu_mobile_over.classList.remove('open_over_mobile');
    var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
            
    $('html, body').animate({ 
        scrollTop: targetOffset - 100
    }, 500);
});

$('.footer_col li a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    header_menu.classList.remove('open_header_menu');
    menu_mobile_over.classList.remove('open_over_mobile');
    var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
            
    $('html, body').animate({ 
        scrollTop: targetOffset - 100
    }, 500);
});


//control players

const header_card_tutorial = document.querySelectorAll('.header_card_tutorial');

header_card_tutorial.forEach((item, index) => {

    item.addEventListener('click', function(){
        menu_mobile_over.classList.add('open_over_mobile');
        videos_tuto[index].classList.add('open_board_video');
    })

});

document.querySelector('.close_modal_pol').addEventListener('click', function(){

    document.querySelector('.over_modal_pol').classList.remove('open_over_modal_pol');

});

document.getElementById('open_pol').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.over_modal_pol').classList.add('open_over_modal_pol');

});