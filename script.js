const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");
const start = document.querySelector(".start");
const main = document.querySelector(".main");
const text = document.getElementById("text");
const toggleMusic = document.getElementById("toggleMusic");

const message = `

إلى حنين ❤️

كل يوم بيمر وأنا معاكي بحس إن الدنيا أجمل.

إنتي الضحكة اللي بتنور أيامي،
وأجمل حاجة حصلتلي.

بحبك جدًا...
وربنا يخليكي ليا دايمًا. 🌹❤️

I Love You Forever ❤️
`;

startBtn.onclick = () => {

    start.style.display = "none";
    main.style.display = "block";

    music.play().catch(() => {});

    text.innerHTML = "";

    let i = 0;

    function type() {
        if (i < message.length) {
            text.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 45);
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
