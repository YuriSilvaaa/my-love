
function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    
    
    const emojis = ['❤️', '💖', '✨', '🌸', '🎀'];
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
   
    heart.style.left = Math.random() * 100 + "vw";
    
    
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    
   
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + "s";
    
    document.body.appendChild(heart);
    
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}


setInterval(createFallingHeart, 500);


function surprise(text) {
    const display = document.getElementById('message-display');
    display.innerText = text;
    
    
    const title = document.getElementById('main-title');
    title.style.color = '#ff1a75';
    setTimeout(() => { title.style.color = '#ff4d8d'; }, 500);
}