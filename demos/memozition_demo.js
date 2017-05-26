//利用缓存计算大幅度减少运算次数
function fibno(){
    var memo=[0,1];
    function fib(n){
        var result = memo[n];
        if(typeof result!='number'){
            result = fib(n-1)+fib(n-2);
            memo[n] = result;
        }
        console.log(result);
        return result;
    }
    return fib;
}
console.log(fibno()(3));