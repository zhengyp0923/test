/**
 * 继承    底层的例子
 * @constructor
 */

function Ext() {

}

Ext.extend = function (json, prop) {

    function A() {

    }

    if (typeof json == "object") {
        //传递的是json格式的一个对象
        for (var i in json) {
            A.prototype[i] = json[i];
        }
    }

    if (typeof json == "function") {
        //json是一个函数对象
        A.prototype = json.prototype;
        for (var i in prop) {
            A.prototype[i] = prop[i];
        }
    }

    return A;
}

var Person = Ext.extend({
    a: 5,
    b: 6
}, null);


var ss = new Person();
alert(ss.a);

/**
 * 继承Person并扩展json
 */
var DD = Ext.extend(Person, {
    c: 7,
    d: 8
});

var dd = new DD();
alert(dd.a);
alert(dd.b);
alert(dd.c);
alert(dd.d);








