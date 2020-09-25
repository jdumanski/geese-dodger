controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Me.isHittingTile(CollisionDirection.Bottom)) {
        Me.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let Geese: Sprite = null
let Me: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundNorth], TileScale.Sixteen))
Me = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 . . . . . . . . . . . 
    . . . 2 2 2 2 2 . . . . . . . . 
    . . . 2 . . . . . . . . . . . . 
    . 2 2 2 2 2 2 . . . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Me, tiles.getTileLocation(1, 5))
Me.ay = 500
let Counter = -100
let Counter_2 = -80
game.onUpdateInterval(1000, function () {
    Counter += -20
    Counter_2 += -20
    Geese = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . 4 f 1 . . . . . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . . 4 . 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(Counter_2, Counter), 0)
    tiles.placeOnTile(Geese, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
