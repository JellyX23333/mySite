// 获取按钮元素
var button = document.getElementById("showHidden");

// 鼠标悬停时添加CSS类
button.addEventListener("click", function() {
    document.getElementById("content1").classList.remove("hidden");
});