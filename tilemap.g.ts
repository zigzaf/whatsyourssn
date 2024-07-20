// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000000010100000000000000000000000000010001000000000000000000000000000100010000000000000000000000000001000100000000000000000001000000010001000000000000000000010000000100010000000000000000000100000001000100000001000000000001000000010001000000010000000000010000000100010000000100000000000001000001000100000100010101010101010100000101000001000000000000000001010101010001000000000000000000000000000101000000000000000000000000000000010000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . 2 . . . 2 . 
2 . . . . . . . . . 2 . . . 2 . 
2 . . . . . . . . . 2 . . . 2 . 
2 . . . 2 . . . . . 2 . . . 2 . 
2 . . . 2 . . . . . 2 . . . 2 . 
2 . . . 2 . . . . . . 2 . . 2 . 
2 . . 2 . 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 . . . . . . . . 2 2 2 2 
2 . 2 . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000101010100000000000000000000000001010101000000000000000000000000000100010000000000000000000000000001000100010000000000000000000000010001010100000000000000000000010100010101010000000000000000000100000101010001000000000000000001000001010000000101000000000001010000010000000000000100000000010000000101010101010101010100010100000000000000000000000001010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . 2 . 
2 . 2 . . . . . . . . . . . 2 . 
2 . 2 . . . . . . . . . . 2 . . 
2 2 . . . . . . . . . . . 2 . . 
2 2 . . . . . . . . . . . 2 . . 
2 2 . . . . . . . . . . . 2 . . 
2 . . . . . . . . . . . 2 . . . 
2 2 2 2 2 2 2 2 2 2 . . 2 . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
