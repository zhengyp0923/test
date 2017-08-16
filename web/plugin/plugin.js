/**
 * Created by Administrator on 2017/8/1.
 */

/**
 * jquery可插入式
 */
(function ($) {
    $.fn.a=function () {
        alert("aaa");
    }

    $.b=function () {
        alert("bbb");
    }

})($);

$().ready(function () {
    $("body").a();
    $.b();

    alert($("#aaa"));

    
});
