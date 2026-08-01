/*=====================================================
                AOS
======================================================*/

AOS.init({
    duration:1200,
    once:true
});

/*=====================================================
                FLOATING HEARTS
======================================================*/

const heartsContainer = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
        (18 + Math.random()*20) + "px";

    heart.style.animationDuration =
        (6 + Math.random()*4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,350);

/*=====================================================
                MUSIC
======================================================*/

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        bgMusic.volume = .35;

        bgMusic.play();

        musicBtn.innerHTML="🎵";

        musicBtn.classList.add("playing");

        playing=true;

    }

    else{

        bgMusic.pause();

        musicBtn.classList.remove("playing");

        musicBtn.innerHTML="🔇";

        playing=false;

    }

});

/*=====================================================
            START JOURNEY
======================================================*/

const startBtn =
document.getElementById("startJourney");

if(startBtn){

startBtn.addEventListener("click",()=>{

document
.getElementById("intro")
.scrollIntoView({

behavior:"smooth"

});

});

}

/*=====================================================
            ENDING BUTTON
======================================================*/

const endingBtn =
document.getElementById("endingBtn");

if(endingBtn){

endingBtn.addEventListener("click",()=>{

document
.getElementById("countdownSection")
.scrollIntoView({

behavior:"smooth"

});

});

}

/*=====================================================
            LOVE LETTER
======================================================*/

const letter = `My Dearest Karthu, ❤️

It's hard to believe how much you've become a part of my life in such a short time.

Every late night call, every laugh, every silly conversation, every "good morning" and every "good night" has become one of my favorite memories.

Being with you has shown me what love really feels like. I feel happy, comfortable and at peace whenever I'm with you.

I don't know what the future has in store, but I know one thing for sure.

I want you to be a part of every chapter of my life.

I want to celebrate every happy moment with you, be there for you during the difficult ones, travel together, laugh together and make memories that we'll always cherish.

Thank you for loving me, believing in me and making my life so much more beautiful.

I can't wait for all the moments that are still waiting for us.

With all my love,

Yours forever,

Akash ❤️`;

const typewriter =
document.getElementById("typewriter");

let index = 0;

function typeLetter(){

    if(!typewriter) return;

    if(index < letter.length){

        typewriter.innerHTML +=
        letter.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

}

const letterSection =
document.getElementById("letter");

if(letterSection){

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typeLetter();

observer.disconnect();

}

});

});

observer.observe(letterSection);

}

/*=====================================================
                PROPOSAL
======================================================*/

const ringBox =
document.getElementById("ringBox");

const proposal =
document.getElementById("proposal");

const questionContainer =
document.getElementById("questionContainer");

const proposalQuestion =
document.getElementById("proposalQuestion");

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

const noMessage =
document.getElementById("noMessage");

let proposalStarted = false;

/*=====================================================
        START WHEN SECTION IS VISIBLE
======================================================*/

if(proposal){

const proposalObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting && !proposalStarted){

proposalStarted=true;

startProposal();

proposalObserver.disconnect();

}

});

},{
threshold:.45
});

proposalObserver.observe(proposal);

}

/*=====================================================
            PROPOSAL FLOW
======================================================*/

function startProposal(){

setTimeout(()=>{

openRing();

},1200);

}

/*=====================================================
            OPEN RING BOX
======================================================*/

function openRing(){

ringBox.classList.add("open");

createSparkles();

setTimeout(()=>{

showQuestion();

},2200);

}

/*=====================================================
            SHOW QUESTION
======================================================*/

function showQuestion(){

    questionContainer.classList.add("show");

    noBtn.style.position = "absolute";

    noBtn.style.left = "70px";

    noBtn.style.top = "95px";

    noBtn.style.transform = "none";

    yesBtn.style.opacity = "1";
    noBtn.style.opacity = "1";

    yesBtn.style.transition = ".6s";
    noBtn.style.transition =
        "left .25s ease, top .25s ease";

    typeProposal();

}

/*=====================================================
            TYPEWRITER
======================================================*/

const proposalText =
"Will You Marry Me? ❤️";

let proposalIndex=0;

function typeProposal(){

if(proposalIndex<proposalText.length){

proposalQuestion.innerHTML+=
proposalText.charAt(proposalIndex);

proposalIndex++;

setTimeout(typeProposal,110);

}

}

/*=====================================================
            SPARKLES
======================================================*/

function createSparkles(){

for(let i=0;i<40;i++){

const sparkle =
document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=
(45+Math.random()*10)+"%";

sparkle.style.top=
(35+Math.random()*15)+"%";

sparkle.style.animationDelay=
(Math.random()*1)+"s";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},2500);

}

}

/*=====================================================
            AUTO SHOW BUTTONS
======================================================*/



/*=====================================================
        DARKEN BACKGROUND SLIGHTLY
======================================================*/

setTimeout(()=>{

proposal.style.filter=
"brightness(.92)";

},1500);

/*=====================================================
                YES & NO
======================================================*/

const successSection =
document.getElementById("successSection");

let escapeCount = 0;

let tired = false;

const messages = [

"🥺 Don't do that!",

"❤️ Please pick YES!",

"😅 You almost got me!",

"🙈 Nope!",

"😂 Nice try!",

"❤️ I know you want YES!",

"🥹 Come on...",

"💖 Please...", 

"🤣 Can't catch me!",

"🥵 Okay... maybe..."

];

/*=====================================================
            RUN AWAY BUTTON
======================================================*/
let noClickCount = 0;

