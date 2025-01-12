alert("This Website and Painting, took a lot of hours 🕦 to code and draw, hopfully, it does James McBride well! - Hadrian Lazic 👍");

const nodes = document.querySelectorAll('.node');

const hoverSound = new Audio('assets/hoversound.mp3');

nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; 
        hoverSound.play();
    });
});
