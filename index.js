const charVal=document.getElementById('textarea')
let totalCount=document.getElementById('total-counter')
let remainingCount=document.getElementById('remaining-counter')


let char=0;
 
const updateCounter=function(){
    char=charVal.value.length;
    totalCount.innerText=char
    remainingCount.innerText=150-char;
}
charVal.addEventListener('keyup',updateCounter)
const copyText=function(){
    charVal.select()
    charVal.setSelectionRange(0,9999);//mobile version
    navigator.clipboard.writeText(charVal.value);
}