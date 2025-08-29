const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // パスを正規化（index.htmlをデフォルトに）
  let filePath = req.url === '/' ? 'index.html' : req.url.slice(1);
  
  // ファイルパスを構築
  const fullPath = path.join(__dirname, filePath);
  
  // ファイルが存在するかチェック
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('ファイルが見つかりません');
      return;
    }
    
    // MIMEタイプを設定
    const ext = path.extname(fullPath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.gif': 'image/gif',
      '.ico': 'image/x-icon',
      '.md': 'text/markdown; charset=utf-8'
    };
    
    const contentType = mimeTypes[ext] || 'text/plain; charset=utf-8';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 スマートポリスシステム起動: http://0.0.0.0:${PORT}`);
  console.log(`📁 ファイル提供元: ${__dirname}`);
  console.log(`⏰ 起動時刻: ${new Date().toLocaleString('ja-JP')}`);
});