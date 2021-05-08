namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
    export const RightPaddles = SpriteKind.create()
    export const ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
function create_right_paddle () {
    right_paddle = sprites.create(img`
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 8 8 1 1 . . . . . . 
        . . . . . . . 8 8 1 . . . . . . 
        . . . . . . . . 8 1 . . . . . . 
        . . . . . . . . 8 1 . . . . . . 
        . . . . . . . . 8 1 . . . . . . 
        . . . . . . . . 8 1 . . . . . . 
        . . . . . . . . 8 1 . . . . . . 
        . . . . . . . . 8 1 . . . . . . 
        . . . . . . . . 8 1 . . . . . . 
        . . . . . . . . 8 1 . . . . . . 
        . . . . . . . . 8 1 . . . . . . 
        . . . . . . . . 8 1 . . . . . . 
        . . . . . . . 8 8 1 . . . . . . 
        . . . . . . 8 8 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `, SpriteKind.RightPaddles)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.setStayInScreen(true)
    right_paddle.right = 160
}
function create_left_paddle () {
    left_paddle = sprites.create(img`
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 1 2 2 . . . . . . 
        . . . . . . 1 2 2 . . . . . . . 
        . . . . . . 1 2 . . . . . . . . 
        . . . . . . 1 2 . . . . . . . . 
        . . . . . . 1 2 . . . . . . . . 
        . . . . . . 1 2 . . . . . . . . 
        . . . . . . 1 2 . . . . . . . . 
        . . . . . . 1 2 . . . . . . . . 
        . . . . . . 1 2 . . . . . . . . 
        . . . . . . 1 2 . . . . . . . . 
        . . . . . . 1 2 . . . . . . . . 
        . . . . . . 1 2 . . . . . . . . 
        . . . . . . 1 2 2 . . . . . . . 
        . . . . . . 1 1 2 2 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        `, SpriteKind.LeftPaddles)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.setStayInScreen(true)
    left_paddle.left = 0
}
function create_ball () {
    ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . 1 1 1 1 1 . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    ball.setVelocity(110, 110)
    ball.setBounceOnWall(true)
    ball.y = randint(0, 120)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.changeScoreBy(1)
})
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()
