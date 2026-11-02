
const musicUpload = document.getElementById("musicUpload");
const uploadedSongs = document.getElementById("uploadedSongs");

// Keep track of all audio players
const audioPlayers = () => document.querySelectorAll("audio");

// Play only one song at a time
document.addEventListener("play", function(event) {

    if (event.target.tagName === "AUDIO") {

        audioPlayers().forEach(audio => {
            if (audio !== event.target) {
                audio.pause();
            }
        });

    }

}, true);


// Upload music from computer
musicUpload.addEventListener("change", function() {

    const files = Array.from(this.files);

    files.forEach(file => {

        if (!file.type.startsWith("audio/")) return;

        const songURL = URL.createObjectURL(file);

        const songCard = document.createElement("div");
        songCard.className = "uploaded-song";

        const title = document.createElement("h3");
        title.textContent = file.name.replace(/\.[^/.]+$/, "");

        const audio = document.createElement("audio");
        audio.controls = true;
        audio.loop = true;
        audio.preload = "none";
        audio.src = songURL;

        songCard.appendChild(title);
        songCard.appendChild(audio);

        uploadedSongs.appendChild(songCard);

    });

    // Allow selecting the same file again later
    this.value = "";

});

console.log("VibePlayer is ready! 🎧");
