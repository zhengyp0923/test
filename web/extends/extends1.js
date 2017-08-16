/**
 * 继承   SupPerson.prototype=Person.prototype;
 * @constructor
 */

function Person() {

}

Person.prototype.a=5;
Person.prototype.b=6;


function SupPerson() {

}

SupPerson.prototype=Person.prototype;

var ss=new SupPerson();
alert(ss.a);