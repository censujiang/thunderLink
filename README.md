# ThunderLink

迅雷下载JavaScript SDK

## 安装

```bash
npm install thunderlink 
```

## 使用

目前暂时不支持通过ESM和CommonJS的方式引入，只能通过CDN的形式引入。

```html
<script src="https://cdn.jsdelivr.net/npm/thunderlink"></script>
```

或者你也可以使用官方的CDN

```html
<script src="//open.thunderurl.com/thunder-link.js"></script>
```

如果您正在使用打包器，也可以在模板内小心的从依赖中引入

```html
<script src="node_modules/thunderlink"></script>
```

## 类型化

可以在项目中引入类型定义文件，例如在`tsconfig.json`中添加

```json
{
  "compilerOptions": {
    "types": ["thunderlink"]
  }
}
```
