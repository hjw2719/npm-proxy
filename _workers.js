export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const packageName = url.pathname.split('/')[1]; // 提取包名
    // 为特定包指定不同镜像
    const mirrors = {
      'yauzl': 'registry.npmjs.org',
      'whatwg-encoding': 'registry.npmjs.org',
      'unplugin': 'registry.npmjs.org',
      '@babel/compat-data': 'registry.npmjs.org',
      'default': 'registry.npmmirror.com', // 默认镜像
    };
    url.hostname = mirrors[packageName] || mirrors['default'];
    const newRequest = new Request(url, request);
    return fetch(newRequest);
  },
};
