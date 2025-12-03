# 企业内部福利商城 AI2AI

## 核心系统架构

```
InternalEnterpriseMall/
├── frontend/                       # 前端应用层
│   ├── admin/                      # Web管理后台
│   │   ├── src/
│   │   │   ├── views/              # 页面视图
│   │   │   │   ├── user/          # 用户管理
│   │   │   │   ├── product/       # 商品管理
│   │   │   │   ├── order/         # 订单管理
│   │   │   │   └── points/        # 积分管理
│   │   │   ├── router/             # 路由配置
│   │   │   └── store/              # 状态管理
│   │   └── package.json
│   │
│   └── h5/                         # 员工商城H5
│       ├── src/
│       │   ├── pages/              # 页面
│       │   │   ├── home/           # 首页
│       │   │   ├── product/        # 商品详情
│       │   │   ├── cart/           # 购物车
│       │   │   ├── order/          # 订单
│       │   │   └── user/           # 用户中心
│       │   ├── store/              # 状态管理
│       │   └── utils/              # 工具函数
│       └── package.json
│
├── services/                       # 核心微服务层
│   ├── user-service/              # 用户服务 (端口:8081)
│   │   ├── src/main/java/com/mall/user/
│   │   │   ├── controller/        # 控制器层
│   │   │   │   ├── UserController.java
│   │   │   │   └── DepartmentController.java
│   │   │   ├── service/           # 服务层
│   │   │   ├── mapper/            # 数据访问层
│   │   │   │   ├── UserMapper.java
│   │   │   │   └── DepartmentMapper.java
│   │   │   ├── entity/            # 实体类
│   │   │   │   ├── User.java
│   │   │   │   └── Department.java
│   │   │   └── dto/               # 数据传输对象
│   │   ├── src/main/resources/
│   │   │   ├── mapper/            # MyBatis映射文件
│   │   │   └── application.yml
│   │   └── pom.xml
│   │
│   ├── product-service/           # 商品服务 (端口:8082)
│   │   ├── src/main/java/com/mall/product/
│   │   │   ├── controller/
│   │   │   │   ├── ProductController.java
│   │   │   │   └── CategoryController.java
│   │   │   ├── service/
│   │   │   ├── mapper/
│   │   │   ├── entity/
│   │   │   │   ├── Product.java
│   │   │   │   ├── Category.java
│   │   │   │   └── ProductSku.java
│   │   │   └── dto/
│   │   ├── src/main/resources/
│   │   │   └── mapper/
│   │   └── pom.xml
│   │
│   ├── order-service/             # 订单服务 (端口:8083)
│   │   ├── src/main/java/com/mall/order/
│   │   │   ├── controller/
│   │   │   │   ├── OrderController.java
│   │   │   │   └── CartController.java
│   │   │   ├── service/
│   │   │   ├── mapper/
│   │   │   ├── entity/
│   │   │   │   ├── Order.java
│   │   │   │   ├── OrderItem.java
│   │   │   │   └── Cart.java
│   │   │   └── dto/
│   │   ├── src/main/resources/
│   │   │   └── mapper/
│   │   └── pom.xml
│   │
│   ├── payment-service/           # 支付服务 (端口:8084)
│   │   ├── src/main/java/com/mall/payment/
│   │   │   ├── controller/
│   │   │   │   └── PaymentController.java
│   │   │   ├── service/
│   │   │   ├── mapper/
│   │   │   ├── entity/
│   │   │   │   └── Payment.java
│   │   │   └── dto/
│   │   ├── src/main/resources/
│   │   │   └── mapper/
│   │   └── pom.xml
│   │
│   └── points-service/            # 积分服务 (端口:8085)
│       ├── src/main/java/com/mall/points/
│       │   ├── controller/
│       │   │   └── PointsController.java
│       │   ├── service/
│       │   ├── mapper/
│       │   ├── entity/
│       │   │   ├── PointsAccount.java
│       │   │   └── PointsRecord.java
│       │   └── dto/
│       ├── src/main/resources/
│       │   └── mapper/
│       └── pom.xml
│
├── common/                        # 公共模块
│   ├── mall-common/              # 通用工具类
│   │   ├── src/main/java/com/mall/common/
│   │   │   ├── constant/       # 常量定义
│   │   │   ├── enums/          # 枚举类
│   │   │   ├── exception/      # 异常处理
│   │   │   ├── utils/          # 工具类
│   │   │   └── response/       # 统一响应格式
│   │   └── pom.xml
│   │
│   └── mall-security/            # 安全模块
│       ├── src/main/java/com/mall/security/
│       │   ├── config/         # 安全配置
│       │   ├── jwt/            # JWT工具
│       │   └── annotation/     # 安全注解
│       └── pom.xml
│
└── spec/                         # 规格文档
    ├── Me2AI.md                # 需求澄清与架构提示
    └── AI2AI.md                # 架构设计与接口说明
```

