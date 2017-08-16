/**
 * oaeach()方法
 */

(function () {
    $.fn.oaeach = function (callback) {
        //jquery对象是一个数组对象
        var array = $(this);
        for (var i = 0; i < array.length; i++) {
            /**
             * array[i]是回调函数的实参
             */
            callback(array[i]);
        }
    }
})($);


$().ready(function () {
    /**
     * 获取页面上所有的div元素，并且遍历
     */
    $("div").oaeach(function (e) {
        alert($(e).html());
    });
});