
 const music = document.getElementById("bg-music");

  window.addEventListener("load", () => {
    const shouldPlay = localStorage.getItem("musicPlaying");

    if (shouldPlay === "true") {
      music.play().catch(() => {
        // Auto-play blocked
        console.log("Autoplay blocked, user needs to interact.");
      });
    }
  }); //use

  music.addEventListener("play", () => {
    localStorage.setItem("musicPlaying", "true");
  });

  music.addEventListener("pause", () => {
    localStorage.setItem("musicPlaying", "false");
  });
  const hoverSound = document.getElementById('hover-sound');
  const clickSound = document.getElementById('click-sound');

  document.querySelectorAll('.sound-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0; // rewind
      hoverSound.play();
    });

    link.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play();
    });
  });
