const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
 
module.exports = {
    optimization:{
        minimize: false // 关闭代码压缩，可选
    },
 
    entry: "./src/index.ts",
    
    devtool: "inline-source-map",
    
    devServer:{
        hot:true, //支持热更新
        port:8080,
        //contentBase:path.resolve(__dirname,'static') //指定（额外的）静态文件目录， // 如果使用 CopyWebpackPlugin ，设置为false
        static:path.resolve(__dirname,'static')
    },
 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },
    mode: 'development',//设置mode
 
    resolve: {
        extensions: [".ts", ".js"]
    },
    
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                   loader: "ts-loader"     
                },
                exclude: /node_modules/
            },
            {
                test :/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                
                ]
            }
        ]
    },
 
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],
   
    
 
}