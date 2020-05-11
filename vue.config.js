const path = require("path");
const pkg = require("./package.json");
const { JX3BOX } = require("@jx3box/jx3box-common");
// const Setting = require("./setting.json");

module.exports = {
    devServer: {
        disableHostCheck: true,
    },

    //❤️ Multiple pages ~
    pages: {
        index: {
            title: "应用 - JX3BOX",
            entry: "src/main.js",
            template: "public/index.html",
            filename: "index.html",
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
        price: {
            title: "金价走势 - JX3BOX",
            entry: "src/core/price/price.js",
            template: "public/index.html",
            filename: "price/index.html",
        },
        flog: {
            title: "BOSS日志分析 - JX3BOX",
            entry: "src/core/flog/flog.js",
            template: "public/index.html",
            filename: "flog/index.html",
        },
    },

    //❤️ define path for static files ~
    publicPath:
        //FOR Localhost => development
        (process.env.NODE_ENV === "development" && "/") ||
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
