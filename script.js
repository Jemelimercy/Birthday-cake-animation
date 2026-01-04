const song = document.getElementById('bdaySong');
const giftBox = document.getElementById('giftBox');
const wishContent = document.getElementById('wishContent');
const balloonContainer = document.getElementById('balloon-container');

// Using your exact timings
const lyricsTiming = [
    { time: 7, id: "line-0" },
    { time: 11, id: "line-1" },
    { time: 14, id: "line-2" },
    { time: 19, id: "line-3" }
];

giftBox.addEventListener('click', () => {
    song.play();
    giftBox.style.display = 'none';
    wishContent.classList.remove('hidden');
    document.body.style.backgroundColor = '#1a1a1a';
    
    setInterval(createBalloon, 500);
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.7 } });
});

song.ontimeupdate = () => {
    const currentTime = song.currentTime;

    lyricsTiming.forEach((item, index) => {
        const element = document.getElementById(item.id);
        
        // If the song has reached this time, but hasn't reached the next line's time
        const nextTime = lyricsTiming[index + 1] ? lyricsTiming[index + 1].time : 999;

        if (currentTime >= item.time && currentTime < nextTime) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
};

// Keep your createBalloon function from before here...
function createBalloon() {
    const colors = ['#ff4d4d', '#33d9b2', '#ffb142', '#34ace0', '#706fd3'];
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloonContainer.appendChild(balloon);
    setTimeout(() => balloon.remove(), 6000);
}