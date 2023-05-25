let board, paddle, ball, brickCount;
let paddleX, ballX, ballY;
let brickWidth = 75, brickHeight = 20, brickPadding = 10, brickOffsetTop = 30, brickOffsetLeft = 30;
let brickRowCount = 3, brickColumnCount = 5;
let x = 3, y = -3;
let leftPressed, rightPressed;
let score = 0; //定义分数


let gameLoop; // 定义全局变量gameLoop

function startGame(){
    // 初始化分数为0
    score = 0;
    document.getElementById("score").innerHTML = score;

    // 初始化游戏板和弹球
    board = document.getElementById("board");
    paddle = document.getElementById("paddle");
    ball = document.getElementById("ball");
    paddleX = board.offsetWidth / 2 - paddle.offsetWidth / 2;
    ballX = board.offsetWidth / 2 - ball.offsetWidth /2;
    ballY = board.offsetHeight / 2 - ball.offsetHeight / 2;
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    // 初始化砖块
    const brickContainer = document.getElementById("brick-container");
    brickContainer.innerHTML = "";
    brickCount = 0;
    for(let i = 0; i < brickColumnCount; i++){
        for(let j = 0; j < brickColumnCount; j++) {
            const brick = document.createElement("div");
            brick.className = "brick";
            brick.style.left = j * (brickWidth + brickPadding) + brickOffsetLeft + "px";
            brick.style.top = i * (brickHeight + brickPadding) + brickOffsetTop + "px";
            brickContainer.appendChild(brick);
            brickCount++;
        }
    }

    // 初始化键盘事件
    leftPressed = false;
    rightPressed = false;
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);


    // 开始
    gameLoop = setInterval(update, 20);
}