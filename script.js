const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height= 500;

const keys=[];

const player = {
    x:0,
    y:0,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "vader.png"; // let's user insert vader image into program
const background = new Image();
background.src = "background.png"; // let's user insert image for background
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){ //program draws the image 
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

function animate (){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(background, 0,0, canvas.width, canvas.height);
    drawSprite(playerSprite, 0, 0, player.width, player.height, 400, 300, player.width, player.height);
    requestAnimationFrame(animate);
}
animate();