
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
                },
              
            },

            '/bd':{
                target:'http://api.map.baidu.com/',
                changeOrigin:true,
                pathRewrite:{
                    '^/bd':''
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