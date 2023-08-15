
const treks = [
    {
        id: '1',
        avatar: '../publish/church.jpg',
        title: 'А. Кондратюк Лиш тебе одну люблю',
        url: '../audio/I-love-you-alone.mp3'
    },
    {
        id: '2',
        avatar: '../publish/music.jpg',
        title: 'Кожного ранку',
        url: '../audio/Every morning.mp3'
    },
    {
        id: '3',
        avatar: '../publish/concerts.jpg',
        title: 'Я так довго на тебе чекав',
        url: '../audio/I-ve-been-waiting-for-you-for-so-long.mp3'
    }
];

const playerEl = document.querySelector('.player'),
    prevBtn = document.querySelector(".prev-button"),
    playBtn = document.querySelector(".play-button"),
    nextBtn = document.querySelector(".next-button"),
    audioEl = document.querySelector(".play-audio"),
    progressContainerEl = document.querySelector(".progress-fon"),
    progressEl = document.querySelector(".progress"),
    progressTime = document.querySelector(".progress-time"),
    titleEl = document.querySelector(".player-song"),
    coverImg = document.querySelector(".player-picture"),
    imgSrc = document.querySelector(".img-src");



//helpers function

function convertSecondsToHoursMinutesSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return {
        hours: hours,
        minutes: minutes,
        seconds: remainingSeconds
    };
}

audioEl.src = treks[0].url;
titleEl.textContent = treks[0].title;
coverImg.src = treks[0].avatar;
 progressEl.style.width = `${0}%`;

let count = 0;

const   counterIncrement = (maxCount) => {
    if (count < maxCount) {
      count += 1;
    } else {
      count = 0;
    }
}
  
 const counterDecrement = (maxCount) => {
    
    if (count > 0) {
      count -= 1;
    } else {
      count = maxCount;
    }
  }


const next = () => {
    counterIncrement(treks.length - 1);
    audioEl.src = treks[count].url;
    titleEl.textContent = treks[count].title;
    coverImg.src = treks[count].avatar;
    playBtn.classList.add("play");
    imgSrc.src = '../publish/play.png';
     progressEl.style.width = `${0}%`;
}

const prev = () => {
    counterDecrement(treks.length - 1); 
    audioEl.src = treks[count].url;
    titleEl.textContent = treks[count].title;
    coverImg.src = treks[count].avatar;
    playBtn.classList.add("play");
    imgSrc.src = '../publish/play.png';
     progressEl.style.width = `${0}%`;
}
  
playBtn.classList.add("play");

const playSong = () => {
    const isPlay = playBtn.classList.contains("play");
    if (isPlay) {
        audioEl.play();
        playBtn.classList.remove("play");
        imgSrc.src = '../publish/stop.png';
    } else {
        audioEl.pause();
        playBtn.classList.add("play");
        imgSrc.src = '../publish/play.png';
    }
}
    
prevBtn.addEventListener('click', prev);
playBtn.addEventListener('click', playSong);
nextBtn.addEventListener('click', next);

//update progress

const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressEl.style.width = `${progressPercent}%`;
    const timeObject = convertSecondsToHoursMinutesSeconds(currentTime.toFixed(0));
    progressTime.textContent = `${timeObject.minutes} : ${timeObject.seconds} min.`;
}

audioEl.addEventListener('timeupdate', updateProgress);


//set progress

function setProgress (e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioEl.duration;
    audioEl.currentTime = (clickX / width) * duration;
}

progressContainerEl.addEventListener("click", setProgress);

// next auto

const nextAuto = () => {
    counterIncrement(treks.length - 1);
    audioEl.src = treks[count].url;
    titleEl.textContent = treks[count].title;
    coverImg.src = treks[count].avatar;
    progressEl.style.width = `${0}%`;
    audioEl.play();    
}

audioEl.addEventListener('ended', nextAuto);

