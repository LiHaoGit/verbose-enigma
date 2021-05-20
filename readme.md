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