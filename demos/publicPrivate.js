var myObj = function(){
    var private = 13;
    this.getPrivate = function(){
        return private;
    }
    this.setPrivate = function(value){
        private = value;
    }
};
var obj1 = new myObj();
var obj2 = new myObj();
console.log(obj1.getPrivate());
obj2.setPrivate(7);
console.log(obj1.getPrivate());