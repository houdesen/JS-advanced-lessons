var obj={
    X:0,
    test:function(){
        console.log(this.x);
    }
}
obj.test();//0


var obj1={"objname":"AA"};
var obj2={"objname":"BB"};
obj1.foo=function(){
    console.log(this.objname);
}
obj1.foo();//AA

//方法名。call(对象)可以切换方法调用的对象
obj1.foo.call(obj2);//BB


//构造函数的调用
function Person(usename){
    this.usename=usename;
}

Person.prototype.sayHi = function(){
    console.log(this.usename);
}

var person = new Person("zhangsan");


//元素拼接
function test1(){
    var s=" ";
    //arguments获取函数传入的对象，是个类数组对象
    for(var i=0;i<arguments.length;i++){
        s+=arguments[i];
    }
    return s;
}
test1("hello","world","!");



//定义一个函数完成对变量的复制过程，生成新的变量，并返回。引用数据类型时，数组、对象、
function copyArg(arg1){
    var copy;
    switch (ture) {
        case (arg1 instanceof String):
            copy = arg1;
            break;
            
        case (arg1 instanceof Number):
            copy = arg1;
            break;

        case (arg1 instanceof Boolean):
            copy = arg1;
            break;

        case (arg1 instanceof Array):
            copy = [];
            for(var i=0;i<arg1.length;i++){
                copy[i]=arg1[i];
            }
            break;
    }
}