/**
 * 回调函数
 */

/**
 * 把ajax所有的请求细节封装在该函数中
 */

/**
 * 创建xmlHttp对象
 * @returns {*}
 */


function ajaxFunction() {
    var xmlHttp;
    try { // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        try {// Internet Explorer
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                alert("创建对象失败！");
            }
        }
    }
    alert(xmlHttp);
    return xmlHttp;
}

/**
 * 把ajax所有请求的细节封装在该函数中
 */
function ajax(ajaxJson) {
    var xmlHttp = ajaxFunction();
    //事件处理程序
    /**
     * 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
     0: 请求未初始化
     1: 服务器连接已建立
     2: 请求已接收
     3: 请求处理中
     4: 请求已完成，且响应已就绪
     */

    /**
     * 只要服务端改变readyState的值，服务端就会改变onreadystatechange函数
     * 该函数执行和js其他代码是异步执行的
     */
    xmlHttp.onreadystatechange = function () {
        alert(xmlHttp.readyState);
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200 || xmlHttp.status == 304) {
                //业务
                /**
                 * callback回调函数
                 */
                ajaxJson.callback(xmlHttp.responseText);
            }
        }
    }

    xmlHttp.open(ajaxJson.method, ajaxJson.url, true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xmlHttp.send(ajaxJson.data);
};

$().ready(function () {
    ajax({
        method: 'post',
        data: null,
        url: "/ServletDemo1",
        callback: function (data) {
            alert(data);
        }
    });
});







