//路由
var router = function (app) {
    app.use("/", function (req, res) {
        res.render("template", {title: 'aaa'});
    });
    app.use("/list", function (req, res) {
        res.send('list----');
    });
    app.use("/abc", function (req, res) {
        res.send('abc----');
    });
}
module.exports = router;