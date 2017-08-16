/**
 * js一切都是对象
 * 每一个对象都有一个constructor,constructor为Function
 *
 */

function Person() {

}

alert(Person.constructor);

/**
 * 任何一个对象都有一个属性prototype
 * prototype是一个json格式的对象
 */

function Student() {
    
}

/**
 * json对象动态添加a=5
 * @type {number}
 */
Person.prototype.a=5;
/**
 * json对象动态添加b=student
 * @type {Student}
 */
Person.prototype.b=Student;
alert(Person.prototype.a);
alert(Person.prototype.b);

function A() {

}

/**
 * json对象动态添加c=student
 * @type {A}
 */
Person.prototype['c']=A;
alert(Person.prototype.c);

/**
 * Person是构造器函数
 * @type {Person}
 */
var p=new Person();
alert(p.a);


/**
 * 写一个对象SupStudent,给该对象的原型添加setName() getName() setId() getId()四个方法
 * 利用构造器构造对象
 */

function SupStudent() {

}
SupStudent.a=111;
SupStudent.prototype.setName=function (name) {
    this.name=name;
    
}

SupStudent.prototype.setId=function (id) {
    this.id=id;
}


SupStudent.prototype.getName=function () {
    return this.name;
}
SupStudent.prototype.getId=function () {
    return this.id;
}

/**
 * new SupStudent()  只有SupStudent.prototype的值
 * @type {SupStudent}
 */
var ss=new SupStudent();
ss.setName("aaa");
alert(ss.getName());





















