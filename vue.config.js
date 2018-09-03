module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    baseUrl: './',
    devServer: {
        proxy: 'http://192.168.1.156:8080'
    }
};