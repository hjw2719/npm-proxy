export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // 将请求的 hostname 替换为目标 npm 镜像仓库
    url.hostname = 'registry.npmjs.org'; // 替换为你需要的 npm 镜像地址，例如 'registry.npmmirror.com'
    const newRequest = new Request(url, request);
    return fetch(newRequest);
  },
};
