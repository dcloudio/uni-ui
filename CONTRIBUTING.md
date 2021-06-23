## 贡献者须知
首先感谢您对 `uni-ui` 的贡献，如过您需要提交 `uni-ui` 的 `Pull Requests`， 请您遵循以下的代码修改 

## 目录说明
```
uni-ui (根目录)
	├─ build  			项目脚本，不需修改
	├─ common				公用 js、css
	├─ docs					组件文档
	├─ packages			npm 相关的包
	├─ pages				示例页面
	├─ plugin				项目插件，不需修改
	├─ static				示例用静态资源目录
	├─ temps				项目同步临时目录，不需修改
	├─ uni_modules	组件目录
	├─ windows			pc适配目录，不需修改
	└─ ...
```

## 修改组件
如果需要修改组件需要到 `uni_modules` 下找到组件目录 ，修改对应文件即可

## 修改页面
如果需要修改页面需要到 `pages > vue` 下找到组件页面目录 ，修改对应文件即可 ，nvue 下文件不需要修改，是根据`vue`下同名文件自动生成的

## 修改文档
如果需要修改组件文档需要到 `docs > components` 下找到组件文档，修改对应文件即可

> 注意 ： 不要修改 `uni_modules` 下组件对应的文档 ，这个文档需要从 `docs` 目录下同步过来，如果修改的话，发布插件的时候会被老文档覆盖 