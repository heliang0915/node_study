/**
 * Created by lenovo on 2016/2/29.
 */

//��ȡ�ļ�
var fs=require("fs");
/*
  path���ļ�·��
  options:
  flag:
*   O_EXCL ����
*   O_RDWR ��д
*   O_CREAT �ļ��������򴴽�
*   O_APPEND ��ԭ���Ļ�����׷��
*   O_WRONLY ֻд
*   O_SYNC ͬ��
*   O_RDONLY ֻ��
*   O_TRUNC ����ļ�
* */
fs.readFile('index',{flag:'w',encoding:'utf8'},function(err){
    if(err)
    console.log(err);
});


