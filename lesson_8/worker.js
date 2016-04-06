/**
 * Created by lenovo on 2016/4/6.
 */


process.on('message', function (m) {
    console.log('线程发送过来的消息:' + JSON.stringify(m));
})

process.send({foo: 'foo'});