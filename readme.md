## 仿写一个React

教程来源 https://pomb.us/build-your-own-react/

### Step I: createEelement
实现自己的 createEelement 与 createTextElement  
jsx 语法会被 babel 转换
```jsx
const jsx = (
    <div title="world" >
        <h1>hei hei</h1>
    </div>
)   

// 默认 babel 转换为(如果代码包含 /**@jsx XX.createElement */ 注释,则使用 XX.createElement 替换 React.createEelement ):
React.createEelement(
    "div",
    { title:"world" },
    React.createEelement("h1",{},"hei hei")
)

//返回类似对象( React 中会比这个对象的属性还要多,不过暂不考虑)
{
    type:"div"
    props:{
        title:"world",
        children:[
            {
                type:"h1"
                props:{
                    children:[
                        type:"TEXT_ELEMENT",
                        props:{
                            nodeValue:"hei hei",
                            children:[]
                        }
                    ]
                }
            }
        ]
    }
}
```

### Step II: render
第一步重写了 createEelement 并返回了对象,在这一步写一个 render 方法.根据对象的属性来创建相应的 dom 节点  
*这里有个问题是:如果对象过于大,需要创建的节点有很多的话,那么在创建并渲染节点完成之前,浏览器是不会响应用户的其他操作的(例如 输入,选中等操作无响应) **将在第三步解决***