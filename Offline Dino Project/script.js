const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let dinoYPosition = 0;

function handleKeyUp(event) {
    if (event.key === ' ' && !isJumping) {
        jump();
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (dinoYPosition >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (dinoYPosition <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    dinoYPosition -= 20;
                    dino.style.bottom = dinoYPosition + 'px';
                }
                
            }, 20);
        } else {
            dinoYPosition += 20;
            dino.style.bottom = dinoYPosition + 'px';
        }
    }, 20);
}

function generateCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && dinoYPosition < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(generateCactus, randomTime);
}

generateCactus();
document.addEventListener('keyup', handleKeyUp);