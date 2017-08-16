/**
 * Person是一个对象
 * @constructor
 */
function Person(){
	
}
/**
 * 赋值属性a =5
 * @type {number}
 */
Person.a = 5;


function Student(){
	
}

Person.b = Student;

var json = {
	a:function(){
		alert("aaaa");
	}
};
Person.c = json;

Person.c.a();


/**
 * Ext.button.Button()
 */

function Ext() {

}

function abutton() {

}

function cutton() {
	alert("cutton");
}


Ext.button=abutton;
Ext.button.Button=cutton;
Ext.button.Button();


/**
 * A.B.C.D
 */

function A() {

}

function b() {

}

function c() {

}

function d() {
alert("dd");
}

A.B=b;
A.B.C=c;
A.B.C.D=d;
A.B.C.D();










