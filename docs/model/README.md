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

#### SQL

``` sql
CREATE TABLE `alita_users`(
  `uid` int(11) unsigned NOT NULL auto_increment comment '用户的自增编号',
  `gid` smallint(6) unsigned NOT NULL default '0' comment '用户组编号',
  `email` char(40) NOT NULL default '' comment '邮箱',
  `phone` char(11) NOT NULL default '' comment '手机号',
  `username` char(32) NOT NULL default '' comment '用户名',
  `password` char(32) NOT NULL default '' comment '密码',
  `base_avatar` char(100) NOT NULL default '' comment '头像',
  `base_nickname` char(32) NOT NULL default '' comment '昵称',
  `base_name` char(32) NOT NULL default '' comment '姓名',
  `base_gender` TINYINT(1) NOT NULL default '0' comment '性别',
  `base_sign` char(200) NOT NULL default '' comment '签名',
  `base_idnumber` char(19) NOT NULL default '' comment '身份证号码',
  `stat_stars_posts` int(11) NOT NULL default '0' comment '收藏的帖子数量',
  `stat_stars_people` int(11) NOT NULL default '0' comment '关注的人的数量',
  `stat_fans` int(11) NOT NULL default '0' comment '粉丝数量',
  `stat_threads` int(11) NOT NULL default '0' comment '发帖数',
  `stat_posts` int(11) NOT NULL default '0' comment '回帖数',
  `stat_credits` int(11) NOT NULL default '0' comment '积分',
  `stat_golds` int(11) NOT NULL default '0' comment '金币',
  `stat_rmbs` int(11) NOT NULL default '0' comment '人民币',
  `stat_logins` int(11) unsigned NOT NULL default '0' comment '登陆次数',
  `login_ip` char(20) NOT NULL default '' comment '登陆者IP',
  `login_time` int(11) unsigned NOT NULL default '0' comment '登陆时间',
  `create_ip` char(20) unsigned NOT NULL default '' comment '创建者的IP',
  `create_time` int(11) unsigned NOT NULL default '0' comment '创建时间',
  `update_time` int(11) unsigned NOT NULL default '0' comment '更新时间',
  PRIMARY KEY(`uid`),
  UNIQUE KEY email (email),
  KEY gid (gid)
)ENGINE=InnoDB default CHARSET=utf8 comment='用户表';
```

#### Sequelize Model

``` javascript
// 用户表
const alitaUsers = app.model.define('alita_users', {
  // 用户的自增编号
  uid: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // 用户组编号
  gid: {
    type: Sequelize.INTEGER(6).UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  // 邮箱
  email: {
    type: Sequelize.STRING(40),
    allowNull: false,
    defaultValue: ''
  },
  // 手机号
  phone: {
    type: Sequelize.STRING(11),
    allowNull: false,
    defaultValue: ''
  },
  // 用户名
  username: {
    type: Sequelize.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  // 密码
  password: {
    type: Sequelize.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  // 头像
  base_avatar: {
    type: Sequelize.STRING(100),
    allowNull: false,
    defaultValue: ''
  },
  // 昵称
  base_nickname: {
    type: Sequelize.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  // 姓名
  base_name: {
    type: Sequelize.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  // 性别 1(true) 男 0(false) 女
  base_gender: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 1
  },
  // 签名
  base_sign: {
    type: Sequelize.STRING(200),
    allowNull: false,
    defaultValue: ''
  },
  // 身份证号码
  base_idnumber: {
    type: Sequelize.STRING(19),
    allowNull: false,
    defaultValue: ''
  },
  // 收藏的帖子数量
  stat_stars_posts: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0
  },
  // 关注的人的数量
  stat_stars_people: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0
  },
  // 粉丝数量
  stat_fans: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0
  },
  // 发帖数
  stat_threads: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0
  },
  // 回帖数
  stat_posts: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0
  },
  // 积分
  stat_credits: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0
  },
  // 金币
  stat_golds: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0
  },
  // 人民币
  stat_rmbs: {
    type: Sequelize.INTEGER(13),
    allowNull: false,
    defaultValue: 0
  },
  // 登陆次数
  stat_logins: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  // 登陆ip
  login_ip: {
    type: Sequelize.STRING(30),
    allowNull: false,
    defaultValue: ''
  },
  // 登陆时间
  login_time: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  // 创建时的ip
  create_ip: {
    type: Sequelize.STRING(30),
    allowNull: false,
    defaultValue: ''
  },
  // 创建时间
  create_time: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  // 更新时间
  update_time: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: 0
  }
})
```
