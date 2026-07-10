const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");
const main = document.querySelector(".main");
const start = document.querySelector(".start");
const text = document.getElementById("text");
const toggleMusic = document.getElementById("toggleMusic");

const message = `

كل يوم بيمر وأنا معاكي بحس إن الدنيا أحلى ❤️

إنتي أجمل حاجة حصلتلي.

وبحبك أكتر من أي كلام يوصف.

ربنا يخليكي ليا يا حنين ❤️
`;

let i = 0;

startBtn.onclick = function(){

start.style.display="none";
main.style.display="block";

music.play().catch(()=>{});

function type(){

if(i<message.length){

text.innerHTML+=message.charAt(i);

i++;

setTimeout(type,50);

}

}

type();

}

toggleMusic.onclick=function(){

if(music.paused){

music.play();

}else{

music.pause();

}

}
