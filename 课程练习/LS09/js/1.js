// for(var i = 0; i < 3; i++){
//     (
//         function (j){
//             setTimeout(function(){
//         console.log(new Date(),j)
//     },i*1000)})(i)
// }

//闭包：通过返回函数(fn1)内部定义的函数(fn2),来访问fn1内部的局部变量(x)
// function fn1(){
//     var x=1;//词法作用域
//     function fn2(){
//         return ++x;
//     }
//     return fn2;
// }
// var fn3=fn1();//fn3形成一个闭包
// console.log(fn3());//2
// console.log(fn3());//3


//闭包：函数（addNum）内部定义的函数（return 匿名函数）与其相关作用域中的变量（start）形成的实体。
//非闭包函数运行完start会被释放掉，闭包函数start会一直存在于内存中。
function addNum(start){
    return function(step){
        start+=step;
        return start;
    }
}
var fn=addNum(10);
console.log(fn(1));//11
console.log(fn(1));//12
console.log(fn(1));//13



//闭包带来的影响：1.闭包让我们可以访问到函数内部定义的变量；2.闭包让关联作用域中的特定变量保存在内存中，不会被释放
function foo(){
	var i = 0;
	function bar(){
		console.log(++i);
	}
	return bar;
}
var fn1 = foo();
var fn2 = foo();
fn1();//1
fn1();//2
fn2();//1
fn2();//2
