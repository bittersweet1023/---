// 登录拦截
if (location.href.indexOf('login.html') === -1) {
  $.ajax ({
    type:'get',
    url: '/employee/checkRootLogin',
    datatype: 'json',
    success: function (info) {
      if (info.error === 400) {
        // location.href = 'login.html';
      }
      if (info.success) {
        console.log('已登录');
      }
    },
  });
}



// 进度条功能
$(document).ajaxStart(function () {
  NProgress.start();
});
$(document).ajaxStop(function () {
  setTimeout(function() {
    NProgress.done();
  },500);
});



// 公共功能
$(function () {
  //二级菜单
  $('.lt_aside .category').click(function () {
    $('.lt_aside .child').stop().slideToggle();
  });
  
  // 侧边栏显示隐藏
  $('.lt_topbar .icon_menu').click(function () {
    $('.lt_aside').toggleClass('hidemenu');
    $('.lt_main').toggleClass('hidemenu');
    $('.lt_topbar').toggleClass('hidemenu');
  });
  
  // 退出模态框
  $('.lt_topbar .icon_logout').click(function () {
    $('#logoutModal').modal('show');
  });
  
  //模态框中的退出按钮
  $('#logoutBtn').click(function () {
    $.ajax({
      type: 'get',
      url:'/employee/employeeLogout',
      dataType: "json",
      success: function ( info ) {
        if (info.success) {
          location.href = "login.html";
        }
      }
    });
  });
  
  
});










