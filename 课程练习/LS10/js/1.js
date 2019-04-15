// //fee形成一个闭包
// function foo(x){
//     var tmp = 0;
//     return function(y){
//         console.log(x+y,++tmp);
//     }
// }
// var fee = foo();
// fee(10);
// fee(20)

// function foo1(x){
//     var tm = 3;
//     return function(y){
//         x.count = x.count ? x.count + 1 : 1;
//         console.log(x + y + tm,x.count);
//     }
// }
// var age = new Number(2);
// var bar = foo1(age);//和相关作用域形成一个闭包
// bar(10);
// bar(10);

function counter(){
    var n = 0;
    return {
        count:function(){return ++n;},
        reset:function(){n = 0;return n;}
    }
}
var c = counter(),d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());


//对象instanceof构造函数
    // 1.判断对象是否使用该构造函数实例化得到
    // 2.判断对象的原型链上能够该构造函数的原型
    // 对象.__proto__.__proto__(长度不确定) == 构造函数.prototype
console.log(Object instanceof Function);
console.log(Object.__proto__ == Function.prototype);
console.log(Object instanceof Object);//Object是原型链的头
console.log(Object.__proto__ .__proto__== Object.prototype);



var o = {
    _x:1,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
}
o.x = 10;
console.log(o.x,o._x);