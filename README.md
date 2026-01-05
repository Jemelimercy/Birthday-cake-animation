# 🎂 Musical Birthday Animation (Grand Finale Edition)

A high-fidelity, interactive web experience featuring a 3D-layered cake animation and synchronized fireworks synced to a musical soundtrack.

## 🚀 Live Demo
[**Click here to view the live animation**](https://jemelimercy.github.io/Birthday-cake-animation/)

---

## ✨ Features
- **3D CSS Layering:** A realistic 3D cake built entirely using CSS box-shadows and transform properties.
- **Audio-Visual Sync:** Fireworks are precisely timed to the lyrics of `birthday.mp3` using the HTML5 Audio API.
- **Interactive UX:** Uses a "Click to Bake" trigger to comply with modern browser autoplay policies, ensuring a seamless audio start.
- **Particle System:** Integrated with the `canvas-confetti` library for high-performance physics-based fireworks.
- **The Grand Finale:** A choreographed loop of explosions that triggers during the song's climax.

## 🛠️ Tech Stack
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

## 🧬 Core Logic
The project uses the `ontimeupdate` event listener to monitor the song's `currentTime`. When the playback reaches specific timestamps (mapped in a `lyricsTiming` array), the `burstFirework()` function is triggered.

```javascript
// Example of the synchronization logic
audio.ontimeupdate = () => {
    if (Math.floor(audio.currentTime) === nextTimestamp) {
        triggerFirework();
    }
};

📁 Installation & Usage
Clone the repository:
git clone [https://github.com/jemelimercy/Birthday-cake-animation.git](https://github.com/jemelimercy/Birthday-cake-animation.git)
Open index.html in any modern web browser.
Click the "click here for a surprise" button to start the experience.

Created by Jemelimercy