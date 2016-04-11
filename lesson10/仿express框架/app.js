/*主启动文件*/
var connect = require('./connect');
var app = connect();
require('./middle')(app);
require('./router')(app);
app.listen(8080);

