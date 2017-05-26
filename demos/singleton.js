var myObj = function(){
    var private = 13;
    return {
        getPrivate : function(){
            return private;
            },
        setPrivate : function(value){
            private = value;
            }
        };
}();
console.log(myObj.getPrivate());
myObj.setPrivate(7);
console.log(myObj.getPrivate());