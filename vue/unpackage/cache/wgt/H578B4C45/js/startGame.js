function keyDownHandler(e) {
    if (e.keyCode === 37) {
        leftPressed = true;
    } else if (e.keyCode === 39) {
        rightPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode === 37) {
        leftPressed = false;
    } else if (e.keyCode === 39) {
        rightPressed = false;
    }
}

function update() {
    // 更新球的位置
    ballX += x;
    ballY += y;
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    // 判断球是否碰到边界
    if (ballX < 0 || ballX + ball.offsetWidth > board.offsetWidth) {
        x = -x;
    }
    if (ballY < 0) {
        y = -y;
    } else if (ballY + ball.offsetHeight > board.offsetHeight) {
        // 判断球是否碰到底部，游戏结束
        clearInterval(gameLoop);
        alert("游戏结束，你的得分是：" + score);
        startGame();
    }

    // 判断球是否碰到挡板
    if (ballY + ball.offsetHeight > board.offsetHeight - paddle.offsetHeight && ballX + ball.offsetWidth > paddleX && ballX < paddleX + paddle.offsetWidth) {
        y = -y;
        score += 10; // 碰到挡板加10分
        document.getElementById("score").innerHTML = score; // 实时更新分数
    }

    // 更新挡板位置
    if (leftPressed && paddleX > 0) {
        paddleX -= 5;
    } else if (rightPressed && paddleX + paddle.offsetWidth < board.offsetWidth) {
        paddleX += 5;
    }
    paddle.style.left = paddleX + "px";
    console.log(brickCount, 'hasdjhsdaf')
    // 判断球是否碰到砖块
    const bricks = document.getElementsByClassName("brick");
    for (let i = 0; i < bricks.length; i++) {
        const brick = bricks[i];
        if (ballY < brick.offsetTop + brickHeight && ballY + ball.offsetHeight > brick.offsetTop && ballX + ball.offsetWidth > brick.offsetLeft && ballX < brick.offsetLeft + brickWidth) {
            y = -y;
            brick.style.display = "none";
            brickCount--;
            score += 20; // 碰到砖块加20分
            document.getElementById("score").innerHTML = score; // 实时更新分数
            if (brickCount === 0) {
                clearInterval(gameLoop);
                alert("恭喜你赢得了游戏，你的得分是：" + score);
                startGame();
            }
        }
    }

}

startGame();
