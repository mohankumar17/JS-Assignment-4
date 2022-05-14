/*
Create a simple application which displays two counts:Local Score, Session Score 
and a button to increment these counts. Local score must persist in Local Storage 
and Session score must persist in Session Storage and must reset on closing the session.
*/
localStorage.clear();
sessionStorage.clear();
let countLS=0, countSS=0;

document.getElementsByClassName("btn")[0].addEventListener('click',decrValueLS);
document.getElementsByClassName("btn")[1].addEventListener('click',incrValueLS);

document.getElementsByClassName("btn")[2].addEventListener('click',decrValueSS);
document.getElementsByClassName("btn")[3].addEventListener('click',incrValueSS);



function incrValueLS(){
    countLS++;
    document.getElementsByClassName("count")[0].innerHTML=countLS;
    localStorage.setItem('countLS',countLS);
}

function decrValueLS(){
    countLS--;
    document.getElementsByClassName("count")[0].innerHTML=countLS;
    localStorage.setItem('countLS',countLS);
}

function incrValueSS(){
    countSS++;
    document.getElementsByClassName("count")[1].innerHTML=countSS;
    sessionStorage.setItem('countSS',countSS);
}

function decrValueSS(){
    countSS--;
    document.getElementsByClassName("count")[1].innerHTML=countSS;
    sessionStorage.setItem('countSS',countSS);
}
