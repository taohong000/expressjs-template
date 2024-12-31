var express = require('express');
var router = express.Router();

// GET测试路由
router.get('/', function(req, res) {
  // 获取所有查询参数
  const queryParams = req.query;
  // 获取所有请求头
  const headers = req.headers;
  
  res.json({
    message: '这是一个GET测试接口',
    method: 'GET',
    queryParams: queryParams,
    headers: headers
  });
});

// POST测试路由
router.post('/', function(req, res) {
  // 获取请求体数据
  const bodyParams = req.body;
  // 获取查询参数
  const queryParams = req.query;
  // 获取请求头
  const headers = req.headers;
  
  res.json({
    message: '这是一个POST测试接口',
    method: 'POST',
    bodyParams: bodyParams,
    queryParams: queryParams,
    headers: headers
  });
});

module.exports = router; 