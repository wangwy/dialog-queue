/**
 * @file file
 * @author wangwenyuan03(wangwenyuan03@baidu.com)
 */

const path = require('path');
const md = require('markdown-it')();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../example',
        host: '0.0.0.0'
    },
    entry: {
        app: './main.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../example')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader'
                    },
                    {
                        loader: 'vue-markdown-loader/lib/markdown-compiler',
                        options: {
                            raw: true,
                            preventExtract: true,
                            use: [
                                [
                                    require('markdown-it-container'),
                                    'demo',
                                    {
                                        validate: function(params) {
                                            return params.trim().match(/^demo\s+(.*)$/)
                                        },
                                        render: function(tokens, idx) {
                                            if (tokens[idx].nesting === 1) {
                                                // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                                                let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
                                                let description = demoInfo && demoInfo.length > 1 ? demoInfo[1] : '';
                                                let descriptionHTML = description ? md.render(description) : '';
                                                // 2.获取代码块内的html和js代码
                                                let content = tokens[idx + 1].content;
                                                // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                                                return `<demo-block>
                                                            <div class="source" slot="source">${content}</div>
                                                            ${descriptionHTML}
                                                            <div class="highlight" slot="highlight">`;
                                            } else {
                                                return '</div></demo-block>\n';
                                            }
                                        }
                                    }
                                ]
                            ]
                        }
                    }
                ]
            }
        ]
    }
};