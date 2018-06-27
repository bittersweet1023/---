
// 进度条功能
$(document).ajaxStart(function () {
  NProgress.start();
});
$(document).ajaxStop(function () {
  setTimeout(function() {
    NProgress.done();
  },500);
});

