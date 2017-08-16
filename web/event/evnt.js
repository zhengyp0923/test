/**
 *js事件
 *        触发执行事件
 *        事件绑定在某一个对象上的
 */


/**
 *给页面的div添加click事件
 */

$().ready(function () {
    for (var i = 0; i < 3; i++) {
        //事件叠加三次
        // $("div").click(function () {
        //     alert("div");
        // });

        /**
         * 利用bind，unbind避免事件叠加     不能为未来的元素添加事件
         */
        $("div").unbind("click");
        $("div").bind("click", function () {
            alert("div");
        });

        $("input[type='button']").unbind("click");
        $("input[type='button']").bind("click", function () {
            var $div = $("<div></div>");
            $div.html("aaaaa");

            $("body").append($div);

        });

        /**
         * 能为未来的元素添加事件
         */

        var me = $("body");
        me.delegate("div", "click", function () {
            alert("aaa");
        });


    }
});