
const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayScene extends cc.Component {

    @property(cc.Sprite)
    plane: cc.Sprite = null;

    @property(cc.Prefab)
    prfBullet: cc.Prefab = null;

    // onLoad () {}

    start() {

    }

    // update (dt) {}
}
