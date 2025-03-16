function startCelebration() {
    let cakeContainer = document.getElementById("cake-container");
    let birthdaySong = document.getElementById("birthday-song");

    if (cakeContainer && birthdaySong) {
        cakeContainer.style.display = "block";

        // Show cake with fade-in effect
        // document.getElementById("birthday-cake").style.opacity = "1";

        // Play birthday song after 3 seconds
        setTimeout(() => {
            birthdaySong.play();
            startFlowerRain();
        }, 3000);
    }
}

function startFlowerRain() {
    let flowerRain = document.getElementById("flower-rain");

    if (flowerRain) {
        for (let i = 0; i < 30; i++) {
            let flower = document.createElement("div");
            flower.classList.add("flower");
            flower.style.left = Math.random() * window.innerWidth + "px";
            flower.style.animationDuration = (Math.random() * 3 + 2) + "s";
            flower.style.animationDelay = Math.random() * 2 + "s";
            flowerRain.appendChild(flower);
        }
    }
}

// Automatically start celebration when `celebration.html` loads
document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("celebration-page")) {
        startCelebration();
    }
});
