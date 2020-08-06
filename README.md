### React-router
参考地址：https://reactrouter.com/web/guides/quick-start

1.安装
```
    cnpm install react-router-dom --save
```
    5的版本为了更好的支持hook

2.路由的作用
    react是单页面应用

3.<BrowserRouter>
    H5新特性 / history.push 如果上线之后，需要后台做处理：可能会出现重定向404bug
    示例：
```js
    http://localhost:3000/mine
```

4.<HashRouter>
    锚点链接
    示例：
```js
    http://localhost:3000/#/mine
```

5.<Link>
    示例1：
```js
    <Link to="/mine">Mine页面</Link>
```
    示例2：
```js
    <Link to={{
                    pathname: "/courses",
                    search: "?sort=name",
                    hash: "#the-hash",
                    state: { fromDashboard: true }   // 隐形传递参数
                }}
            />
```

6.exact属性
    精准匹配
    示例：
```js
    <Route exact path="/" component={ Home }></Route>、
    <Route exact path="/mine" component={ Mine }></Route>
    <Route exact path="/mine/ucenter" component={ Ucenter }></Route>
```

7.strict属性
    精准匹配 避免路径后有'/'，例如/mine/，与exact一起使用
    示例：
```js
    <Route exact path="/" component={ Home }></Route>、
    <Route strict exact path="/mine" component={ Mine }></Route>
    <Route strict exact path="/mine/ucenter" component={ Ucenter }></Route>
```

8.<Switch>
    只加载一个路由
    示例：
```js
    <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route strict exact path="/mine" component={ Mine }></Route>
        <Route strict exact path="/mine/ucenter" component={ Ucenter }></Route>
        <Route component={ NoFound }></Route>
    </Switch>
```

9.render属性
    示例1：
```js
    <Route path="/home" render={() => <div>Home</div>} />
```
    示例2：
```js
    <Route path="/home" render={() => <Demo { ...props } name="你好" />} />
```

10.<NavLink>
    高亮路由标签
    示例1：
```js
    <NavLink to="/about">About</NavLink>  // 在标签上加了class="active"属性，修改.active修改高亮颜色
```
    示例2：
```js
    <NavLink to="/about" activeClassName="selected">About</NavLink> class="selected"
```
    示例3：
```js
    <NavLink to="/about" activeStyle={{ fontWeight: "bold", color: "red"}}>About</NavLink>
```

11.路由参数
    示例1：
```js
    <Route strict exact path="/mine/ucenter/:id?" component={ Ucenter }></Route> // 子组件取值：props.match.prams.id
```
    示例2：
```js
    <Route strict exact path="/mine/ucenter?name=lisa&age=18" component={ Ucenter }></Route> // 子组件取值：value = querystring.parse(props.location.search), value.name, value.age
```

12.<Redirec>
    重定向
    示例：
```js
    <Redirect to="/"></Redirect>
```

13.页面跳转
    示例1：
```js
    this.props.history.push('/')  // 叠加的，上一次的页面依然存在
```
    示例2：
```js
    this.props.history.replace('/')  //替换，上一次的页面不存在
```

14.withRouter
    当组件没有直接被路由管理，获取路由对象
```js
    import { withRouter } from "react-router-dom"
    export default withRouter(MyComponent)
```

15.<Prompt>
    在用户准备离开该页面时, 弹出提示
```js
    import {Prompt } from "react-router-dom";
    <Prompt message="您确定要离开该页面吗?" when={this.state.isOpen} />
```