## 核心技术栈

```
technology-stack/
├── frontend/                       # 前端技术栈
│   ├── frameworks/
│   │   ├── Vue 3                  # 主框架
│   │   └── Element Plus           # UI组件库
│   ├── tools/
│   │   ├── Pinia                  # 状态管理
│   │   ├── Vue Router            # 路由管理
│   │   └── Axios                  # HTTP客户端
│   └── build/
│       └── Vite                   # 构建工具
│
├── backend/                        # 后端技术栈
│   ├── frameworks/
│   │   ├── Spring Boot 3.0       # 主框架
│   │   ├── Spring Security       # 安全框架
│   │   └── MyBatis Plus          # ORM框架
│   └── libraries/
│       ├── JWT                    # 认证令牌
│       └── Lombok                 # 代码简化
│
└── middleware/                     # 基础中间件
    ├── databases/
    │   └── MySQL 8.0             # 关系型数据库
    ├── cache/
    │   └── Redis 7.0             # 缓存数据库
    └── message-queue/
        └── RabbitMQ              # 消息队列
```

## 核心数据库设计

```
database/
├── mall_user/                       # 用户服务数据库
│   ├── user.sql                      # 用户表
│   │   ├── id (BIGINT PRIMARY KEY AUTO_INCREMENT)
│   │   ├── employee_id (VARCHAR(32) UNIQUE NOT NULL)        # 员工编号
│   │   ├── username (VARCHAR(50) UNIQUE NOT NULL)           # 用户名
│   │   ├── password (VARCHAR(100) NOT NULL)                 # 密码
│   │   ├── real_name (VARCHAR(50) NOT NULL)                 # 真实姓名
│   │   ├── mobile (VARCHAR(20))                             # 手机号
│   │   ├── department_id (BIGINT NOT NULL)                  # 部门ID
│   │   ├── status (TINYINT DEFAULT 1)                       # 状态：1启用，0禁用
│   │   ├── create_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
│   │   └── update_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
│   │
│   └── department.sql               # 部门表
│       ├── id (BIGINT PRIMARY KEY AUTO_INCREMENT)
│       ├── name (VARCHAR(100) NOT NULL)                     # 部门名称
│       ├── parent_id (BIGINT DEFAULT 0)                     # 上级部门ID
│       ├── level (INT DEFAULT 1)                             # 层级
│       └── status (TINYINT DEFAULT 1)                       # 状态：1启用，0禁用
│
├── mall_product/                    # 商品服务数据库
│   ├── category.sql                 # 商品分类表
│   │   ├── id (BIGINT PRIMARY KEY AUTO_INCREMENT)
│   │   ├── name (VARCHAR(50) NOT NULL)                      # 分类名称
│   │   ├── parent_id (BIGINT DEFAULT 0)                      # 父分类ID
│   │   ├── level (INT DEFAULT 1)                             # 层级
│   │   ├── sort_order (INT DEFAULT 0)                         # 排序
│   │   └── status (TINYINT DEFAULT 1)                       # 状态：1启用，0禁用
│   │
│   └── product.sql                  # 商品表
│       ├── id (BIGINT PRIMARY KEY AUTO_INCREMENT)
│       ├── name (VARCHAR(200) NOT NULL)                      # 商品名称
│       ├── description (TEXT)                                # 商品描述
│       ├── category_id (BIGINT NOT NULL)                     # 分类ID
│       ├── main_image (VARCHAR(255))                         # 主图
│       ├── price (DECIMAL(10,2) NOT NULL)                   # 价格
│       ├── points_price (INT DEFAULT 0)                      # 积分价格
│       ├── stock (INT DEFAULT 0)                             # 库存
│       ├── sales (INT DEFAULT 0)                             # 销量
│       ├── status (TINYINT DEFAULT 1)                        # 状态：1上架，0下架
│       ├── create_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
│       └── update_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
│
├── mall_order/                      # 订单服务数据库
│   ├── order.sql                    # 订单表
│   │   ├── id (BIGINT PRIMARY KEY AUTO_INCREMENT)
│   │   ├── order_no (VARCHAR(32) UNIQUE NOT NULL)           # 订单编号
│   │   ├── user_id (BIGINT NOT NULL)                          # 用户ID
│   │   ├── total_amount (DECIMAL(10,2) NOT NULL)             # 订单总金额
│   │   ├── points_amount (INT DEFAULT 0)                      # 积分抵扣数量
│   │   ├── pay_amount (DECIMAL(10,2) NOT NULL)               # 实付金额
│   │   ├── status (TINYINT DEFAULT 0)                        # 订单状态：0待支付，1已支付，2配送中，3已完成，4已取消
│   │   ├── payment_method (TINYINT)                           # 支付方式：1在线支付，2积分支付，3混合支付
│   │   ├── payment_status (TINYINT DEFAULT 0)                # 支付状态：0未支付，1已支付
│   │   ├── delivery_name (VARCHAR(50))                        # 收货人
│   │   ├── delivery_phone (VARCHAR(20))                        # 收货电话
│   │   ├── delivery_address (TEXT)                            # 收货地址
│   │   ├── create_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
│   │   └── update_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
│   │
│   ├── order_item.sql               # 订单商品表
│   │   ├── id (BIGINT PRIMARY KEY AUTO_INCREMENT)
│   │   ├── order_id (BIGINT NOT NULL)                         # 订单ID
│   │   ├── product_id (BIGINT NOT NULL)                       # 商品ID
│   │   ├── product_name (VARCHAR(200) NOT NULL)               # 商品名称
│   │   ├── product_image (VARCHAR(255))                       # 商品图片
│   │   ├── price (DECIMAL(10,2) NOT NULL)                     # 单价
│   │   ├── points_price (INT DEFAULT 0)                       # 积分单价
│   │   ├── quantity (INT NOT NULL)                            # 购买数量
│   │   ├── total_amount (DECIMAL(10,2) NOT NULL)              # 小计
│   │   └── create_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
│   │
│   └── cart.sql                     # 购物车表
│       ├── id (BIGINT PRIMARY KEY AUTO_INCREMENT)
│       ├── user_id (BIGINT NOT NULL)                          # 用户ID
│       ├── product_id (BIGINT NOT NULL)                       # 商品ID
│       ├── quantity (INT NOT NULL)                            # 数量
│       ├── create_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
│       └── update_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
│
├── mall_payment/                    # 支付服务数据库
│   └── payment.sql                  # 支付记录表
│       ├── id (BIGINT PRIMARY KEY AUTO_INCREMENT)
│       ├── payment_no (VARCHAR(32) UNIQUE NOT NULL)           # 支付编号
│       ├── order_no (VARCHAR(32) NOT NULL)                    # 订单编号
│       ├── user_id (BIGINT NOT NULL)                           # 用户ID
│       ├── amount (DECIMAL(10,2) NOT NULL)                     # 支付金额
│       ├── points_amount (INT DEFAULT 0)                      # 积分抵扣
│       ├── payment_method (TINYINT NOT NULL)                   # 支付方式：1在线支付，2积分支付，3混合支付
│       ├── status (TINYINT DEFAULT 0)                          # 支付状态：0待支付，1支付成功，2支付失败，3已退款
│       ├── third_party_no (VARCHAR(100))                       # 第三方支付流水号
│       ├── create_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
│       └── update_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
│
└── mall_points/                     # 积分服务数据库
    ├── points_account.sql           # 积分账户表
    │   ├── id (BIGINT PRIMARY KEY AUTO_INCREMENT)
    │   ├── user_id (BIGINT UNIQUE NOT NULL)                    # 用户ID
    │   ├── total_points (INT DEFAULT 0)                       # 总积分
    │   ├── available_points (INT DEFAULT 0)                   # 可用积分
    │   └── update_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
    │
    └── points_record.sql             # 积分流水表
        ├── id (BIGINT PRIMARY KEY AUTO_INCREMENT)
        ├── user_id (BIGINT NOT NULL)                           # 用户ID
        ├── type (TINYINT NOT NULL)                             # 类型：1获得，2消费，3退还
        ├── amount (INT NOT NULL)                               # 积分数
        ├── available_points (INT NOT NULL)                     # 变更后可用积分
        ├── source_type (TINYINT)                               # 来源类型：1系统发放，2订单消费，3退换货
        ├── source_id (BIGINT)                                   # 来源ID
        └── create_time (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
```

