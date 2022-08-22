## ToDOs

## 已完成

### 依赖设置7/31

```
集成了基础配置项
```

### 第一次commit

```
1.WindiCSS
2.axios
3.vue-router@4
4.vite项目TSX、JSX支持
```

### 第二次commit (未完成)

```
集成代码质量风格规范（ESlint、prettier）
```

### 第三次commit （8/1）

```
1.集成Echarts、ElementPlus，并添加相应测试demo。代码部分：增加一个Echarts钩子
2.集成scss支持
```

### 第四次commit （8/5）

```
整理项目基础结构，项目release version-01.
1.基础项目框架。
2.小组成员分别生产自己的pages放置于views，在router中注册，减少代码merge过程可能产生的冲突。
3.暂时停止tsx开发的探索，专注vue-template模式开发，减少项目不确定性。
```

### 第五次commit （8/7）

```
实践使用scss管理windicss
```

### 第六次commit (8/8)

```
1.web全局样式store创建，types声明，与使用测试。
2.集成pinia持久化插件，确定pinia持久化特性，从localstorage中读取历史配置。
```

### 第七次commit (8/9)

```
1.添加colorPicker支持
2.添加RefreshPage逻辑支持
3.添加黑暗模式支持
```

### 截止到8.8日20点项目大致情况
```
1. 原生SDK开发组完成多半异常行为的捕获还有传递。剩下接口异常中几种情况还在解决。
2. 受控项目前端实现组还未开始，因为受制于CSS样式管理方案组和数据展示终端组的制约还未开始
3. 数据展示终端组还未开始，CSS样式管理已经完成windicss通过scss样式管理。但是效果不满意，可能会有新的解决办法。但是可以开始进行展示相关操作，相关数据可以通过mock进行测试。等原生SDK组结束后直接进行使用。
4. CSS样式管理组，已经了解windi完全继承tailwind语法，并且将tialblocks中项目所需要的nav/category/team块进行了scss管理windi样式。但是由于tailblocks的样式繁杂抽出的结果不理想，不知道还会不会找新的解决办法。大致先结束了。
5. 后端组进度不明。
```