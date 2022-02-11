const path = require("path");
const pkg = require("./package.json");
const { JX3BOX } = require("@jx3box/jx3box-common");
// const Setting = require("./setting.json");

module.exports = {
    //❤️ Multiple pages ~
    pages: {
        index: {
            title: "魔盒矩阵 - JX3BOX",
            entry: "src/main.js",
            template: "public/index.html",
            filename: "index.html",
        },
        database: {
            title: "剑三数据库 - JX3BOX",
            entry: "src/core/database/database.js",
            template: "public/index.html",
            filename: "database/index.html",
        },
        icons: {
            title: "图标大全 - JX3BOX",
            entry: "src/core/icons/icons.js",
            template: "public/index.html",
            filename: "icons/index.html",
        },
        talent: {
            title: "奇穴模拟器 - JX3BOX",
            entry: "src/core/talent/talent.js",
            template: "public/index.html",
            filename: "talent/index.html",
        },
        talent2: {
            title: "镇派模拟器 - JX3BOX",
            entry: "src/core/talent2/talent2.js",
            template: "public/index.html",
            filename: "talent2/index.html",
        },
        meridians: {
            title: "经脉模拟器 - JX3BOX",
            entry: "src/core/meridians/meridians.js",
            template: "public/index.html",
            filename: "meridians/index.html",
        },
        macroeditor: {
            title: "宏编辑器 - JX3BOX",
            entry: "src/core/macroeditor/macroeditor.js",
            template: "public/index.html",
            filename: "macroeditor/index.html",
        },
        translator: {
            title: "簡繁轉換 - JX3BOX",
            entry: "src/core/translator/translator.js",
            template: "public/translator.html",
            filename: "translator/index.html",
        },
        servers: {
            title: "开服监控 - JX3BOX",
            entry: "src/core/servers/servers.js",
            template: "public/index.html",
            filename: "servers/index.html",
        },
        sudoku: {
            title: "九宫格计算器 - JX3BOX",
            entry: "src/core/sudoku/sudoku.js",
            template: "public/index.html",
            filename: "sudoku/index.html",
        },
        // TODO:迁移至pvx栏目
        furniture: {
            title: "家具大全 - JX3BOX",
            entry: "src/core/furniture/furniture.js",
            template: "public/index.html",
            filename: "furniture/index.html",
        },
        // TODO:迁移至item栏目
        price: {
            title: "金价走势 - JX3BOX",
            entry: "src/core/price/price.js",
            template: "public/index.html",
            filename: "price/index.html",
        },
    },

    //❤️ Proxy ~
    devServer: {
        proxy: {
            "/api/cms": {
                target: process.env["DEV_SERVER"] == "true" ? "http://localhost:5120" : "https://cms.jx3box.com"
            },
            "/api/vip": {
                "target": "https://pay.jx3box.com",
                "onProxyReq": function (request) {
                    request.setHeader("origin", "");
                }
            },
            "/api": {
                "target": "https://next2.jx3box.com",
                "onProxyReq": function (request) {
                    request.setHeader("origin", "");
                }
            },
        },
        disableHostCheck: true
    },

    //❤️ define path for static files ~
    publicPath:
        //FOR Localhost => development
        (process.env.NODE_ENV === "development" && "/") ||
        //BY origin
        (process.env.STATIC_PATH === "origin" &&
            `${JX3BOX.__staticPath["origin"]}${pkg.name}/`) ||
        //BY github
        (process.env.STATIC_PATH === "github" &&
            `${JX3BOX.__staticPath["github"]}${pkg.name}/`) ||
        //BY jsdelivr
        (process.env.STATIC_PATH === "jsdelivr" &&
            `${JX3BOX.__staticPath["jsdelivr"]}${pkg.name}@gh-pages/`) ||
        //BY OSS=>CDN
        (process.env.STATIC_PATH === "mirror" &&
            `${JX3BOX.__staticPath["mirror"]}${pkg.name}/`) ||
        //BY relative path
        (process.env.STATIC_PATH === "repo" && `/${pkg.name}/`) ||
        //BY root path or bind a domain
        (process.env.STATIC_PATH == "root" && "/") ||
        //for lost
        "/",

    chainWebpack: (config) => {
        //💝 in-line small imgs ~
        config.module
            .rule("images")
            .use("url-loader")
            .loader("url-loader")
            .tap((options) => Object.assign(options, { limit: 10240 }));

        //💝 in-line svg imgs ~
        config.module
            .rule("vue")
            .use("vue-svg-inline-loader")
            .loader("vue-svg-inline-loader");

        config.module
            .rule("worker-loader")
            .test(/\.worker\.js$/)
            .use("worker-loader")
            .loader("worker-loader");

        //💖 import common less var * mixin ~
        const types = ["vue-modules", "vue", "normal-modules", "normal"];
        var preload_styles = [];
        preload_styles.push(
            path.resolve(__dirname, "./node_modules/csslab/base.less"),
            path.resolve(
                __dirname,
                "./node_modules/@jx3box/jx3box-common/css/var.less"
            ),
            path.resolve(__dirname, "./src/assets/css/var.less")
        );
        function addStyleResource(rule) {
            rule.use("style-resource")
                .loader("style-resources-loader")
                .options({
                    patterns: preload_styles,
                });
        }
        types.forEach((type) =>
            addStyleResource(config.module.rule("less").oneOf(type))
        );
    },

    transpileDependencies: ["vue-echarts", "resize-detector"],
};
