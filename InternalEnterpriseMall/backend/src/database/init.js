const fs = require('fs');
const path = require('path');
const { db } = require('../config/database');

// 确保数据库目录存在
const ensureDatabaseDir = () => {
  const dbDir = path.join(__dirname, '../../database');
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
};

// 创建数据库表
const createTables = async () => {
  return new Promise((resolve, reject) => {
    // 用户表
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        email TEXT,
        phone TEXT,
        points INTEGER DEFAULT 0,
        role TEXT DEFAULT 'user',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('创建用户表失败:', err);
        return reject(err);
      }
      
      // 商品表
      db.run(`
        CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          description TEXT,
          price REAL NOT NULL,
          points_required INTEGER NOT NULL,
          stock INTEGER DEFAULT 0,
          image TEXT,
          status TEXT DEFAULT 'active',
          category TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) {
          console.error('创建商品表失败:', err);
          return reject(err);
        }
        
        // 订单表
        db.run(`
          CREATE TABLE IF NOT EXISTS orders (
            id TEXT PRIMARY KEY,
            user_id INTEGER NOT NULL,
            total_points INTEGER NOT NULL,
            status TEXT DEFAULT 'pending',
            shipping_address TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
          )
        `, (err) => {
          if (err) {
            console.error('创建订单表失败:', err);
            return reject(err);
          }
          
          // 订单明细表
          db.run(`
            CREATE TABLE IF NOT EXISTS order_items (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              order_id TEXT NOT NULL,
              product_id INTEGER NOT NULL,
              quantity INTEGER NOT NULL,
              points_required INTEGER NOT NULL,
              created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
              FOREIGN KEY (order_id) REFERENCES orders (id),
              FOREIGN KEY (product_id) REFERENCES products (id)
            )
          `, (err) => {
            if (err) {
              console.error('创建订单明细表失败:', err);
              return reject(err);
            }
            
            // 购物车表
            db.run(`
              CREATE TABLE IF NOT EXISTS cart (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                product_id INTEGER NOT NULL,
                quantity INTEGER NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users (id),
                FOREIGN KEY (product_id) REFERENCES products (id),
                UNIQUE(user_id, product_id)
              )
            `, (err) => {
              if (err) {
                console.error('创建购物车表失败:', err);
                return reject(err);
              }
              
              // 积分记录表
              db.run(`
                CREATE TABLE IF NOT EXISTS points_history (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  user_id INTEGER NOT NULL,
                  points_change INTEGER NOT NULL,
                  type TEXT NOT NULL,
                  description TEXT,
                  reference_id TEXT,
                  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                  FOREIGN KEY (user_id) REFERENCES users (id)
                )
              `, (err) => {
                if (err) {
                  console.error('创建积分记录表失败:', err);
                  return reject(err);
                }
                
                console.log('数据库表创建成功');
                resolve();
              });
            });
          });
        });
      });
    });
  });
};

// 插入初始数据
const insertInitialData = async () => {
  return new Promise((resolve, reject) => {
    const bcrypt = require('bcryptjs');
    
    // 插入测试用户
    const users = [
      { username: 'user1', password: 'password1', role: 'user', points: 100 },
      { username: 'user2', password: 'password2', role: 'user', points: 200 },
      { username: 'user3', password: 'password3', role: 'user', points: 150 },
      { username: 'admin', password: 'admin123', role: 'admin', points: 0 }
    ];
    
    let insertCount = 0;
    
    users.forEach((user, index) => {
      bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {
          console.error('密码加密失败:', err);
          return reject(err);
        }
        
        db.run(`
          INSERT OR IGNORE INTO users (username, password, role, points) 
          VALUES (?, ?, ?, ?)
        `, [user.username, hash, user.role, user.points], (err) => {
          if (err) {
            console.error('插入用户失败:', err);
            return reject(err);
          }
          
          insertCount++;
          if (insertCount === users.length) {
            console.log('初始用户数据插入成功');
            resolve();
          }
        });
      });
    });
  });
};

// 初始化数据库
const initDatabase = async () => {
  try {
    // 确保数据库目录存在
    ensureDatabaseDir();
    
    // 创建表
    await createTables();
    
    // 插入初始数据
    await insertInitialData();
    
    console.log('数据库初始化完成');
  } catch (error) {
    console.error('数据库初始化失败:', error);
    throw error;
  }
};

module.exports = {
  initDatabase
};