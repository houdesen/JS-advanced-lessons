//对象 instanceof 构造函数
//1.判断这个对象能否使用后面的构造函数实例化得到
//2.判断能否在对象的原型链上找到构造函数的prototype
function Person(name,age){
    this.name=name;
    this.age=age;
}
var person = new Person("zhangsan",20);
(person instanceof Person)?console.log("a"):console.log("b");//a


console.log(person);//Person {name: "zhangsan", age: 20}
console.log(Person)

console.log(person._proto_ == person.prototype);

//判断能否在person原型链上找到Object构造函数的prototype
console.log(person instanceof Object);

// console.log(person._proto_._proto_);
console.log(Object.prototype);



function fn1(x){
    //arguments获取函数调用时，传入的实参，类数组结构
    for (let index = 0; index < fn1.arguments.length; index++) {
        const element = arguments[index];
        console.log(element);   
    }
    console.log(fn1.length);
    //fn1.length表示形参的个数
}
fn1(10,5,3);


function fn2(){
    console.log(fn2.caller);
}
fn2();


//原本的this指向，使用Shop构造函数，实例化得到对象
function Shop(shop,pir){
    this.shop=shop;
    this.pir=pir;
}
//Shop.call(this,shop);
//其具有一个指定的this值和分别的提供的参数（参数的列表）
function Shop1(shop,pir,color){
    // Shop.call(this,shop,pir);
    Shop.apply(this,[shop,pir])
    this.color=color;
}

// var sh=new Shop("lingshi");
var sh1=new Shop1("shiwu",30,"red");
console.log(sh1);



var obja={
    "name":"aaa",
    "foo":function(){
        console.log(this.name);
    }
}
var objb={"name":"bbb"};
var foo1=obja.foo.bind(objb);
foo1();



var obj = {x: 3};
function fn3(){
    function fn4(){
        console.log(this.x);
    }
    return fn4;
}
obj.fn5=fn3;
obj.fn6=fn3();
obj.fn5();
obj.fn6();