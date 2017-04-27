var  fs=require("fs");

//非阻塞代码实例，回调函数
fs.readFile('/var/www/html/test/index.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

//console.log(data.toString());
// console.log(“程序执行结束”);