# App

## 新增app项目流程

### 增加入口
vue.config.js中pages中增加入口
```
pages:{
        index : {
            title : 'App - JX3BOX',
            entry:'src/main.js',
            template : 'public/index.html',
            filename:'index.html',
        },
        timeline : {
            title : 'BOSS技能分析 - JX3BOX',
            entry:'src/core/timeline/timeline.js',
            template : 'public/timeline/index.html',
            filename:'timeline/index.html',
        },
        sudoku : {
            title : '九宫格计算器 - JX3BOX',
            entry:'src/core/sudoku/sudoku.js',
            template : 'public/sudoku/index.html',
            filename:'sudoku/index.html',
        }
    },

```

### 新增逻辑文件
scr/core增加项目名称和相关逻辑文件
样式文件请写在src/assets/css下按项目名统一
