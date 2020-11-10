
cc.Class({
    extends: cc.Component,

    properties: {
        spText: {
            default: null,
            type: cc.Sprite,
        }
    },

    onLoad() {
        this.node.on('touchstart', function () {
            cc.director.loadScene('playScene');
            cc.log('main is loaded');
        });
    },

    start() {
    },

    // update (dt) {},
});
