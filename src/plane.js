import { gameOver } from 'playScene';

cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad() {
        // this.node.on('touchmove', function(event){
        //     var delta = event.touch.getDelta();

        //     this.x += delta.x;
        //     this.y += delta.y;
        // }, this.node);

        // this.node.on('touchend',function(){}, this.node);

        // this.game = cc.find('/playScene').getComponent('Game');
        cc.director.getCollisionManager().enabled = true;
        this.onDrag();
        this.onTouchBegan();
    },

    onTouchBegan(event, touch) {
    },

    onDrag() {
        this.node.on('touchmove', this.dragMove, this);
    },

    offDrag() {
        this.node.off('touchmove', this.dragMove, this);
    },

    dragMove(event) {
        var locationv = event.getLocation();
        var location = this.node.parent.convertToNodeSpaceAR(locationv);
        var minX = -this.node.parent.width / 2 + this.node.width / 2;
        var maxX = -minX;
        var minY = -this.node.parent.height / 2 + this.node.height / 2;
        var maxY = -minY;
        if (location.x < minX) {
            location.x = minX;
        }
        if (location.x > maxX) {
            location.x = maxX;
        }
        if (location.y < minY) {
            location.y = minY;
        }
        if (location.y > maxY) {
            location.y = maxY;
        }
        this.node.setPosition(location);
    },

    onCollisionEnter() {
        cc.director.loadScene('gameover');
        this.node.stopAllActions();
        cc.log('gameover');
    },

    // update (dt) {},
});
