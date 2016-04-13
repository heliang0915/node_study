var filter = {};

//登录过滤器
filter.loginFilter = function (req, res, next) {
    if (req.session.sign) {
        next();
    } else {
        req.session.sign = true;
        req.session.name = '张苏纳';
        res.send('跳转用户登录...');
    }
}

//权限过滤器
filter.permissionFilter = function (req, res, next) {
    //权限判断
    if (true) {
        next();
    } else {
        res.send('用户没有权限...');
    }
}


exports = module.exports = filter;