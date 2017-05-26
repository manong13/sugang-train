var fading={
    fade : function(id,start,finish){
        this.id = id;
        this.start = this.count = start;
        this.finish = finish;
        this.countDown=function(){
            this.count+=30;
            if(this.count>this.finish){
                console.log("finished!");
                this.count = null;
                return false;
            }
            console.log(this.count);
            setTimeout(this.countDown.bind(this),100);
        }
    }
};
fading.fade(6,0,300);
fading.countDown();