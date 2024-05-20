document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("");
    video.play().catch(error => {
        console.error("Video autoplay failed:", error);
    });
});
