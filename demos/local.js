var myObj = function(){};
(function(){
    var private = 13;
    var privateFunc = function(){};
    myObj.prototype.getPrivate = function(){
        return private;
    }
    myObj.prototype.setPrivate = function(value){
        private = value;
    }
})();
var obj1 = new myObj();
var obj2 = new myObj();
console.log(obj1.getPrivate());
obj2.setPrivate(7);
console.log(obj1.getPrivate());