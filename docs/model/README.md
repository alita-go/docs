---
sidebar: auto
---

# 模型结构

## 建模规则

### 表名命名规则

1. **不能以汉语拼音作为表名。** 
1. 基础表以``alita_xx``命名。
1. 枚举表以``alita_enum_xx``命名。
1. 关联表以``alita_ref_xx_yy``命名。
1. 系统表以``alita_sys_xx``命名。
1. 每个表默认都会有``create_time``和``update_time``作为创建和更新的当前时间。

### 字段名命名规则

1. **不能使用汉语拼音作为字段名。**
1. 以``_``区分单词。
1. 必须指定数据类型。
1. 必须指定默认值。
1. 必须写明注释。

## 基本表

### 用户表

#### 表结构

字段名 | 注释
---|---
uid | 用户的自增编号
gid | 用户组编号
email | 邮箱
phone | 手机号
username | 用户名
password | 密码
base_avatar | 头像
base_nickname | 昵称
base_name | 姓名
base_gender | 性别
base_sign | 签名
base_idnumber | 身份证号码
stat_stars_posts | 收藏的帖子数量
stat_stars_people | 关注的人的数量
stat_fans | 粉丝数量
stat_threads | 发帖数
stat_posts | 回帖数
stat_credits | 积分
stat_golds | 金币
stat_rmbs | 人民币
stat_logins | 登陆次数
login_ip | 登陆ip
login_time | 登陆时间
create_ip | 创建时的ip
create_time | 创建时间
update_time | 更新时间

#### sql 语句

``` sql
CREATE TABLE `alita_users`(
  `uid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户的自增编号',
  `gid` smallint(6) unsigned NOT NULL DEFAULT '0' COMMENT '用户组编号',
  `email` char(40) NOT NULL DEFAULT '' COMMENT '邮箱',
  `phone` char(11) NOT NULL DEFAULT '' COMMENT '手机号',
  `username` char(32) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` char(32) NOT NULL DEFAULT '' COMMENT '密码',
  `base_avatar` char(100) NOT NULL DEFAULT '' COMMENT '头像',
  `base_nickname` char(32) NOT NULL DEFAULT '' COMMENT '昵称',
  `base_name` char(32) NOT NULL DEFAULT '' COMMENT '姓名',
  `base_gender` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '性别',
  `base_sign` char(200) NOT NULL DEFAULT '' COMMENT '签名',
  `base_idnumber` char(19) NOT NULL DEFAULT '' COMMENT '身份证号码',
  `stat_stars_posts` int(11) NOT NULL DEFAULT '0' COMMENT '收藏的帖子数量',
  `stat_stars_people` int(11) NOT NULL DEFAULT '0' COMMENT '关注的人的数量',
  `stat_fans` int(11) NOT NULL DEFAULT '0' COMMENT '粉丝数量',
  `stat_threads` int(11) NOT NULL DEFAULT '0' COMMENT '发帖数',
  `stat_posts` int(11) NOT NULL DEFAULT '0' COMMENT '回帖数',
  `stat_credits` int(11) NOT NULL DEFAULT '0' COMMENT '积分',
  `stat_golds` int(11) NOT NULL DEFAULT '0' COMMENT '金币',
  `stat_rmbs` int(11) NOT NULL DEFAULT '0' COMMENT '人民币',
  `stat_logins` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '登陆次数',
  `login_ip` char(20) NOT NULL DEFAULT '' COMMENT '登陆者IP',
  `login_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '登陆时间',
  `create_ip` char(20) unsigned NOT NULL DEFAULT '' COMMENT '创建者的IP',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY(`uid`),
  UNIQUE KEY email (email),
  KEY gid (gid)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';
```

#### modelman

``` javascript
```
