/**
 *给页面上的一个元素声明一个click事件
 *   给定一个函数，接收两个参数
 *                      1.事件名称
 *                      2.触发该事件的事情
 *
 */

function handlEvent(eventName, callback) {
    $("div").unbind(eventName);
    $("div").bind(eventName,function () {
        callback();
    });
}

$().ready(function () {
    handlEvent("click",function () {
        alert("click");
    });
});

