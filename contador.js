let sumar=document.getElementById(`sumar`);
let reset=document.getElementById(`resetear`);
let restar=document.getElementById(`restar`);
let numero=document.getElementById(`numero`);
let contador=0;

sumar.addEventListener(`click`,function(){
    contador+=1;
    numero.innerHTML=`<span>`+contador+`</span>`;
    color();
})

restar.addEventListener(`click`,function(){
    contador-=1;
    numero.innerHTML=`<span>`+contador+`</span>`;
    color();
})

reset.addEventListener(`click`,function(){
    contador=0;
    numero.innerHTML=`<span>`+contador+`</span>`;
    color();
})

function color(){
    if (contador>0){
        numero.style.color=`green`;
    }
    if (contador==0){
        numero.style.color=`black`;
    }
    if (contador<0){
        numero.style.color=`red`;
    }
}