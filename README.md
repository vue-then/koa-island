# koa-island
wx-little-program koa back-end



### 当调试出现问题
```
https://stackoverflow.com/questions/27688804/how-do-i-debug-error-spawn-enoent-on-node-js

const path = require('path')
let { spawn } = require('child_process');
// console.log(123456, process.cwd())
// process.cwd()
let child = spawn('node', ['1.test.js', 'a', 'b', 'c'], {
    cwd: path.join(__dirname, './example')
});

//如果不写stdio 默认是管道类型
child.stderr.on('data', function (data) {
    console.log(data.toString());
});

```