## 核心API接口

```
api/
├── user-service/                   # 用户服务接口 (端口:8081)
│   ├── auth/                       # 认证相关
│   │   └── POST /login             # 用户登录
│   │       ├── Request: {username, password}
│   │       └── Response: {accessToken, userInfo}
│   │
│   ├── users/                      # 用户管理
│   │   ├── GET /profile            # 获取当前用户信息
│   │   └── PUT /profile            # 更新当前用户信息
│   │
│   └── departments/                # 部门管理
│       └── GET /tree               # 获取部门树
│
├── product-service/                # 商品服务接口 (端口:8082)
│   ├── categories/                 # 商品分类
│   │   └── GET /tree               # 获取分类树
│   │
│   └── products/                   # 商品管理
│       ├── GET /                   # 获取商品列表
│       │   └── Query Params: {page, size, categoryId, keyword}
│       ├── GET /{id}               # 获取商品详情
│       │   └── Path Param: {id} - 商品ID
│       └── GET /hot                # 获取热门商品
│           └── Query Params: {page, size, categoryId}
│
├── order-service/                  # 订单服务接口 (端口:8083)
│   ├── cart/                       # 购物车
│   │   ├── GET /                   # 获取购物车列表
│   │   ├── POST /add               # 添加商品到购物车
│   │   │   └── Request: {productId, quantity}
│   │   └── DELETE /{id}            # 删除购物车商品
│   │       └── Path Param: {id} - 购物车ID
│   │
│   └── orders/                     # 订单管理
│       ├── POST /                  # 创建订单
│       │   └── Request: {items, paymentMethod, deliveryAddress}
│       ├── GET /{id}               # 获取订单详情
│       │   └── Path Param: {id} - 订单ID
│       ├── GET /                   # 获取订单列表
│       │   └── Query Params: {page, size, status}
│       └── PUT /{id}/cancel        # 取消订单
│           └── Path Param: {id} - 订单ID
│
├── payment-service/                # 支付服务接口 (端口:8084)
│   └── payment/                    # 支付管理
│       ├── POST /create            # 创建支付
│       │   └── Request: {orderNo, paymentMethod, amount, pointsAmount}
│       └── GET /{paymentNo}        # 获取支付详情
│           └── Path Param: {paymentNo} - 支付编号
│
└── points-service/                 # 积分服务接口 (端口:8085)
    ├── account/                    # 积分账户
    │   └── GET /                   # 获取积分账户信息
    │
    └── history/                    # 积分流水
        └── GET /                   # 获取积分流水
            └── Query Params: {page, size, type}
```

