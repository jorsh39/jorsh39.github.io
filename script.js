const fishImages = [
    "images/Alligator_Gar.png",
    "images/King_of_Herrings.png",
"images/Alligator_Gar.png",
    "images/King_of_Herrings.png",
"images/Alligator_Gar.png",
    "images/King_of_Herrings.png",
"images/Alligator_Gar.png",
    "images/King_of_Herrings.png",
"images/Alligator_Gar.png",
    "images/King_of_Herrings.png",

];







function randomFish() {
    return fishImages[Math.floor(Math.random() * fishImages.length)];
}

const leftSidebar = document.getElementById("leftSidebar");
const rightSidebar = document.getElementById("rightSidebar");

for (let i = 0; i < 5; i++) {
    const leftImg = document.createElement("img");
    leftImg.src = randomFish();
    leftImg.className = "side-fish";
    leftImg.style.transform = "scaleX(-1)";
    leftSidebar.appendChild(leftImg);

    const rightImg = document.createElement("img");
    rightImg.src = randomFish();
    rightImg.className = "side-fish";
    rightImg.style.transform = "scaleX(1)";
    rightSidebar.appendChild(rightImg);
}

