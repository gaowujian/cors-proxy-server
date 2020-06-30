// 使用node起一个静态资源服务器
// 通nginx一样，这个服务器也可以配置代理，请求都会被代理到localhost:5000
var express = require("express");
var app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
app.use(express.static("./public"));
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:5000",
    changeOrigin: "true",
    pathRewrite: {
      "^api": "",
    },
  })
);
app.listen(4000);
