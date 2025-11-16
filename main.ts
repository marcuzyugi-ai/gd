controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -100)
    if (true) {
        timer.after(900, function () {
            mySprite.setVelocity(0, 100)
        })
    }
})
info.onLifeZero(function () {
    game.reset()
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
    8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
    8 5 8 8 8 8 5 5 5 8 8 8 8 5 5 8 
    8 5 8 7 7 8 5 5 5 8 7 7 8 5 5 8 
    8 5 8 7 7 8 5 5 5 8 7 7 8 5 5 8 
    8 5 8 8 8 8 5 5 5 8 8 8 8 5 5 8 
    8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
    8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
    8 5 8 8 8 8 8 8 8 8 8 8 8 8 5 8 
    8 5 8 7 7 7 7 7 7 7 7 7 7 8 5 8 
    8 5 8 7 7 7 7 7 7 7 7 7 7 8 5 8 
    8 5 8 8 8 8 8 8 8 8 8 8 8 8 5 8 
    8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
    8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.left = 0.25
forever(function () {
    mySprite.vx += 0.25
    mySprite.vy += 5
})
