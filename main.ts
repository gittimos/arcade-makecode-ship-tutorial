effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . 8 8 8 . 8 . . . . . 
    . . . . 8 8 6 6 6 8 8 . . . . . 
    . . . . 8 8 6 6 6 8 8 . . . . . 
    . . . . . 8 6 6 6 8 . . . . . . 
    . . . . . 8 6 6 6 8 . . . . . . 
    . . . . . 8 6 9 9 8 . . . . . . 
    . . . . . 8 6 9 9 8 . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 2 4 4 4 2 . . . . . . 
    . . . . . 2 4 4 4 2 . . . . . . 
    . . . . . 2 4 4 5 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
