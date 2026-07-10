const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");
const main = document.querySelector(".main");
const start = document.querySelector(".start");
const text = document.getElementById("text");
const toggleMusic = document.getElementById("toggleMusic");

const message = `
كل يوم بيمر وأنا معاكي بحس إن الدنيا أحلى ❤️
إنتي أجمل حاجة حصلتلي، وبحبك أكتر من أي كلام يوصف.
ربنا يخليكي ليا دايمًا يا حنين ❤️
`;

let i = 0;

startBtn.onclick = () => {
    start.style.display = "none";
    main.style.display = "block";
    music.play();

    function type() {
        if (i < message.length) {
            text.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }

    type();
};

toggleMusic.onclick = () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
};