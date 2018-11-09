
const path = require('path')

function resolve(url) {
    return path.resolve(__dirname,url)
}

module.exports ={
    devServer:{
        port :10000,
        proxy:{
            '/api':{
                target :'https://m.maizuo.com/',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },
    chainWebpack (config) {
        config
        .resolve
        .alias
        .set('@',resolve('src'))
    }
}