# aliez-mime

aliez服务器mimetype中间件

## 安装

```
npm install aliez-mime
```

## 使用

```javascript
var aliez = require('aliez');
var aliez_mime = require('aliez-mime');

aliez.createServer()
.use(aliez_mime)
.get('/', function(req, res){
	// 自动设置mimetype，如果需要手动设置，使用此方法
	
	// 参数为扩展名，具体配置可以参考mimez的用法
	res.mime('css');
}).listen(8080);
```
