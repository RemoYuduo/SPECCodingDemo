const express = require('express');
const router = express.Router();
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// 测试接口 - 管理员连通性测试
router.get('/test', authenticateToken, requireAdmin, (req, res) => {
  res.status(200).json({
    success: true,
    message: '管理员接口连通性测试成功',
    admin: req.user.username,
    timestamp: new Date().toISOString()
  });
});

// 测试接口 - 获取系统状态
router.get('/system-status', authenticateToken, requireAdmin, (req, res) => {
  res.status(200).json({
    success: true,
    message: '系统状态正常',
    admin: req.user.username,
    system: {
      status: 'running',
      version: '1.0.0',
      timestamp: new Date().toISOString()
    }
  });
});

module.exports = router;