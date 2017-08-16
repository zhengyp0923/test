/**
 *自定义事件    浏览器内部并没有定义事件
 */


/**
 * 自定义事件    浏览器内部并没有定义事件
 *
 *  声明一个事件，绑定在div元素上，在div元素执行click事件的时候触发
 */

$().ready(function () {

    /**
     * 对自定义事件的声明
     */
    $("div").unbind("上海很牛");
    $("div").bind("上海很牛", function (event,a,b) {
        /**
         * 该自定义事件要做的事
         */

        alert("llll");
        alert(a);
        alert(b);
    })

    /**
     * 在执行div 的click事件时触发事件
     */
    $("div").unbind("click");
    $("div").bind("click", function () {

        /**
         * trigger触发一个事件  可传递参数
         */
        $(this).trigger("上海很牛",[5,6]);
    });
});