## 接口规范

### 统一响应格式
```
{
  "code": 200,               # 状态码：200成功，400客户端错误，500服务器错误
  "message": "操作成功",     # 响应消息
  "data": {}                # 响应数据
}
```

### 认证方式
- 请求头添加: `Authorization: Bearer {token}`
- 无需认证接口: 登录
- 需要认证接口: 用户信息、商品、订单、支付等

### 错误码规范
- 10000-19999: 用户相关错误
- 20000-29999: 商品相关错误
- 30000-39999: 订单相关错误
- 40000-49999: 支付相关错误
- 50000-59999: 积分相关错误

### 分页参数
- page: 页码，从1开始，默认1
- size: 每页大小，默认10，最大100

## 核心部署架构

```
deployment/
├── docker-compose.yml              # 容器编排
│   ├── services/
│   │   ├── mysql/               # 数据库
│   │   ├── redis/               # 缓存
│   │   ├── user-service/        # 用户服务
│   │   ├── product-service/     # 商品服务
│   │   ├── order-service/       # 订单服务
│   │   ├── payment-service/     # 支付服务
│   │   └── points-service/      # 积分服务
│   └── volumes/                # 数据卷
│       ├── mysql_data/
│       └── redis_data/
│
├── nginx/                        # 负载均衡
│   ├── nginx.conf               # 配置文件
│   └── ssl/                    # SSL证书
│
└── monitoring/                   # 监控
    ├── prometheus/             # 监控系统
    └── grafana/                # 可视化
```

## 核心安全设计

```
security/
├── authentication/               # 认证
│   ├── jwt/                     # JWT令牌
│   │   ├── JwtTokenProvider.java
│   │   └── JwtAuthenticationFilter.java
│   └── login/                   # 登录
│       └── LoginController.java
│
├── authorization/                # 授权
│   ├── rbac/                    # 角色权限控制
│   │   ├── Role.java
│   │   └── Permission.java
│   └── interceptor/             # 拦截器
│       └── AuthInterceptor.java
│
└── data-security/                # 数据安全
    ├── encryption/              # 加密
    │   ├── PasswordEncoder.java
    │   └── AESUtil.java
    └── validation/              # 参数校验
        └── ParamValidator.java
```

## 核心性能优化

```
performance/
├── cache/                         # 缓存策略
│   ├── redis/                    # Redis缓存
│   │   ├── RedisConfig.java
│   │   └── RedisCacheManager.java
│   └── local/                    # 本地缓存
│       └── CaffeineConfig.java
│
├── database/                      # 数据库优化
│   ├── index/                    # 索引优化
│   └── connection-pool/          # 连接池
│       └── HikariConfig.java
│
└── service/                       # 服务优化
    ├── async/                    # 异步处理
    │   └── AsyncConfig.java
    └── thread-pool/              # 线程池
        └── ThreadPoolConfig.java
```