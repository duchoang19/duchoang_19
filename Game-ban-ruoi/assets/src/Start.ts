
const { ccclass, property } = cc._decorator;

@ccclass
export default class Start extends cc.Component {


    onLoad() {
        this.node.on('touchstart', function () {
            cc.director.loadScene('playScene');
            cc.log('PlayScene is loaded');
        }, this);
    }

    start() {

    }

    // update (dt) {}
}
