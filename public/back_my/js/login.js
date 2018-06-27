
/*
* 1 表单校验功能
* */
$(function () {
  // 表单校验初始化
  $('#form').bootstrapValidator({
    // 配置图标
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      
    // 制定校验字段
    fields: {
      username: {
        validators: {
          notEmpty: {
            message: "用户名不能为空"
          },
          stringLength: {
            min: 2,
            max: 6,
            message: '用户名必须为2~6位'
          },
          callback: {
            message: "用户名不存在"
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: "密码不能为空"
          },
          stringLength: {
            min: 6,
            max: 12,
            message: '密码必须为6~12位'
          },
          // 定义一个专门用于回调的校验规则
          callback: {
            message: "密码错误"
          }
        }
      },
    }
  });
});


/*
* 2 阻止默认事件，使用ajax提交
* */
$(function () {
  $('#form').on("success.form.bv",function ( e ) {
    // 阻止默认提交
    e.preventDefault();
    // 使用ajax提交
    $.ajax({
      type:"post",
      url:"/employee/employeeLogin",
      data: $('#form').serialize(),
      datatype: "json",
      success: function (info) {
        console.log(info);
        if(info.success) {
          location.href = "index.html";
        }
        if(info.error == 1000) {
          $('#form').data('bootstrapValidator').updateStatus('username', 'INVALID', 'callback');
        }
        if(info.error == 1001) {
          $('#form').data('bootstrapValidator').updateStatus("password", "INVALID", "callback");
        }
      }
    });
  });
});

/*
* 3 重置表单
* */
$('[type="reset"]').click(function () {
  $('#form').data('bootstrapValidator').resetForm(true);
});








