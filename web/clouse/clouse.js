/**
 * js闭包 匿名函数
 *       在函数中定义函数，在外部使用
 */

/**
 * 匿名函数
 */
(function () {
    alert("aaa");
})();

(function (a) {
    alert(a);
})(5);

/**
 * Person定义在匿名函数内部，不能直接访问
 */
(function () {
    function Person1() {
        alert("person1");
    }

    /**
     * 为window对象动态添加了Person属性
     * @type {Person}
     */
    window.Person1 = Person1;
})();


window.Person1();


/**
 * 通过匿名函数构造一个类，该类有setName(),setId() getName() getId(),方法可以在外部使用，a,b不能在外部访问
 */

(function () {
    function Person() {
        return {
            setName: setName,
            getName: getName,
            setId: setId,
            getId: getId
        };
    }

    /**
     * 公共函数
     * @param name
     */
    function setName(name) {
        this.name = name;
    }

    function setId(id) {
        this.id = id;
    }

    function getName() {
        return this.name;
    }

    function getId() {
        return this.id;
    }

    /**
     * 私有函数
     */
    function a() {

    }

    function b() {

    }

    window.Person = Person;

})();

var p = window.Person();
p.setName("aaa");
alert(p.getName());

/**
 * 第二种方式
 */

(function () {
    var Student = {
        setName: function (name) {
            this.name = name;
        },

        getName: function () {
            return this.name;
        }
    };

    function a() {

    }

    function b() {

    }

    window.Student = Student;
})();




