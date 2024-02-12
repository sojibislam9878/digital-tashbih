const subhanallahb1 = document.getElementById('subhanallahb1');
const subhanallahb2 = document.getElementById('subhanallahb2')
const subhanallahp = document.getElementById('subhanallahp')
let subhanallah = 0;
subhanallahb1.addEventListener('click', function() {
    if (subhanallah === 33) {
        return alert("Subhan Allah is complete")
    }
    subhanallah += 1;
    subhanallahp.innerText = subhanallah;
    
})

subhanallahb2.addEventListener('click', function() {
    if (subhanallah === 0) {
        return alert("You can't add nagative value")
    }
    subhanallah -= 1;
    subhanallahp.innerText = subhanallah;
    
})

const alhamdulilahb1 = document.getElementById('alhamdulilahb1');
const alhamdulilahb2 = document.getElementById('alhamdulilahb2');
const alhamdulilahp = document.getElementById('alhamdulilahp')
let alhamdulilah = 0;

alhamdulilahb1.addEventListener('click', function(){
    if (alhamdulilah === 33) {
        return alert('Alhamdulila is complete')
    }
    alhamdulilah += 1;
    alhamdulilahp.innerText = alhamdulilah;
})

alhamdulilahb2.addEventListener('click', function(){
    if (alhamdulilah === 0) {
        return alert("You can't set a nagetive value")
    }
    alhamdulilah -=1;
    alhamdulilahp.innerText = alhamdulilah;
})


const allahuakberb1 = document.getElementById("allahuakberb1");
const allahuakberb2 = document.getElementById('allahuakberb2');
const allahuakberp = document.getElementById('allahuakberp')
let allahuakber = 0;


allahuakberb1.addEventListener("click", function(){
    if (allahuakber === 34) {
        return alert("Allahu Akber is complete")
    }
    allahuakber += 1;
    allahuakberp.innerText = allahuakber;
})

allahuakberb2.addEventListener("click", function(){
    if (allahuakber === 0) {
        return alert("You can't set a nagetive value")
    }
    allahuakber -= 1;
    allahuakberp.innerText = allahuakber; 
})