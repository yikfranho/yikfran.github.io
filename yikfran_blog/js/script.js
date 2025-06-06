document.addEventListener("DOMContentLoaded", function() {
    console.log("欢迎来到我的博客！");
});
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("您的留言已提交，谢谢！");
});
