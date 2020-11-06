
cc.Class({
    extends: cc.Component,

    properties: {
        plane: {
            default: null,
            type: cc.Sprite
        }
    },

    onLoad() { },

    gameOver: function () {
        this.pauseAction();
        this.updateScore();
        cc.director.loadScene('end');
    },
});
