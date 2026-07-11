const message = `

يا حنين ❤️

يمكن الكلام ميكفيش يوصف اللي جوايا...

بس كل يوم بيعدي بحبك أكتر من اليوم اللي قبله.

إنتي أجمل حاجة حصلتلي في حياتي،
وأحلى صدفة ربنا رزقني بيها.

بحب ضحكتك،
وبحب كلامك،
وبحب كل حاجة فيكي.

مهما يحصل بينا مشاكل.
و خناقات بس عمري .
مابطلت احبك لانك روحي.
و بنتي و صاحبتي و اختي .
و كل حاجه حلوه في الدنيا.

ووعد مني...
مهما حصل بينا،
هفضل أحبك وأتمسك بيكي.

نفسي أشوفك دايمًا سعيدة،
وأكون سبب ضحكتك كل يوم.

ربنا يخليكي ليا،
ويجمعنا على خير يا أحلى حنين. ❤️

I Love You Forever ❤️

`;

const startBtn = document.getElementById("startBtn");
const textElement = document.getElementById("text");

startBtn.onclick = () => {

    document.querySelector(".start").style.display = "none";
    document.querySelector(".main").style.display = "block";

    textElement.innerHTML = "";

    let i = 0;

    function typeWriter(){

        if(i < message.length){

            if(message.charAt(i) === "\n"){

                textElement.innerHTML += "<br>";

            }else{

                textElement.innerHTML += message.charAt(i);

            }

            i++;

            setTimeout(typeWriter,40);

        }

    }

    typeWriter();

    // تشغيل الفيديو داخل الصفحة
    const player = document.getElementById("youtubePlayer");

    player.src =
    "https://www.youtube.com/embed/wxJqjneij8c?autoplay=1&rel=0";

};
