# ssr-toy
基于`Express` `React`搭建一个简易的SSR框架。

`ssr-toy`搭建了一个简易的`MVC`模式来实现`SSR`的渲染，相关目录及文件说明：

`src/main.ts` 项目启动入口

`src/router.ts` 定义项目路由

`src/controller` 控制器目录，`router.ts`的请求处理方法来自于该目录

`src/model` 数据层

`src/pages` 视图层，该目录为前端代码，该项目基于React构建，所以里面视图都是React文件。

`src/view.tsx` 连接 `controller` `pages` 方法

## 开发环境

```
npm run clear 清除编译后的目录

npm run compile 编译代码

npm run server 启动服务

```

## 说明

该项目只用于展示SSR的基本运行原理，pages下的前端代码无法支持import/require导入外部模块，因为没引入webpack来进行打包，所以在当前项目中pages的代码有很多重复。


## 基本原理

### step1

服务端收到请求后进行数据处理，如查询，修改，删除等操作，然后再生成html视图，生成html的视图方式通过调用React.renderToString的方式来进行，由于React渲染并不支持异步，所以在生成前需要先准备好数据，并传递进去，例如；
```js
const data = {...};
const Page = require(path/Page).default;

const content = React.renderToString(<Page {...data}/>);

res.send(`
<html>
    <body>
        <div id="root">
        ${content}
        </div>
    </body>
<html>
`);

```

### step2

第一步只是完成了`HTML` `CSS`等静态内容的生成，如果我们的页面存在交互时就需要再次调用`React.hydrate`进行再次渲染，目的是为了触发框架生命周期及绑定相关事件。

所以在执行`hydrate`时，需要保留之前在服务端渲染的数据`data`，我们需要构建类似代码：
```
<html>
    <body>
        <div id="root">
            <div reactroot>
                ...
            </div>
        </div>
        <script src="path/Page.js"></script>
        <script>
            var data = {...}
            React.hydrate(React.createElement(Page, data))
        </script>
    </body>
<html>
```

> 注：`hydrate`作用其实和`render`一样，只是会复用已创建的dom。