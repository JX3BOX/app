# App

## 新增app项目流程

### 配置修改
vue.config.js中pages中增加入口
```javascript
pages:{
        index : {
            title : '应用 - JX3BOX',
            entry:'src/main.js',
            template : 'public/index.html',
            filename:'index.html',
        },
        sudoku : {
            title : '九宫格计算器 - JX3BOX',
            entry:'src/core/sudoku/sudoku.js',  //驱动入口
            template : 'public/index.html',     //渲染模板(旧路径应做一份public重定向)
            filename:'sudoku/index.html',       //build访问路径
        }
    },

```

### 资源路径
+ js : `src/core/$app`增加项目名称和相关逻辑文件,包括子逻辑(除非公共逻辑放置在components)
+ css : 样式文件请写在`src/assets/css/$app.less`下按项目名统一
+ img : 图片请统一使用行内svg放置在`src/assets/img/$app/*`,png小图会内嵌base64,大图请转存至jx3box-oss项目/image目录统一上oss+cdn