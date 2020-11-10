
const {ccclass, property} = cc._decorator;

@ccclass
export default class Plane extends cc.Component {


    onLoad () {
        cc.director.getCollisionManager().enabled = true;
        this.onDrag();
        this.node.on('touchstart', function(event){
            var planePos = cc.v2(this.node.position.x, this.node.position.y);
            var mousePos = event.getLocation();
            mousePos = this.node.convertToNodeSpaceAR(mousePos);
        }, this);
    }

    onDrag() {
        this.node.on('touchmove', this.dragMove, this);
    }

    offDrag() {
        this.node.off('touchmove', this.dragMove, this);
    }

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
    }

    onCollisionEnter() {
        cc.director.loadScene('gameover');
        this.node.stopAllActions();
        cc.log('gameover');
    }
    // update (dt) {}
}
