document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "date.html"; // Redirect to the date selection page
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    document.addEventListener("mousemove", moveButton);
});

function moveButton(event) {
    var button = document.getElementById("noBtn");
    var newX = Math.random() * (window.innerWidth - button.offsetWidth);
    var newY = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = newX + "px";
    button.style.top = newY + "px";
}
