/**
 * this 具有多态性  谁调用为谁
 */

function Person() {
    alert(this);
}

window.Person();

function SuperPerson() {


}

SuperPerson.a = Person;
SuperPerson.a();

var json = {
    a: Person
};

json.a();


/**
 * 让window调用Person函数
 */

Person.call(window);//window.Person();
Person.apply(window);//window.Person();
//传递参数
// Person.call(window,[5,6]);






