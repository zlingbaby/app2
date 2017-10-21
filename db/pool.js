var mysql=require('mysql');
var pool=global.pool;
if(!pool){
	var pool=mysql.createPool({
		user:'root',
		host:'127.0.0.1',
		port:'3306',
		password:'root',
		database:'web1702'
	});
	global.pool=pool;
}
module.exports=pool;


