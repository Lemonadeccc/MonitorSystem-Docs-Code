# 规范
## 书写规范

::: tip 

为了协调团队代码风格规范，代码互通可读，提高开发效率。

:::


## 使用语言

本次项目在Vue3中使用TypeScript，样式则使用Windi+Scss进行书写和管理。

## Angular提交规范
提交格式如下：
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
每次提交可以包含页眉(header)、正文(body)和页脚(footer)，每次提交必须包含页眉内容且

每次提交的信息不超过100个字符
### Header
该部分仅书写一行，包括三个字段，分别是type、scope和subject。
- type：用于说明commit的提交类型，必选
- scope：用于说明commit的影响范围，可选
- subject：用于说明commit的细节描述，可选

type用于说明commit的提交类型，包括以下选项，相信这些选项已满足日常95%的应用场景。当然这些选项无需刻意记忆，我会引入命令自动完成这些提交工作。

scope用于说明commit的影响范围。简要说明本次改动的影响范围，例如根据功能可划分为数据层、视图层和控制层，根据交互可划分为组件、布局、流程、视图和页面。从Angular以往的提交说明来看，还是建议你在提交时对scope补全。
subject用于说明commit的细节描述。文字一定要精简精炼，无需太多备注，因为Body部分可备注更多细节，同时尽量遵循以下规则。
- 以动词开头
- 使用第一人称现在时
- 首个字母不能大写
- 结尾不能存在句号(.)
例如本次提交说明的subject的中文是改变按钮的颜色，根据上述规则转换为英文就是change the color of the button。
理解好Header三个字段各自含义，每次提交说明通过上述规范的约束就变成以下模样。
feat(View): 新增主题皮肤切换按钮
feat(View): new the button for theme skin switching

### Body/Footer暂不使用