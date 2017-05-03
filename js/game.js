//console.log('Ieic!')
window.onload = function () {
    // var game = new Phaser('100','100') %
    // var game = new Phaser(800, 600, Phaser.AUTO, '#game') si es deixa buit, va al body.

    var states = {
        preload: preload,
        create: create
    }

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', states)

    function preload() {
        //LoadManager
        game.load.image('logo','assets/phaser.png')
    }

    function create() {
        game.add.sprite(0,0,'logo')
        //game.add.sprite(game.world.centerX,0, )
    }
}