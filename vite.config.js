// vite.config.js

import { defineConfig } from 'vite'
import { resolve } from "path" // 主要用于alias文件路径别名
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import vueJsx from "@vitejs/plugin-vue-jsx";
// 加别名的函数
function pathResolve(dir) {
    return resolve(__dirname, ".", dir)
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),

        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        }),
        styleImport({
            libs: [{
                libraryName: 'element-plus',
                esModule: true,
                ensureStyleFile: true,
                resolveStyle: (name) => {
                    name = name.slice(3)
                    return `element-plus/packages/theme-chalk/src/${name}.scss`;
                },
                resolveComponent: (name) => {
                    return `element-plus/lib/${name}`;
                },
            }]
        })],
    resolve: {
        alias: {
            "/@": pathResolve("src"),
            "/config": pathResolve("public/config"),
            "/com": pathResolve("src/components")
        }
    },
    base: "", // 便于发布到gitee
    // 打包配置
    build: {
        target: 'modules',
        // outDir: 'dist', //指定输出路径
        // assetsDir: 'assets', // 指定生成静态资源的存放路径
        minify: 'terser' // 混淆器，terser构建后文件体积更小
    },
    // 本地运行配置，及反向代理配置
    server: {
        cors: true, // 默认启用并允许任何源
        open: true, // 在服务器启动时自动在浏览器中打开应用程序
        //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
        proxy: {
            '/api': {
                target: 'https://www.nykee.cn/',   //代理接口
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})