
cc.Class({
    extends: cc.Component,

    properties: {
        plane: {
            default: null,
            type: cc.Sprite
        },

        prfBullet: {
            default: null,
            type: cc.Prefab
        }
    },

    onLoad() {
        this.createBullet();
    },

    createBullet() {
        var newBullet = cc.instantiate(this.prfBullet);
        // newBullet.setPosition();
        // newBullet.rotation = angle;

        this.node.on('touchstart', function (event) {
            var bulletPos = event.touch.getPosition();
            var bulletLenght = this.node.height;
            this.x += bulletLenght * x;
            this.y += bulletLenght * y;

            this.node.createBullet(bulletPos, 400);
        });
    },

    gameOver: function () {
        this.pauseAction();
        this.updateScore();
        cc.director.loadScene('end');
    },
});
