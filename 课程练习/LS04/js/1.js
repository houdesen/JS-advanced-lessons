//=:赋值
//==：判断变量的值是否相等（逆运算：!=）
//===：先判断类型是否相同，在判断值（逆运算：!==）

var a=34;
if(45 == a){             //发反写，数值在前，可判等，赋值会报错
    console.log(a);
}

var a1=20;
var a2="20";
if (a1 == a2) {           //a2会进行隐式转化  
    
}
if (a1===a2) {           //先进行类型判断，在判值；
    
}

NaN===NaN  //false
//{}==={}//false  判断两个空对象，引用地址不相同

//算术运算符，类型转换
"1"+2;//"12"
"5"-3;//2
true+true;//2

var x="1";
console.log(++x);//2  (一元运算符)

var x="1";
console.log(x++);//"1"   先输出，再加1

//短路
console.log(20 && 0);//0
console.log(0 && 20);//0
console.log(20 && 10);//10
console.log(null && 10);//null
console.log(20 || 0);//20
console.log(0 || 10);//10
console.log(10 || 20);//10
//对象为真
console.log({x:2} && {name:"ni"});//{"name":ni}



var x=72;
console.log((x>90&&"优")||(x>75&&"良")||(x>60&&"及格")||"不及格");

//switch……case……判断的是类型和数值是否都相等
switch (true) {
    case x>90:
        console.log("优")
        break;

    default:
        break;
}

//定义函数的形参和调用函数的实参个数可以不相同
function sum(x,y,z){
    x=x||1;
    y=y||2;
    z=z||3;
    return x+y+z;
}
console.log(sum());
console.log(sum(false,true,2));

// //ES6中设置函数的默认值
// function sum1(x,y=2,z=3){
//     return x+y+z;
// }
// console.log(sum1());

//函数定义
//一
function max(a,b){
    return a>b?a:b;
}
//二
var max = function(a,b){
    return a>b?a:b;
};
//三
var max = new Function("a","b","return a>b?a:b");