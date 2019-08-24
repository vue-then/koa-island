```
post http://localhost:3001/v1/user/register 
    {
        "nickname": "7yue",
        "password1": "1234$56",
        "password2": "1234$56",
        "email": "12345@qq.com"
    }

查询成功 200
提交成功 201


post http://localhost:3001/v1/token
    {
        "account": "123456@qq.com",
        "type": 101,
        "secret": "1234$56"
    }


get http://localhost:3001/v1/classic/latest
    type: Basic Auth
    Username: (post http://localhost:3001/v1/token)=> token值
    Password: 不填

```