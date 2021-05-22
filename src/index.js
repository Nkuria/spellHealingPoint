import './main.scss';

var burger = document.getElementById('burger');
var links = document.getElementById('links');
var quit = document.getElementById('quit');

function burgerC(){
    burger.style.padding = '16px 16px 200vw 200vw';
    links.style.display = 'flex';
    quit.style.display = 'inline';
  }

burger.addEventListener('click', burgerC);
  
function quitC(){
    burger.style.padding = '16px 16px 32px 32px';
    links.style.display = 'none';
    quit.style.display = 'none';
}

quit.addEventListener('click', quitC);

