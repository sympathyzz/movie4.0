$(document).keypress(function (e) {
    // 回车键事件
    if (e.which === 13) {
        $('input[type="button"]').click();
    }
});

$('input[name="pwd"]').focus(function () {
    $(this).attr('type', 'password');
});
$('input[type="text"]').focus(function () {
    $(this).prev().animate({'opacity': '1'}, 200);
});
$('input[type="text"],input[type="password"]').blur(function () {
    $(this).prev().animate({'opacity': '.5'}, 200);
});
$('input[name="login"],input[name="pwd"]').keyup(function () {
    var Len = $(this).val().length;
    if (!$(this).val() === '' && Len >= 5) {
        $(this).next().animate({
            'opacity': '1',
            'right': '30'
        }, 200);
    } else {
        $(this).next().animate({
            'opacity': '0',
            'right': '20'
        }, 200);
    }
});
var open = 0;
layui.use('layer', function () {
    /*var msgalert = '默认账号:' + truelogin + '<br/> 默认密码:' + truepwd;
    var index = layer.alert(msgalert, { icon: 6, time: 4000, offset: 't', closeBtn: 0, title: '友情提示', btn: [], anim: 2, shade: 0 });
    layer.style(index, {
        color: '#777'
    });*/
    //非空验证
    $('input[type="button"]').click(function () {
        var login = $('input[name="login"]').val();
        var pwd = $('input[name="pwd"]').val();
        if (login === '') {
            ErroAlert('请输入您的账号');
        } else if (pwd === '') {
            ErroAlert('请输入密码');
        } else {
            //认证中..
            $('.login').addClass('test'); //倾斜特效
            setTimeout(function () {
                $('.login').addClass('testtwo'); //平移特效
            }, 300);
            setTimeout(function () {
                $('.authent').show().animate({right: -320}, {
                    easing: 'easeOutQuint',
                    duration: 600,
                    queue: false
                });
                $('.authent').animate({opacity: 1}, {
                    duration: 200,
                    queue: false
                }).addClass('visible');
            }, 500);

            //登陆
            // var JsonData = {login: login, pwd: pwd, code: code};
            //此处做为ajax内部判断
           $.post("doLogin",{username:login,password:pwd},function(data){
        	   if(data==1){
        		   window.location.href="index"; 
        	   }else if(data==2){
        		   
        	   }else{
        		   alert("登陆失败，用户名或密码错误");
        		   window.location.href="login"; 
        	   }
           });

        }
    })
});