const noMessages = [
    "🥺 Please don't...",
    "❤️ Please press YES...",
    "😅 Wrong button!",
    "😂 Almost caught me!",
    "🙈 Nope!",
    "🤭 Keep trying...",
    "💖 I know your answer...",
    "🥹 Please say YES...",
    "😍 You can't catch me!",
    "❤️ Come on... press YES!"
];

function moveNoButton(){

    const buttonArea =
        document.querySelector(".proposal-buttons");

    const yesRect =
        yesBtn.getBoundingClientRect();

    const areaRect =
        buttonArea.getBoundingClientRect();

    const radius = 180;

    let x, y;

    let tries = 0;

    do{

        const angle = Math.random() * Math.PI * 2;

        const distance = 90 + Math.random() * radius;

        x = yesRect.left - areaRect.left +
            Math.cos(angle) * distance;

        y = yesRect.top - areaRect.top +
            Math.sin(angle) * distance;

        x = Math.max(
            10,
            Math.min(
                x,
                areaRect.width - noBtn.offsetWidth - 10
            )
        );

        y = Math.max(
            10,
            Math.min(
                y,
                areaRect.height - noBtn.offsetHeight - 10
            )
        );

        tries++;

    }while(tries < 10);

    noBtn.style.position = "absolute";

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

}

noBtn.addEventListener("pointerenter", () => {

    moveNoButton();

    noMessage.textContent =
        noMessages[noClickCount % noMessages.length];

    noMessage.classList.add("show");

    noClickCount++;

});


/*=====================================================
            YES BUTTON
======================================================*/

yesBtn.addEventListener("click",()=>{
  
noBtn.style.position = "relative";
noBtn.style.left = "";
noBtn.style.top = "";
noBtn.style.right = "";
noBtn.style.bottom = "";

noMessage.classList.remove("show");

createConfetti();

createRosePetals();

proposal.classList.add("sunrise");

if(bgMusic){

bgMusic.volume=.6;

setTimeout(()=>{

bgMusic.volume=.35;

},2500);

}

setTimeout(()=>{

proposal.style.display="none";

successSection.scrollIntoView({

behavior:"smooth"

});

successSection.classList.add("fade-up");

},2500);

});

/*=====================================================
            ROSE PETALS
======================================================*/

function createRosePetals(){

for(let i=0;i<45;i++){

setTimeout(()=>{

const petal =
document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=
Math.random()*100+"vw";

petal.style.fontSize=
(18+Math.random()*20)+"px";

petal.style.animationDuration=
(4+Math.random()*4)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},7000);

},i*120);

}

}

/*=====================================================
            CONFETTI
======================================================*/

function createConfetti(){

const colors=[

"#ff4d88",
"#ffd700",
"#ffffff",
"#ff9ec9",
"#ff6aa9"

];

for(let i=0;i<180;i++){

const confetti=
document.createElement("div");

confetti.className="confetti";

confetti.style.left=
Math.random()*100+"vw";

confetti.style.top="-30px";

confetti.style.background=
colors[
Math.floor(
Math.random()*colors.length
)];

confetti.style.animationDuration=
(3+Math.random()*2)+"s";

confetti.style.transform=
`rotate(${Math.random()*360}deg)`;

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},6000);

}

}

/*=====================================================
                COUNTDOWN
======================================================*/

const targetDate =
new Date("August 23, 2026 00:00:00").getTime();

const days =
document.getElementById("days");

const hours =
document.getElementById("hours");

const minutes =
document.getElementById("minutes");

const seconds =
document.getElementById("seconds");

const heading =
document.getElementById("countHeading");

const text =
document.getElementById("countText");

const note =
document.getElementById("meetingNote");

const grid =
document.getElementById("countGrid");

function updateCountdown(){

if(!days) return;

const now = new Date().getTime();

const distance = targetDate-now;

if(distance<=0){

heading.innerHTML="❤️ We Finally Met ❤️";

text.innerHTML=`
23 August 2026

<br><br>

One of the happiest days
of my life.
`;

grid.style.display="none";

note.innerHTML=`

The countdown is over...

<br><br>

But our story
is just beginning.

<br><br>

❤️

`;

return;

}

const d =
Math.floor(distance/(1000*60*60*24));

const h =
Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);

const m =
Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);

const s =
Math.floor(
(distance%(1000*60))
/
1000
);

days.innerHTML=d;
hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;

}

setInterval(updateCountdown,1000);

updateCountdown();

/*=====================================================
            GALLERY LIGHTBOX
======================================================*/

const galleryImages =
document.querySelectorAll(".photo img");

const overlay =
document.createElement("div");

overlay.className="lightbox";

overlay.innerHTML=`

<img id="lightboxImage">

`;

document.body.appendChild(overlay);

const lightboxImage =
document.getElementById("lightboxImage");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightboxImage.src=img.src;

overlay.classList.add("show");

});

});

overlay.addEventListener("click",()=>{

overlay.classList.remove("show");

});

/*=====================================================
        MUSIC FADE
======================================================*/

document.addEventListener("visibilitychange",()=>{

if(!bgMusic) return;

if(document.hidden){

bgMusic.volume=.12;

}
else{

bgMusic.volume=.35;

}

});

/*=====================================================
            PHOTO HOVER
======================================================*/

galleryImages.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/*=====================================================
            END
======================================================*/

console.log("❤️ Website Loaded Successfully ❤️");

