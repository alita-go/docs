---
sidebarDepth: 0
sidebar: auto
---

# Client API

用户端API

以下 api 路径均以 http://127.0.0.1:7272/api 为前缀。

## 登陆

### Interface

``` bash
POST /v1/client/login
```

### Parameters

参数名 | 参数类型 | 默认值 | 测试值 | 简介
---|---|---|---|---
username | string(username) | null | test | 用户名
password | string(password) | null | test | 密码

### Response

``` json
Status: 200

{
  "code": 200,
  "message": "",
  "data": {
    "token": "",
    "userInfo": ""
  }
}
```

### Reqman Test

``` javascript
const Reqman = require('reqman');

//需要设置一个请求基地址
const req = new Reqman({
  baseUrl: 'http://127.0.0.1:7272/api'
});

req
  //请求登陆地址
  .push(function () {
    return {
      method: 'POST',
      url: `/v1/client/login`,
      data: {
        username: 'test',
        password: 'test'
      },
      expect: {
        code: 200,
        message: '成功',
        data: {
          token: ''
        }
      }
    }
  })
  .done();
```
