
cc.Class({
    extends: cc.Component,

    properties: {
        xSpeed: cc.Integer,
        ySpeed: cc.Integer,
        hpDrop: cc.Integer,

        
    },

    onLoad () {
        cc.director.getCollisionManager().enabled = true;
    },

    onCollisionEnter: function(other,self){

    },

    update (dt) {
        if(!cc.isValid(this.node)) return;

        this.timeAlive += dt*1000;
        if(this.timeAlive >= this.timeToLive) {
            this.node.destroy();
        }
    }
});
