/**
 * 继承   提供一个函数createClass ,该函数接收一个json对象
 *  把json的格式所有的key value的值全部加在一个函数的prototype上
 * @constructor
 */
function createClass(json) {
    function F() {//构造器函数对象

    }

    for(var i in json){
        F.prototype[i]=json[i];
    }

    return F;
}


var Person=createClass({
    a:5,
    b:6
});

var p=new Person();
alert(p.a);
alert(p.b);


