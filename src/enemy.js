
cc.Class({
    extends: cc.Component,

    properties: {
        hp: cc.Integer,
    },

    onLoad() { },


    update(dt) { },

    onCollisionEnter(other, seft) {
        var bullet = other.node.getComponent('bullet');

        if (this.hp > 0){
            this.hp -= bullet.hpDrop;
        } else {
            return ;
        }
        if(this.hp <= 0){
            this.node.group = 'default';
        }
    },
});
